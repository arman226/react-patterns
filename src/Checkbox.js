import React, { useState } from "react";

export default function Checkbox({ children, test }) {
  const [checked, setChecked] = useState(true);
  return React.Children.map(children, (child) => {
    const clone = React.cloneElement(child, {
      checked,
      setChecked,
    });

    console.log(child);
    return clone;
  });
}
