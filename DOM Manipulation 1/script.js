
const para = document.getElementsByTagName("p");
console.log(para);
// para.style.color = "blue";  wrong

// We need to iterate using  for loop

// for (let i=0; i<para.length; i++){
//     if (i % 2 !== 0 && i<=para.length){
//         para[i].style.color = "blue";
//     }
//     else if (i % 2 === 0) {
//         para[i].style.color = "green"
//     }
//     else {
//         para[i]
//     }
// }

// forEach() method
const ArrOfPara = Array.from(para);

ArrOfPara.forEach((p, index) => {
    if (index % 2 === 0){
        p.style.color = "blue"
    }
    else{
        p.style.color = "green";
    }
})
para[para.length-1].style.fontWeight = "bold";


// Creating a new element dynamically
const newPara = document.createElement("p");
newPara.textContent = "This is a dynamically created paragrpah";

// newPara will not be created in HTMl, until we append it
// Because, we need to tell DOM, where to keep this element in HTMl document

document.getElementById("content").append(newPara);



const image = document.createElement("img");
image.setAttribute("src",
     "https://tse3.mm.bing.net/th/id/OIP.CGhzovPGwt5YdEau7kekSgHaE8?pid=Api&P=0&h=180");
image.setAttribute("alt", "cat image");
document.getElementById("gallery").append(image);
// snake_case  and camelCase
// saamp aur oont case
