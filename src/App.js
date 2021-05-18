import { useEffect, useReducer, useState } from "react";
import "./App.css";

const ACTIONS = {
  PASSED_ONCE: "PASSED_ONCE",
  PASSED_TWICE: "PASSED_TWICE",
  PASSED_THRICE: "PASSED_THRICE",
};

const reducer = ({ state }) => {
  switch (state) {
    case ACTIONS.PASSED_ONCE:
      return {
        state: ACTIONS.PASSED_TWICE,
      };
    case ACTIONS.PASSED_TWICE:
      return {
        state: ACTIONS.PASSED_THRICE,
      };
    case ACTIONS.PASSED_THRICE:
      return {
        state: ACTIONS.PASSED_ONCE,
      };
    default:
      return state;
  }
};

const Button = ({ color, increment, underline }) => {
  //state machine
  const [state, dispatch] = useReducer(reducer, {
    state: ACTIONS.PASSED_ONCE,
  });

  const [counter, setCounter] = useState(0);
  return (
    <div style={{ color, textDecoration: underline && "underline" }}>
      <div onClick={() => dispatch()}> I am a button</div>
      {state.state}
    </div>
  );
};

/**
 * idle
 * loading
 * loaded
 * error
 */

function App() {
  const props = {
    increment: 2,
    underline: true,
  };

  const [state, setState] = useState("idle");

  const onClicked = () => {
    console.log("called");
    setState("loading");
    fetch("/data.json")
      .then((i) => {
        JSON.parse(i);
        setState(i.status === 200 ? "loaded" : "error");
      })
      .catch((err) => {
        setState("error");
        console.log(err);
      });
  };

  if (state === "loading") {
    return <div>we're still loading...</div>;
  }

  if (state === "error") {
    return <div>Errors found</div>;
  }

  return (
    <div className='App'>
      <button onClick={onClicked} />
      {/* <Button {...props} color='blue' /> */}
      Current Statess : {state}
    </div>
  );
}

export default App;
