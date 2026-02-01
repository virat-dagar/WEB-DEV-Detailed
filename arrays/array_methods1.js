// Array methods 1
// In this, we will see push(), pop(), unshift(), shift()
// Let's go

// 1) push()
//     Adds one or more items to the end of an array
//     Increases the length of the array

const nums = [1, 2, 3, 4];
console.log(nums.length);  // 4
nums.push(5);

// Adding 5 to the end
console.log(nums); // [1, 2, 3, 4, 5]
console.log(nums.length); // 5

// Adding 6 and 7 to the end
nums.push(6, 7)
console.log(nums)


// 2) pop()
//     Removes the last item from an array and returns it
//     Decreases the length of the array

const fruits = ["apple", "mango", "banana", "orange"];
const lastFruit = fruits.pop()
console.log(lastFruit)  // orange

// 3) unshift()
//     Adds one or more items to the beginning of an array
//     Increases the length of the array

const colors = ["red", "green", "yellow"]
colors.unshift("blue", "purple")
console.log(colors)

// 4) shift()
//    Removes the first item from an array and returns it
//    Decreases the length of the array

const alphabets = [a, b, c, d]
const firstAlphabet = alphabets.shift()
console.log(alphabets)

// slice()
//    Used to copy a portion of an array into a new array
//    Does not change the original array


// Syntax:
//    slice(startIndex, endIndex)

// startIndex: The position from where to start copying from the array
// endIndex: The position where to stop but not include

const numbers = [1, 2, 3, 4, 5]
const result = numbers.slice(1, 3)

console.log(result)   // [2, 3]

// Original array remains unchanged
console.log(numbers) // [1, 2, 3, 4, 5]



// splice()
//    Used to change the original array
//    How?-- By removing, adding or replacing elements

//    Syntax
//    splice(startIndex, deleteCount, item1, item2,...)

//      startIndex: the position where changes will start
//        deleteCount: Numbers of items to remove starting from that position
//          item1, item2...: (optional) New items that we want to add into the array
//            starting from the startIndex position

const names = ["Krish", "Rahul", "Sohit", "Shan"];
names.splice(1, 2, "Sunil")
console.log(names)  // [Krish', 'Sunil', 'Shan']