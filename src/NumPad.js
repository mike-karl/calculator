import './Calculator.scss';

function NumPad(props) {
    return (
    <div className="NumPad">
      <div className="NumBtn btn" id="seven" onClick={() => props.handleClick('7')} >7</div>
      <div className="NumBtn btn" id="eight" onClick={() => props.handleClick('8')} >8</div>
      <div className="NumBtn btn" id="nine" onClick={() => props.handleClick('9')} >9</div>
      <div className="NumBtn btn" id="four" onClick={() => props.handleClick('4')} >4</div>
      <div className="NumBtn btn" id="five" onClick={() => props.handleClick('5')} >5</div>
      <div className="NumBtn btn" id="six" onClick={() => props.handleClick('6')} >6</div>
      <div className="NumBtn btn" id="one" onClick={() => props.handleClick('1')} >1</div>
      <div className="NumBtn btn" id="two" onClick={() => props.handleClick('2')} >2</div>
      <div className="NumBtn btn" id="three" onClick={() => props.handleClick('3')} >3</div>
      <div className="NumBtn btn" id="zero" onClick={() => props.handleClick('0')} >0</div>
      <div className="NumBtn btn" id="decimal" onClick={() => props.handleClick('.')} >.</div>
    </div>
  );
}

export default NumPad;