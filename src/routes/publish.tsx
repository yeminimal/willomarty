import { useState, type FormEvent } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import cover from "@/assets/article-design-process.jpg.asset.json";
import { getPublishGateState, saveArticle, unlockPublish } from "@/lib/articles.functions";

const ARTICLE = {
  title: "Design is a process, not the result.",
  slug: "design-is-a-process-not-the-result",
  meta_description:
    "Why the process of exploration, testing and iteration matters more than a polished result, and how design works as a system for solving problems.",
  cover_image_url: cover.url,
  tags: ["Design", "Process", "Creative Practice"],
  publish: true,
  body_html: `<h2>Introduction</h2>
<p>Design has always been about one thing for me: the process. Growing up as an artistic kid, I was never content just admiring something beautiful, I wanted to know <em>how</em> it was made. I turned my school notebooks (even my Bible, at some point) into comic books, sketching and re-sketching until I got it just right. A close friend and I used to tear down old electronics trying to build miniature robots, sometimes to walk, sometimes to hop. Each of those two very different pursuits taught me the same thing, that the journey of creating was far more fascinating than the destination, because:</p>
<blockquote><p><em>The process of creating is where we learn what works, what doesn't, and <strong>how</strong> to make what works even better.</em></p></blockquote>
<p>That realization has stayed with me. I was never just captivated by banners, posters, or flyers, I was curious about the steps behind them. That "how" is what shaped me into the designer I am today. I take pride in the process. Yes, it's messy, it's unpredictable, but it's where the real magic happens.</p>
<p>It's not just a means to an end, it's the heartbeat of my work, and it's what keeps me inspired every single day.</p>
<p>Now, let's get into why this is even an article.</p>
<h2>Understanding the problem</h2>
<p>I see a lot of people, designers included, treat design like a magic spell: say the word, and boom, it's done. But design has never been a result, it's a process, a system for solving problems.</p>
<p>Design is how you <em>effectively</em> execute a given task. It's not a magic button.</p>
<p>You see, problems don't just appear with their own solutions in hand, just like doctors don't just hand out prescriptions to every patient that walks into the hospital. Patients have to go through a series of tests to figure out whatever ailments they might have and the best way to go about treating them.</p>
<p>There, those tests, is why I design.</p>
<p>Design doesn't just mean pushing pixels, drawing rectangles, or adding gradients and soft shadows to components. Design shows up in almost every part of our day to day lives, from our architecture to our banking systems. None of that happened with the push of a button. It took time to work, to not work, and then to get better.</p>
<p>The sooner we as designers start seeing design as a process for solving problems, the sooner the industry starts getting the respect it deserves.</p>
<h2>Exploration before execution</h2>
<p>I've had clients reach out asking for something complex done in a few hours, and I humbly decline, because:</p>
<ol>
<li>It goes against my mantra as a designer: good design takes time, and great design takes <em>more</em> time. I'm not about to deliver a below-par result.</li>
<li>They don't respect or understand what it is I actually do. They treat it like an over-the-counter medicine, where they can walk in, purchase, and leave, with no time spent understanding the ailment well enough to prescribe the right solution.</li>
</ol>
<p>It's in the process of designing, the exploring, testing, and revisiting, that you realize there are often better ways to go about something. That's when one problem can produce several designs, in different styles and expressions, each one still working exactly as it should.</p>
<h2>What the result leaves out</h2>
<p>Good design comes from treating it as a process of problem solving, not a result. The moment you fixate on the result, you get hasty and jump to conclusions, when two or three iterations later you could have delivered something far better. A result only shows you the answer, it hides the diagnosis, the tests, and the thinking that got you there, and that's the part actually worth paying for.</p>
<p>Remember, design, like minimalism, is an <em>iterative</em> process. It's not about getting it right the first time, it's about continuously refining it until it can't get any better. Each revision makes the design more focused, more purposeful, and more effective.</p>
<hr>
<p><em>Williams Olayemi Martins is a Visual/Creative Director, brand designer, and frontend developer. See more of his process and work at <a href="https://willomarty.net.ng">willomarty.net.ng</a>.</em></p>`,
};

export const Route = createFileRoute("/publish")({
  loader: () => getPublishGateState(),
  head: () => ({ meta: [{ name: "robots", content: "noindex, nofollow" }, { title: "Publish article" }] }),
  component: PublishPage,
});

function PublishPage() {
  const gate = Route.useLoaderData();
  const [unlocked, setUnlocked] = useState(gate.unlocked);
  const [passphrase, setPassphrase] = useState("");
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState("");
  const [publishedSlug, setPublishedSlug] = useState("");

  async function handleUnlock(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setMessage("");
    try {
      const result = await unlockPublish({ data: { passphrase } });
      if (result.ok) setUnlocked(true);
      else setMessage("That passphrase did not match.");
    } catch {
      setMessage("Publishing is not configured yet. Set PUBLISH_ACCESS_CODE in the project environment.");
    } finally {
      setPending(false);
    }
  }

  async function handlePublish() {
    setPending(true);
    setMessage("");
    try {
      const result = await saveArticle({ data: ARTICLE });
      if (result.ok) setPublishedSlug(result.slug);
      else setMessage("error" in result ? result.error ?? "Unable to save article." : `Required article fields are missing: ${result.missing.join(", ")}.`);
    } catch {
      setMessage("The article could not be published. Check the publishing session and Supabase connection.");
    } finally {
      setPending(false);
    }
  }

  return (
    <main className="min-h-screen bg-background px-6 py-16 text-foreground">
      <div className="mx-auto max-w-2xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-dim">Private publishing</p>
        <h1 className="display-serif mt-4 text-4xl">Publish article</h1>
        {!unlocked ? (
          <form onSubmit={handleUnlock} className="mt-8 space-y-4">
            <label className="block text-sm" htmlFor="publish-passphrase">Passphrase</label>
            <input
              id="publish-passphrase"
              type="password"
              autoComplete="current-password"
              required
              value={passphrase}
              onChange={(event) => setPassphrase(event.target.value)}
              className="w-full border border-border bg-surface px-4 py-3 text-foreground"
            />
            <button type="submit" disabled={pending} className="border border-accent bg-accent px-5 py-3 font-mono text-xs uppercase tracking-wider text-background disabled:opacity-50">
              {pending ? "Checking" : "Unlock"}
            </button>
            {message && <p role="alert" className="text-sm text-destructive">{message}</p>}
          </form>
        ) : (
          <section className="mt-8 space-y-6">
            <img src={cover.url} alt="Design process artwork with drafting tools and geometric studies" className="w-full border border-border" />
            <div>
              <h2 className="display-serif text-2xl">{ARTICLE.title}</h2>
              <p className="mt-3 text-sm text-muted">{ARTICLE.meta_description}</p>
              <p className="mt-3 font-mono text-[11px] uppercase tracking-wider text-accent-dim">{ARTICLE.tags.join(" · ")}</p>
            </div>
            {publishedSlug ? (
              <p className="text-sm">Published successfully. <Link to="/articles/$slug" params={{ slug: publishedSlug }} className="text-accent underline">View article</Link></p>
            ) : (
              <button type="button" onClick={handlePublish} disabled={pending} className="border border-accent bg-accent px-5 py-3 font-mono text-xs uppercase tracking-wider text-background disabled:opacity-50">
                {pending ? "Publishing" : "Publish article"}
              </button>
            )}
            {message && <p role="alert" className="text-sm text-destructive">{message}</p>}
          </section>
        )}
      </div>
    </main>
  );
}
