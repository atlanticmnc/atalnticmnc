import React from 'react';

export default function Select({ Name, Id, Required, onChange, onBlur, value, error, children }) {
  return (
    <select
      name={Name}
      id={Id}
      required={Required}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      className={`form-select ${error && 'field-error'}`}
    >
      {children}
    </select>
  );
}