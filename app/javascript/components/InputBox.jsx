import React from "react";

function InputBox({ label, setFunction}) {

  function handleChange(e) {
    setFunction(e.target.value);
  }

  return (
    <>
      <label>{label}</label>
      <input onChange={handleChange} />
    </>
  )
}

export default InputBox;