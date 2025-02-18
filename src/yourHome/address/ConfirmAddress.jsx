import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import ActionCreator from "../review/actinCreator/Actioncreator";

function ConfirmAddress() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const [selectedState, setSelectedState] = useState("");
    const [selectedCity, setSelectedCity] = useState("");
    const [formData, setFormData] = useState({
        flatNumber: "",
        street: "",
        area: "",
        pincode: "",
    });
    const [errors, setErrors] = useState({});

    // Mapping states to cities
    const stateCityMap = {
        andhra_pradesh: ["Visakhapatnam", "Vijayawada", "Guntur"],
        telangana: ["Hyderabad", "Warangal", "Nizamabad"],
        kerala: ["Thiruvananthapuram", "Kochi", "Kozhikode"],
        karnataka: ["Bengaluru", "Mysuru", "Mangalore"],
    };

    useEffect(() => {
        const addressData = JSON.parse(sessionStorage.getItem("address"));
        if (addressData) {
            setSelectedState(addressData.state || "");
            setSelectedCity(addressData.city || "");
            setFormData({
                flatNumber: addressData.flatNumber || "",
                street: addressData.street || "",
                area: addressData.area || "",
                pincode: addressData.pincode || "",
            });
        }
    }, []);

    const handleStateChange = (e) => {
        setSelectedState(e.target.value);
        setSelectedCity(""); 
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });

        setErrors((prevErrors) => ({
            ...prevErrors,
            [e.target.name]: "", 
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation check
        let validationErrors = {};
        if (!formData.flatNumber) validationErrors.flatNumber = "Flat/House No is required";
        if (!formData.street) validationErrors.street = "Street Address is required";
        if (!formData.area) validationErrors.area = "Area is required";
        if (!selectedState) validationErrors.state = "State is required";
        if (!selectedCity) validationErrors.city = "City/Town is required";
        if (!formData.pincode) validationErrors.pincode = "Pincode is required";

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        // Save to sessionStorage
        const addressData = {
            flatNumber: formData.flatNumber,
            street: formData.street,
            area: formData.area,
            state: selectedState,
            city: selectedCity,
            pincode: formData.pincode,
        };
        sessionStorage.setItem("address", JSON.stringify(addressData));

        // Dispatch data to Redux store
        dispatch(ActionCreator(addressData));

        // Navigate to Review page
        navigate("/basicDetails");
    };

    return (
        <div>
            <div className="container d-flex justify-content-between mt-1">
                <div>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
                        alt="Airbnb Logo"
                        width="120"
                        onClick={() => navigate("/")}
                    />
                </div>

                <div>
                    <button 
                        className="bg-danger py-2 text-white border fw-bold" 
                        style={{ width: "80px", borderRadius: "5px" }} 
                        onClick={() => navigate("/")}
                    >
                        Exit
                    </button>
                </div>
            </div>

            <h1 className="text-danger text-center mt-4">Confirm your Address</h1>
            <div className="container d-flex justify-content-center">
                <div className="card w-50 p-4 shadow-lg">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label fw-medium">Flat/House No:</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter flat/House No"
                                name="flatNumber"
                                value={formData.flatNumber}
                                onChange={handleChange}
                            />
                            {errors.flatNumber && <small className="text-danger">{errors.flatNumber}</small>}
                        </div>

                        <div className="mb-3">
                            <label className="form-label fw-medium">Street Address:</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter street name"
                                name="street"
                                value={formData.street}
                                onChange={handleChange}
                            />
                            {errors.street && <small className="text-danger">{errors.street}</small>}
                        </div>

                        <div className="mb-3">
                            <label className="form-label fw-medium">Area:</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Area"
                                name="area"
                                value={formData.area}
                                onChange={handleChange}
                            />
                            {errors.area && <small className="text-danger">{errors.area}</small>}
                        </div>

                        {/* State Dropdown */}
                        <div className="mb-3">
                            <label className="form-label fw-medium">State:</label>
                            <select
                                className="form-select"
                                onChange={handleStateChange}
                                value={selectedState}
                            >
                                <option value="" disabled>Select State</option>
                                <option value="andhra_pradesh">Andhra Pradesh</option>
                                <option value="telangana">Telangana</option>
                                <option value="kerala">Kerala</option>
                                <option value="karnataka">Karnataka</option>
                            </select>
                            {errors.state && <small className="text-danger">{errors.state}</small>}
                        </div>

                        {/* City Dropdown */}
                        <div className="mb-3">
                            <label className="form-label fw-medium">City/Town:</label>
                            <select
                                className="form-select"
                                value={selectedCity}
                                onChange={(e) => setSelectedCity(e.target.value)}
                                disabled={!selectedState}
                            >
                                <option value="" disabled>Select City/Town</option>
                                {selectedState &&
                                    stateCityMap[selectedState].map((city, index) => (
                                        <option key={index} value={city}>{city}</option>
                                    ))}
                            </select>
                            {errors.city && <small className="text-danger">{errors.city}</small>}
                        </div>

                        <div className="mb-4">
                            <label className="form-label fw-medium">Pincode:</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Pincode"
                                name="pincode"
                                value={formData.pincode}
                                onChange={handleChange}
                            />
                            {errors.pincode && <small className="text-danger">{errors.pincode}</small>}
                        </div>

                        <div className="d-flex justify-content-center">
                            <button type="submit" className="btn btn-danger fw-bold w-100">
                                Next
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ConfirmAddress;
