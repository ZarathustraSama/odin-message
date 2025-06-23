import React from "react";

function Select({ value, options, setOption }) {
  return (
    <select value={value} onChange={e => setOption(e.currentTarget.value)}>
      {options.map(o => <option key={o.id} value={o.id}>{o.username}</option>)}
    </select>
  )
}

export default Select;