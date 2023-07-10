import React, { useContext, useState } from 'react';
import { FormContext } from "../../pages/landing-pages/consultation";

export default function Range({ Min, Max, Step, Symbol, Name, value, error, setFieldValue }) {
  
  const rangeProps = {
    min: Min ? Min : 0,
    max: Max ? Max : 10000,
    step: Step ? Step : 10,
    symbol: Symbol ? Symbol : '',
  }
  
  return (
    <div className={`form-range-block ${error && 'field-error'}`}>
      <div className="form-range-values">
        <div className="form-range-value">
          {rangeProps.symbol}{rangeProps.min}
        </div>
        <div className="form-range-value">
          {rangeProps.symbol}{rangeProps.max}
        </div>
        <div className="form-range-value current"
             style={{ left: `calc((${value}/${rangeProps.max}) * 100% - 40px)` }}>
          {rangeProps.symbol}{value}
        </div>
      </div>
      <input
        type="range"
        min={rangeProps.min}
        max={rangeProps.max}
        step={rangeProps.step}
        name={Name}
        onChange={(e) => {
          setFieldValue(Name, e.target.value);
        }}
        value={value}
        className="form-range"
      />
    </div>
  );
}