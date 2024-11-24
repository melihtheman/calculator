import "./index.css";
import Button from "./components/Button";
import Display from "./components/Display";
import { useState } from "react";

function App() {
  return <Calculator />;
}

function Calculator() {
  const [currentInput, setCurrentInput] = useState("");
  const [previousInput, setPreviousInput] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState("");

  function handleCurrentInput(value) {
    const totalInput = currentInput.toString() + value.toString();
    setCurrentInput(totalInput);
  }

  function handleOperation(value) {
    if (result) {
      setPreviousInput(result);
      setResult("");
    } else if (previousInput && currentInput) {
      handleResult(operation);
    } else if (!previousInput && currentInput) {
      setPreviousInput(currentInput);
      setCurrentInput("");
    }
    setOperation(value);
  }

  // function handleOrder() {
  //   if (!previousInput && !currentInput) {
  //     return;
  //   }
  //   setPreviousInput(currentInput);
  //   setCurrentInput("");
  // }

  function handleResult(operation) {
    let calcResult;

    switch (operation) {
      case "+":
        calcResult = Number(previousInput) + Number(currentInput);
        break;
      case "-":
        calcResult = Number(previousInput) - Number(currentInput);
        break;
      case "*":
        calcResult = Number(previousInput) * Number(currentInput);
        break;
      case "/":
        calcResult =
          Number(currentInput) !== 0
            ? Number(previousInput) / Number(currentInput)
            : "Error";
        break;
      default:
        calcResult = "Invalid Operation";
    }

    setResult(calcResult);
    setPreviousInput(calcResult); // Sonucu önceki giriş olarak ayarla
    setCurrentInput(""); // Yeni giriş için sıfırla
    setOperation(""); // Yeni işlem için operatörü sıfırla
  }

  function handleClear() {
    setPreviousInput("");
    setCurrentInput("");
    setResult("");
    setOperation("");
  }

  return (
    <div className="calculator">
      <Display
        className="display"
        currentInput={currentInput}
        previousInput={previousInput}
        operation={operation}
        result={result}
      />
      <div className="buttons">
        <Button className="button" value="7" onClick={handleCurrentInput}>
          7
        </Button>
        <Button className="button" value="8" onClick={handleCurrentInput}>
          8
        </Button>
        <Button className="button" value="9" onClick={handleCurrentInput}>
          9
        </Button>
        <Button className="button operator" value="/" onClick={handleOperation}>
          /
        </Button>

        <Button className="button" value="4" onClick={handleCurrentInput}>
          4
        </Button>
        <Button className="button" value="5" onClick={handleCurrentInput}>
          5
        </Button>
        <Button className="button" value="6" onClick={handleCurrentInput}>
          6
        </Button>
        <Button className="button operator" value="*" onClick={handleOperation}>
          *
        </Button>

        <Button className="button" value="1" onClick={handleCurrentInput}>
          1
        </Button>
        <Button className="button" value="2" onClick={handleCurrentInput}>
          2
        </Button>
        <Button className="button" value="3" onClick={handleCurrentInput}>
          3
        </Button>
        <Button className="button operator" value="-" onClick={handleOperation}>
          -
        </Button>

        <Button className="button zero" value="0" onClick={handleCurrentInput}>
          0
        </Button>
        <Button className="button" onClick={handleClear}>
          Clear
        </Button>
        <Button className="button operator" value="+" onClick={handleOperation}>
          +
        </Button>

        <div className="equals-button" onClick={() => handleResult(operation)}>
          <Button className="button equals" onClick={() => ""}>
            =
          </Button>
        </div>
      </div>
    </div>
  );
}
export default App;
