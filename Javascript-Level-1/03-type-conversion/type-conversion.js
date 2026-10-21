/**
 * 🔄 Module 3: Type Conversion
 * 
 * Explicit Conversion: Developer deliberately converts value.
 * Implicit Conversion (Coercion): JavaScript converts automatically under the hood.
 */

console.log("--- 1. Explicit Conversion ---");
console.log("Number('123')     ->", Number("123"), typeof Number("123"));
console.log("Number('12.5')    ->", Number("12.5"));
console.log("Number('hello')   ->", Number("hello"), "(NaN)");
console.log("Number(true)      ->", Number(true));
console.log("Number(false)     ->", Number(false));
console.log("Number(null)      ->", Number(null));
console.log("Number(undefined) ->", Number(undefined), "(NaN)");
console.log("Number('')        ->", Number(""));

console.log("\nString(100)       ->", String(100), typeof String(100));
console.log("String(true)      ->", String(true));
console.log("String(null)      ->", String(null));
console.log("String(undefined) ->", String(undefined));

console.log("\nBoolean(1)        ->", Boolean(1));
console.log("Boolean(0)        ->", Boolean(0));
console.log("Boolean('Hello')  ->", Boolean("Hello"));
console.log("Boolean('')       ->", Boolean(""));
console.log("Boolean(null)     ->", Boolean(null));

console.log("\n--- 2. parseInt() vs Number() ---");
console.log("parseInt('42px', 10) ->", parseInt("42px", 10), "(parses initial integer)");
console.log("parseFloat('3.14m')  ->", parseFloat("3.14m"));
console.log("Number('42px')        ->", Number("42px"), "(strict whole string check fails -> NaN)");

console.log("\n--- 3. Implicit Conversion (Type Coercion) ---");
console.log("'5' + 2   ->", "5" + 2, "(string concatenation wins with +)");
console.log("'5' - 2   ->", "5" - 2, "(subtraction forces numeric conversion)");
console.log("'5' * 2   ->", "5" * 2);
console.log("'10' / 2  ->", "10" / 2);
console.log("true + 1  ->", true + 1, "(true becomes 1)");
console.log("false + 1 ->", false + 1, "(false becomes 0)");

console.log("\n--- 4. Handy Shorthands ---");
console.log("+'42'     ->", +"42", typeof +"42", "(unary plus converts to number)");
console.log("'' + 42   ->", "" + 42, typeof ("" + 42), "(empty string concatenation converts to string)");
console.log("!!'hello' ->", !!"hello", "(double NOT converts to boolean)");
console.log("!!0       ->", !!0);
