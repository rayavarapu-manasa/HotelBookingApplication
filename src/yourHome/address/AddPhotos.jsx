import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { basicPhotoDetails } from "../review/actinCreator/Actioncreator"

function AddPhotos() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [photos, setPhotos] = useState([]);
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [error, setError] = useState("");

    // const handleFileChange = (event) => {
    //     const files = Array.from(event.target.files);
    //     if (files.length !== 5) {
    //         setError("Can upload only 5 photos");
    //         setPhotos([]);
    //     } else {
    //         setError("");
    //         setPhotos(files);
    //     }
    //     const file = e.target.files[0];
    //     if (file) {
    //         const imageUrl = URL.createObjectURL(file);
    //         sessionStorage.setItem("uploadedImage", imageUrl); // Store image in session storage
    //         window.dispatchEvent(new Event("storage")); // Trigger storage event for real-time update
    //     }
    // };
    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);
        if (files.length !== 5) {
            setError("Can upload only 5 photos");
            setPhotos([]);
            sessionStorage.removeItem("uploadedImages");
        } else {
            setError("");
            setPhotos(files);
    
            // Convert images to data URLs and store in sessionStorage
            const imageUrls = files.map(file => URL.createObjectURL(file));
            sessionStorage.setItem("uploadedImages", JSON.stringify(imageUrls));
            window.dispatchEvent(new Event("storage"));
        }
    };
    
    //  useEffect(()=>{
    //         const PhotoData = JSON.parse(sessionStorage.getItem("photoDetails"));
    //             console.log(photoData);
    //             if(PhotoData){
    //                setTitle(photoData.title);
    //             }
    //     },[])

    const handlePage = () => {
        dispatch(basicPhotoDetails(photos, title, price));
        navigate("/review")
    }

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
                    <button className='bg-danger py-2 text-white border fw-bold'
                        style={{ width: "80px", borderRadius: "5px" }}
                        onClick={() => navigate("/")}>Exit
                    </button>
                </div>
            </div>

            <div className="col-md-5 mx-auto">
                <div className="card p-4 text-center mt-3">
                    <h3>Add some photos</h3>
                    <p>Please add only 5 photos</p>
                    <input type="file" multiple onChange={handleFileChange} accept="image/*" />
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    <div className="mt-3">
                        {photos.length === 5 && photos.map((photo, index) => (
                            <img key={index} src={URL.createObjectURL(photo)}
                                alt={`Upload ${index + 1}`}
                                style={{ width: "100px", height: "100px", margin: "5px" }} />
                        ))}
                    </div>
                </div>
            </div>

            <div className="col-md-5 mx-auto">
                <div className="card p-4 text-center mt-3">
                    <h3>Title and description of your place.</h3>
                    <textarea
                        placeholder="Add a title... (e.g., 'Vacation in Bali')"
                        style={{ height: "80px" }}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
            </div>

            <div className="col-md-5 mx-auto">
                <div className="card p-4 text-center mt-3 mb-3">
                    <h3>Set a day price.</h3>
                    <input type='number' placeholder='Enter the day price'
                        value={price} onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
            </div>

            <div className="d-flex justify-content-center mt-3">
                <button className='bg-danger py-2 text-white border fw-bold mb-3'
                    style={{ width: "500px", borderRadius: "5px" }}
                    onClick={handlePage}
                    disabled={!title || !price || photos.length !== 5}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default AddPhotos;


