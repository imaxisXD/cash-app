import { useState } from "react";
import "./styles.css";

export default function App() {
  const [toggle, setToggle] = useState(false);
  const [userMsg, setUserMsg] = useState("");
  const [bill, setBill] = useState(0);
  //Bill amount handler function
  function amountHandler(event) {
    let billAmount = event.target.value;

    if (!isNaN(parseFloat(billAmount)) && isFinite(billAmount)) {
      setToggle(true);
      setBill(parseInt(billAmount, 10));
      setUserMsg(" ");
    } else {
      setToggle(false);
    }
  }
  //Cash given handler function
  function cashGivenHandler(event) {
    let cashGiven = event.target.value;

    if (!isNaN(parseFloat(cashGiven)) && isFinite(cashGiven)) {
      if (bill > cashGiven) {
        setUserMsg("GOOD Plate dho do ab please");
      } else if (cashGiven >= bill) {
        setUserMsg("Click the button to generate the change");
      }
    } else {
      setUserMsg("Enter a numeric value");
    }
  }

  return (
    <div className="App">
      <h1>Cash Registry</h1>
      <p>Let me help you in your billing</p>
      <div id="div-container">
        <input
          onInput={amountHandler}
          placeholder="Enter the bill amount"
        ></input>
        <input
          onInput={cashGivenHandler}
          style={{ display: toggle === false ? "none" : "block" }}
          placeholder="Enter the cash given"
        ></input>
      </div>
      <p>{userMsg}</p>
      <button>Generate</button>
      <div id="denomination-div"></div>
    </div>
  );
}
