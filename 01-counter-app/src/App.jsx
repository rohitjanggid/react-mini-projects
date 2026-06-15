import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Heading from "./components/Heading";
import ShowCount from "./components/ShowCount";
import Buttons from "./components/Buttons";
import { useReducer } from "react";

const initialValue = {
  inputNum: "",
  total: 0,
};

const reducer = (state, action) => {
  if (action.type === "INCREMENT") {
    return { ...state, total: state.total + 1 };
  } else if (action.type === "DECREMENT") {
    return { ...state, total: state.total - 1 };
  } else if (action.type === "CLEAR") {
    return { total: 0, inputNum: "" };
  } else if (action.type === "INPUT") {
    return {
      ...state,
      inputNum: action.payload,
    };
  } else if (action.type === "ADD") {
    return { ...state, total: state.total + state.inputNum, inputNum: "" };
  } else if (action.type === "MINS") {
    return { ...state, total: state.total - state.inputNum, inputNum: "" };
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <>
      <center className="container">
        <center className="card" style={{ width: "auto" }}>
          <Heading />
          <ShowCount value={state} />
          <Buttons dispatch={dispatch} inputNum={state.inputNum}/>
        </center>
      </center>
    </>
  );
}

export default App;
