import React from "react";

function Button({ value, onClick }) {
  return (
    <>
      <button type="button" value={value} onClick={(e) => {onClick(e)}}>{value}</button>
    </>
  )
}

export default Button;