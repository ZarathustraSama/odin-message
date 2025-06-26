import React from "react";

function Input({ idName, value, setValue, handleEnterKey, type="text" }) {
  return (
    <input 
      id={idName}
      name={idName}
      type={type}
      value={value} 
      onChange={(e) => {setValue(e.currentTarget.value)}}
      onKeyUp={(e) => {handleEnterKey(e)}}
      onKeyDown={(e) => {handleEnterKey(e)}}
     />
  )
}

export default Input;