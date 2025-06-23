import React from "react";

function Select({ value, options, setUserId }) {
  return (
    <select value={value} onChange={e => setUserId(e.currentTarget.value)}>
      {options.map(o => <option key={o.id} value={o.id}>{o.username}</option>)}
    </select>
  )
}

export default Select;