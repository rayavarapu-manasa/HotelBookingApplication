import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap

function CustomerSupport({ isSignedIn, username }) {
  const [showSupportPopup, setShowSupportPopup] = useState(false);

  return (
    <div className="position-relative">
      {/* Customer Support Button */}
      <button className="btn btn-primary" onClick={() => setShowSupportPopup(true)}>
        Customer Support
      </button>

      {/* Conditional Pop-up Rendering */}
      {showSupportPopup && (
        <div className="modal d-block bg-dark bg-opacity-50" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {isSignedIn
                    ? `Hi ${username}, Please contact 1800-xxx-xxxx for any queries`
                    : `Hi, Need to get in touch? Please contact 1800-xxx-xxxx for any queries`}
                </h5>
                <button className="btn-close" onClick={() => setShowSupportPopup(false)}></button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CustomerSupport;
