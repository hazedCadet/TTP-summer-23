// seting up our first event listener

const button = document.getElementById("click-me");
let clickCount = 0;
button.addEventListener("click", () => {
    clickCount++;
    console.log(`This button has been click ${clickCount} times`);
});

// mouseover

const hover = document.getElementById("hover-me");
let hoverCount = 0;
hover.addEventListener("mouseover", () => {
    hoverCount++;
    console.log(`We have hovered ${hoverCount} many times`)
});

// mouseout

hoverCount.addEventListener('mouseout', () => {
    console.log('The mouse moved out of the element');
});

// keyup and keydown events
// -- dont require element from document

document.addEventListener('keydown', (event) => {
    console.log(`I just pressed the ${event.key} key`);
});

document.addEventListener('keyup' () => {
    console.log(`released key`);
});


let string = '';

document.addEventListener('keydown', () => {

} );


const form = document.getElementById('form');
let submitCount = 0;

format.addEventListener('submit', (event) => {
    event.preventDeault();
    submitCount++;
    console.log(`This form has ${submitCount} submissions`);
});

// parent and children nodes

const container = document.getElementById('container');

let children = container.childNodes;
console.log(children);

let firstChild = container.firstChild;
console.log(firstChild);

let lastChild = container.lastChild;
console.log(lastChild);

// siblings ?


// set timeout and set interval

function hello () {
    console.log("Hello World");
}

setTimeout(hello, 1000);
setInterval(hello, 2000);

const textElement = document.getElementById("myText");
const textButton = document.getElementById("changeText");

textButton.addEventListener('click', );