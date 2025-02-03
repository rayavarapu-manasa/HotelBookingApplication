import React, { useContext, useEffect } from 'react';
import myFirstContext from '../../components/context/SearchContext';
import './orderSummary.css';


const OrderSummary = () => {
  const { searchData } = useContext(myFirstContext);
  const hotel = searchData?.hotel || {};

  const handlePrint = () => {
    window.print();
  };


  return (
    <div className="py-3" style={{ fontFamily: 'Inter, Arial, sans-serif' }}>
      {/* Navbar */}
      <nav className="mt-1 ms-3">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
          alt="Airbnb Logo"
          width="100"
        />
      </nav>
      <hr />
      {/* Card Wrapper */}
      <div className="card shadow-sm mx-auto" style={{ maxWidth: '900px' }}>
        <div className="card-body p-4">
          <h1 className="text-center fw-normal text-danger">Your Reservation</h1>

          {/* Property Images with Slider */}
          <div className="d-flex align-items-start my-4">
            {/* Image Section */}
            <div className="hotel-image-wrapper me-3" style={{ flex: '1' }}>
              {hotel.imageUrl ? (
                <img
                  src={hotel.imageUrl} // Display the main image URL
                  alt={hotel.name || "Hotel Image"}
                  className="rounded shadow-sm hotel-image"
                />
              ) : (
                <p className="text-muted text-center">No image available</p>
              )}
            </div>

            {/* Content Section */}
            <div className="hotel-content" style={{ flex: '2' }}>
              <h5 className="hotel-name">{hotel.name}</h5>
              <p className="hotel-description">{hotel.address}</p>
            </div>
          </div>



          {/* Check-In and Check-Out */}
          <div className="row my-4">
            <div className="col-6">
              <h4 className="mb-2">Check-in</h4>
              <p className="text-muted">{searchData.checkin || 'Not specified'}</p>
            </div>
            <div className="col-6">
              <h4 className="mb-2">Check-out</h4>
              <p className="text-muted">{searchData.checkout || 'Not specified'}</p>
            </div>
          </div>



          {/* Number of Guests */}
          <div className="my-4">
            <h4 className="mb-2">Number of Guests</h4>
            <p className="text-muted">{searchData.guestSummary || 'Not specified'}</p>
          </div>

          {/* Price Details */}
          <div className="my-4">
            <h4 className="mb-3">Price Details</h4>
            <table className="table table-bordered">
            <tbody>
            <tr>
              <td className="text-muted">Base Price</td>
              <td className="text-end">₹{searchData.pricePerNight || "0"}</td>
            </tr>
            <tr>
              <td className="text-muted">Service Fee</td>
              <td className="text-end">₹{searchData.serviceFee || "0"}</td>
            </tr>
            <tr>
              <td className="fw-bold text-dark">Total (<span>{Math.ceil((new Date(searchData.checkout) - new Date(searchData.checkin)) / (1000 * 60 * 60 * 24))} nights</span>)</td>
              <td className="text-end fw-bold text-dark">₹{searchData.totalCost || "0"}</td>
            </tr>
          </tbody>
            </table>
          </div>


          {/* House Rules */}
          <div className="my-4">
            <h4 className="mb-2">House Rules</h4>
            <ul className="text-muted ps-3">
              <li>No smoking</li>
              <li>No pets allowed</li>
              <li>Check-in after 2:00 PM</li>
              <li>Checkout before 11:00 AM</li>
              <li>2 Guests maximum</li>
            </ul>
          </div>

          {/* Cancellation Policy */}
          <div className="my-4">
            <h4 className="mb-2">Cancellation Policy</h4>
            <p className="text-muted">Free cancellation up to 48 hours before check-in.</p>
          </div>

          {/* Print Button */}
          <div className="text-center my-4">
            <button onClick={handlePrint} className="print-btn">
              Print Reservation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;

