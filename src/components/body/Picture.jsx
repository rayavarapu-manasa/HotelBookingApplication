import React, { useState, useEffect } from 'react';
import './Picture.css';
import Navbar from '../navbar/Navbar';


function Picture() {
  const [showFirstImage, setShowFirstImage] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstImage((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className='container-fluid py-3 '>
        <div className='row'>
          <div className='col-12'>

            <div className="picture-container ">
              <img
                src="https://www.usatoday.com/gcdn/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg"
                alt="Landscape 1"
                className={`picture ${showFirstImage ? 'visible' : 'hidden'}`}
              />
              <img
                src="https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWx8ZW58MHx8MHx8fDA%3D"
                alt="Landscape 2" width="86%"
                className={`picture ${!showFirstImage ? 'visible' : 'hidden'}`}
              />
            </div>
          </div></div>
      </div>
    </>
  );
}

export default Picture;
