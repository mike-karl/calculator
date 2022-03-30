import RowOps from './RowOps';
import ColOps from './ColOps';
import NumPad from './NumPad';
import Display from './Display';
import './Calculator.scss';
import { useState } from 'react';


function Calculator() {
  const [inputDisplay, setInputDisplay] = useState('');
  const [outputDisplay, setOutputDisplay] = useState('0');
  
  const ops = ['/', '*', '+', '-'];
  function handleClick(currValue) {
    setInputDisplay((prevValue) => {
      if (
        ops.includes(currValue) &&
       ops.includes(inputDisplay.slice(-1))
      ) {
        let newValue;
        if (currValue === "-") {
          newValue = prevValue.slice(0, prevValue.length) + currValue;
        } else {
          let count = 0;
          for (let i = 0; i < prevValue.length; i++) {
            if (isNaN(prevValue[i])) {
              count++;
              console.log(count)
            } else {
              count = 0;
              console.log(count)
            }
          }
          newValue = prevValue.slice(0, prevValue.length - count) + currValue;
        }

        setInputDisplay(newValue
          .replace(/(--)/g, "+")
          .replace(/(\++)/g, "+")
          .replace(/(\+-)/g, '-')
          .replace(/(\/\+)/g, '+')
          .replace(/(\*\+)/g, '+')
          );
      } else {
        if (prevValue) {
          prevValue = prevValue + "";
          let valArr = prevValue.split(/[+/*-]/g);
          console.log("valArr " + JSON.stringify(valArr));
          let lastNumber = valArr[valArr.length - 1];
          if (!isNaN(lastNumber) && /[.]/.test(lastNumber) && currValue === ".") {
            console.log("currValue = empty ");
            currValue = "";
          }
        }
        setInputDisplay(
          (prevValue + currValue)
          .replace(/^0[0-9]/g, "0")
          .replace(/\.+/g, ".")
          .replace(/^[+/*]/, "")
          .replace(/(\++)/g, "+")
          .replace(/(\+-)/g, '-')

        );
        
      }
    });
    setOutputDisplay((prevValue) =>
      (prevValue + currValue)
      .replace(/^0/g, "")
      .replace(/\.+/g, ".")
      .replace(/^[+/*]/, "")
      .replace(/(--)/g, "+")
      .replace(/(\++)/g, "+")
      .replace(/(\+-)/g, '-')
      .replace(/(-\+)/g, '+')
      .replace(/(\*\+)/g, '+')
      .replace(/(\+\*)/g, '*')
      .replace(/(\/\+)/g, '+')
      .replace(/(\+\/)/g, '/')
      .replace(/\/\*/g, "*")
      .replace(/\*\//g, "/")
      .replace(/-\*/g, "*")
      .replace(/-\//g, "/")
      .replace(/(\*+)/g, '*')
      .replace(/(\/+)/g, '/')
    );
  }

  function handleClear() {
    setInputDisplay('');
    setOutputDisplay('0');
  }

  function handleEquals() {
    if (ops.includes(inputDisplay.charAt(inputDisplay.length-1)) || inputDisplay.slice(-1).includes(".") || inputDisplay === '') {
      return;
    } else {
      setInputDisplay((Math.round(eval(inputDisplay) * 10000)/10000).toString())
      setOutputDisplay((Math.round(eval(inputDisplay) * 10000)/10000).toString())
    }
  }

  return (
    <div className="Calculator">
      <Display
      inputDisplay={inputDisplay}
      outputDisplay={outputDisplay}
      handleClick={handleClick}
      />
      <RowOps 
      inputDisplay={inputDisplay}
      handleClick={handleClick}
      handleClear={handleClear}
      />
      <NumPad 
      inputDisplay={inputDisplay}
      handleClick={handleClick}
      /> 
      <ColOps 
      inputDisplay={inputDisplay}
      handleClick={handleClick}
      handleEquals={handleEquals}
      />
    </div>
  );
}

export default Calculator;
