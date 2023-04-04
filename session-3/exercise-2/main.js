// Exercise 2.1
// We’re going to select the button and paragraph elements using
// the document.getElementbyId() method.
// Exercise 2.2
// We’re going to add an event listener to the button that changes
// the text of the paragraph element when clicked.
// Exercise 2.3
// Open the file in a web browser and click the button. Watch as the
// text changes!

const myButton = document.getElementById("my-button");
const paragraph = document.getElementById("paragraph");

myButton.addEventListener("click", function () {
  paragraph.innerHTML = "New text!";
});
