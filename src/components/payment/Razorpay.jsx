import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Paybtn.css';
import myFirstContext from '../context/SearchContext';

const RazorpayReact = ({ totalAmount, phoneNumber }) => {
    const { searchData } = useContext(myFirstContext);
    const [paymentId, setPaymentId] = useState('');
    const [paymentStatus, setPaymentStatus] = useState('initial');
    const navigate = useNavigate();

    const loadScript = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = src;
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    };

    console.log("Search Data:", searchData);
    


    const formatDate = (dateString) => {
        if (!dateString) return null;
        const date = new Date(dateString);
        if (isNaN(date.getTime())) {
            console.error("Invalid date:", dateString);
            return null;
        }
        return `${date.getDate().toString().padStart(2, '0')}/${
            (date.getMonth() + 1).toString().padStart(2, '0')}/${
            date.getFullYear()}`;
    };
    
    const storePaymentDetails = async () => {
        const checkIn = formatDate(searchData.checkin);
        const checkOut = formatDate(searchData.checkout);
    
        if (!checkIn || !checkOut) {
            alert("Invalid check-in or check-out date.");
            return;
        }
    
        const payload = {
            hotelName: searchData.hotel?.name || "Unknown Hotel",
            address: searchData.hotel?.address || "No Address",
            checkIn,  
            checkOut, 
            price: searchData.pricePerNight || 0,
            payment: totalAmount || searchData.totalAmount || 0,
            hotelImg: searchData.hotel?.imageUrl || "",
        };
    
        console.log("Payload being sent:", JSON.stringify(payload, null, 2)); 
    
        try {
            const response = await axios.post(
                `http://183.82.106.55:9103/payment/add?mobileNo=${phoneNumber}`,
                payload,
                { headers: { "Content-Type": "application/json" } }
            );
    
            console.log('Payment Response:', response.data);
            alert('Payment Details Saved Successfully!');
        } catch (error) {
            console.error('Error saving payment:', error.response?.data || error.message);
            alert('Failed to save payment details: ' + (error.response?.data?.message || error.message));
        }
    };
    

    const displayRazorpay = async () => {
        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

        if (!res) {
            alert('Razorpay SDK failed to load. Are you online?');
            setPaymentStatus('failure');
            return;
        }

        const options = {
            key: 'rzp_test_Su4WV4zdBIGTmZ',
            amount: totalAmount * 100, // Ensure amount is valid
            currency: 'INR',
            name: 'RamanaSoft',
            description: 'Hotel Booking Payment',
            handler: function (response) {
                alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);

                setPaymentId(response.razorpay_payment_id);
                setPaymentStatus('success');

                // Store payment details in database
                storePaymentDetails();

                setTimeout(() => {
                    navigate('/ordersummary');
                }, 3000);
            },
            prefill: {
                name: 'Your Name',
                email: 'yourname@example.com',
                contact: phoneNumber,
            },
            notes: {
                address: 'RamanaSoft Corporate Office',
            },
            theme: {
                color: '#e8662a',
            },
            modal: {
                ondismiss: function () {
                    alert('Payment was cancelled.');
                    setPaymentStatus('failure');
                },
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    };

    return (
        <div className="razorpay-container">
            {paymentStatus === 'initial' && (
                <button onClick={displayRazorpay} className="razorpay-button">
                    Make Payment
                </button>
            )}

            {paymentStatus === 'success' && (
                <div className="razorpay-success">
                    <h3>Payment Successful!</h3>
                    <p>Payment ID: {paymentId}</p>
                </div>
            )}

            {paymentStatus === 'failure' && (
                <div className="razorpay-failure">
                    <h3>Payment Failed</h3>
                    <button onClick={displayRazorpay} className="retry-button">
                        Try Again
                    </button>
                </div>
            )}
        </div>
    );
};

export default RazorpayReact;
