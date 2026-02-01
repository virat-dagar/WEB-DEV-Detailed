// Scope: Determines the visibility and accessibility of variables and functions in different parts
//        of a program

// Basically, it determines where a variable or function can be accessed or called in a program

// Need:
// 1) To prevent name collisions
// 2) To manage memory efficiently
// 3) To control lifetime of variables and functions
// 4) To provide security(limit access)

// Mainly 3 types

// 1) Global scope:
//    Variables declared outside all the functions or blocks are in global scope
//    Accessible everywhere in the program
//    Exist for the entire lifetime of the program

//    var, let and const 

let x = 10;
function test(){
    console.log(x)
}
test();

// since x is a global variable, it can be accessed inside the test() function

// 2) Function scope:
//    Variables declared inside a function, are accessible only within that function
//    Exist only during the execution and destroyed after execution

function demo(){
    var x = 10;      
    let y = 20;
    const z = 13;
    console.log(x, y, z);
}
demo()
// x, y and z are all function scoped.

// 3) Block scope:
//    Variables are limited only to the block{} in which they are declared
//    let, const are block scoped
//    ***var does not follow block scope*** or var is not block scoped. It's function scoped

if(true){
    let x = 10;
    const y = 14;  // var is not block scoped. It leaks out of the block
    var z = 13;
}
console.log(x)
console.log(y)
console.log(z) 

// Output: ReferenceError: x is not defined
// Js will not run the next lines as the program crashes here only


// Lexical scope: LS means that the accessibility of variables in a program, is determined by where variables
//                and functions are written in the source code, not by where or how the function is called

function outer(){
    let x = 10;

    function inner(){
        console.log(x);
    }

    function test(){
        let x = 20;
        inner()
    }
    test()
}
outer();

// Output: 10
// why 10 not 20?
// BECAUSE OF LEXICAL SCOPE which says that
//   A FUNCTION USES VARIABLES FROM THE SCOPE WHERE IT IS DEFINED, NOT FROM WHERE IT IS CALLED 

// JS has lexical scope not dynamic scope
