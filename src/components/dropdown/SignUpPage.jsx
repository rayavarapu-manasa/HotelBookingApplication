import React, { useState } from "react";
import "./SignUpPage.css";
import SignupUi from "./SignupUi";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import LoginComp from "../navbar/LoginComp";

const SignUp = ({ phoneNumber }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { hotel, pricePerNight, checkin, checkout, guestSummary } = location.state || {};
  const [signData, setSignData] = useState();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
  });

  const handleOnChange = (event) => {
    const { id, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleDobChange = (date) => {
    setData((prevData) => ({
      ...prevData,
      dob: date,
    }));
  };




  const handlePay = async () => {
    const dataForPost = {
      fullName: `${data.firstName} ${data.lastName}`,
      email: data.email,
      mobileNo: phoneNumber,
      doB: data.dob,
    };

    console.log("Posting Data:", JSON.stringify(dataForPost, null, 2));

    try {
      const response = await axios.post(
        "http://183.82.106.55:9103/signUp/posting",
        dataForPost,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.status);

      if (response.status === 201) {
        setSignData(response.data);
      }
      console.log("API Response:", response.data);
      alert("Sign up successful!");


      navigate("/book", {
        state: {
          hotel, pricePerNight, checkin, checkout, guestSummary, phoneNumber
        },
      });
    } catch (error) {
      console.error("Error during API call:", error);
      if (error.response) {
        console.error("Server response:", error.response.data);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error in setting up request:", error.message);
      }
    }
  };

  return (
    <div className="signup-container">
      {
        !signData &&

        <form className="signup-form text-start">
          <h3 className="form-heading mt-3 mb-3">Your details</h3>

          <div className="form-group">
            <label htmlFor="firstName" className="mb-2">Legal Name</label>
            <input
              id="firstName"
              type="text"
              className="form-control"
              placeholder="First Name on ID"
              value={data.firstName}
              onChange={handleOnChange}
              required
            />
            <input
              id="lastName"
              type="text"
              className="form-control mt-1"
              placeholder="Last Name on ID"
              value={data.lastName}
              onChange={handleOnChange}
              required
            />
            <span className="text-danger">
              Make sure this matches the name on your government ID.
            </span>
          </div>

          <div className="form-group">
            <label htmlFor="dob" className="mb-2">Date of Birth</label>
            <SignupUi value={data.dob} onChange={handleDobChange} />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="mb-2">Email</label>
            <input
              id="email"
              type="email"
              className="form-control"
              placeholder="Email"
              value={data.email}
              onChange={handleOnChange}
              required
            />
            <span style={{ color: "#666" }}>
              We'll email you trip confirmations and receipts.
            </span>
          </div>

          <p>
            By selecting Agree and continue, I agree to Airbnb’s Terms of Service,
            Payments Terms of Service, and Nondiscrimination Policy and acknowledge
            the Privacy Policy.
          </p>

          <button
            className="btn btn-danger signup-button"
            type="button"
            onClick={handlePay}
          >
            Agree and Continue
          </button>
        </form>
      }
       {
       signData && <LoginComp />
       }



    </div>
  );
};

export default SignUp;
