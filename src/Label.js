import React from "react";

export default function Label({ children, test, checked, setChecked }) {
  return (
    <label
      for='something'
      onClick={() => {
        setChecked((e) => !e);
      }}
    >
      {children} {test} {checked && "checked"}
    </label>
  );
}
