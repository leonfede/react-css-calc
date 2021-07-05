import React, { useState } from "react";
import './App.css';
import { Display, KeyPad } from "./components/index";

export default function App() {
  const [previousInput, setPreviousInput] = useState('');
  const [input, setInput] = useState('');
  const [operator, setOperator] = useState('');
  
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const operators = ['+', '-', '*', '/'];
  const functions = ['C', '='];
  
  function compute() {
    return console.log(input, previousInput, operator);
  }
  
  function handleInput(value) {
    if(value === '.') {
      if(!input.includes(value)) setInput(input + value); 
    } else if(numbers.includes(value)) {
      return setInput(input + value);
    } else if(operators.includes(value)) {
      setOperator(value);
      if(!previousInput) setPreviousInput(input);
      else {
        setPreviousInput(compute(input, previousInput, operator));
        setOperator(operator);
      }
      setInput('');
    } else {
      switch(value) {
        case 'C':
          setInput('');
          setOperator('');
          return setPreviousInput('');
        case '=':
          return calculate();
        default:
          return null;
      }
    }
  }

  return (
    <React.Fragment>
      <Display input={input} operator={operator}/>
      <KeyPad onInput={handleInput}/>
    </React.Fragment>
  );
}
