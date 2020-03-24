import React from "react";
import "./styles.css";

export default function App() {
  const [screen, setScreen] = React.useState("");

  const clickHandler = () => {
    let val = event.target.textContent;
    console.log(event.target.type);
    switch (val) {
      case "c":
        setScreen("");
        break;
      case "=":
        setScreen(eval(screen));
        break;
      default:
        setScreen(screen + "" + val);
    }
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Calculator</h2>
      <div
        style={{ width: "250px", height: "400px", border: "1px solid grey" }}
      >
        <DisplayScreen value={screen} />
        <div onClick={clickHandler}>
          <Button label={"+"} type="calc" />
          <Button label={"-"} type="calc" />
          <Button label={"="} type="calc" />
          <br />
          <Button label={7} />
          <Button label={8} />
          <Button label={9} />
          <br />
          <Button label={4} />
          <Button label={5} />
          <Button label={6} />
          <br />
          <Button label={1} />
          <Button label={2} />
          <Button label={3} />
          <br />
          <Button label={0} />
          <Button label={"."} />
          <Button label={"c"} />
        </div>
      </div>
    </div>
  );
}

const DisplayScreen = ({ value, refs }) => (
  <textarea
    style={{
      width: "90%",
      margin: "5px",
      textAlign: "right",
      padding: "5px",
      border: "1px solid blue"
    }}
    readOnly
    value={value}
  />
);

const Button = ({ buttonHandler, label, type = "number" }) => {
  return (
    <button type={type} className="Button" onClick={buttonHandler}>
      {label}
    </button>
  );
};
