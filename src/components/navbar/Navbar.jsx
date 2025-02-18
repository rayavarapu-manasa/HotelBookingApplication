import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import myFirstContext from "../context/SearchContext";
import Guest from "../guest/Guest";
import { OverlayTrigger } from "react-bootstrap";
import CalenderInput from "../calender/CalenderInput";
import "./Navbar.css";
import dayjs from "dayjs";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginSign from "../dropdown/LoginSign";
import { Modal } from 'react-bootstrap';
import HostingLink from "./HostingLink";
import { Link } from "react-router-dom";
import Popover from "react-bootstrap/Popover";
import { motion } from "framer-motion";

const Navbar = ({
  initialDestination = "",
  initialCheckin = null,
  initialCheckout = null,
  initialGuests = "Add guests",
}) => {
  const { searchData, setSearchData } = useContext(myFirstContext);
  const navigate = useNavigate();
  const [showSupportPopup, setShowSupportPopup] = useState(false);
  const [showGuestBox, setShowGuestBox] = useState(false);

  // Retrieve login state from localStorage
  const [isSignedIn, setIsSignedIn] = useState(
    localStorage.getItem("isSignedIn") === "true"
  );

  const [showModal, setShowModal] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [guestData, setGuestData] = useState({
    adults: 0,
    children: 0,
    infants: 0,
    pets: 0,
  });

  const [dates, setDates] = useState([
    dayjs(initialCheckin).isValid() ? dayjs(initialCheckin) : null,
    dayjs(initialCheckout).isValid() ? dayjs(initialCheckout) : null,
  ]);

  useEffect(() => {
    if (initialGuests) {
      const [adults, children, infants, pets] = parseGuestSummary(initialGuests);
      setGuestData({ adults, children, infants, pets });
    }
  }, [initialGuests]);

  // Handle login success
  const handleLoginSuccess = () => {
    setIsSignedIn(true);
    localStorage.setItem("isSignedIn", "true"); // Store login state persistently
    setShowModal(false);
  };

  // Handle logout
  const handleLogout = () => {
    setIsSignedIn(false);
    localStorage.removeItem("isSignedIn"); // Remove login state
    console.log("Logged out");
  };

  const toggleModal = () => setShowModal(!showModal);
  const handleClosePopup = () => setShowPopup(false);

  const parseGuestSummary = (summary) => {
    const matches = summary.match(/\d+/g);
    return matches ? matches.map((val) => parseInt(val, 10)) : [0, 0, 0, 0];
  };

  const handleGuestUpdate = (data) => {
    setGuestData({
      adults: parseInt(data.adults, 10) || 0,
      children: parseInt(data.children, 10) || 0,
      infants: parseInt(data.infants, 10) || 0,
      pets: parseInt(data.pets, 10) || 0,
    });
  };

  const getGuestSummary = () => {
    const { adults, children, infants, pets } = guestData;
    const summary = [];

    if (adults) summary.push(`${adults} Adult${adults > 1 ? "s" : ""}`);
    if (children) summary.push(`${children} Child${children > 1 ? "ren" : ""}`);
    if (infants) summary.push(`${infants} Infant${infants > 1 ? "s" : ""}`);
    if (pets) summary.push(`${pets} Pet${pets > 1 ? "s" : ""}`);

    return summary.length > 0 ? summary.join(", ") : "Add guests";
  };

  const handleSearch = () => {
    const destination = document.querySelector("input[type='text']").value;
    let [checkin, checkout] = dates;

    if (checkin && !checkout) {
      checkout = checkin.add(1, "day");
      setDates([checkin, checkout]);
    }

    const guestSummary = getGuestSummary();
    setSearchData({
      destination,
      checkin: checkin?.format("YYYY-MM-DD"),
      checkout: checkout?.format("YYYY-MM-DD"),
      guestSummary,
    });

    navigate("/card", {
      state: {
        destination,
        checkin: checkin?.format("YYYY-MM-DD"),
        checkout: checkout?.format("YYYY-MM-DD"),
        guestSummary,
      },
    });
  };

  return (
    <header className="container-fluid bg-light py-3 sticky-top">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between mt-2">
          <Link to="/" >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
              alt="Airbnb Logo"
              width="120"
            />
          </Link>


          <div className="d-flex gap-4">
            <a href="/" className="text-dark text-decoration-none fw-bold">
              Stays
            </a>
            <a href="/" className="text-muted text-decoration-none fw-bold">
              Experiences
            </a>
          </div>
          <div className="nav-last d-flex justify-content-between align-items-center px-4 py-2" style={{ backgroundColor: '#f8f9fa' }}>
            <a href="/yourHome" className="text-dark text-decoration-none fw-bold">
              <HostingLink />
            </a>
            <div className="dropdown">
              <button className="btn btn-link text-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                <AccountCircleIcon style={{ fontSize: '30px' }} />
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {isSignedIn ? (
                  <>
                    <li><a className="dropdown-item text-decoration-none" href="/trips">Trips</a></li>
                    <li><a className="dropdown-item text-decoration-none" onClick={(e) => {
                      e.preventDefault(); // Prevent navigation
                      setShowSupportPopup(true); // Show Customer Support pop-up
                    }}>Customer Support</a></li>
                    <li><a className="dropdown-item text-decoration-none" href="/account">Account</a></li>
                    <li><a className="dropdown-item text-decoration-none" onClick={handleLogout}>Logout</a></li>
                  </>
                ) : (
                  <>
                    <li><a className="dropdown-item text-decoration-none" onClick={toggleModal}>Login</a></li>
                    <li><a className="dropdown-item text-decoration-none" onClick={toggleModal}>SignUp</a></li>
                    <li>
                      <a
                        className="dropdown-item text-decoration-none"
                        href="#"
                        onClick={(e) => {
                          e.preventDefault(); // Prevent navigation
                          setShowSupportPopup(true); // Show Customer Support pop-up
                        }}
                      >
                        Customer Support
                      </a>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
        {/*Modal for dropdown */}
        <Modal show={showModal} onHide={toggleModal} keyboard={false} backdrop="static" centered>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <LoginSign onLoginSuccess={handleLoginSuccess} />
          </Modal.Body>
        </Modal>
        {/*Modal for Customer Support */}
        {showSupportPopup && (
          <div className="modal d-block bg-dark bg-opacity-50" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content" style={{ minHeight: '400px' }}>
                <div className="modal-header d-flex flex-column justify-content-between p-4">
                  <div>
                    <h5 className="modal-title mb-2">
                      {isSignedIn ? (
                        <>
                          Hi <span className="fw-bold">Manasa</span>,
                          <br />
                          <hr className="my-2" />
                          Please contact 1800-xxx-xxxx for any queries
                        </>
                      ) : (
                        <>
                          Hi, Need to get in touch?
                          <br />
                          <hr className="my-2" />
                          Please contact 1800-xxx-xxxx for any queries
                        </>
                      )}
                    </h5>
                  </div>
                  <button
                    className="btn-close position-absolute top-0 end-0 mt-3 me-3"
                    onClick={() => setShowSupportPopup(false)}
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body d-flex justify-content-center">
                  <img
                    src="https://img.targetbay.com/images/live/2023/03/22081159/customer-support.jpg"
                    width="250px"
                    height="250px"
                    alt="Image Failed"
                    className="rounded-circle"
                  />
                </div>
              </div>
            </div>
          </div>

        )}

        {/* Search bar */}
        <div className="mt-4">
          <div className="d-flex align-items-center justify-content-center">
            <div
              className="d-flex align-items-center border rounded-pill shadow-sm px-4 py-3 bg-white w-100"
              style={{ maxWidth: "1070px", height: "80px" }}
            >
              <div className="text-center me-4 border-end pe-3 d-flex flex-column align-items-start">
                <small className="fw-bold">Where to?</small>
                <input
                  type="text"
                  className="bg-transparent text-start border-0 p-0"
                  placeholder="Search Destinations"
                  defaultValue={initialDestination}
                  style={{ outline: "none" }}
                />
              </div>
              <div className="text-center me-4 border-end pe-3 d-flex flex-column align-items-start">
                <CalenderInput value={dates} onChange={setDates} />
              </div>

              <div
                className="text-center me-4 d-flex flex-column align-items-start position-relative"
                style={{
                  width: "150px",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                }}
              >
                <OverlayTrigger
                  trigger="click"
                  placement="bottom"
                  overlay={
                    <div className="popover-content p-3 rounded-3">
                      <Guest onGuestUpdate={handleGuestUpdate} />
                    </div>
                  }
                >
                  <button className="bg-transparent d-block p-0 text-start no-focus-border">
                    <span className="fw-bold">Who?</span> <br />
                    <small className="form-control bg-transparent text-start border-0 p-0">
                      {getGuestSummary()}
                    </small>
                  </button>
                </OverlayTrigger>
              </div>



              <div>
                <button
                  className="btn text-white fw-bold py-2"
                  style={{
                    backgroundColor: "#ff385c",
                    borderRadius: "50px",
                    width: "100px",
                  }}
                  onClick={handleSearch}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
