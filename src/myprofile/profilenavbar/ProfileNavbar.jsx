import React,{useState,useEffect} from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Modal } from "react-bootstrap";
import LoginSign from "../../components/dropdown/LoginSign";
import { useNavigate } from "react-router-dom";

const ProfileNavbar = () => {
  const navigateDropDown = useNavigate();
  const [isSignedIn, setIsSignedIn] = useState(
    localStorage.getItem("isSignedIn") === "true"
  );
  const [showModal, setShowModal] = useState(false);
  const [showSupportPopup, setShowSupportPopup] = useState(false);

  useEffect(() => {
    setIsSignedIn(localStorage.getItem("isSignedIn") === "true");
  }, []);

  const handleLoginSuccess = () => {
    setIsSignedIn(true);
    localStorage.setItem("isSignedIn", "true");
    setShowModal(false);
  };

  const handleLogout = () => {
    setIsSignedIn(false);
    localStorage.removeItem("isSignedIn");
    navigateDropDown("/");
  };

  const toggleModal = () => setShowModal(!showModal);
  return (
    <header className="container-fluid bg-light py-3 sticky-top">
      <div className="container">
        {/* Navbar contents */}
        <div className="d-flex align-items-center justify-content-between mt-1">
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
              alt="Airbnb Logo"
              width="120"
            />
          </div>
          <div className="dropdown">
            <button className="btn btn-link text-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
              <AccountCircleIcon style={{ fontSize: "30px" }} />
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
                  <li><a className="dropdown-item text-decoration-none" onClick={toggleModal}>Signup</a></li>
                  <li><a className="dropdown-item text-decoration-none" href="/customer-support">Customer Support</a></li>
                </>
              )}
            </ul>

            {/* Login Modal */}
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
          </div>
        </div>
      </div>
    </header>
  );
};

export default ProfileNavbar;
