/**
 * 🧩 Module 14: Partial Application
 * 
 * Partial application fixes SOME arguments of a function ahead of time,
 * returning a function that accepts the remaining arguments.
 */

console.log("--- 1. Partial Application using Closures ---");
function partial(fn, ...presetArgs) {
  return function(...laterArgs) {
    return fn(...presetArgs, ...laterArgs);
  };
}

function buildUrl(protocol, domain, endpoint) {
  return `${protocol}://${domain}${endpoint}`;
}

const secureUrlBuilder = partial(buildUrl, "https");
const githubApiBuilder = partial(buildUrl, "https", "api.github.com");

console.log("secureUrlBuilder: ", secureUrlBuilder("google.com", "/search"));
console.log("githubApiBuilder: ", githubApiBuilder("/users/octocat"));

console.log("\n--- 2. Partial Application using bind ---");
function multiply(a, b) {
  return a * b;
}
const double = multiply.bind(null, 2); // pre-sets first argument 'a' to 2
console.log("double(15) =", double(15)); // 30
