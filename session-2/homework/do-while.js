// + Homework Task - Quitting the Loop
// We know that while loops can be infinite. Create a do while loop that
// takes in user input and returns different log statement options, but
// only if the input statement is not stop. If the statement is stop, break
// the loop.

let userInput;

do {
  userInput = prompt(
    "Enter a phrase to receive positive statements: (enter 'stop' to quit, or enter: 'right place', 'courage',  'love' or 'reality')"
  );
  if (userInput == "right place") {
    console.log(
      "I am in the right place at the right time, doing the right thing"
    );
  } else if (userInput == "courage") {
    console.log("Courage starts with showing up and letting ourselves be seen");
  } else if (userInput == "love") {
    console.log("You are loved just for being who you are, just for existing");
  } else if (userInput == "reality") {
    console.log(
      "Make way for the unprecedented and watch your reality rearrange itself"
    );
  } else {
    console.log(
      "Please enter: right place, courage, love or reality. Enter 'stop' to quit"
    );
  }
} while (userInput !== "stop");
