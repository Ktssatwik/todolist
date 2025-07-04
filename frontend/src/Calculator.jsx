// src/Calculator.jsx
import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => setInput((prev) => prev + value);
  const handleClear = () => setInput("");
  const handleBackspace = () => setInput((prev) => prev.slice(0, -1));

  const handleCalculate = () => {
    try {
      const expression = input.replace(/(\d+)\^(\d+)/g, "Math.pow($1,$2)");
      setInput(String(eval(expression)));
    } catch {
      setInput("Error");
    }
  };

  const handleFunction = (fn) => {
    try {
      const val = eval(input);
      setInput(String(fn(val)));
    } catch {
      setInput("Error");
    }
  };

  const handleFactorial = () => {
    try {
      let n = Math.floor(eval(input));
      if (n < 0) return setInput("Error");
      let res = 1;
      for (let i = 2; i <= n; i++) res *= i;
      setInput(String(res));
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="calc-container">
      <div className="bg-left">CCALCU</div>
      <div className="bg-right">LATORR</div>
      <div className="calc">
        <div className="calc-display">{input || "0"}</div>
        <div className="calc-buttons">
          <button className="btn-func" onClick={() => handleFunction(Math.sin)}>sin</button>
          <button className="btn-func" onClick={() => handleFunction(Math.cos)}>cos</button>
          <button className="btn-func" onClick={() => handleFunction(Math.tan)}>tan</button>
          <button className="btn-func" onClick={() => handleFunction(Math.log10)}>log</button>

          <button className="btn-func" onClick={() => handleFunction(Math.log)}>ln</button>
          <button className="btn-func" onClick={() => handleFunction(Math.sqrt)}>√</button>
          <button className="btn-func" onClick={() => handleFunction((x) => x * x)}>x²</button>
          <button className="btn-op" onClick={() => handleClick("^")}>xʸ</button>

          <button className="btn-func" onClick={() => handleClick("Math.PI")}>π</button>
          <button className="btn-func" onClick={() => handleClick("Math.E")}>e</button>
          <button className="btn-func" onClick={handleFactorial}>n!</button>
          <button className="btn-op" onClick={() => handleClick("%")}>%</button>

          <button className="btn-clear" onClick={handleClear}>C</button>
          <button className="btn-del" onClick={handleBackspace}>←</button>
          <button className="btn-op" onClick={() => handleClick("/")}>÷</button>
          <button className="btn-op" onClick={() => handleClick("*")}>×</button>

          <button className="btn-num" onClick={() => handleClick("7")}>7</button>
          <button className="btn-num" onClick={() => handleClick("8")}>8</button>
          <button className="btn-num" onClick={() => handleClick("9")}>9</button>
          <button className="btn-op" onClick={() => handleClick("-")}>−</button>

          <button className="btn-num" onClick={() => handleClick("4")}>4</button>
          <button className="btn-num" onClick={() => handleClick("5")}>5</button>
          <button className="btn-num" onClick={() => handleClick("6")}>6</button>
          <button className="btn-op" onClick={() => handleClick("+")}>+</button>

          <button className="btn-num" onClick={() => handleClick("1")}>1</button>
          <button className="btn-num" onClick={() => handleClick("2")}>2</button>
          <button className="btn-num" onClick={() => handleClick("3")}>3</button>
          <button className="btn-equal" onClick={handleCalculate}>=</button>

          <button className="btn-zero" onClick={() => handleClick("0")}>0</button>
          <button className="btn-num" onClick={() => handleClick(".")}>.</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
