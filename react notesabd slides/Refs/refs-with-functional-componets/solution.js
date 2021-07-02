
import React from 'react'
function FuntionalRefsSolutions(props) {
    // textInput must be declared here so the ref can refer to it
    let textInput = React.createRef();
  
    function handleClick() {
      textInput.current.focus();
    }
  
    return (
      <div>
        <input
          type="text"
          ref={textInput} />
  
        <input
          type="button"
          value="Focus the text input123"
          onClick={handleClick}
        />
      </div>
    );
  }
  export default FuntionalRefsSolutions;
