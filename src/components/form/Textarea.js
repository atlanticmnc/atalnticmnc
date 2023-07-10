import React from 'react';

export default function Textarea({ Name, Placeholder, Required, onChange, onBlur, value, error }) {
  return (
    <textarea
      name={Name}
      placeholder={Placeholder}
      required={Required}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      className={`form-control ${error && 'field-error'}`}
    />
  );
}