import React, { useState, useEffect, useContext } from "react";
import ProfileNavbar from "../profilenavbar/ProfileNavbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Trip.css";
import myFirstContext from "../../components/context/SearchContext";

function Trip() {
  const { searchData } = useContext(myFirstContext);
  const [upcomingTrips, setUpcomingTrips] = useState([]);
  const [pastTrips, setPastTrips] = useState([]);
  const navigateTrip = useNavigate();


  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await axios.get(
          `http://183.82.106.55:9103/payment/by-mobile/${searchData.phoneNumber}`
        );
        console.log("API Response Data:", response.data);
        if (response.data && response.data.length > 0) {
          const upcoming = response.data.filter((trip) => new Date(trip.checkIn) >= new Date());
          const past = response.data.filter((trip) => new Date(trip.checkOut) < new Date());
  
          setUpcomingTrips(upcoming);
          setPastTrips(past);
        } else {
          setUpcomingTrips(response.data.upcomingTrips || []);
          setPastTrips(response.data.pastTrips || []);
        }
      } catch (err) {
        console.error("Error fetching trip data:", err);
      }
    };
  
    fetchTrips();
  }, [searchData.phoneNumber]);
  
  const handleTrip = () => {
    navigateTrip("/");
  };

  return (
    <div>
      <ProfileNavbar />
      <h1 className="text-center mt-3 text-danger">Trips</h1>

      {/* ✅ Upcoming Trips Section */}
      <div className="card w-50 mx-auto p-4 mb-3 mt-5 shadow-lg">
        <h3 className="text-center mb-3">Your Upcoming Trips</h3>
        {upcomingTrips.length > 0 ? (
          upcomingTrips.map((trip, index) => (
            <div key={index} className="trip-details d-flex flex-column align-items-center p-3">
              <img src={trip.hotelImg} alt={trip.hotelName} className="trip-image" />
              <h5 className="trip-hotel-name">{trip.hotelName}</h5>
              <p className="trip-dates"><strong>Check-in:</strong> {trip.checkIn} | <strong>Check-out:</strong> {trip.checkOut}</p>
            </div>
          ))
        ) : (
          <div className="text-center">
            <p className="text-muted">No upcoming trips booked yet!</p>
            <button className="btn btn-danger" onClick={handleTrip}>Start Searching</button>
          </div>
        )}
      </div>

      {/* ✅ Past Trips Section */}
      <div className="card w-50 mx-auto mb-5 mt-5 p-4 shadow-lg">
        <h3 className="text-center mb-3">Where You've Been</h3>
        {pastTrips.length > 0 ? (
          pastTrips.map((trip, index) => (
            <div key={index} className="trip-details d-flex flex-column align-items-center p-3">
              <img src={trip.hotelImg} alt={trip.hotelName} className="trip-image" />
              <h5 className="trip-hotel-name">{trip.hotelName}</h5>
              <p className="trip-dates"><strong>Check-in:</strong> {trip.checkIn} | <strong>Check-out:</strong> {trip.checkOut}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-muted">No past trips found.</p>
        )}
      </div>
    </div>
  );
}

export default Trip;
