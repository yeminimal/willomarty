import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read siteConfig to get base URL
const configPath = path.join(__dirname, '../src/config/site.ts');
const siteConfigText = fs.readFileSync(configPath, 'utf8');
const siteUrlMatch = siteConfigText.match(/url:\s*['"]([^'"]+)['"]/);
const siteUrl = siteUrlMatch ? siteUrlMatch[1] : 'https://willomarty.vercel.app';

// Read portrait asset URL
const portraitPath = path.join(__dirname, '../src/assets/portrait.webp.asset.json');
let portraitUrl = '';
try {
  const portraitAsset = JSON.parse(fs.readFileSync(portraitPath, 'utf8'));
  portraitUrl = portraitAsset.url.startsWith('http') ? portraitAsset.url : `${siteUrl}${portraitAsset.url}`;
} catch (e) {
  console.warn('Warning: Could not read portrait asset file:', e.message);
}

// Parse case studies file
const caseStudiesPath = path.join(__dirname, '../src/data/case-studies.ts');
let caseStudiesText = '';
try {
  caseStudiesText = fs.readFileSync(caseStudiesPath, 'utf8');
} catch (e) {
  console.error('Error: Could not read case-studies.ts file:', e.message);
  process.exit(1);
}

// Extract asset JSON file imports
const assetImports = {};
const importRegex = /import\s+(\w+)\s+from\s+['"](?:@|\.\.)\/assets\/([^'"]+)['"]/g;
let match;
while ((match = importRegex.exec(caseStudiesText)) !== null) {
  assetImports[match[1]] = match[2];
}

// Parse case study entries using split
const parts = caseStudiesText.split(/^\s{2}([a-zA-Z0-9_-]+):\s*\{/m);
const studies = [];

for (let i = 1; i < parts.length; i += 2) {
  const slug = parts[i];
  const body = parts[i + 1];

  const clientMatch = body.match(/client:\s*['"`]([^'"`]+)['"`]/);
  const industryMatch = body.match(/industry:\s*['"`]([^'"`]+)['"`]/);
  const imageMatch = body.match(/image:\s*([a-zA-Z0-9_]+)\.url/);
  const descMatch = body.match(/metaDescription:\s*['"`]([\s\S]*?)['"`]\s*,/);

  if (clientMatch && slug) {
    const client = clientMatch[1];
    const industry = industryMatch ? industryMatch[1] : '';
    const imageName = imageMatch ? imageMatch[1] : '';
    const description = descMatch ? descMatch[1].replace(/\s+/g, ' ').trim() : '';

    // Resolve cover image URL
    let imageUrl = '';
    const assetFile = assetImports[imageName];
    if (assetFile) {
      try {
        const assetJsonPath = path.join(__dirname, '../src/assets', assetFile);
        const assetJson = JSON.parse(fs.readFileSync(assetJsonPath, 'utf8'));
        imageUrl = assetJson.url.startsWith('http') ? assetJson.url : `${siteUrl}${assetJson.url}`;
      } catch (err) {
        console.warn(`Warning: Could not read asset JSON for ${imageName}:`, err.message);
      }
    }

    studies.push({
      slug,
      client,
      industry,
      imageUrl,
      description
    });
  }
}

// Get last modified date for files using git, fallback to today's date
function getFileLastmod(filePath, fallbackDate = '2026-07-18') {
  try {
    const fullPath = path.join(__dirname, '..', filePath);
    const dateStr = execSync(`git log -1 --format=%cs -- "${fullPath}"`, { encoding: 'utf8' }).trim();
    if (dateStr && /^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
      return dateStr;
    }
  } catch (e) {
    // Git might fail if shallow clone or git is not present
  }
  return fallbackDate;
}

const homepageLastmod = getFileLastmod('src/routes/index.tsx');
const workLastmod = getFileLastmod('src/routes/work.index.tsx');
const caseStudiesLastmod = getFileLastmod('src/data/case-studies.ts');

// Construct sitemap xml
let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${siteUrl}/</loc>
    <lastmod>${homepageLastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
`;

if (portraitUrl) {
  xml += `    <image:image>
      <image:loc>${portraitUrl}</image:loc>
      <image:title>Portrait of Williams Olayemi Martins</image:title>
      <image:caption>Williams Olayemi Martins — Lagos-based brand designer and frontend developer</image:caption>
    </image:image>
`;
}

xml += `  </url>
  <url>
    <loc>${siteUrl}/work</loc>
    <lastmod>${workLastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
`;

for (const study of studies) {
  // Try to find the exact lastmod of the case study by checking its cover image or the case studies file
  const studyLastmod = caseStudiesLastmod;
  xml += `  <url>
    <loc>${siteUrl}/work/${study.slug}</loc>
    <lastmod>${studyLastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
`;

  if (study.imageUrl) {
    const cleanDesc = study.description.replace(/[<>&'"]/g, (c) => {
      switch (c) {
        case '<': return '&lt;';
        case '>': return '&gt;';
        case '&': return '&amp;';
        case '\'': return '&apos;';
        case '"': return '&quot;';
      }
    });

    const cleanTitle = `${study.client} ${study.industry.split('/')[0].trim()} case study cover image`
      .replace(/[<>&'"]/g, (c) => {
        switch (c) {
          case '<': return '&lt;';
          case '>': return '&gt;';
          case '&': return '&amp;';
          case '\'': return '&apos;';
          case '"': return '&quot;';
        }
      });

    xml += `    <image:image>
      <image:loc>${study.imageUrl}</image:loc>
      <image:title>${cleanTitle}</image:title>
      <image:caption>${cleanDesc}</image:caption>
    </image:image>
`;
  }

  xml += `  </url>
`;
}

xml += `</urlset>\n`;

const outputPath = path.join(__dirname, '../public/sitemap.xml');
fs.writeFileSync(outputPath, xml, 'utf8');
console.log(`Successfully generated sitemap.xml at ${outputPath} with ${studies.length} case study pages.`);
