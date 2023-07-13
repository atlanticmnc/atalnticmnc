import React from 'react';

function Progress({ step, handleStep }) {
  return (
    <div className="form-steps">
      <div className={`step ${step === 1 && 'current'} ${step > 1 && 'complete'}`}>
        <div
          className={`step-icon ${step < 1 && 'disabled'}`}
          onClick={() => handleStep(1)}
        >
          1
        </div>
      </div>
      <div className={`step ${step === 2 && 'current'} ${step > 2 && 'complete'}`}>
        <div
          className={`step-icon ${step < 2 && 'disabled'}`}
          onClick={() => handleStep(2)}
        >
          2
        </div>
      </div>
      <div className={`step ${step === 3 && 'current'} ${step > 3 && 'complete'}`}>
        <div
          className={`step-icon ${step < 3 && 'disabled'}`}
          onClick={() => handleStep(3)}
        >
          3
        </div>
      </div>
    </div>
  )
}

export default Progress;