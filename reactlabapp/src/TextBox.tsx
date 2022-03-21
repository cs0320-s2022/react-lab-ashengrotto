import React from 'react';
import './App.css';

function TextBox(props : {
    label : string,
    change : React.Dispatch<React.SetStateAction<string>>}) {
  return (
      <div className={"TextBox"}>
        <header>
          {props.label}:
          <input type={"text"} onChange={event => props.change(event.target.value)}/>
        </header>
      </div>
  );
}

export default TextBox;
