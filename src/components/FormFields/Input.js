import React from 'react';

function Input({ label, ...props }) {
  return (
    <>
      <label htmlFor={props.id || ""} className="elementor-field-label">{label}</label>
      <input className="elementor-field elementor-size-sm  elementor-field-textual" {...props} />
    </>
  )
}

export default Input;