import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function HeaderComponent() {
    return (
        <header className="d-flex justify-content-between align-items-center px-3 py-2 bg-light shadow-sm fixed-top" style={{ height: "60px"}}>
            <div className='d-flex flex-row align-items-center' style={{marginLeft:"60px"}}>
                <img
                    src="https://cdn.icon-icons.com/icons2/2389/PNG/512/airbnb_logo_icon_145511.png"
                    alt="Airbnb Logo"
                    width="30"
                    height="30"
                    className="me-2"
                />
                <h1 className='fs-5 fw-bold m-0'>Help Centre</h1>
            </div>
            <div className='fs-6' style={{marginRight:"60px"}}>
                <a href="/" className="text-dark text-decoration-none fw-bold">
                    Airbnb your home
                </a>
            </div>
        </header>
    );
}

export default HeaderComponent;
