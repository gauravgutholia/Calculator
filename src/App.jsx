import React, { useState } from "react";
import "./styles.css";

function App() {
  const [result, setResult] = useState("");

  function handleClick(e) {
    setResult(result.concat(e.target.name));
  }

  function clear() {
    setResult("");
  }
  function backspace() {
    setResult(result.slice(0, -1));
  }

  function calculate() {
    try {
      setResult(
        String(eval(result)).length > 3 && String(eval(result)).includes(".")
          ? String(eval(result).toFixed(4))
          : String(eval(result))
      );
    } catch (error) {
      setResult("Error");
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className=" bt">
          <input value={result} />
        </div>
      </div>

      <div className="row">
        <div className="bt">
          <button name="7" onClick={handleClick}>
            7
          </button>
          <button name="8" onClick={handleClick}>
            8
          </button>
          <button name="9" onClick={handleClick}>
            9
          </button>
          <button name="+" onClick={handleClick}>
            +
          </button>
        </div>
      </div>

      <div className="row">
        <div className="bt">
          <button name="4" onClick={handleClick}>
            4
          </button>
          <button name="5" onClick={handleClick}>
            5
          </button>
          <button name="6" onClick={handleClick}>
            6
          </button>
          <button name="-" onClick={handleClick}>
            -
          </button>
        </div>
      </div>

      <div className="row">
        <div className="bt">
          <button name="1" onClick={handleClick}>
            1
          </button>
          <button name="2" onClick={handleClick}>
            2
          </button>
          <button name="3" onClick={handleClick}>
            3
          </button>
          <button name="*" onClick={handleClick}>
            *
          </button>
        </div>
      </div>

      <div className="row">
        <div className="bt">
          <button name="0" onClick={handleClick}>
            0
          </button>

          <button name="." onClick={handleClick}>
            .
          </button>
          <button name="%" onClick={handleClick}>
            %
          </button>
          <button name="/" onClick={handleClick}>
            /
          </button>
        </div>
      </div>

      <div className="row">
        <button className = "Green" onClick={calculate}>
          =
        </button>
        <button className = "Red"  onClick={clear}>
          AC
        </button>
        <button className = "Green" onClick={backspace}>
          C
        </button>
      </div>
    </div>
  );
}
export default App;
