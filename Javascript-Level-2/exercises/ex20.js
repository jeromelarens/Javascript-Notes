/**
 * Exercise 20: myBind and myCall Polyfills
 * Prompt: Write myBind and myCall polyfills.
 */

Function.prototype.myCall = function (context, ...args) {
  const ctx = context ?? globalThis;
  const fnSymbol = Symbol("tempFn");
  ctx[fnSymbol] = this;
  const result = ctx[fnSymbol](...args);
  delete ctx[fnSymbol];
  return result;
};

Function.prototype.myBind = function (context, ...boundArgs) {
  const fn = this;
  return function (...laterArgs) {
    return fn.apply(context, [...boundArgs, ...laterArgs]);
  };
};

function introduce(salutation, signoff) {
  return `${salutation}, I am ${this.name}. ${signoff}`;
}

const user = { name: "Arun" };

console.log("myCall test:", introduce.myCall(user, "Hello", "Thanks!"));
const boundIntro = introduce.myBind(user, "Vanakkam");
console.log("myBind test:", boundIntro("Nandri!"));
