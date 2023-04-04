// Exercise 1.1
// Within the JS file, create three new variables called “genre” and “rating” and
// “pillows”. Give these the values of “horror”, “5” and “1”, respectively.

const genre = "horror";
const rating = 5;
const pillows = 1;

if (rating === 5 && pillows === 1) {
    console.log("My friend will watch the movie");
} else if (rating === 5 && genre === "horror" && pillows === 0) {
    console.log("Sorry, my friend won't watch the movie");
} else if (rating < 5) {
    console.log("Oh no, the movie has a rubbish review. You and your friend won't watch it!");
} else {
    console.log("Let's go watch it!");
}

// My friend will watch the movie