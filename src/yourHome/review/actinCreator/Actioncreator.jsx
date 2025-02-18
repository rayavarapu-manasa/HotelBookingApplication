const ActionCreator = (data) => {
    return {
      type: "SAVE_ADDRESS",
      payload: data,
    };
  };
  export const savePlaceDetails=(placeType,guestType)=>{
    return {
      type: "SAVE_PLACE_DETAILS",
      payload: {placeType,guestType},
    };
  }
  export const basicPlaceDetails=(guest,bedrooms,beds,bathrooms,selectedSafetyItems,selectedAmenities)=>{
    return {
      type: "BASIC_PLACE_DETAILS",
      payload: {guest,bedrooms,beds,bathrooms,selectedSafetyItems,selectedAmenities},
    };
  }
  export const basicPhotoDetails=(photos, title, price)=>{
    return {
      type: "BASIC_PHOTOS_DETAILS",
      payload: {photos, title, price},
    };
  }
  
  export default ActionCreator;