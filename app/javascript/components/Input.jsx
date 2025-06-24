import React from "react";

function Input({ value, setValue, handleEnterKey }) {
  return (
    <input 
      id="message" 
      name="message" 
      value={value} 
      onChange={(e) => {setValue(e.currentTarget.value)}}
      onKeyUp={(e) => {handleEnterKey(e)}}
     />
  )
}

export default Input;