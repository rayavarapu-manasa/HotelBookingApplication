import React from 'react';
import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


function Footer() {
  return (
    <footer className="footer bg-light text-dark border-top">
      <div className="container">
      
        <div className="row align-items-center">
          {/* Left Section */}
          <div className="col-md-6 d-flex flex-column flex-md-row align-items-md-center gap-3">
            <p className="mb-0">&copy; 2024, Airbnb, Inc.</p>
            <a href="/privacy-policy" className="text-decoration-none text-dark">Privacy</a>
            <a href="/terms" className="text-decoration-none text-dark">Terms</a>
            <a href="" className="text-decoration-none text-dark">Sitemap</a>
            <a href="/company-details" className="text-decoration-none text-dark">Company Details</a>
          </div>
          {/* Right Section */}
          <div className="col-md-6 d-flex justify-content-md-end flex-column flex-md-row align-items-md-center gap-2">
            <a href="https://www.facebook.com/login.php/" className="text-decoration-none text-primary fw-bold"><FacebookIcon/></a>
            <a href="https://www.instagram.com/#" className="text-decoration-none text-danger fw-bold"><InstagramIcon/></a>
            <a href="https://x.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJteCI6IjIifQ%3D%3D%22%7D" className="text-decoration-none text-dark fw-bold"><XIcon/></a>
            <a href="https://web.whatsapp.com/" className="text-decoration-none text-success fw-bold"><WhatsAppIcon/></a>
            <a href="/customer-resources" className="text-decoration-none text-dark fw-bold ms-5">Support & Resources</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
