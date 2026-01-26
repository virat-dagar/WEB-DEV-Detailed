// CLOSURE:
//  Formed when a function remembers and can access variables from its outer(lexical)
//  scope even after that outer function has finished execution

// Now, this is a khaas baat because the variables that are declared inside a
// function are function scoped, and are destroyed after the execution of the function


// Why Do Closures Exist??
//   ANS IS: LEXICAL SCOPE

//  Lexical scope means that the accessibilty of a variable by a function,
//  is decided by where function is written, not by where it is called.


function outer(){
    let x = 10;

    function inner(){
        console.log(x);
    }
    
    inner();
}
outer();  
// Output: 10
// VERY IMP: THIS ALONE IS NOT A CLOSURE. THIS IS JUST LEXICAL SCOPE'S WORKING


// SO WHEN DOES A CLOSURE HAPPEN?

// When a function is used outside its original scope.
// In the above example, the function was used inside
//  its original scope. So, that was not a closure

function outer2(){
    let y = 10;

    function inner2(){
        console.log(y);
    }

    return inner2;
}
const fn = outer2()
fn()
// Output: 10
// This is a closure

// Here, the inner function was called after the outer()'s execution was completed
// Still, inner() remembers the variable y from its outer scope( from outer() )

function outer3(){
    let a = 2;
    let b = 3;

    function inner3(){
        console.log(b);
    }
    return inner3;
}
const fn2 = outer3();
fn2()
// Output: 3
// Closures stores only those variables that are actually used by the inner function
// It stores only b and not a


// Closure with parameters

function greet(name) {
  return function () {
    console.log("Hello " + name);
  };
}

const greetRam = greet("Ram");
const greetShyam = greet("Shyam");

greetRam();    // Hello Ram
greetShyam();  // Hello Shyam

// Each call creates a new closure
// Each closure has its own name

