import './Calculator.scss';

function Display(props) {
  return (
    <div className="Display">
      <div id="display">{props.outputDisplay}</div>
      <div id="input">{props.inputDisplay}<div id="caretBlock"></div></div>
        
    </div>
  );
}

export default Display;