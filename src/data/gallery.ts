export type GalleryTag = "WIP" | "Exploration" | "Sketch" | "Unused Direction";

export interface GalleryItem {
  /** CDN url of the image */
  src: string;
  /** Descriptive alt text — required */
  alt: string;
  /** Optional short caption shown under the image */
  caption?: string;
  /** Optional tag used for the filter chips */
  tag?: GalleryTag;
  /** Optional case-study slug this piece belongs to */
  project?: string;
  /** Optional human label for the project link */
  projectLabel?: string;
  width?: number;
  height?: number;
}

/**
 * Real images only. Never invent captions, dates or projects here.
 * While this array is empty the /gallery page renders a labelled empty state,
 * and the route stays out of the sitemap.
 */
export const GALLERY: GalleryItem[] = [
  // [[PLACEHOLDER: gallery images pending upload — sketches, explorations,
  // work-in-progress and unused directions, each with real alt text.]]
];
