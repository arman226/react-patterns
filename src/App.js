import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const Button = ({ color, increment, underline }) => {
  const [counter, setCounter] = useState(0);
  return (
    <div
      style={{ color, textDecoration: underline && "underline" }}
      onClick={() => {
        setCounter((prev) => prev + increment);
      }}
    >
      I am a button {counter}
    </div>
  );
};

function App() {
  const props = {
    increment: 2,
    underline: true,
  };

  return (
    <div className='App'>
      <Button {...props} color='blue' />
    </div>
  );
}

export default App;
