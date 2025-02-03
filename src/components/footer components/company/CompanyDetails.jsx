import React from "react";
import HeaderComponent from "../headercomponent/HeaderComponent";

const CompanyDetails = () => {
  return (
    <div>
    <HeaderComponent/>
    <div className="container my-5">
    
      <div className="text-center mb-4">
        <h1 className="display-5 fw-bold">Company Details</h1>
      </div>

      <div>
        <h2 className="h4">Provider of the Website:</h2>
        <p>
          <strong>Airbnb Ireland UC</strong>
          <br />
          8 Sushmidhar
          <br />
          Reddy
          <br />
          India
        </p>

        <h2 className="h4">Directors:</h2>
        <p>Ravi Teja</p>

        <h2 className="h4">VAT-ID:</h2>
        <p>IE9829383L</p>

        <h2 className="h4">Trade Register Number:</h2>
        <p>(Indian Companies Registration Office) IE 511385</p>

        <h2 className="h4">Contact Us:</h2>
        <p>
          <strong>Email address:</strong>
          <br />
          <a href="mailto:terms@airbnb.com">term@airbnb.com</a>
        </p>
        <p>
          <strong>Airbnb support:</strong>
          <br />
          <a
            href="https://www.airbnb.in/contact"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.airbnb.in/contact
          </a>
        </p>

        <h2 className="h4">Grievance Officer (India):</h2>
        <p>
          <strong>Airbnb Ireland UC</strong>
          <br />
          attn: Andrea Finnegan, Grievance Officer
          <br />
          8 Sushmidhar
          <br />
          Reddy 2, D02 DP23
          <br />
          India
        </p>
        <p>
          <strong>Email:</strong>
          <br />
          <a href="mailto:grievance-officer-india@airbnb.com">
            grievance-officer-india@airbnb.com
          </a>
        </p>
      </div>
    </div>
    </div>
  );
};

export default CompanyDetails;
