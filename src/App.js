import { useEffect, useState } from "react";
import "./styles.css";

const denominations = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
let value = [];

export default function App() {
  const [toggle, setToggle] = useState(false);
  const [userMsg, setUserMsg] = useState("");
  const [bill, setBill] = useState();
  const [cashGiven, setCashGiven] = useState();
  const [btnFlag, setBtnFlag] = useState(false);
  const [tableDisplay, setTableDisplay] = useState(false);

  function moneyClickHandler(event) {
    setUserMsg("Wohoo ✨! Below is table for Minium Note ");
    setTableDisplay(true);
    calculateChange(cashGiven - bill);
  }
  function calculateChange(money) {
    value = [];
    denominations.forEach((note, i) => {
      value.push(Math.trunc(money / note));
      money %= note;
    });
  }
  useEffect(() => {
    if (cashGiven) {
      if (bill > cashGiven) {
        setUserMsg(
          "GOOD Plate dho do ab please 😂(cash given is less than bill)"
        );
        setTableDisplay(false);
        setBtnFlag(false);
      } else if (cashGiven === bill) {
        setUserMsg("No Change as cash given is equal to bill amount 🤓");
        setTableDisplay(false);
        setBtnFlag(false);
      } else {
        setUserMsg("Click the button to generate the change 👇");
        setBtnFlag(true);
      }
    } else {
      setUserMsg("Enter Cash Given 💰");
      setBtnFlag(false);
      setTableDisplay(false);
    }
    if (!bill) {
      setToggle(false);
      setUserMsg("Enter Bill Amount 💰");
      setCashGiven("");
      setBtnFlag(false);
      setTableDisplay(false);
    }
  }, [bill, cashGiven]);

  useEffect(() => {
    if (bill) {
      setToggle(true);
      setUserMsg("Enter Cash Given 💰");
    } else {
      setTableDisplay(false);
      setBtnFlag(false);
      setToggle(false);
      setUserMsg("Enter Bill Amount 💰");
      setCashGiven("");
    }
  }, [bill]);

  return (
    <div className="App">
      <h1>Cash Registry 💸</h1>
      <p>Let me help you in your billing</p>
      <div id="div-container">
        <input
          type="number"
          step="any"
          value={bill}
          onChange={(event) => setBill(event.target.valueAsNumber)}
          placeholder="Enter the bill amount"
        ></input>
        <input
          type="number"
          step="any"
          value={cashGiven}
          onChange={(event) => setCashGiven(event.target.valueAsNumber)}
          style={{ display: toggle === false ? "none" : "block" }}
          placeholder="Enter the cash given"
        ></input>
        <p>{userMsg}</p>
        <button
          id="btn-generate"
          onClick={moneyClickHandler}
          disabled={btnFlag === false ? true : ""}
          style={{ display: toggle === false ? "none" : "block" }}
        >
          Generate
        </button>
      </div>
      <div
        id="denomination-div"
        style={{ display: tableDisplay === false ? "none" : "block" }}
      >
        <table id="currency-table">
          <thead>
            <tr>
              {denominations.map(function (note) {
                return <th>{note}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            <tr>
              {value.map(function (val) {
                return <td>{val}</td>;
              })}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
