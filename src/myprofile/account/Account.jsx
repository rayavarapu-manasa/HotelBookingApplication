// import React from 'react';
// import ProfileNavbar from '../profilenavbar/ProfileNavbar';
// import { Link } from 'react-router-dom'; 

// function Account() {
//   return (
//     <div>
//       <ProfileNavbar />
//       <div className="container mt-5 mb-5">
//         <div className="card p-4 shadow" style={{ width: '40%', height: '200px' }}>
//           <Link to="/personal-info" className="text-decoration-none">
//             <h3 className="text-center text-dark d-flex align-items-center justify-content-center p-5" style={{ height: '100%' }}>
//               Personal Info
//             </h3>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Account;

import React from 'react';
import ProfileNavbar from '../profilenavbar/ProfileNavbar';
import { Link } from 'react-router-dom'; 

function Account() {
  return (
    <div>
      <ProfileNavbar />
      <div className="container mt-5 mb-5">
        <div className="card p-4 shadow" style={{ width: '40%', height: '200px' }}>
          <Link to="/personal-info" className="text-decoration-none">
            <h3 className="text-center text-dark d-flex align-items-center justify-content-center p-5" style={{ height: '100%' }}>
              Personal Info
            </h3>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Account;
