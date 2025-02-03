import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import ProfileNavbar from "../profilenavbar/ProfileNavbar";
import myFirstContext from "../../components/context/SearchContext";


function PersonalInfo() {
  const {searchData} = useContext(myFirstContext);
  const [legalName, setLegalName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [emergencyContact, setEmergencyContact] = useState("");
  const [govtId, setGovtId] = useState("");

  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    axios
      .get(`http://183.82.106.55:9103/payment/by-mobile/${searchData.phoneNumber}`)
      .then((res) => {
        console.log("API Response Data:", res.data);
        const userData = res.data.signUp;
        setLegalName(userData.fullName || "");
        setEmail(userData.email || "");
        setPhone(userData.mobileNo || "");
        
        setAddress(userData.address || "");
        setEmergencyContact(userData.emergencyContact || "");
        setGovtId(userData.govtId || "");
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  const handleEdit = () => setIsEditing(!isEditing);
  const handleAddEdit = () => setIsAdding(!isAdding);
  const handleSave = () => setIsEditing(false);

  return (
    <div>
      <ProfileNavbar />
      <div className="container mt-5">
      <div className="card p-4 shadow">
        <div className="d-flex justify-content-between align-items-center">
        <h3>Personal Info</h3>
        <button
          onClick={isEditing ? handleSave : handleEdit}
          className="btn btn-primary"
        >
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>
          

          {/* Legal Name */}
          <div className="mb-3">
            <label className="form-label">Legal Name</label>
            <div className="d-flex justify-content-between">
              <input
                type="text"
                className="form-control"
                value={legalName}
                onChange={(e) => setLegalName(e.target.value)}
                disabled={!isEditing}
              />
              </div>
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={!isEditing}
            />
          </div>

          {/* Phone Number */}
          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input
              type="text"
              className="form-control"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              disabled={!isEditing}
            />
          </div>

        

          {/* Additional Information */}
          <div className="mt-4">
            <div className="mb-3">
              <label className="form-label">Address</label>
              <input
                type="text"
                className="form-control"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Emergency Contact</label>
              <input
                type="text"
                className="form-control"
                value={emergencyContact}
                onChange={(e) => setEmergencyContact(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Government ID</label>
              <input
                type="text"
                className="form-control"
                value={govtId}
                onChange={(e) => setGovtId(e.target.value)}
              />
            </div>

            <div className="d-flex justify-content-end">
              <button onClick={handleAddEdit} className="btn btn-secondary">
                {address && emergencyContact && govtId ? "Edit" : "Add"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
