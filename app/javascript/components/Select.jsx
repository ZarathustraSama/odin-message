import React from "react";

function Select({ value, options, setOption }) {
  return (
    <select value={value} onChange={e => setOption(e)}>
      {options.map(o => <option key={o}>{o}</option>)}
    </select>
  )
}

export default Select;