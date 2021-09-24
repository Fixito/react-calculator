import "./App.css";
import { useState } from "react";

function App() {
  const [output, setOutput] = useState("0");
  const [formula, setFormula] = useState("");
  const [result, setResult] = useState("");

  const clear = () => {
    setOutput("0");
    setFormula("");
    setResult("");
  };

  const appendDecimal = () => {
    if (output.indexOf(".") === -1) {
      setOutput(`${output}.`);
      setFormula(`${formula}.`);
    }
  };

  const appendInput = (e) => {
    if (output === "0") {
      setOutput(e.target.innerHTML);
      setFormula(e.target.innerHTML);
    } else {
      setOutput(`${output}${e.target.innerHTML}`);
      setFormula(`${formula}${e.target.innerHTML}`);
    }
  };

  const handleConsecutiveOperators = (operator) => {
    const lastChar = formula.charAt(output.length);
    const last2Chars = formula.slice(-2);

    if (isNaN(last2Chars[0]) && isNaN(last2Chars[1])) {
      const newFormula = formula.slice(0, formula.length - 2);
      setFormula(`${newFormula}${operator}`);
    } else if (operator === "-") {
      setFormula(`${result ? result : formula}${operator}`);
    } else if (
      lastChar === "+" ||
      lastChar === "*" ||
      lastChar === "/" ||
      lastChar === "-"
    ) {
      const newFormula = formula.replace(lastChar, operator);

      setFormula(newFormula);
    } else {
      setFormula(`${result ? result : formula}${operator}`);
    }
  };

  const add = () => {
    setOutput("+");
    handleConsecutiveOperators("+");
  };

  const subtract = () => {
    setOutput("-");
    handleConsecutiveOperators("-");
  };

  const multiply = () => {
    setOutput("x");
    handleConsecutiveOperators("*");
  };

  const divide = () => {
    setOutput("/");
    handleConsecutiveOperators("/");
  };

  const equals = () => {
    // eslint-disable-next-line no-eval
    setResult(eval(formula));
  };

  return (
    <div className="App">
      <div>
        <div className="display">
          <div className="formulaScreen">{formula}</div>
          <div className="outputScreen" id="display">
            {result ? result : output}
          </div>
        </div>
        <div className="keys">
          <button id="clear" onClick={clear}>
            AC
          </button>
          <button id="divide" onClick={divide}>
            /
          </button>
          <button id="multiply" onClick={multiply}>
            x
          </button>
          <button id="seven" onClick={appendInput}>
            7
          </button>
          <button id="eight" onClick={appendInput}>
            8
          </button>
          <button id="nine" onClick={appendInput}>
            9
          </button>
          <button id="subtract" onClick={subtract}>
            -
          </button>
          <button id="four" onClick={appendInput}>
            4
          </button>
          <button id="five" onClick={appendInput}>
            5
          </button>
          <button id="six" onClick={appendInput}>
            6
          </button>
          <button id="add" onClick={add}>
            +
          </button>
          <button id="one" onClick={appendInput}>
            1
          </button>
          <button id="two" onClick={appendInput}>
            2
          </button>
          <button id="three" onClick={appendInput}>
            3
          </button>
          <button id="zero" onClick={appendInput}>
            0
          </button>
          <button id="decimal" onClick={appendDecimal}>
            .
          </button>
          <button id="equals" onClick={equals}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
