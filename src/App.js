import React from "react";
import styled from "styled-components";
import "./styles.css";

export default function App() {
  const [screen, setScreen] = React.useState("0");

  const clickHandler = event => {
    let defaultValue = screen;
    if (event.target.tagName === "DIV") {
      return;
    }
    let val = event.target.textContent;
    switch (val) {
      case "c":
        setScreen("0");
        break;
      case "=":
        try {
          setScreen(eval(defaultValue));
        } catch (ex) {
          setScreen("Error");
        }
        break;
      default:
        if (defaultValue === "0") {
          setScreen("" + val);
        } else {
          setScreen(screen + "" + val);
        }
    }
  };

  return (
    <div className="App">
      <Container>
        <DisplayScreen value={screen} />
        <div onClick={clickHandler}>
          <Button label={"c"} isPrimary={true} width="2x" />
          <Button label={"%"} type="calc" />
          <Button label={"/"} type="calc" />
          <br />
          <Button label={7} />
          <Button label={8} />
          <Button label={9} />
          <Button label={"*"} type="calc" />
          <br />
          <Button label={4} />
          <Button label={5} />
          <Button label={6} />
          <Button label={"-"} type="calc" />
          <br />
          <Button label={1} />
          <Button label={2} />
          <Button label={3} />
          <Button label={"+"} type="calc" />
          <br />
          <Button label={0} width="2x" />
          <Button label={"."} />
          <Button label={"="} type="calc" />
        </div>
      </Container>
    </div>
  );
}

const DisplayScreen = ({ value }) => <TextArea readOnly value={value} />;

const Button = ({
  buttonHandler,
  label,
  isPrimary,
  type = "number",
  width = ""
}) => {
  return (
    <StyledButton
      primary={isPrimary}
      width={width}
      type={type}
      onClick={buttonHandler}
    >
      {label}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  background: ${props => (props.primary ? "palevioletred" : "white")};
  color: ${props => (props.primary ? "white" : "palevioletred")};
  width: ${props => (props.width === "2x" ? "109px" : "50px")};
  font-size: 1em;
  margin: 0.3em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    background-color: sandybrown;
    color: #fff;
  }
`;

const TextArea = styled.textarea`
  width: 227px;
  height: 50px;
  margin: 5px;
  text-align: right;
  padding: 5px;
  border: 2px solid palevioletred;
  font-size: 24px;
  box-sizing: border-box;
`;

const Container = styled.div`
  border: 1px solid darkgoldenrod;
  margin: 0px auto;
  width: 250px;
  background: lightslategray;
`;
