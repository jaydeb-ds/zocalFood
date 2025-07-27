import React from 'react';
import './PlaceOrderSuccess.css';
import {useNavigate } from 'react-router-dom';

const PlaceOrderSuccess = () => {
    const naviagate = useNavigate('')
  return (
    <div className="success-container">
      <div className="checkmark-wrapper">
        <svg className="checkmark" viewBox="0 0 52 52">
          <circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none" />
          <path
            className="checkmark-check"
            fill="none"
            d="M14 27l7 7 16-16"
          />
        </svg>
      </div>

      <h2 className="success-title">Order Placed Successfully!</h2>
      <p className="success-message">
        Thank you for your order. Your purchase has been confirmed and is being processed.
      </p>

      <button className="success-button" onClick={()=>naviagate("/myorders") }>
        View Your Orders
      </button>
    </div>
  );
};

export default PlaceOrderSuccess;
