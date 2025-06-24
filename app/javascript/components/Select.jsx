import React from "react";

function Select({ options, setUserId }) {
  return (
    <select id="selectUser" name="selectUser" onChange={e => setUserId(e.currentTarget.value)}>
      {options.map(o => <option key={o.id} value={o.id}>{o.username}</option>)}
    </select>
  )
}

export default Select;