import React from "react";

export const Button = (props) => {
  return (
    <button data-testid={props.label} type="button">
      {props.label}
    </button>
  );
};
