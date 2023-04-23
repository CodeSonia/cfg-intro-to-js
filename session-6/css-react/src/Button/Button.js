import React from "react";
import "./Button.css";

const Button = ({ message = "Click Me " }) => {
    return (
      <div>
        <button className="button" type="button">
          <h2 className="button_text">{ message }</h2>
        </button>
      </div>
    );
  };

export default Button;