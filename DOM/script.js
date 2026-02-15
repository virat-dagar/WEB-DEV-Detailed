let element = document.getElementById("profile");

element.style.background = "#d73333";
element.style.textAlign = "center";
element.style.padding = "15px";

const highlight = document.getElementsByClassName("important");
console.log(highlight);


// background ka color change ke liye
// const element = document.getElementById("IdName")
//  variableName.style.background = "color";

// Text color change ke liye
// const element = document.getElement
//  variableName.style.color = "color";

// for (let i=0; i<highlight.length; i++){
//     highlight[i].style.color = "red";
//     highlight[i].style.fontSize = "60px";
// }
// console.log(highlight.length);

for (let i=0; i<highlight.length; i++){
    // Even
    if(i % 2 === 0){
        highlight[i].style.color = "blue";
    }
    else{
        highlight[i].style.color = "green";
    }
}  

