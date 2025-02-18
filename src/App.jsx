import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Card from "./components/card/Card";
import Footer from './components/footer/Footer';
import PrivacyPolicy from './components/footer components/privacy/PrivacyPolicy';
import TermsOfService from './components/footer components/terms/TermsOfService';
import CompanyDetails from './components/footer components/company/CompanyDetails';
import CustomerResources from './components/footer components/resources/CustomerResources';
import PropertyDetails from './components/detailspage/PropertyDetails';
import ConfirmPay from './components/confirmpay/ConfirmPay';
import Homepage from './components/homepage/Homepage';
import SignUp from "./components/confirmpay/SignUp";
import myFirstContext from './components/context/SearchContext';
import Paybtn from './components/payment/Paybtn';
import OrderSummary from "./concepts/orderSummary/OrderSummary";
import Trip from "./myprofile/trips/Trip";
import Account from "./myprofile/account/Account";
import PersonalInfo from "./myprofile/account/PersonalInfo";
import CustomerSupport from "./myprofile/customersupport/CustomerSupport";
import LoginComp from "./components/navbar/LoginComp";
import LoginSign from "./components/dropdown/LoginSign";
import Home from "./yourHome/home/Home";
import AboutYourself from "./yourHome/home/AboutYourself";
import ConfirmAddress from "./yourHome/address/ConfirmAddress";
import BasicDetails from "./yourHome/address/BasicDetails";
import AddPhotos from "./yourHome/address/AddPhotos";
import Review from "./yourHome/review/Review";

function App() {
  const [searchData, setSearchData] = useState(() => {
    const storedSearchData = sessionStorage.getItem("searchData");
    return storedSearchData
      ? JSON.parse(storedSearchData)
      : {
          destination: "",
          checkin: null,
          checkout: null,
          guestSummary: "Add guests",
          hotel: {
            name: "",
            description: "",
            imageUrl: "",
            extraImgs: [],
          },
          pricePerNight: 0,
          serviceFee: 0,
          totalCost: 0,
          phoneNumber: '',
        };
  });

  useEffect(() => {
    sessionStorage.setItem("searchData", JSON.stringify(searchData));
  }, [searchData]);

  return (
    <div className="main-content">
      <myFirstContext.Provider value={{ searchData, setSearchData }}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/card" element={<Card />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/company-details" element={<CompanyDetails />} />
          <Route path="/customer-resources" element={<CustomerResources />} />
          <Route path="/rooms" element={<PropertyDetails />} />
          <Route path="/book" element={<ConfirmPay />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/paybtn" element={<Paybtn />} />
          <Route path="/ordersummary" element={<OrderSummary />} />
          <Route path="/trips" element={<Trip />} />
          <Route path="/account" element={<Account />} />
          <Route path="/personal-info" element={<PersonalInfo />} />
          
          <Route path="/login" element={<LoginComp />} />
          <Route path="/" element={<LoginSign/>}/>
          <Route path="/yourHome" element={<Home/>}/>
          <Route path="/aboutYourself" element={<AboutYourself/>}/>
          <Route path="/confirmAddress" element={<ConfirmAddress/>}/>
          <Route path="/basicDetails" element={<BasicDetails/>}/>
          <Route path="/addPhotos" element={<AddPhotos/>}/>
          <Route path="/review" element={<Review/>}/>
        </Routes>
      </myFirstContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
