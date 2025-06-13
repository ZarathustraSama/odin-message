import React from "react";

function Button({ onClick, label }) {
  return (
    <>
      <button type="button" onClick={onClick}>{label}</button>
    </>
  )
}

export default Button;