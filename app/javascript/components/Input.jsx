import React from "react";

function Input({ idName, value, setValue, handleEnterKey, type="text" }) {
  if (type == "textarea") {
    return (
      <textarea 
        id={idName}
        name={idName}
        value={value}
        onChange={(e) => {setValue(e.currentTarget.value)}}
      />
    )
  }
  else {
    return (
      <input 
        id={idName}
        name={idName}
        value={value}
        onChange={(e) => {setValue(e.currentTarget.value)}}
        onKeyUp={(e) => {handleEnterKey(e)}}
        onKeyDown={(e) => {handleEnterKey(e)}}
      />
    )
  }
}

export default Input;