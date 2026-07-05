/**
 * Rate-limiting middleware for VSR Technologies API
 *
 * Three tiers, applied in layers:
 *
 *  ┌─────────────────────────────────────────────────────────────────┐
 *  │  Tier      Window     Limit  Applied to                         │
 *  │  ────────  ─────────  ─────  ─────────────────────────────────  │
 *  │  burst     1 min      30     All /api/* (except /healthz)       │
 *  │  global    15 min     150    All /api/* (except /healthz)       │
 *  │  submit    60 min     5      POST contact / enquiry routes only  │
 *  └─────────────────────────────────────────────────────────────────┘
 *
 * Health probes (GET /api/healthz) bypass all tiers so that uptime
 * monitors never get blocked.
 *
 * To add rate limiting to a new sensitive route:
 *   import { submissionLimiter } from "../middlewares/rateLimiter";
 *   router.post("/contact", submissionLimiter, handler);
 */

import rateLimit, { type Options } from "express-rate-limit";
import type { Request, Response } from "express";

// Health-check path as seen *inside* the /api router (prefix stripped).
const HEALTH_PATH = "/healthz";

function skipHealthProbe(req: Request): boolean {
  return req.path === HEALTH_PATH;
}

/**
 * Shared 429 response — consistent JSON shape for all tiers.
 * `Retry-After` is already set by express-rate-limit before this runs.
 */
function tooManyRequests(_req: Request, res: Response): void {
  const retryAfter = res.getHeader("Retry-After");
  res.status(429).json({
    error: "Too many requests. Please wait before trying again.",
    ...(retryAfter !== undefined && { retryAfter: Number(retryAfter) }),
  });
}

const sharedDefaults = {
  standardHeaders: "draft-6", // RateLimit-Limit / RateLimit-Remaining / RateLimit-Reset
  legacyHeaders: false,        // no X-RateLimit-* (non-standard)
  handler: tooManyRequests,
} satisfies Partial<Options>;

/**
 * Burst limiter — catches rapid-fire automated requests within 60 s.
 * Applied first; stops port-scanners and script-kiddies immediately
 * without waiting for the 15-minute window to fill.
 *
 * 30 req/min is ~2× the rate a human can realistically generate via
 * normal navigation on a multi-page marketing site.
 */
export const burstLimiter = rateLimit({
  ...sharedDefaults,
  windowMs: 60 * 1_000,   // 1 minute
  limit: 30,
  skip: skipHealthProbe,
});

/**
 * Global limiter — sustained-traffic guard over a 15-minute window.
 * 150 req/15 min = 10 req/min average, which is generous for any
 * legitimate human browsing a B2B marketing site but blocks scrapers.
 */
export const globalLimiter = rateLimit({
  ...sharedDefaults,
  windowMs: 15 * 60 * 1_000, // 15 minutes
  limit: 150,
  skip: skipHealthProbe,
});

/**
 * Submission limiter — for contact-form / enquiry POST endpoints.
 * 5 submissions per hour per IP prevents spam while never
 * inconveniencing a genuine prospect (who submits once, maybe twice).
 *
 * Usage:
 *   router.post("/contact", submissionLimiter, contactHandler);
 */
export const submissionLimiter = rateLimit({
  ...sharedDefaults,
  windowMs: 60 * 60 * 1_000, // 1 hour
  limit: 5,
  // Count failed requests — a bot retrying on 4xx still burns its quota.
  skipFailedRequests: false,
});
