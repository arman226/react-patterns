import React, { useState } from "react";

export default function CheckboxInput({ test, checked, setChecked }) {
  return (
    <div>
      <input
        type='checkbox'
        checked={checked}
        onChange={(e) => {
          setChecked(e.target.checked);
        }}
      />
      {test}
    </div>
  );
}
