import React from 'react';
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    return (
        <div>
            <div className=' container d-flex justify-content-between mt-1'>
                <div>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
                        alt="Airbnb Logo"
                        width="120"
                        onClick={()=>{navigate("/")}}
                    />
                </div>

                <div>
                    <button className='bg-danger py-2 text-white border fw-bold' style={{ width: "80px", borderRadius: "5px" }} onClick={()=>{navigate("/")}}>Exit</button>
                </div>
            </div>
            <hr />
            <div className="container mt-5">
                <div className="row align-items-center">
                    {/* Left Section */}
                    <div className="col-md-5">
                        <h2>It's easy to get started.</h2>
                    </div>

                    {/* Right Section */}
                    <div className="col-md-5 mx-auto">
                        <div className="card p-4 mb-3 text-center" onClick={() => navigate("/aboutYourself")}>
                            <h3>Tell us about yourself</h3>
                            <p>Share some basic info such as where it is and how many guests can stay.</p>
                        </div>
                        <div className="card p-4 mb-3 text-center">
                            <h3>Make it stand out</h3>
                            <p>Add 5 or more photos plus a title and a description - we'll help you out.</p>
                        </div>
                        <div className="card p-4 text-center">
                            <h3>Finish Up and Publish</h3>
                            <p>Choose a starting price, verify a few details, then publish your listing.</p>
                        </div>
                        <div className="d-flex justify-content-center mt-3">
                            <button className='bg-danger py-2 text-white border fw-bold'
                                style={{ width: "200px", borderRadius: "5px" }} onClick={()=>navigate("/aboutYourself")}>
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home

