// console.log('hello world!');

// Example

const element = document.getElementById("myElement");

console.log(element);

element.textContent = "Replacement Text";


// Example 2

const paragraph = document.getElementById("paragraph");

paragraph.innerHTML = "<strong>Now BOLD</strong>";


// Example 3


let property = document.getElementById("property");
property.style.backgroundColor = "blue";
property.style.fontSize = "3rem";
property.style.textAlign = "center";


// getElementsByClassName()

let elements = document.getElementsByClassName("myClass");
console.log(elements);
console.log(elements.length);
elements[1].style.border = "2px solid red";

// Example 2

const myClass2 = document.getElementsByClassName("myClass2");
console.log(myClass2);
myClass2[0].textContent = "Modified text";
myClass2[0].classList.add("newClass");

// Example 3

const myClass3 = document.getElementsByClassName("myClass3");
myClass3[0].classList.remove("myClass3);")

// Example 4

const buttons = document.getElementsByClassName("toggle-button");
console.log(buttons)
function toggleClass(){
    for (let i=0; i<buttons.length; i++){
        buttons[i].classList.toggle("active");
    }
}
toggleClass();

// querySelector() - selects first of its type

const querySelectorElement = document.querySelector("div");
console.log(querySelectorElement);
querySelectorElement.textContent = "first div chosen";

// Query Selector() Example 2

const queryExample = document.querySelector("#myDiv");
queryExample.style.backgroundColor = "pink";

// querySelector() another use

const queryExample3 = document.querySelector(".myClass3-2");
queryExample3.style.fontSize = "100px";

// querySelector() - images

const image = document.querySelector("img");
image.setAttribute("src","../DOM/images/island.png");


// Example 6

function getValue() {
    const input = document.querySelector("#myInput");
    const value = input.value;
    console.log(value);
}