import { useEffect, useState } from "react";
import Input from "./components/Input";
import Button from "./components/Button";

function App() {
  const [inpValue, setInpValue] = useState("");
  const [submitValue, setSubmitValue] = useState("");
  const handleChage = (e) => {
    setInpValue(e.target.value);
  };
  const handleSubmit = () => {
    setSubmitValue(inpValue);
    setInpValue(""); // Clear input after submission
  };

  return (
    <div>
      <h1>Form Data is here</h1>
      <Input
        type={"text"}
        placeholder={"please enter somthing"}
        value={inpValue}
        onChange={handleChage}
      />
      <Button text="Submit" onClick={handleSubmit} color="blue" />
      {submitValue && (
        <p>
          You submitted: <strong>{submitValue}</strong>
        </p>
      )}
    </div>
  );
}

export default App;
