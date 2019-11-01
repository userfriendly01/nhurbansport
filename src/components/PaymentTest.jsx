import { 
  CardElement,
  injectStripe
} from 'react-stripe-elements'
import React from 'react'

const PaymentTest = () => {
  return (
    <div className="checkout">
      <p>Would you like to complete the purchase?</p>
      <CardElement />
      <button>Purchase</button>
    </div>
  );
};

export default (injectStripe(PaymentTest))