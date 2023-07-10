import React from 'react';

export default function Checkbox({ Style, Type, Name, Id, Label, Icon, Required, Checked, onChange, onBlur, value, error }) {
  return Style === 'block' ? (
    <div className={`form-check form-check-block ${error && 'form-check-block-error'}`}>
      <input
        type={Type}
        name={Name}
        id={Id}
        required={Required}
        checked={Checked}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        className={`form-check-input ${error && 'field-error'}`}
      />
      <label className="form-check-label" htmlFor={Id ? Id : Name}>
        <div className="form-check-label-icon">
          <Icon color="#326BFF"/>
        </div>
        <div className="form-check-label-title">
          {Label}
        </div>
      </label>
    </div>
  ) : (
    <div className="form-check">
      <input
        type={Type}
        name={Name}
        id={Id}
        required={Required}
        checked={Checked}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        className={`form-check-input ${error && 'field-error'}`}
      />
      <label className="form-check-label" htmlFor={Id ? Id : Name}>
        <div className="form-check-label-title">
          {Label}
        </div>
      </label>
    </div>
  );
}