import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import { Modal, Button } from "react-bootstrap";
import LoginComp from "./LoginComp"; // Import Login Component

const HostingLink = () => {
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate(); // React Router navigation

    // Check sign-in status on mount
    useEffect(() => {
        const user = sessionStorage.getItem("user");
        setIsSignedIn(!!user);
    }, []);

    // Handle successful login
    const handleLoginSuccess = (userData) => {
        sessionStorage.setItem("user", JSON.stringify(userData)); // Store user data
        setIsSignedIn(true);
        setShowPopup(false);
    };

    // Handle link click
    const handleClick = (event) => {
        if (!isSignedIn) {
            event.preventDefault(); // Prevent navigation
            setShowPopup(true); // Show login modal
        } else {
            navigate("/yourHome"); // Navigate to /yourHome when signed in
        }
    };

    return (
        <>
            {/* Hosting Link */}
            <span 
                className="text-dark text-decoration-none fw-bold"
                style={{ cursor: "pointer" }} 
                onClick={handleClick}
            >
                {isSignedIn ? "Switch to Hosting" : "Airbnb your home"}
            </span>

            {/* Sign-In Popup with LoginComp */}
            <Modal show={showPopup} onHide={() => setShowPopup(false)} centered>
                <Modal.Header closeButton>
                    
                </Modal.Header>
                <Modal.Body>
                    <LoginComp onLoginSuccess={handleLoginSuccess} />
                </Modal.Body>
                <Modal.Footer>
                    
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default HostingLink;
