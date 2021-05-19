import React, { useState } from "react";
import Label from "./Label";
import CheckboxInput from "./CheckboxInput";

export default function Checkbox({ children, test }) {
  const [checked, setChecked] = useState(true);
  return React.Children.map(children, (child) => {
    if (typeof child.type === "string") {
      //no DOM element allowed
      //   throw new Error(`<${child.type}/>  is not allowed inside our component`);
      //ignore any dom element
      return null;
    }

    if (typeof child.type === "function") {
      //these are your custom elements
    }

    if (typeof child.type === Label || child.type === CheckboxInput) {
      //only specified Types Allowed Inside
    }

    const clone = React.cloneElement(child, {
      checked,
      setChecked,
    });

    console.log(child);
    return clone;
  });
}
