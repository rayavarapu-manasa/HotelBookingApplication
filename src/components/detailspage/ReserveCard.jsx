import React, { useState } from 'react';
import "./Reservecard.css";
import { useNavigate, useLocation } from 'react-router-dom';
import myFirstContext from '../context/SearchContext';
import { useContext } from 'react';

function ReserveCard({ pricePerNight, hotel }) {
  const { searchData, setSearchData } = useContext(myFirstContext);
  const locationData = useLocation();
  const navigateReserve = useNavigate();
  const { state } = locationData || {};
  const { checkin, checkout, guestSummary } = state || {};
  // const [startDate, setStartDate] = useState(searchData.checkin || '1/31/2025');
  // const [endDate, setEndDate] = useState(searchData.checkout || '2/5/2025');
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  console.log(searchData.checkin, checkin, today.toISOString().split("T")[0]);


  const defaultCheckin = searchData.checkin || checkin || today.toISOString().split("T")[0]; // Format: YYYY-MM-DD
  const defaultCheckout = searchData.checkout || checkout || new Date(tomorrow).toISOString().split("T")[0];

  const [startDate, setStartDate] = useState(defaultCheckin);
  const [endDate, setEndDate] = useState(defaultCheckout);
  const [guests, setGuests] = useState(searchData.guestSummary || 1);

  // Function to calculate total price
  const calculateTotal = () => {
    const nights = Math.ceil((new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24));
    const basePrice = nights * pricePerNight;
    const serviceFee = basePrice * 0.2;
    return basePrice + serviceFee;
  };
  const totalCost = calculateTotal();

  const calculateServiceFee = () => {
    const nights = Math.ceil((new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24));
    const basePrice = nights * pricePerNight;
    return basePrice * 0.2; // 20% service fee
  };
  const serviceFee = calculateServiceFee();

  // Navigate to the booking page
  // const ChangeReserve = () => {
  //   navigateReserve("/book", {
  //     state: { hotel,pricePerNight,checkin,checkout,guestSummary }
  //   });
  // };
  const ChangeReserve = () => {
    const nights = Math.ceil((new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24));
    const basePrice = nights * pricePerNight;
    const serviceFee = basePrice * 0.2;
    const totalCost = basePrice + serviceFee;

    setSearchData((prevData) => ({
      ...prevData,
      checkin: startDate,
      checkout: endDate,
      guestSummary: guests,
      pricePerNight,
      serviceFee,
      totalCost,
    }));


    navigateReserve("/book", {
      state: { hotel, pricePerNight, checkin: startDate, checkout: endDate, guestSummary: guests },
    });
  };


  return (
    <div className="airbnb-card">
      <div className="price-per-night">
        ₹{pricePerNight} per night
      </div>

      <div className="selected-dates">
        <div>
          <label><strong>Check-in:</strong></label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            readOnly
          />
        </div>
        <div>
          <label><strong>Check-out:</strong></label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            readOnly
          />
        </div>
      </div>

      <div className="guests">
        <label htmlFor="guestsInput" className="guests-label">
          GUESTS
        </label>
        <input
          id="guestsInput"
          className="guests-input"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          readOnly
        />
      </div>



      <button className="reserve-button" onClick={ChangeReserve}>Reserve</button>

      <div className="price-details">
        <p>You won't be charged yet</p>

        <div className="price-breakdown">
          <span>₹{pricePerNight} x {Math.ceil((new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24))} nights</span>
          <span>₹{pricePerNight * Math.ceil((new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24))}</span>
        </div>

        <div className="price-breakdown">
          <span>Airbnb service fee</span>
          <span>₹{calculateServiceFee()}</span>
        </div>

        <div className="total">
          <span>Total before taxes</span>
          <span>₹{calculateTotal()}</span>
        </div>
      </div>
    </div>
  );
}

export default ReserveCard;