// import React from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom"; // ✅ Missing import

// function Review() {
//     const navigate = useNavigate();
//     const address = useSelector((state) => state.address);
//     const placeDetails = useSelector((state) => state.placeDetails);
//     const details = useSelector((state) => state.details);
//     const photoDetails = useSelector((state) => state.photoDetails);



//     return (
//         <div>
//             <div className='container d-flex justify-content-between mt-1'>
//                 <div>
//                     <img
//                         src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
//                         alt="Airbnb Logo"
//                         width="120"
//                         onClick={() => { navigate("/") }}
//                     />
//                 </div>

//                 <div>
//                     <button className='bg-danger py-2 text-white border fw-bold' 
//                         style={{ width: "80px", borderRadius: "5px" }} 
//                         onClick={() => { navigate("/") }}>
//                         Exit
//                     </button>
//                 </div>
//             </div>

//             <div className="container mt-4">
//             {placeDetails && Object.keys(placeDetails).length > 0 ? (
//                 <div className="card shadow-lg p-4 w-50 mx-auto">
//                     <h4 className="text-danger">Place Details</h4>
//                     <ul className="list-group list-group-flush">
//                         <li className="list-group-item"><strong>Which of these describes your place? :</strong> {placeDetails.placeType}</li>
//                         <li className="list-group-item"><strong>What type of place will the guests have? :</strong> {placeDetails.guestType}</li>
//                     </ul>
//                 </div>
//             ) : (
//                 <p className="text-center text-muted">No place details stored</p>
//             )}
//             {details && Object.keys(details).length > 0 ? (
//                 <div className="card shadow-lg p-4 w-50 mx-auto">
//                     <h4 className="text-primary">Basic Details</h4>
//                     <ul className="list-group list-group-flush">
//                         <li className="list-group-item"><strong>Guest :</strong> {details.guest}</li>
//                         <li className="list-group-item"><strong>Bedrooms:</strong> {details.bedrooms}</li>
//                         <li className="list-group-item"><strong>Beds:</strong> {details.beds}</li>
//                         <li className="list-group-item"><strong>Bathrooms:</strong> {details.bathrooms}</li>
//                         {/*<li className="list-group-item"><strong>Pets allowed? :</strong> {details.pets}</li>
//                         <li className="list-group-item"><strong>Smoking Allowed? :</strong> {details.smoke}</li>*/}
//                         <li className="list-group-item"><strong>What this place offers? :</strong> {details.selectedSafetyItems}</li>
//                         <li className="list-group-item"><strong>Safety items? :</strong> {details.selectedAmenities}</li>
//                     </ul>
//                 </div>
//             ) : (
//                 <p className="text-center text-muted">No place details stored</p>
//             )}

//             {address && Object.keys(address).length > 0 ? (
//                 <div className="card shadow-lg p-4 w-50 mx-auto">
//                     <h4 className="text-primary">Address Details</h4>
//                     <ul className="list-group list-group-flush">
//                         <li className="list-group-item"><strong>Flat/House No:</strong> {address.flatNumber}</li>
//                         <li className="list-group-item"><strong>Street:</strong> {address.street}</li>
//                         <li className="list-group-item"><strong>Area:</strong> {address.area}</li>
//                         <li className="list-group-item"><strong>City:</strong> {address.city}</li>
//                         <li className="list-group-item"><strong>State:</strong> {address.state}</li>
//                         <li className="list-group-item"><strong>Pincode:</strong> {address.pincode}</li>
//                     </ul>
//                 </div>
//             ) : (
//                 <p className="text-center text-muted">No address stored</p>
//             )}

//             {photoDetails && Object.keys(photoDetails).length > 0 ? (
//                 <div className="card shadow-lg p-4 w-50 mx-auto">
//                     <h4 className="text-primary">Photos Details</h4>
//                     <ul className="list-group list-group-flush">
//                         {/*<li className="list-group-item"><strong>Photos of the hotel :</strong> {photoDetails.photos}</li>*/}
//                         <li className="list-group-item"><strong>Description of the hotel :</strong> {photoDetails.title}</li>
//                         <li className="list-group-item"><strong>Price per Day :</strong> {photoDetails.price}</li>
//                     </ul>
//                 </div>
//             ) : (
//                 <p className="text-center text-muted">No place details stored</p>
//             )}


//         </div>

//         </div>
//     );
// }

// export default Review;



import React, { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

function Review() {
    const navigate = useNavigate();
    const address = useSelector((state) => state.address);
    const placeDetails = useSelector((state) => state.placeDetails);
    const details = useSelector((state) => state.details);
    const photoDetails = useSelector((state) => state.photoDetails);

    const [showModal, setShowModal] = useState(false);
    const [showSubmitModal, setShowSubmitModal] = useState(false);
    const username = "Manasa";


    const handleCancelClick = () => {
        setShowModal(true);
    };

    const handleConfirmCancel = () => {
        setShowModal(false);
        navigate("/"); // Redirect to Homepage
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };
    const handleSubmit = () => {
        setShowSubmitModal(true);
    };
    const closeSubmitModal = () => {
        setShowSubmitModal(false);
        navigate("/");
        // Here, you can trigger a state update to change "Airbnb your Home" to "Switch to Hosting"
    };

    const [imageUrls, setImageUrls] = useState([]);

    useEffect(() => {
        const storedImages = JSON.parse(sessionStorage.getItem("uploadedImages"));
        if (storedImages) {
            setImageUrls(storedImages);
        }
    
        const handleStorageChange = () => {
            const updatedImages = JSON.parse(sessionStorage.getItem("uploadedImages"));
            setImageUrls(updatedImages || []);
        };
    
        window.addEventListener("storage", handleStorageChange);
        return () => window.removeEventListener("storage", handleStorageChange);
    }, []);
    

    return (
        <div className="container mt-5">
            {/* Invoice Header */}
            <div className="d-flex justify-content-between align-items-center border-bottom pb-3 mb-4">
                <div>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
                        alt="Airbnb Logo"
                        width="120"
                        onClick={() => navigate("/")}
                        style={{ cursor: "pointer" }}
                    />
                </div>
                <div>
                    <button
                        className="btn btn-danger fw-bold"
                        onClick={() => navigate("/")}
                    >
                        Exit
                    </button>
                </div>
            </div>

            {/* Invoice Card */}
            <div className="card shadow-lg p-4">
                <h2 className="text-center text-uppercase mb-4 text-dark">Booking Invoice</h2>

                {/* Place Details */}
                {placeDetails && Object.keys(placeDetails).length > 0 ? (
                    <div>
                        <h5 className="text-danger">🏡 Place Details</h5>
                        <table className="table table-bordered">
                            <tbody>
                                <tr>
                                    <th>Place Type</th>
                                    <td>{placeDetails.placeType}</td>
                                </tr>
                                <tr>
                                    <th>Guest Type</th>
                                    <td>{placeDetails.guestType}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                ) : <p className="text-muted text-center">No place details stored</p>}

                {/* Basic Details */}
                {details && Object.keys(details).length > 0 ? (
                    <div>
                        <h5 className="text-danger">📌 Basic Details</h5>
                        <table className="table table-bordered">
                            <tbody>
                                <tr><th>Guests</th><td>{details.guest}</td></tr>
                                <tr><th>Bedrooms</th><td>{details.bedrooms}</td></tr>
                                <tr><th>Beds</th><td>{details.beds}</td></tr>
                                <tr><th>Bathrooms</th><td>{details.bathrooms}</td></tr>
                                <tr><th>Amenities</th><td>{details.selectedAmenities.join(", ")}</td></tr>
                                <tr><th>Safety Items</th><td>{details.selectedSafetyItems.join(",")}</td></tr>
                            </tbody>
                        </table>
                    </div>
                ) : <p className="text-muted text-center">No details stored</p>}

                {/* Address Details */}
                {address && Object.keys(address).length > 0 ? (
                    <div>
                        <h5 className="text-danger">📍 Address Details</h5>
                        <table className="table table-bordered">
                            <tbody>
                                <tr><th>Flat/House No</th><td>{address.flatNumber}</td></tr>
                                <tr><th>Street</th><td>{address.street}</td></tr>
                                <tr><th>Area</th><td>{address.area}</td></tr>
                                <tr><th>City</th><td>{address.city}</td></tr>
                                <tr><th>State</th><td>{address.state}</td></tr>
                                <tr><th>Pincode</th><td>{address.pincode}</td></tr>
                            </tbody>
                        </table>
                    </div>
                ) : <p className="text-muted text-center">No address stored</p>}

                {/* Photos and Price Details */}
                {photoDetails && Object.keys(photoDetails).length > 0 ? (
                    <div>
                        <h5 className="text-danger">📸 Photos & Price</h5>
                        <table className="table table-bordered">
                            <tbody>
                                <tr><th>Description</th><td>{photoDetails.title}</td></tr>
                                <tr><th>Price per Day</th><td>${photoDetails.price}</td></tr>
                                <tr>
                                    <th>Photos</th>
                                    <td className="d-flex flex-wrap">
                                    {imageUrls.length > 0 ? (
                                        imageUrls.map((src, index) => (
                                            <img key={index} src={src} alt={`Uploaded ${index + 1}`} width="100" className="m-2" />
                                        ))
                                    ) : (
                                        <p>No images uploaded</p>
                                    )}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                ) : <p className="text-muted text-center">No photos stored</p>}

                {/* Footer */}
                <div className="d-flex me-3 justify-content-center">
                    <div className="text-center mt-4 me-3">
                        <button className="btn btn-danger fw-bold px-4" onClick={()=>navigate("/yourHome")}>Edit</button>
                    </div>

                    <div className="text-center mt-4 me-3">
                        <button className="btn btn-secondary fw-bold px-4" onClick={handleCancelClick}>Cancel</button>
                    </div>

                    <div className="text-center mt-4">
                        <button className="btn btn-success fw-bold px-4" onClick={handleSubmit}>Submit</button>
                    </div>

                </div>
                <Modal show={showModal} onHide={handleCloseModal} centered>
                    <Modal.Body className="text-center p-4">
                        <h5 className="mb-3">Are you sure you want to cancel?</h5>
                        <div className="d-flex justify-content-center">
                            <Button variant="danger" className="me-3 px-4" onClick={handleConfirmCancel}>
                                YES
                            </Button>
                            <Button variant="secondary" className="px-4" onClick={handleCloseModal}>
                                NO
                            </Button>
                        </div>
                    </Modal.Body>
                </Modal>

                {/* Submit Confirmation Modal */}
                {showSubmitModal && (
                    <div className="modal fade show d-block" tabIndex="-1">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Congratulations, {username}!</h5>
                                    <button type="button" className="btn-close" onClick={closeSubmitModal}></button>
                                </div>
                                <div className="modal-body">
                                    <p>
                                        Welcome aboard. Thank you for sharing your home and helping to create incredible experiences for our guests.
                                    </p>
                                </div>
                                <div className="modal-footer">
                                    <button className="btn btn-primary" onClick={closeSubmitModal}>OK</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Review;
