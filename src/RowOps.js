import './Calculator.scss';

function RowOps(props) {
  return (
    <div className="RowOps">
        <div className="OpBtn row btn" id="clear" onClick={props.handleClear}>AC</div>
        <div className="OpBtn row btn" id="divide" onClick={() => props.handleClick('/')}>/</div>
        <div className="OpBtn row btn" id="multiply" onClick={() => props.handleClick('*')}>*</div>
        <div className="OpBtn row btn" id="subtract" onClick={() => props.handleClick('-')}>-</div>
    </div>
  );
}

export default RowOps;