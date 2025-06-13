import React from "react";

function InputBox({ label, onChange }) {
  return (
    <>
      <label>{label}</label>
      <input onChange={onChange} />
    </>
  )
}

export default InputBox;