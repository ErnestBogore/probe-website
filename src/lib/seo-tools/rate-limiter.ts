interface RateLimitEntry {
  timestamps: number[];
}

interface RateLimitConfig {
  windowMs: number;
  maxRequests: number;
}

const TOOL_RATE_LIMITS: Record<string, RateLimitConfig> = {
  'keyword-generator': { windowMs: 60000, maxRequests: 5 },
  'keyword-difficulty': { windowMs: 60000, maxRequests: 10 },
  'website-authority': { windowMs: 60000, maxRequests: 5 },
  'backlink-checker': { windowMs: 60000, maxRequests: 3 },
  'broken-link-checker': { windowMs: 300000, maxRequests: 2 },
  'traffic-checker': { windowMs: 60000, maxRequests: 3 },
  'keyword-rank-checker': { windowMs: 60000, maxRequests: 5 },
  'serp-checker': { windowMs: 60000, maxRequests: 5 },
  'youtube-keyword-tool': { windowMs: 60000, maxRequests: 5 },
  'amazon-keyword-tool': { windowMs: 60000, maxRequests: 5 },
  'bing-keyword-tool': { windowMs: 60000, maxRequests: 5 },
  'ai-visibility-checker': { windowMs: 60000, maxRequests: 5 },
};

const DEFAULT_LIMIT: RateLimitConfig = { windowMs: 60000, maxRequests: 5 };

// In-memory store (resets on cold start, which is acceptable for free tools)
const store = new Map<string, RateLimitEntry>();

// Periodic cleanup to prevent memory leaks
const CLEANUP_INTERVAL = 300000; // 5 minutes
let lastCleanup = Date.now();

function cleanup() {
  const now = Date.now();
  if (now - lastCleanup < CLEANUP_INTERVAL) return;
  lastCleanup = now;

  for (const [key, entry] of store.entries()) {
    // Remove entries with no recent timestamps
    const maxWindow = 300000; // 5 min max
    entry.timestamps = entry.timestamps.filter(t => now - t < maxWindow);
    if (entry.timestamps.length === 0) {
      store.delete(key);
    }
  }
}

export function checkRateLimit(ip: string, toolName: string): { allowed: boolean; retryAfterMs?: number } {
  cleanup();

  const config = TOOL_RATE_LIMITS[toolName] || DEFAULT_LIMIT;
  const key = `${ip}:${toolName}`;
  const now = Date.now();

  let entry = store.get(key);
  if (!entry) {
    entry = { timestamps: [] };
    store.set(key, entry);
  }

  // Remove timestamps outside the window
  entry.timestamps = entry.timestamps.filter(t => now - t < config.windowMs);

  if (entry.timestamps.length >= config.maxRequests) {
    const oldestInWindow = entry.timestamps[0];
    const retryAfterMs = config.windowMs - (now - oldestInWindow);
    return { allowed: false, retryAfterMs };
  }

  entry.timestamps.push(now);
  return { allowed: true };
}

export function getClientIp(req: Request): string {
  return (
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    req.headers.get('x-real-ip') ||
    'unknown'
  );
}
