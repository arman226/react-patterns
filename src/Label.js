import React from "react";

export default function Label({ children, test, checked, setChecked }) {
  /**
   * @param checked and
   * @param setChecked shall be defined or else
   * @throw and error
   */

  if (!setChecked && !test) {
    throw new Error(
      "You cannot directly use this label component outside a checkbox"
    );
  }
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
