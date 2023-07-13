import React from 'react';

function Introduction({ handleNextStep }) {
  return (
    <div className="introduction-block">
      <h1 className="text-center ms-auto me-auto">
        <span className="primary-color">Бесплатная Консультация</span><br />
        Подберем Второе Гражданство
      </h1>
      <p className="text-center ms-auto me-auto size-24">
        Claim your 100% FREE no-obligation 30-minute strategy session call ($1,000 value). This is strictly
        for people who are hungry for growth. If that’s you, then let&apos;s scale your business to the moon! 🚀
      </p>
      <button className="btn btn-primary btn-arrow ms-auto me-auto" onClick={handleNextStep}>
        Начать
      </button>
    </div>
  );
}


export default Introduction;