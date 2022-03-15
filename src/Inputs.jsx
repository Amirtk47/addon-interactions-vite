import React from "react";

export default function Inputs() {
  return (
    <div>
      <input data-testid="name" type="text" name="name" placeholder="Name" />
      <input
        data-testid="lastName"
        type="text"
        name="lastName"
        placeholder="LastName"
      />
    </div>
  );
}
