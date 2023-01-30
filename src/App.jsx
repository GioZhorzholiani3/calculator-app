import { useState } from "react";

function App() {
  const [result, setResult] = useState("");
  const [input, setInput] = useState("");
  const [operator, setOperator] = useState("");

  return (
    <div className=" h-screen d-flex justify-center overflow-hidden">
      <h1 className="  text-center mx-auto my-2 tracking-widest text-5xl ">
        CALCULATOR
      </h1>
      <div className=" h-screen flex items-center flex-col justify-center ">
        <div className=" w-2/4 ">
          <div className="min-h-m-eight overflow-hidden bg-zinc-900 output d-flex align-middle">
            <p className="break-words text-right text-1xl mb-1">2x</p>
            <p className="break-words text-right text-3xl mb-1">2</p>
            <p className="break-words text-right text-3xl ">=4</p>
          </div>
          <div className="  m-auto h-px bg-zinc-400  "></div>
          <div className="grid grid-cols-4 items-stretch bg-zinc-900 ">
            <button className="h-20 text-orange-500 text-3xl">C</button>
            <button className="h-20 text-orange-500 text-3xl">&larr;</button>
            <button className="h-20 text-orange-500 text-3xl">%</button>
            <button className="h-20 text-orange-500 text-3xl">&divide;</button>
            <button className="h-20 text-white text-2xl">7</button>
            <button className="h-20 text-white text-2xl">8</button>
            <button className="h-20 text-white text-2xl">9</button>
            <button className="h-20 text-orange-500 text-3xl">&times;</button>
            <button className="h-20 text-white text-2xl">4</button>
            <button className="h-20 text-white text-2xl">5</button>
            <button className="h-20 text-white text-2xl">6</button>
            <button className="h-20 text-orange-500 text-3xl">-</button>
            <button className="h-20 text-white text-2xl">1</button>
            <button className="h-20 text-white text-2xl">2</button>
            <button className="h-20 text-white text-2xl">3</button>
            <button className="h-20 text-orange-500 text-3xl">+</button>
            <button className="h-20 text-orange-500 text-2xl">
              x<sup>Y</sup>
            </button>
            <button className="h-20 text-white text-2xl">0</button>
            <button className="h-20 text-white text-2xl">.</button>
            <button className="h-20 text-orange-500 text-3xl">=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
