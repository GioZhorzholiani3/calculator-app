import { useState } from "react";

function App() {
  const [currentOperand, setCurrentOperand] = useState("");
  const [previousOperand, setPreviousOperand] = useState("");
  const [operation, setOperation] = useState(null);
  const [result, setResult] = useState(null);

  const clearAll = () => {
    setCurrentOperand("");
    setPreviousOperand("");
    setOperation(null);
    setResult(null);
    console.log("all cleared");
  };

  const clearPreviousDigit = () => {
    setCurrentOperand(currentOperand.toString().slice(0, -1));
    console.log("previous digit cleared");
  };

  const devideHandler = () => {
    setOperation("/");
    setPreviousOperand(currentOperand);
    setCurrentOperand("");
    console.log("devide");
  };

  const percentHandler = () => {
    setOperation("%");
    setPreviousOperand(currentOperand);
    setCurrentOperand("");
    console.log("percent");
  };

  const multiplyHandler = () => {
    setOperation("*");
    setPreviousOperand(currentOperand);
    setCurrentOperand("");
    console.log("multiply");
  };

  const substractHandler = () => {
    setOperation("-");
    setPreviousOperand(currentOperand);
    setCurrentOperand("");
    console.log("substract");
  };

  const addHandler = () => {
    setOperation("+");
    setPreviousOperand(currentOperand);
    setCurrentOperand("");
    console.log("add");
  };

  const floatHandler = () => {
    if (currentOperand.includes(".")) return;
    setCurrentOperand(currentOperand + ".");
    console.log("float");
  };

  const exponentHandler = () => {
    setOperation("^");
    setPreviousOperand(currentOperand);
    setCurrentOperand("");
    console.log("exponent");
  };

  //todo: write  logic for calculating result
  const resultHandler = () => {};

  return (
    <div className=" h-screen d-flex justify-center overflow-hidden">
      <h1 className="  text-center mx-auto my-2 tracking-widest text-5xl ">
        CALCULATOR
      </h1>
      <div className=" h-screen flex items-center flex-col justify-center ">
        <div className=" w-2/4 ">
          <div className="min-h-m-eight overflow-hidden bg-zinc-900 output d-flex align-middle">
            <p className="break-words text-right text-1xl text-slate-500 mb-1">
              {previousOperand} {operation}
            </p>
            <p className="break-words text-right text-3xl text-white mb-1">
              {currentOperand}
            </p>
            <p className="break-words text-right text-white text-3xl ">
              {result}
            </p>
          </div>
          <div className="  m-auto h-px bg-zinc-400  "></div>
          <div className="grid grid-cols-4 items-stretch bg-zinc-900 ">
            <button
              onClick={clearAll}
              className="h-20 text-orange-500 text-3xl"
            >
              C
            </button>
            <button
              onClick={clearPreviousDigit}
              className="h-20 text-orange-500 text-3xl"
            >
              &larr;
            </button>
            <button
              onClick={percentHandler}
              className="h-20 text-orange-500 text-3xl"
            >
              %
            </button>
            <button
              onClick={devideHandler}
              className="h-20 text-orange-500 text-3xl"
            >
              &divide;
            </button>
            <button className="h-20 text-white text-2xl">7</button>
            <button className="h-20 text-white text-2xl">8</button>
            <button className="h-20 text-white text-2xl">9</button>
            <button
              onClick={multiplyHandler}
              className="h-20 text-orange-500 text-3xl"
            >
              &times;
            </button>
            <button className="h-20 text-white text-2xl">4</button>
            <button className="h-20 text-white text-2xl">5</button>
            <button className="h-20 text-white text-2xl">6</button>
            <button
              onClick={substractHandler}
              className="h-20 text-orange-500 text-3xl"
            >
              -
            </button>
            <button className="h-20 text-white text-2xl">1</button>
            <button className="h-20 text-white text-2xl">2</button>
            <button className="h-20 text-white text-2xl">3</button>
            <button
              onClick={addHandler}
              className="h-20 text-orange-500 text-3xl"
            >
              +
            </button>
            <button
              onClick={exponentHandler}
              className="h-20 text-orange-500 text-2xl"
            >
              x<sup>Y</sup>
            </button>
            <button className="h-20 text-white text-2xl">0</button>
            <button onClick={floatHandler} className="h-20 text-white text-2xl">
              .
            </button>
            <button
              onClick={resultHandler}
              className="h-20 text-orange-500 text-3xl"
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
