import React from 'react';

export default function Input({ Type = 'text', Name, Id, Placeholder, Required, onChange, onBlur, value, error }) {
  return (
    <input
      type={Type}
      name={Name}
      id={Id}
      placeholder={Placeholder}
      required={Required}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      className={`form-control ${error && 'field-error'}`}
    />
  );
}