import { defaultSiteContent, type SiteContent } from "@/content/siteContent";

const runtimeWordPressUrl = typeof window !== "undefined" ? (window as Window & { VSR_WORDPRESS_URL?: string }).VSR_WORDPRESS_URL : "";
const WORDPRESS_URL = (runtimeWordPressUrl || import.meta.env.VITE_WORDPRESS_URL || "").replace(/\/$/, "");

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function mergeContent<T>(fallback: T, incoming: unknown): T {
  if (Array.isArray(fallback)) {
    return Array.isArray(incoming) && incoming.length > 0 ? (incoming as T) : fallback;
  }

  if (isObject(fallback)) {
    const next: Record<string, unknown> = { ...fallback };
    const source = isObject(incoming) ? incoming : {};

    for (const key of Object.keys(next)) {
      next[key] = mergeContent(next[key], source[key]);
    }

    return next as T;
  }

  return incoming === undefined || incoming === null || incoming === "" ? fallback : (incoming as T);
}

export function hasWordPressContentSource() {
  return WORDPRESS_URL.length > 0;
}

export async function fetchWordPressSiteContent(): Promise<SiteContent> {
  if (!WORDPRESS_URL) {
    return defaultSiteContent;
  }

  const response = await fetch(`${WORDPRESS_URL}/wp-json/vsr/v1/site-content`, {
    headers: { Accept: "application/json" },
  });

  if (!response.ok) {
    throw new Error(`WordPress content request failed with status ${response.status}`);
  }

  const payload = await response.json();
  const content = isObject(payload) && "content" in payload ? payload.content : payload;

  return mergeContent(defaultSiteContent, content);
}