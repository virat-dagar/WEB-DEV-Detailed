// We will be sollving some tricky problems using map(), reduce(), filter()

let cricketers = [
    {firstName: "Rohit", lastName: "Sharma", age: 34},
    {firstName: "Virat", lastName: "Kohli", age: 36},
    {firstName: "Ravindra", lastName: "Jadeja", age: 32},
    {firstName: "Jaspreet", lastName: "Bumrah", age: 36}
]

// We need to return an array of full names as following:
// ['Rohit Sharma', 'Virat Kohli', 'Ravindra Jadeja', 'Jaspreet Bumrah']

// Here, we will use map() as we need to return an array 
// with transformed values inside it

let fullNames = cricketers.map(x => x.firstName + " " + x.lastName)
// or
// let fullNames = cricketers.map(x => x["firstName"] + " " + x["lastName"])

console.log(fullNames)


// reduce()

// Turn 
//   [1, 2, 2, 3, 4, 4, 5]
// into
//   [1, 2, 3, 4, 5]
let nums = [1, 2, 2, 3, 4, 4, 5];

function removeDuplicates(arr) {
  return arr.reduce((unique, current) => {
    if (!unique.includes(current)) {
      unique.push(current);
    }
    return unique;
  }, []);
}

let result = removeDuplicates(nums);
console.log(result);
// Output: [1, 2, 3, 4, 5]

// filter()

let arr = [false, true, 7, 0, 1, "", NaN, null, undefined, 42];
let truthy_values = arr.filter(x => {
    x = Boolean(x);
    return x;
})
console.log(truthy_values)

//even better
// let truthy_values = arr.reduce(x => Boolean(x))
// console.log(truthy_values)