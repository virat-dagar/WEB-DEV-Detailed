//            DOM INTRO

// So, first of all, what is DOM?
//  DOM stands for Document Object Model.
//  It has a tree-like structure
//  created by the browser from our HTML page
//   WHAT DOES IT DO? It represents everything on the wbpage
//    as an object that JavaScript can modify and control

//  Basically, when the browser loads our HTML:
//   It reads the HTML text
//   converts it into a tree of objetcs
//   Stores this structure in memory
//      We can modify this structure using JavaScript to add
//      dynamic changes to the webpage

// DOM traversal 
//  Refers to the process of navigating throught the DOM tree
//  to access different nodes(element, text or attribute) based on
//  their relationships: parent, child and sibling

//  Since an HTML document is represented as a hierachical tree structure,
//  DOM enables developers to move up, down and sideways within this
//  structure to locate and manipulate specific elements


// getElementById()
//  Selects only one element based on its id attribute
//  Since IDs are unique, it returns only one element or null

const paraElement = document.getElementById("para");
console.log(paraElement);

// getElementsByClassName()
//  Selects multiple elements sharing the same class name
//  Returns an HTMLCollection(array-like but not an actual array)

const collection = document.getElementsByClassName("sub-heading");
console.log(collection);

