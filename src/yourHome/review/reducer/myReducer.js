const initialState = {
    address: JSON.parse(sessionStorage.getItem("address")) || {},     
    placeDetails: JSON.parse(sessionStorage.getItem("placeDetails")) || {},
    details: JSON.parse(sessionStorage.getItem("details")) || {},
    photoDetails: JSON.parse(sessionStorage.getItem("photoDetails")) || {}
};

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SAVE_ADDRESS":
            sessionStorage.setItem("address", JSON.stringify(action.payload));
            return { ...state, address: action.payload };

        case "SAVE_PLACE_DETAILS":
            sessionStorage.setItem("placeDetails", JSON.stringify(action.payload));
            return { ...state, placeDetails: action.payload };

        case "BASIC_PLACE_DETAILS":
            sessionStorage.setItem("details", JSON.stringify(action.payload));
            return { ...state, details: action.payload };

        case "BASIC_PHOTOS_DETAILS":
            sessionStorage.setItem("photoDetails", JSON.stringify(action.payload));
            return { ...state, photoDetails: action.payload };

        default:
            return state;
    }
};

export default myReducer;
