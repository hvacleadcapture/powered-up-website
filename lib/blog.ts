import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: Date | null;
  author: string;
};

export type Post = PostMeta & { content: string };

/** Coerce an unknown front-matter value into a valid Date, falling back defensively. */
function coerceDate(value: unknown, fallback: Date | null): Date | null {
  if (value instanceof Date) {
    return Number.isNaN(value.getTime()) ? fallback : value;
  }
  if (typeof value === "string" || typeof value === "number") {
    const parsed = new Date(value);
    if (!Number.isNaN(parsed.getTime())) return parsed;
  }
  return fallback;
}

/** Null-safe human-readable date. Returns "" for missing/invalid dates. */
export function formatDate(date: Date | null | undefined): string {
  if (!date || Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function listMdxFiles(): string[] {
  try {
    return fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));
  } catch {
    // Directory missing or unreadable — no posts.
    return [];
  }
}

function readPost(fileName: string): Post | null {
  const slug = fileName.replace(/\.mdx$/, "");
  const fullPath = path.join(BLOG_DIR, fileName);

  let raw: string;
  let mtime: Date | null = null;
  try {
    raw = fs.readFileSync(fullPath, "utf8");
    try {
      mtime = fs.statSync(fullPath).mtime;
    } catch {
      mtime = null;
    }
  } catch {
    return null;
  }

  const { data, content } = matter(raw);

  return {
    slug,
    title: typeof data.title === "string" && data.title.trim() ? data.title : slug,
    description: typeof data.description === "string" ? data.description : "",
    date: coerceDate(data.date, mtime),
    author: typeof data.author === "string" && data.author.trim() ? data.author : "Micah Gentile",
    content,
  };
}

/** All posts, newest first. Posts without a valid date sort last. */
export function getAllPosts(): Post[] {
  return listMdxFiles()
    .map(readPost)
    .filter((p): p is Post => p !== null)
    .sort((a, b) => {
      const at = a.date ? a.date.getTime() : 0;
      const bt = b.date ? b.date.getTime() : 0;
      return bt - at;
    });
}

export function getAllSlugs(): string[] {
  return listMdxFiles().map((f) => f.replace(/\.mdx$/, ""));
}

export function getPostBySlug(slug: string): Post | null {
  if (!slug || slug.includes("/") || slug.includes("..")) return null;
  return readPost(`${slug}.mdx`);
}
