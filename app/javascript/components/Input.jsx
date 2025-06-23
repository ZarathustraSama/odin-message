import React from "react";

function Input({ value, setValue }) {
  return (
    <input value={value} onChange={(e) => {setValue(e.currentTarget.value)}} />
  )
}

export default Input;