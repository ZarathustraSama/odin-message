import React from "react";

function Input({ idName, value, setValue, handleEnterKey }) {
  return (
    <input 
      id={idName}
      name={idName} 
      value={value} 
      onChange={(e) => {setValue(e.currentTarget.value)}}
      onKeyUp={(e) => {handleEnterKey(e)}}
     />
  )
}

export default Input;