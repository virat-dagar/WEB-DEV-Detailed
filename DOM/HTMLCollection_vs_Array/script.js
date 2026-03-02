// HTMLCollection
//  Collection of HTML elements in the DOM
//  Array-like object but not an actual array
//    SO, we can't apply any array methods(map(), forEach() etc.)
//       directly
//  LIVE --- Gets Updated automatically if there is any change in DOM


//  Jab hamne kaha ki array-like object hai
//   iska matlab kuch to similarities hongi na
//       SIMILARITIES WITH ARRAY
//          Indexed like an array
//          Also has length


//  RETURNED BY
//    getElementsByTagName()
//    getElements ByClassName()
//    children


const collection = document.getElementsByTagName("h2");
console.log(collection);



// Array
//   A non-primitive data type(reference data type) in JS
//   An ordered list of elements
//   STATIC --- Does not get updated automatically
//   Supports built-in methods like map(), reduce(), filter()

let arr = [1, 2, 3, 4];
console.log(arr);

// Array.from()
//  What?
//   A built-in method in JS

//  Use?
//    Used to convert an array-like or iterable object
//    into an array

//  WHY DO WE EVEN USE IT? Like, what is its need
//    There are some objects in JavaScript, which are array-like but
//    not an actual array. So, we can't apply array methods on them directly
//     Therefore, we need to first convert them to an array, which we
//      do using Array.from()

let ArrayFromCollection = Array.from(collection);
console.log(ArrayFromCollection);

//  Now, we can apply array methods

ArrayFromCollection.forEach(element => console.log(element.textContent));

// Array.from() can take 3 arguments out of which 1 is necessary 
//   rest 2 are optional

//  Array.from(arrayLike, mapFn, thisArg);

//  We can also use an optional mapFn argument to transform
//   the elements inside the array while creating it

//  Example
let collection2 = document.getElementsByTagName("p");
let ArrayFromCollection2 = Array.from(collection2, element => element.textContent*2);

console.log(ArrayFromCollection2);  // [2, 4, 6, 8]

