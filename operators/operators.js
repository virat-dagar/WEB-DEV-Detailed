// Operators: Symbols that are used to perform operations on values (or operands)

// 1) Arithmetic operators
//   Used for performing standard mathematical calculations
console.log(2+4) // 6
console.log(3%2) // 1
console.log(3**2) // 9

//   Addition(+)   Subtraction(-)   Multiplication(*)
//   Division(/)   Modulo(%)        Exponentiation(**)

// 2) Assignment operators
//   Used to assign values to variables
//   Add and assign(+=)   Subtract and assign(-=)   Multiply and assign(*=)
//   Divide and assign(/=)
let i = 0;
i += 1;  // i = i + 1
i *= 1;  // i = i * 1
i -= 1;  // i = i - 1


// 3) Comparison operators
//   Used to compare two values 
//   Return true or false boolean value based on the result of the comparison
console.log(3>2);  // true
console.log(2!== 0);  // false
console.log(0===1);  // false

// >(Greater than)  <(Less than)   >= (greater than or equal to)
// <= (less than or equal to)      == (Equal to)
// != (Not equal to)               !== (Strictly not equal to)
// === (Strictly equal to)         < (Less than)

// 4) Logical operators
//  a) Logical AND (&&)  b) Logical OR (||)  c) Logical NOT (!)
// a) Logical AND
//    Returns true if both the conditions are true
console.log(true && true);  // true

// b) Logical OR
//     Returns true if atleast one of the conditions is true
console.log(true || false);  // true

// c) Logical NOT
//     Negates or reverses the truth value of its operand by converting
//     it into boolean and returning the opposite value

console.log(!false) // true
console.log(!"")  // true
console.log(!0)  // true
console.log(!null)  // true
console.log(!undefined)  // true
console.log(!NaN) // true


// 5) Ternary operator
//  Shortcut for if-else

// Syntax
// condition ? value_if_true : value_if_false;

is_raining = true;

if (!is_raining){
    result = "You can go outside";
}
else{
    result = "Stay inside the house";
}

// same thing using ternary operator
is_raining = true;

result = !is_raining ? "You can go outside" : "Stay inside the house";
console.log(result);  // 'Stay inside the house'

// 6) Unary operators
//     Operate on a single operand

//     a) Increment(++)
//      i) Post increment
//         Use first and then increase

          let x = 4;
          let y = x++
          console.log(y); // 4
          console.log(x); // 5

//      ii) Pre increment
//         Increase first and then use

let u = 5;
let v = ++u;  
console.log(v); // 6
console.log(u);  // 5 

//     b) Decrement

//      i) Post decrement
//        use first and then decrease

let q = 23;
let r = q--;

console.log(q); // 23
console.log(r); // 22

//      ii) Pre decrement
//       decrement first and then use

let m = 10;
let n = --m;

console.log(m); // 10
console.log(n); // 9

// c) typeof
//    returns the data type of its operand as a string

console.log(typeof null)  // 'object'
console.log(typeof 1) // 'number'
console.log(typeof [2]); // 'object'

// 7) String operators
//  Used to work with strings

// a)  + (Concatenate)
console.log("3"+ "2");  // 32

// b) += (Append)
athleteName = "Virat"
athleteName += "Kohli";

// 8) Nullish coalescing
//  Returns its right-hand side operand when its right-hand side operand
//  is either null or undefined 
//  Otherwise, returns its left hand side operand

// Safer way  to assign default values compared to the logical OR(||)
// operator, which can behave unexpectedly with falsy values like 0, null, NaN

let score = 0;

// using logical OR(the old way)
let finalScoreOR = score || 10;
// Result: 10 (Incorrect!  as 0 is a valid score. But, the logical OR(||) is
//  treating it as a falsy value

// using Nullish coalescing
let finalScoreNullish = score ?? 10;
// Result: 0 (Correct! It recognizes 0 as a defined value)

let userInput = "";

let displayName = userInput ?? "Guest";
// Result: The empty string is preserved because it is not null or undefined

let databaseValue = null;
let finalName = databaseValue ?? "Anonymous"
// result: 'Anonymous'

// 9) Bitwise operators
//     Work on binary(bits)

//   a) Bitwise AND(&)
//     Bit is 1 only if both bits are 1

//   5 & 3
//   5 -> 0101
//   3 -> 0011

//   Result: 1

// 2) Bitwise OR
//     Bit is 1 if any bit is 1

//   console.log(5 & 3)   output: 7
//   5 -> 0101
//   3 -> 0011
//    5 & 3 -> 0111
//   Final result:  7

//  3) XOR
//    Bit is 1 if bits dffer

//    5 ^ 3
//    5 -> 0101   3 -> 0011;

//   d) NOT
//    Flips all bits