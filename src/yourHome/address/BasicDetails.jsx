import React, { useEffect, useState } from 'react';
import WifiIcon from '@mui/icons-material/Wifi';
import TvIcon from '@mui/icons-material/Tv';
import KitchenIcon from '@mui/icons-material/Kitchen';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import FireplaceIcon from '@mui/icons-material/Fireplace';
import PoolIcon from '@mui/icons-material/Pool';
import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import FireExtinguisherIcon from '@mui/icons-material/FireExtinguisher';
import { Button, InputGroup, FormControl } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import {basicPlaceDetails} from "../review/actinCreator/Actioncreator";
import { useDispatch } from 'react-redux';

function BasicDetails() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [guest, setGuest] = useState();
    const [bedrooms, setBedrooms] = useState();
    const [beds, setBeds] = useState();
    const [bathrooms, setBathrooms] = useState();

    useEffect(()=>{
        setGuest(1);
        setBeds(1);
        setBedrooms(1);
        setBathrooms(1);
    },[])

    useEffect(() => {
        const basicDetailsData = JSON.parse(sessionStorage.getItem("details"));
        console.log(basicDetailsData);
        if (basicDetailsData) {
            setGuest(basicDetailsData.guest);
            setBedrooms(basicDetailsData.bedrooms);
            setBeds(basicDetailsData.beds );
            setBathrooms(basicDetailsData.bathrooms);
            setSelectedAmenities(basicDetailsData.selectedAmenities || []);
            setSelectedSafetyItems(basicDetailsData.selectedSafetyItems || []);
        }
    }, []);

    const handleGuestIncrease = () => {
        if (guest < 16) {
            setGuest(guest + 1);
        }
    };

    const handleGuestDecrease = () => {
        if (guest > 1) {
            setGuest(guest - 1);
        }
    };

    const handleBedroomsIncrease = () => {
        if (bedrooms < 8) {
            setBedrooms(bedrooms + 1);
        }
    };

    const handleBedroomsDecrease = () => {
        if (bedrooms > 1) {
            setBedrooms(bedrooms - 1);
        }
    };
    const handleBedsIncrease = () => {
        if (beds < 16) {
            setBeds(beds + 1);
        }
    };

    const handleBedsDecrease = () => {
        if (beds > 1) {
            setBeds(beds - 1);
        }
    };
    const handleBathroomsIncrease = () => {
        if (bathrooms < 16) {
            setBathrooms(bathrooms + 1);
        }
    };

    const handleBathroomsDecrease = () => {
        if (bathrooms > 1) {
            setBathrooms(bathrooms - 1);
        }
    };

    const [selectedSafetyItems, setSelectedSafetyItems] = useState([]);

    const handleSafetySelection = (type) => {
        setSelectedSafetyItems((prevSelected) =>
            prevSelected.includes(type)
                ? prevSelected.filter((item) => item !== type) // Remove if selected
                : [...prevSelected, type] // Add if not selected
        );
    };
    const [selectedAmenities, setSelectedAmenities] = useState([]);

    const handleAmenitySelection = (type) => {
        setSelectedAmenities((prevSelected) =>
            prevSelected.includes(type)
                ? prevSelected.filter((item) => item !== type) // Remove if selected
                : [...prevSelected, type] // Add if not selected
        );
    };

    const isNextDisabled =
    guest === 0 ||
    bedrooms === 0 ||
    beds === 0 ||
    bathrooms === 0 ||
    selectedAmenities.length === 0 ||
    selectedSafetyItems.length === 0;

    const handleNavigate =()=>{
        dispatch(basicPlaceDetails(guest,bedrooms,beds,bathrooms,selectedSafetyItems,selectedAmenities));
        navigate("/addPhotos")
    }

    // dispatch(basicPlaceDetails(guest,bedrooms,beds,bathrooms,selectedSafetyItems,selectedAmenities));

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

            <div className="col-md-5 mx-auto">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="card p-4 text-center mt-3">
                            <h3 className='mb-4'>Basic details about your Place.</h3>

                            <label htmlFor="guestCount">Guests:</label>
                            <InputGroup className="mb-3">
                                <Button variant="outline-secondary" className="rounded-circle fw-bold" onClick={handleGuestDecrease} disabled={guest === 1}>-</Button>
                                <FormControl type="number" id="guestCount" value={guest} className="text-center border-0 bg-white" style={{ width: "55px" }} readOnly /> {/* Added ID */}
                                <Button variant="outline-secondary" className="rounded-circle" onClick={handleGuestIncrease} disabled={guest === 16}>+</Button>
                            </InputGroup>

                            <label htmlFor="bedroomCount">Bedrooms:</label>
                            <InputGroup className="mb-3">
                                <Button variant="outline-secondary" className="rounded-circle fw-bold" onClick={handleBedroomsDecrease} disabled={bedrooms === 1}>-</Button>
                                <FormControl type="number" id="bedroomCount" value={bedrooms} className="text-center border-0 bg-white" style={{ width: "55px" }} readOnly /> {/* Added ID */}
                                <Button variant="outline-secondary" className="rounded-circle fw-bold" onClick={handleBedroomsIncrease} disabled={bedrooms === 8}>+</Button>
                            </InputGroup>

                            <label htmlFor="bedCount">Beds:</label>
                            <InputGroup className="mb-3">
                                <Button variant="outline-secondary" className="rounded-circle fw-bold" onClick={handleBedsDecrease} disabled={beds === 1}>-</Button>
                                <FormControl type="number" id="bedCount" value={beds} className="text-center border-0 bg-white" style={{ width: "55px" }} readOnly /> {/* Added ID */}
                                <Button variant="outline-secondary" className="rounded-circle fw-bold" onClick={handleBedsIncrease} disabled={beds === 16}>+</Button>
                            </InputGroup>

                            <label htmlFor="bathroomCount">Bathrooms:</label>
                            <InputGroup className="mb-3">
                                <Button variant="outline-secondary" className="rounded-circle fw-bold" onClick={handleBathroomsDecrease} disabled={bathrooms === 1}>-</Button>
                                <FormControl type="number" id="bathroomCount" value={bathrooms} className="text-center border-0 bg-white" style={{ width: "55px" }} readOnly /> {/* Added ID */}
                                <Button variant="outline-secondary" className="rounded-circle fw-bold" onClick={handleBathroomsIncrease} disabled={bathrooms === 8}>+</Button>
                            </InputGroup>


                            <label className="mt-3">Pets:</label>
                            <div className="d-flex justify-content-center gap-3 mb-3">
                                <label className="btn btn-outline-secondary">
                                    <input type="radio" name="petsAllowed" value="yes" onChange={() => handlePetsAllowedChange("yes")} /> Yes
                                </label>
                                <label className="btn btn-outline-secondary">
                                    <input type="radio" name="petsAllowed" value="no" onChange={() => handlePetsAllowedChange("no")} /> No
                                </label>
                            </div>

                            <label className="mt-3">Smoking:</label>
                            <div className="d-flex justify-content-center gap-3 mb-3">
                                <label className="btn btn-outline-secondary">
                                    <input type="radio" name="smokingAllowed" value="yes" onChange={() => handleSmokingAllowedChange("yes")} /> Yes
                                </label>
                                <label className="btn btn-outline-secondary">
                                    <input type="radio" name="smokingAllowed" value="no" onChange={() => handleSmokingAllowedChange("no")} /> No
                                </label>
                            </div>
                        </div>
                    </div>
                </div>



                <div className='card p-4 text-center mt-3'>
                    <h3>What this place offers?</h3>
                    <div className="container">
                        <div className="row">
                            {[
                                { type: "Wifi", icon: <WifiIcon size={20} /> },
                                { type: "TV", icon: <TvIcon size={20} /> },
                                { type: "Kitchen", icon: <KitchenIcon size={20} /> },
                                { type: "AC", icon: <AcUnitIcon size={20} /> },
                                { type: "Washing Machine", icon: <LocalLaundryServiceIcon size={20} /> },
                                { type: "Parking", icon: <LocalParkingIcon size={20} /> },
                                { type: "FirePit", icon: <FireplaceIcon size={20} /> },
                                { type: "Swimming Pool", icon: <PoolIcon size={20} /> },
                                { type: "BBQ Grill", icon: <OutdoorGrillIcon size={20} /> }
                            ].map((item, index) => (
                                <div key={index} className="col-md-4 mb-3">
                                    <div
                                        className={`card border-light shadow-sm p-3 d-flex align-items-center gap-2 ${selectedAmenities.includes(item.type) ? 'bg-danger text-white' : 'text-secondary'}`}
                                        onClick={() => handleAmenitySelection(item.type)}
                                        style={{ cursor: "pointer", transition: "0.3s" }}
                                    >
                                        {item.icon}
                                        <span className="fw-semibold">{item.type}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>



                </div>

                <div className='card p-4 text-center mb-3 mt-3'>
                    <h3>Safety items?</h3>

                    <div className="container">
                        <div className="row">
                            {["Smoke Alarm", "First Aid Kit", "Fire Extinguisher"].map((type, index) => (
                                <div key={index} className="col-md-4 mb-3">
                                    <div
                                        className={`card border-light shadow-sm p-3 d-flex align-items-center gap-2 ${selectedSafetyItems.includes(type) ? 'bg-danger text-white' : 'text-secondary'}`}
                                        onClick={() => handleSafetySelection(type)}
                                        style={{ cursor: "pointer", transition: "0.3s" }}
                                    >
                                        {type === "Smoke Alarm" && <AddAlertIcon size={20} />}
                                        {type === "First Aid Kit" && <MedicalServicesIcon size={20} />}
                                        {type === "Fire Extinguisher" && <FireExtinguisherIcon size={20} />}
                                        <span className="fw-semibold">{type}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>


                </div>
                <div className="d-flex justify-content-center mt-3">
                    <button className='bg-danger py-2 text-white border fw-bold mb-3'
                        style={{ width: "500px", borderRadius: "5px" }} onClick={handleNavigate} disabled={isNextDisabled}>
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BasicDetails
