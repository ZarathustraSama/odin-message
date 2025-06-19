import React from "react";

function Button({ value, onClick }) {
  return (
    <>
      <button type="button" value={value} onClick={onClick} />
    </>
  )
}

export default Button;