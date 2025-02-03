import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import ReserveCard from "./ReserveCard";
import myFirstContext from "../context/SearchContext";
import WifiIcon from "@mui/icons-material/Wifi";
import PetsIcon from "@mui/icons-material/Pets";
import YardIcon from "@mui/icons-material/Yard";
import BathtubIcon from "@mui/icons-material/Bathtub";
import BreakfastDiningIcon from "@mui/icons-material/BreakfastDining";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import StarIcon from '@mui/icons-material/Star';
import "./PropertyDetails.css";

function PropertyDetails() {
  const { searchData } = useContext(myFirstContext);
  const location = useLocation();
  const { state } = location || {};
  const { hotel, pricePerNight } = state || {};

  if (!hotel) {
    return <p className="text-center">No hotel data available.</p>;
  }

  return (
    <>
      <Navbar
        initialDestination={searchData.destination}
        initialCheckin={searchData.checkin}
        initialCheckout={searchData.checkout}
        initialGuests={searchData.guestSummary}
      />
      <div className="container property">
        <h4>{hotel.description || "Beautiful Hotel Stay"}</h4>

        {/* Image Grid */}
        <div className="image-grid">
          {hotel.extraImgs?.length >= 4 ? (
            <div className="grid-container">
              <div className="image-item large-image">
                <img src={hotel.imageUrl} alt="Hotel Main Image" />
              </div>
              <div className="small-images">
                {hotel.extraImgs.slice(0, 4).map((img, index) => (
                  <div className="image-item small-image" key={index}>
                    <img src={img} alt={`Hotel Extra Image ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="image-item large-image">
              <img src={hotel.imageUrl} alt="Main Hotel Image" className="img-fluid" />
            </div>
          )}
        </div>

        <div className="container ms-5">
          <h4>{hotel.name}</h4>
          <div className="hotel-details">
            <p><strong>Guests:</strong> {hotel.maxPersons || "Not Available"}</p>
            <p><strong>Bedrooms:</strong> {hotel.bedrooms || "Not Available"}</p>
            <p><strong>Beds:</strong> {hotel.beds || "Not Available"}</p>
            <p><strong>Bathrooms:</strong> {hotel.bathrooms || "Not Available"}</p>
          </div>
          <div>
            <p><StarIcon /> {hotel.rating || "No reviews yet"}</p>
          </div>
        </div>

        <hr />

        {/* Amenities */}
        <div className="hotel-layout">
          <div className="left-content">
            <h5><strong>What this place offers</strong></h5>
            <div className="amenities mb-4">
              <div className="amenities-left">
                <p><WifiIcon /> Wifi</p>
                <p><PetsIcon /> Pets allowed</p>
                <p><YardIcon /> Garden View</p>
              </div>
              <div className="amenities-right">
                <p><BathtubIcon /> Bathing Products</p>
                <p><LibraryBooksIcon /> Books and Reading material</p>
                <p><BreakfastDiningIcon /> Breakfast</p>
              </div>
            </div>


            <hr className="my-4" />


            <div className="rules-and-policies d-flex flex-row mt-5">
              <div className="house-rules mb-4">
                <h6 className="mb-3">House Rules</h6>
                <p>Check-in after 2:00 PM</p>
                <p>Checkout before 11:00 AM</p>
                <p>{hotel.maxPersons} Guests maximum</p>
              </div>
              <div className="cancellation-policy ms-5">
                <h6 className="mb-3">Cancellation Policy</h6>
                <p>This reservation is non-refundable</p>
                <p>Review this Host’s full policy for details.</p>
              </div>
            </div>
          </div>



          <div className="right-content">
            <ReserveCard
              pricePerNight={pricePerNight}
              hotel={hotel}
              checkin={searchData.checkin}
              checkout={searchData.checkout}
              guestSummary={searchData.guestSummary}
            />
          </div>
        </div>
      </div >
    </>
  );
}

export default PropertyDetails;
