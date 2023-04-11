import React from "react";
import PropTypes from "prop-types";
import "./BlueButton.css";

// Expression Method:
// function BlueButton() {
//   return (
//     <button>Click Me!</button>
//   )
// }

// Arrow syntax
// const BlueButton = () => {
//   return (
//     <button>Click Me!</button>
//   )
// }

// Passing information via props
// Dot syntax:
// const BlueButton = (props) => {
//   return (
//     <button type="button">{ props.message }</button>
//   );
// }

// Unpacking props object:
// All properties add to props object
// Unpack requred properties to variables in the function scope:
// const { <prop name> } = props

// const BlueButton = (props) => {
//   const { message } = props;
//   return (
//     <button type="button">{ message }</button>
//   )
// }

//Unpacking in Function Definition:
// Only defined properties are unpacked and set to variables in the function scope:
// const BlueButton = ({ message }) => {
//   return (
//     <button type="button">{ message }</button>
//   )
// }

const BlueButton = ({ message = "Click Me  " }) => {
  return (
    <div>
      <button className="button" type="button">
        <h2 className="button_text">{ message }</h2>
      </button>
      <h1>Header element</h1>
    </div>
  );
};

BlueButton.propTypes = {
  message: PropTypes.string,
};

export default BlueButton;
