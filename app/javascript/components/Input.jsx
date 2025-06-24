import React from "react";

function Input({ value, setValue }) {
  return (
    <input id="message" name="message" value={value} onChange={(e) => {setValue(e.currentTarget.value)}} />
  )
}

export default Input;