import React from "react";

export default function DisplayType(props) {
  return (
    <select
      onChange={
        (e => props.printChangeHandler(e.target.value)) ||
        (e => props.bookChangeHandler(e.target.value))
      }
    >
      {props.bookOptions} {props.printOptions}
    </select>
  );
}