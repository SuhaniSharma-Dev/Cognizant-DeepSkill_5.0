import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(5);
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");
  const increment = () => {
    setCount(count + 1);
    sayHello();
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const sayHello = () => {
    alert("Hello! Member1");
  };
  const sayWelcome = (msg) => {
    alert(msg);
  };
  const handleClick = (e) => {
    e.preventDefault();
    alert("I was clicked");
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const result = Number(amount) * 80;

    alert(`Converting to ${currency} Amount is ${result}`);
  };
  return (
    <div style={{ margin: "20px" }}>
      <h2>{count}</h2>
      <button onClick={increment}>Increment</button>
      <br /><br />
      <button onClick={decrement}>Decrement</button>
      <br /><br />
      <button onClick={() => sayWelcome("welcome")}>
        Say welcome
      </button>
      <br /><br />
      <button onClick={handleClick}>
        Click on me
      </button>
      <br /><br />
      <h1 style={{ color: "green" }}>
        Currency Convertor!!!
      </h1>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>Amount:</td>
              <td>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </td>
            </tr>

            <tr>
              <td>Currency:</td>
              <td>
                <input
                  type="text"
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <button type="submit">
                  Submit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}
export default App;