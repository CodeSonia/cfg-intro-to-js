// create a paragraph using JS:
const paragraph = document.createElement("p");

// Using ONLY Javascript, create a paragraph (‘p’) called paragraph with the following
// qualities and attach to the DOM:
// 1. The inner text should say something about you
// 2. The font size should be 18px
// 3. The font family should be sans-serif
// 4. The width of the element should be 100px
// 5. The border should be 1px thick, solid and orange
// 6. The padding should be 30px
document.body.appendChild(paragraph);
paragraph.innerText = "Hi, I'm Sonia and my favourite colour is pink!";
paragraph.style.fontSize = "18px";
paragraph.style.fontFamily = "sans-serif";
paragraph.style.width = "100px";
paragraph.style.border = "1px solid orange";
paragraph.style.padding = "30px";

// Exercise 1.4
// Using ONLY Javascript, create a header (‘h1’) called newHeader and place it INSIDE of
// the div we created in 1.3 with the following qualities and attach to the DOM:
// 1. The inner text should say ”I’m in!”
// 2. The border should be 1px thick, dashed and blue
// 3. The padding should be 50px

const newHeader = document.createElement("h1");
const contentDiv = document.getElementById("content");
contentDiv.appendChild(newHeader);

newHeader.innerText = "I'm in!";
newHeader.style.border = "1px dashed blue";
newHeader.style.padding = "50px";


