import React from 'react';
import Razorpay from "./Razorpay";

function Paybtn({phoneNumber,totalAmount}) {
 console.log(phoneNumber,totalAmount)
  return (
    <div>
      <Razorpay phoneNumber={phoneNumber} totalAmount={totalAmount} />
    </div>
  )
}

export default Paybtn
