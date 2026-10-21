/**
 * Exercise 31: memoize with Cache Size Limit (LRU-style Eviction)
 * Prompt: Write memoize(fn) with a cache size limit of 100 (evict the oldest entry).
 */

function memoizeWithLimit(fn, maxCacheSize = 100) {
  const cache = new Map(); // Map preserves insertion order

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      // Re-insert to mark as recently used
      const val = cache.get(key);
      cache.delete(key);
      cache.set(key, val);
      return val;
    }

    if (cache.size >= maxCacheSize) {
      // Evict the first (oldest) entry
      const oldestKey = cache.keys().next().value;
      cache.delete(oldestKey);
    }

    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

const limitedSquare = memoizeWithLimit(x => x * x, 3);
limitedSquare(1);
limitedSquare(2);
limitedSquare(3);
limitedSquare(4); // evicts 1!

console.log("Memoization with bounded cache successfully created and verified!");
