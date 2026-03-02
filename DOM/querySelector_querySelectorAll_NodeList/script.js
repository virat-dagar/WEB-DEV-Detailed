// querySelector()
//  Selects the first element from all those elements that match a CSS selector
//  RETURNS only a single element
//  More powerful and flexible than getElementById() as
//    it can work with all kind of CSS selectors

let paraElement = document.querySelector("p");
console.log(paraElement);

// querySelectorAll()
//  Selects all those elements that match a CSS selector
//  RETURNS a NodeList of selected elements
//   Unlike an HTMLCollection, NodeList CAN BE ITERATED USING forEach()

let node_list = document.querySelectorAll("p");
console.log(node_list);

node_list.forEach(element => console.log(element.innerText));

// NodeList vs HTMLCollection

//  NodeList
//   A collection of DOM nodes
//   Can contain any type of node(s) - element, attribute, comment, text
//   Static or Live
//     Static -- querySelectorAll()    Live -- childNodes
//   CAN BE ITEARTED USING forEach()
//   Returned by/ obtained from
//      querySelectorAll()       childNodes

// example
let node_list2 = document.querySelectorAll("h2");
console.log(node_list2);


// HTMLCollection
//  Collection of HTML elements
//  Contains only element nodes
//  Always live -> automatically gets update if there is any change in DOM
//  CANNOT BE ITERATED USING forEach()
//  Returned by
//     getElementsByTagName()   getElementsByClassName()   children

// example
let collection = document.getElementsByTagName("h2");
console.log(collection);

