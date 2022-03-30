import './Calculator.scss';

function ColOps(props) {
  return (
    <div className="ColOps">
        <div className="OpBtn col btn" id="add" onClick={() => props.handleClick('+')}>+</div>
        <div className="OpBtn col btn" id="equals" onClick={() => props.handleEquals('=')}>=</div> 
    </div>
  );
}

export default ColOps;