// Event
//   Any action that takes place on the browser
//    page loads --> load   mouse moves --> mousemove
//    key pressed --> keypress   button clicked --> click

// Handler
//   The function which runs when an event happens

// Event handling
//   The mechanism of responding to user or browser actions
//     by running some code whenever those events happen

// Event Listener
//  1) What it is:
//    A way to make the webpage react to user actions(typing, scrolling, hovering etc.)
//     by running some code when those events happen
//  2) What it does:
//    It listens for a specific event on an element and runs some code when that
//     event happens

//  There are 3 ways to attach listener to an element
//  1) HTML way
//   // <button onclick = "console.log('button clicked')">
//       Click Me </button>

//   Mixes HTML and JS --> Code becomes messy
//   Hard to maintain
//     Therefore, not preferred



//  2) DOM property method(traditional JS way)
//     We assign a function to event property
    let second_btn = document.getElementById("2nd");
    btn.onclick = function(){
        console.log("Button Clicked!");
    };
//   or
//       btn.onclick = () => {
//         console.log("Button Clicked!");
//       }
//   
    let third_btn = document.querySelector("#3rd");
    third_btn.ondblclick = () => {
      console.log("Button Clicked twice");
    };
//     LIMITATION
//       Only one listener is allowed per element
//         If we attach multiple listeners, then only the last one
//          will work. The last one will overwrite previous ones


//  3) addEventListener() method (modern and best approch)
//     Best, why?
//      Because, separates HTML and JS
//       --> clean code --> easy to maintain
//      ALLOWS MULTIPLE LISTENERS ON A SINGLE ELEMENT

let fourth_btn = document.querySelector("#4th");
fourth_btn.addEventListener("click", () => {
    console.log("Button Clicked!");
});
fourth_btn.addEventListener("click", () => {
    alert("Button Clicked!");
});

//  BOTH LISTENERS WILL WORK
//   MULTIPLE LISTENERS ALLOWED ON A SINGLE ELEMENT


