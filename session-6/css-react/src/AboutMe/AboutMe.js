import React from "react";
import "./AboutMe.css";

const AboutMe = (props) => {
  return (
    <>
      <h1>My name is {props.name}</h1>
      <h3>I am from and live in {props.location}</h3>
      <p>My favourite book is {props.bookTitle}</p>
      <p>My favourite film is {props.favouriteFilm}!</p>
    </>
  );
};

// const AboutMe = () => {
//     return (
//       <>
//         <h1>My name is Sonia!</h1>
//         <h3>I'm from and live in Birmingham</h3>
//         <p>My favourite book is called <a href="https://www.amazon.co.uk/Its-Not-Me-You/dp/0007524986" target="_blank">"It's not me, it's you",</a> by Mhairi McFarlane </p>
//         <p>My favourite film is Twilight! (I'm a sucker for Edward)</p>
//       </>
//     );
//   };

export default AboutMe;
