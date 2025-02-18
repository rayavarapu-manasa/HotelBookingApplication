// import React, { useState } from 'react';
// import HomeIcon from '@mui/icons-material/Home';
// import ApartmentIcon from '@mui/icons-material/Apartment';
// import HomeWorkIcon from '@mui/icons-material/HomeWork';
// import PlaceIcon from '@mui/icons-material/Place';
// import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
// import BedroomParentIcon from '@mui/icons-material/BedroomParent';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { savePlaceDetails } from '../review/actinCreator/Actioncreator';

// function AboutYourself() {
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const [placeType, setPlaceType] = useState(null);
//     const [guestType, setGuestType] = useState(null);

//     const handlePlaceSelection = (type) => {
//         setPlaceType(type);
//     };

//     const handleGuestSelection = (type) => {
//         setGuestType(type);
//     };
//     dispatch(savePlaceDetails(placeType,guestType));

//     return (
//         <div>
//             <div className='container d-flex justify-content-between mt-1'>
//                 <div>
//                     <img
//                         src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
//                         alt="Airbnb Logo"
//                         width="120"
//                         onClick={()=>{navigate("/")}}
//                     />
//                 </div>
//                 <div>
//                     <button className='bg-danger py-2 text-white border fw-bold' style={{ width: "80px", borderRadius: "5px" }} onClick={()=>{navigate("/")}}>Exit</button>
//                 </div>
//             </div>
//             <div className="col-md-7 mx-auto">
//                 <div className="card d-flex justify-content-center p-4 mb-3 text-center mt-3" style={{ height: "250px", borderRadius: "5px" }}>
//                     <h3>Which of these describes your place?</h3>
//                     <div className="container">
//                         <div className="row">
//                             {["Home", "Flat / Apartment", "Hostel"].map((type, index) => (
//                                 <div key={index} className="col-md-4 mb-3">
//                                     <div className={`card border-light shadow-sm p-3 d-flex align-items-center gap-2 text-secondary ${placeType === type ? 'bg-danger text-white' : ''}`}
//                                         onClick={() => handlePlaceSelection(type)}>
//                                         {type === "Home" && <HomeIcon size={20} />}
//                                         {type === "Flat / Apartment" && <ApartmentIcon size={20} />}
//                                         {type === "Hostel" && <HomeWorkIcon size={20} />}
//                                         <span className="fw-semibold">{type}</span>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//                 <div className="card d-flex justify-content-center p-4 mb-3 text-center" style={{ height: "250px", borderRadius: "5px" }}>
//                     <h3>What type of place will the guests have?</h3>
//                     <div className="container">
//                         <div className="row">
//                             {["An Entire Room", "A Room", "A Shared Room"].map((type, index) => (
//                                 <div key={index} className="col-md-4 mb-3">
//                                     <div className={`card border-light shadow-sm p-3 d-flex align-items-center gap-2 text-secondary ${guestType === type ? 'bg-danger text-white' : ''}`}
//                                         onClick={() => handleGuestSelection(type)}>
//                                         {type === "An Entire Room" && <PlaceIcon size={20} />}
//                                         {type === "A Room" && <MeetingRoomIcon size={20} />}
//                                         {type === "A Shared Room" && <BedroomParentIcon size={20} />}
//                                         <span className="fw-semibold">{type}</span>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//                 <div className="d-flex justify-content-center mt-3">
//                     <button className='bg-danger py-2 text-white border fw-bold mb-3'
//                         style={{ width: "500px", borderRadius: "5px" }}
//                         onClick={() => navigate("/confirmAddress")}
//                         disabled={!placeType || !guestType}>
//                         Next
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default AboutYourself;



import React, { useEffect, useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import ApartmentIcon from '@mui/icons-material/Apartment';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import PlaceIcon from '@mui/icons-material/Place';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import BedroomParentIcon from '@mui/icons-material/BedroomParent';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { savePlaceDetails } from '../review/actinCreator/Actioncreator';

function AboutYourself() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [placeType, setPlaceType] = useState(null);
    const [guestType, setGuestType] = useState(null);

    const handlePlaceSelection = (type) => {
        setPlaceType((prev) => (prev === type ? null : type)); // Toggle selection
    };

    const handleGuestSelection = (type) => {
        setGuestType((prev) => (prev === type ? null : type)); // Toggle selection
    };

    const handleNext = () => {
        dispatch(savePlaceDetails(placeType, guestType));
        navigate("/confirmAddress");
    };

    useEffect(()=>{
        const data = JSON.parse(sessionStorage.getItem("placeDetails"));
            console.log(data);
            if(data){
                setGuestType(data.guestType);
                setPlaceType(data.placeType);
            }
    },[])
    return (
        <div>
            <div className='container d-flex justify-content-between mt-1'>
                <div>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
                        alt="Airbnb Logo"
                        width="120"
                        onClick={() => navigate("/")}
                    />
                </div>
                <div>
                    <button className='bg-danger py-2 text-white border fw-bold' style={{ width: "80px", borderRadius: "5px" }} onClick={() => navigate("/")}>Exit</button>
                </div>
            </div>

            <div className="col-md-7 mx-auto">
                {/* Place Type Selection */}
                <div className="card d-flex justify-content-center p-4 mb-3 text-center mt-3" style={{ height: "250px", borderRadius: "5px" }}>
                    <h3>Which of these describes your place?</h3>
                    <div className="container">
                        <div className="row">
                            {[
                                { type: "Home", icon: <HomeIcon size={20} /> },
                                { type: "Flat / Apartment", icon: <ApartmentIcon size={20} /> },
                                { type: "Hostel", icon: <HomeWorkIcon size={20} /> }
                            ].map((item, index) => (
                                <div key={index} className="col-md-4 mb-3">
                                    <div
                                        className={`card border-light shadow-sm p-3 d-flex align-items-center gap-2 text-secondary ${placeType === item.type ? 'bg-danger text-white' : ''}`}
                                        onClick={() => handlePlaceSelection(item.type)}
                                        style={{ cursor: "pointer" }}
                                    >
                                        {item.icon}
                                        <span className="fw-semibold">{item.type}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Guest Type Selection */}
                <div className="card d-flex justify-content-center p-4 mb-3 text-center" style={{ height: "250px", borderRadius: "5px" }}>
                    <h3>What type of place will the guests have?</h3>
                    <div className="container">
                        <div className="row">
                            {[
                                { type: "An Entire Room", icon: <PlaceIcon size={20} /> },
                                { type: "A Room", icon: <MeetingRoomIcon size={20} /> },
                                { type: "A Shared Room", icon: <BedroomParentIcon size={20} /> }
                            ].map((item, index) => (
                                <div key={index} className="col-md-4 mb-3">
                                    <div
                                        className={`card border-light shadow-sm p-3 d-flex align-items-center gap-2 text-secondary ${guestType === item.type ? 'bg-danger text-white' : ''}`}
                                        onClick={() => handleGuestSelection(item.type)}
                                        style={{ cursor: "pointer" }}
                                    >
                                        {item.icon}
                                        <span className="fw-semibold">{item.type}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Next Button */}
                <div className="d-flex justify-content-center mt-3">
                    <button className='bg-danger py-2 text-white border fw-bold mb-3'
                        style={{ width: "500px", borderRadius: "5px" }}
                        onClick={handleNext}
                        disabled={!placeType || !guestType}>
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AboutYourself;
