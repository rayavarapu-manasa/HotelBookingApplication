import React, { useState,useContext } from 'react';
import axios from 'axios';
import SignUp from '../confirmpay/SignUp';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import myFirstContext from '../context/SearchContext';


function LoginSign({ totalAmount, hotel, onLoginSuccess }) {
  const {setSearchData}=useContext(myFirstContext)
  const [countryRegion, setCountryRegion] = useState("India (+91)");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtpField, setShowOtpField] = useState(false);
  const [otp, setOtp] = useState("");
  const [storeOtp, setStoreOtp] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [isExistingUser, setIsExistingUser] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  const clientId = "198103472630-ps2um9rertoki4vn2k6s2f3e0e0ouo8l.apps.googleusercontent.com";

  const handleSuccess = (credentialResponse) => {
    console.log(credentialResponse);
  };

  const handleError = () => {
    console.log('Login Failed');
  };

  // const handlePhoneNumberChange = (e) => {
  //   const input = e.target.value;
  //   setPhoneNumber(input);

  //   // Validate phone number on each change
  //   if (!/^[6789]\d{9}$/.test(input) && input.length === 10) {
  //     setPhoneError("Phone number must start with 6, 7, 8, or 9 and be 10 digits long.");
  //   } else {
  //     setPhoneError(""); // Clear error message when valid
  //   }
  // };
  const handlePhoneNumberChange = (e) => {
    const input = e.target.value;
    setPhoneNumber(input);

    if (/[^0-9]/.test(input)) {
      setPhoneError("Phone number can only contain numbers.");
    }

    else if (!/^[6789]\d{9}$/.test(input) && input.length === 10) {
      setPhoneError("Phone number must start with 6, 7, 8, or 9 and be 10 digits long.");
    } else {
      setPhoneError("");
    }
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    // Phone number validation
    if (!/^[6789]\d{9}$/.test(phoneNumber)) {
      setPhoneError("Please enter a valid 10-digit phone number.");
      return;
    }
    setPhoneError("");

    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const combined = `${year}${month}${day}${hours}${minutes}${seconds}`;
    const ipOtpForMobile = combined.slice(-4);

    setStoreOtp(ipOtpForMobile);
    setShowOtpField(true);

    const message = `Dear customer, use this OTP ${ipOtpForMobile} to signup into your Quality Thought Next account. This OTP will be valid for the next 15 mins.`;
    const encodedMessage = encodeURIComponent(message);

    const apiUrl = `https://login4.spearuc.com/MOBILE_APPS_API/sms_api.php?type=smsquicksend&user=qtnextotp&pass=987654&sender=QTTINF&t_id=1707170494921610008&to_mobileno=${phoneNumber}&sms_text=${encodedMessage}`;

    axios.get(apiUrl).then((res) => {
      console.log("API Response:", res);
    });
    axios.get(`http://183.82.106.55:9103/auth/getByMobileNumber/${phoneNumber}`).then((res) => {
      console.log("API Response:", res);
      setIsExistingUser(res.data);
      
      console.log(res.data)// Assuming the API returns `exists: true/false`
    })
    console.log("Country/Region:", countryRegion);
    console.log("Phone Number:", phoneNumber);
    console.log("Generated OTP:", ipOtpForMobile);
  };

  const handleOtpSubmit = (event) => {
    event.preventDefault();

    if (otp.length !== 4 || !/^\d+$/.test(otp)) {
      alert("Please enter a valid 4-digit OTP.");
      return;
    }
  };

  // const handleVerifyOtpForMobile = () => {
  //   console.log("Entered OTP:", otp, "Stored OTP:", storeOtp);
  //   if (otp === storeOtp) {
  //     setIsLogin(true);
  //     if (isExistingUser) {
  //     console.log(isExistingUser)
  //     } else {
  //       alert('Mobile Number Verified. Redirecting to SignUp...');
  //     }
  //   } else {
  //     alert('Invalid OTP');
  //   }
  // };
  const handleVerifyOtpForMobile = () => {
    if (otp === storeOtp) {
      setIsLogin(true);
      setSearchData((prev) => ({
        ...prev,
        phoneNumber: phoneNumber, // Store phone number in context
      }));
      console.log("Phone number set in context:", phoneNumber);
      if (onLoginSuccess) onLoginSuccess();
    } else {
      alert("Invalid OTP");
    }
  };

  return (
    <div>
      <form onSubmit={showOtpField ? handleOtpSubmit : handleSubmit}>
        {!showOtpField && (
          <>
            <h3>Login or Sign up to book</h3>
            <div className="mb-3 mt-4">
              <select
                id="countryRegion"
                value={countryRegion}
                onChange={(e) => setCountryRegion(e.target.value)}
                className="form-select"
              >
                <option>India (+91)</option>
              </select>
            </div>
            <div className="mb-3">
              <input
                type="text"
                id="phoneNumber"
                placeholder="Phone number"
                value={phoneNumber}
                maxLength="10"
                onChange={handlePhoneNumberChange}
                className="form-control"
                required
              />
              {phoneError && <div className="text-danger mt-2">{phoneError}</div>}
            </div>
            <button className="btn btn-danger w-100" type="submit">
              Continue
            </button>
            <div className='mt-3 fs-4 style:{{backGroundColor:blue}}'>
              <GoogleOAuthProvider clientId={clientId} >
                <GoogleLogin
                  buttonText="Login with Google"
                  onSuccess={handleSuccess}
                  onFailure={handleError}
                  cookiePolicy={'single_host_origin'}
                  isSignedIn={true}
                />
              </GoogleOAuthProvider>
            </div>
          </>
        )}

        {showOtpField && (
          <>
            {!isLogin ? (
              <div>
                <div className="mb-3 mt-4">
                  <label htmlFor="otp" className="fw-bold mb-3">Enter OTP</label>
                  <input
                    type="text"
                    id="otp"
                    placeholder="4-digit OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="form-control"
                  />
                </div>
                <button
                  className="btn btn-danger w-100"
                  type="button"
                  onClick={handleVerifyOtpForMobile}
                >
                  Verify OTP
                </button>
              </div>
            ) : (
              <div>
                {isExistingUser && <SignUp phoneNumber={phoneNumber} />}

              </div>
            )}
          </>
        )}
      </form>


    </div>
  );
}

export default LoginSign;