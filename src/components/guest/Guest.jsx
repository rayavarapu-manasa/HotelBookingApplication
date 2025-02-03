// // import React, { useEffect, useState } from "react";
// // import { Button, InputGroup, FormControl } from "react-bootstrap";

// // const Guest = () => {


// //   // console.log(onGuestUpdate);

// //   const [adults, setAdults] = useState(0);
// //   const [children, setChildren] = useState(0);
// //   const [infants, setInfants] = useState(0);
// //   const [pets, setPets] = useState(0);

// //   console.log(adults);

// //   // const handleIncrease = (category) => {
// //   //   if (category === "adults" && adults < 16) {
// //   //     setAdults(adults + 1);
// //   //   } else {
// //   //     if (adults === 0) setAdults(1); // Ensure adults is at least 1
// //   //     if (category === "children" && adults + children < 16) setChildren(children + 1);
// //   //     if (category === "infants" && infants < 5) setInfants(infants + 1);
// //   //     if (category === "pets" && pets < 5) setPets(pets + 1);
// //   //   }
// //   // };

// //   // const handleDecrease = (category) => {
// //   //   if (category === "adults" && adults > 0) setAdults(adults - 1);
// //   //   if (category === "children" && children > 0) setChildren(children - 1);
// //   //   if (category === "infants" && infants > 0) setInfants(infants - 1);
// //   //   if (category === "pets" && pets > 0) setPets(pets - 1);
// //   // };


// //   const handleIncrease = (category) => {
// //     if (category === "adults" && adults < 16) {
// //       setAdults(adults + 1);
// //     } else {
// //       if (adults === 0) setAdults(1); // Ensure adults is at least 1
// //       if (category === "children" && adults + children < 16) setChildren(children + 1);
// //       if (category === "infants" && infants < 5) setInfants(infants + 1);
// //       if (category === "pets" && pets < 5) setPets(pets + 1);
// //     }
// //   };

// //   const handleDecrease = (category) => {
// //     if (category === "adults" && adults > 0) {
// //       setAdults(adults - 1);
// //     } else if (category === "children" && children > 0) {
// //       setChildren(children - 1);
// //     } else if (category === "infants" && infants > 0) {
// //       setInfants(infants - 1);
// //     } else if (category === "pets" && pets > 0) {
// //       setPets(pets - 1);
// //     }
// //   };

// //   const allOthersAreZero = () => children === 0 && infants === 0 && pets === 0;


// //   // React.useEffect(() => {
// //   //   onGuestUpdate({ adults, children, infants, pets });
// //   // }, [adults, children, infants, pets]);

// //   useEffect(() => {
// //     setAdults(adults);
// //     setChildren(children);
// //     setInfants(infants);
// //     setPets(pets);
// //   }, [])




// //   return (
// //     <div
// //       className="container mt-5 ms-auto"
// //       style={{
// //         maxWidth: "100%",
// //         width: "400px",
// //       }}
// //     >
// //       <div className="bg-white shadow-sm p-4 rounded border border-black">
// //         {/* Adults */}
// //         <div className="d-flex justify-content-between align-items-center mb-3">
// //           <div>
// //             <p className="mb-1 fw-bold">Adults</p>
// //             <p className="text-muted small">Ages 13 or above</p>
// //           </div>
// //           <div>
// //             <InputGroup className="d-flex align-items-center">
// //               <Button
// //                 variant="outline-secondary"
// //                 className="rounded-circle fw-bold"
// //                 onClick={() => handleDecrease("adults")}
// //                 disabled={adults === 0 || (adults === 1 && !allOthersAreZero())}
// //                 style={{
// //                   opacity: adults === 0 || (adults === 1 && !allOthersAreZero()) ? 0.4 : 1,
// //                   cursor: adults === 0 || (adults === 1 && !allOthersAreZero()) ? "not-allowed" : "pointer",
// //                 }}
// //               >
// //                 -
// //               </Button>
// //               <FormControl
// //                 type="number"
// //                 value={adults}
// //                 readOnly
// //                 className="text-center border-0 bg-white mx-2"
// //                 style={{ width: "55px" }}
// //               />
// //               <Button
// //                 variant="outline-secondary"
// //                 className="rounded-circle"
// //                 onClick={() => handleIncrease("adults")}
// //                 disabled={adults + children === 16}
// //                 style={{
// //                   opacity: adults + children >= 16 ? 0.4 : 1,
// //                   cursor: adults + children >= 16 ? "not-allowed" : "pointer",
// //                 }}

// //               >
// //                 +
// //               </Button>
// //             </InputGroup>
// //           </div>
// //         </div>

// //         {/* Children */}
// //         <div className="d-flex justify-content-between align-items-center mb-3">
// //           <div>
// //             <p className="mb-1 fw-bold">Children</p>
// //             <p className="text-muted small">Ages 2–12</p>
// //           </div>
// //           <div>
// //             <InputGroup className="d-flex align-items-center">
// //               <Button
// //                 variant="outline-secondary"
// //                 className="rounded-circle"
// //                 onClick={() => handleDecrease("children")}
// //                 disabled={children === 0}
// //                 style={{
// //                   opacity: children === 0 ? 0.4 : 1,
// //                   cursor: children === 0 ? "not-allowed" : "pointer",
// //                 }}
// //               >
// //                 -
// //               </Button>
// //               <FormControl
// //                 type="number"
// //                 value={children}
// //                 readOnly
// //                 className="text-center border-0 bg-white mx-2"
// //                 style={{ width: "55px" }}
// //               />
// //               <Button
// //                 variant="outline-secondary"
// //                 className="rounded-circle"
// //                 onClick={() => handleIncrease("children")}
// //                 disabled={children + adults === 16}
// //                 style={{
// //                   opacity: adults + children >= 16 ? 0.4 : 1,
// //                   cursor: adults + children >= 16 ? "not-allowed" : "pointer",
// //                 }}
// //               >
// //                 +
// //               </Button>
// //             </InputGroup>
// //           </div>
// //         </div>

// //         {/* Infants */}
// //         <div className="d-flex justify-content-between align-items-center mb-3">
// //           <div>
// //             <p className="mb-1 fw-bold">Infants</p>
// //             <p className="text-muted small">Under 2</p>
// //           </div>
// //           <div>
// //             <InputGroup className="d-flex align-items-center">
// //               <Button
// //                 variant="outline-secondary"
// //                 className="rounded-circle"
// //                 onClick={() => handleDecrease("infants")}
// //                 disabled={infants === 0}
// //                 style={{
// //                   opacity: infants === 0 ? 0.4 : 1,
// //                   cursor: infants === 0 ? "not-allowed" : "pointer",
// //                 }}
// //               >
// //                 -
// //               </Button>
// //               <FormControl
// //                 type="number"
// //                 value={infants}
// //                 readOnly
// //                 className="text-center border-0 bg-white mx-2"
// //                 style={{ width: "55px" }}
// //               />
// //               <Button
// //                 variant="outline-secondary"
// //                 className="rounded-circle"
// //                 onClick={() => handleIncrease("infants")}
// //                 disabled={infants === 5}
// //                 style={{
// //                   opacity: infants === 5 ? 0.4 : 1,
// //                   cursor: infants === 5 ? "not-allowed" : "pointer",
// //                 }}
// //               >
// //                 +
// //               </Button>
// //             </InputGroup>
// //           </div>
// //         </div>

// //         {/* Pets */}
// //         <div className="d-flex justify-content-between align-items-center">
// //           <div>
// //             <p className="mb-1 fw-bold">Pets</p>
// //           </div>
// //           <div>
// //             <InputGroup className="d-flex align-items-center">
// //               <Button
// //                 variant="outline-secondary"
// //                 className="rounded-circle"
// //                 onClick={() => handleDecrease("pets")}
// //                 disabled={pets === 0}
// //                 style={{
// //                   opacity: pets === 0 ? 0.4 : 1,
// //                   cursor: pets === 0 ? "not-allowed" : "pointer",
// //                 }}
// //               >
// //                 -
// //               </Button>
// //               <FormControl
// //                 type="number"
// //                 value={pets}
// //                 readOnly
// //                 className="text-center border-0 bg-white mx-2"
// //                 style={{ width: "55px" }}
// //               />
// //               <Button
// //                 variant="outline-secondary"
// //                 className="rounded-circle"
// //                 onClick={() => handleIncrease("pets")}
// //                 disabled={pets === 5}
// //                 style={{
// //                   opacity: pets === 5 ? 0.4 : 1,
// //                   cursor: pets === 5 ? "not-allowed" : "pointer",
// //                 }}
// //               >
// //                 +
// //               </Button>
// //             </InputGroup>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Guest;


// import React, { useState } from "react";
// import { Button, InputGroup, FormControl } from "react-bootstrap";

// const Guest = ({ onGuestUpdate }) => {
//   const [adults, setAdults] = useState(0);
//   const [children, setChildren] = useState(0);
//   const [infants, setInfants] = useState(0);
//   const [pets, setPets] = useState(0);

//   // const handleIncrease = (category) => {
//   //   if (category === "adults" && adults < 16) {
//   //     setAdults(adults + 1);
//   //   } else {
//   //     if (adults === 0) setAdults(1); // Ensure adults is at least 1
//   //     if (category === "children" && adults + children < 16) setChildren(children + 1);
//   //     if (category === "infants" && infants < 5) setInfants(infants + 1);
//   //     if (category === "pets" && pets < 5) setPets(pets + 1);
//   //   }
//   // };

//   // const handleDecrease = (category) => {
//   //   if (category === "adults" && adults > 0) setAdults(adults - 1);
//   //   if (category === "children" && children > 0) setChildren(children - 1);
//   //   if (category === "infants" && infants > 0) setInfants(infants - 1);
//   //   if (category === "pets" && pets > 0) setPets(pets - 1);
//   // };


//   const handleIncrease = (category) => {
//     if (category === "adults" && adults < 16) {
//       setAdults(adults + 1);
//     } else {
//       if (adults === 0) setAdults(1); // Ensure adults is at least 1
//       if (category === "children" && adults + children < 16) setChildren(children + 1);
//       if (category === "infants" && infants < 5) setInfants(infants + 1);
//       if (category === "pets" && pets < 5) setPets(pets + 1);
//     }
//   };

//   const handleDecrease = (category) => {
//     if (category === "adults" && adults > 0) {
//       setAdults(adults - 1);
//     } else if (category === "children" && children > 0) {
//       setChildren(children - 1);
//     } else if (category === "infants" && infants > 0) {
//       setInfants(infants - 1);
//     } else if (category === "pets" && pets > 0) {
//       setPets(pets - 1);
//     }
//   };

//   const allOthersAreZero = () => children === 0 && infants === 0 && pets === 0;


//   React.useEffect(() => {
//     onGuestUpdate({ adults, children, infants, pets });
//   }, [adults, children, infants, pets]);


//   return (
//     <div
//       className="container mt-5 ms-auto"
//       style={{
//         maxWidth: "100%",
//         width: "400px",
//       }}
//     >
//       <div className="bg-white shadow-sm p-4 rounded border border-black">
//         {/* Adults */}
//         <div className="d-flex justify-content-between align-items-center mb-3">
//           <div>
//             <p className="mb-1 fw-bold">Adults</p>
//             <p className="text-muted small">Ages 13 or above</p>
//           </div>
//           <div>
//             <InputGroup className="d-flex align-items-center">
//               <Button
//                 variant="outline-secondary"
//                 className="rounded-circle fw-bold"
//                 onClick={() => handleDecrease("adults")}
//                 disabled={adults === 0 || (adults === 1 && !allOthersAreZero())}
//                 style={{
//                   opacity: adults === 0 || (adults === 1 && !allOthersAreZero()) ? 0.4 : 1,
//                   cursor: adults === 0 || (adults === 1 && !allOthersAreZero()) ? "not-allowed" : "pointer",
//                 }}
//               >
//                 -
//               </Button>
//               <FormControl
//                 type="number"
//                 value={adults}
//                 readOnly
//                 className="text-center border-0 bg-white mx-2"
//                 style={{ width: "55px" }}
//               />
//               <Button
//                 variant="outline-secondary"
//                 className="rounded-circle"
//                 onClick={() => handleIncrease("adults")}
//                 disabled={adults + children === 16}
//                 style={{
//                   opacity: adults + children >= 16 ? 0.4 : 1,
//                   cursor: adults + children >= 16 ? "not-allowed" : "pointer",
//                 }}

//               >
//                 +
//               </Button>
//             </InputGroup>
//           </div>
//         </div>

//         {/* Children */}
//         <div className="d-flex justify-content-between align-items-center mb-3">
//           <div>
//             <p className="mb-1 fw-bold">Children</p>
//             <p className="text-muted small">Ages 2–12</p>
//           </div>
//           <div>
//             <InputGroup className="d-flex align-items-center">
//               <Button
//                 variant="outline-secondary"
//                 className="rounded-circle"
//                 onClick={() => handleDecrease("children")}
//                 disabled={children === 0}
//                 style={{
//                   opacity: children === 0 ? 0.4 : 1,
//                   cursor: children === 0 ? "not-allowed" : "pointer",
//                 }}
//               >
//                 -
//               </Button>
//               <FormControl
//                 type="number"
//                 value={children}
//                 readOnly
//                 className="text-center border-0 bg-white mx-2"
//                 style={{ width: "55px" }}
//               />
//               <Button
//                 variant="outline-secondary"
//                 className="rounded-circle"
//                 onClick={() => handleIncrease("children")}
//                 disabled={children + adults === 16}
//                 style={{
//                   opacity: adults + children >= 16 ? 0.4 : 1,
//                   cursor: adults + children >= 16 ? "not-allowed" : "pointer",
//                 }}
//               >
//                 +
//               </Button>
//             </InputGroup>
//           </div>
//         </div>

//         {/* Infants */}
//         <div className="d-flex justify-content-between align-items-center mb-3">
//           <div>
//             <p className="mb-1 fw-bold">Infants</p>
//             <p className="text-muted small">Under 2</p>
//           </div>
//           <div>
//             <InputGroup className="d-flex align-items-center">
//               <Button
//                 variant="outline-secondary"
//                 className="rounded-circle"
//                 onClick={() => handleDecrease("infants")}
//                 disabled={infants === 0}
//                 style={{
//                   opacity: infants === 0 ? 0.4 : 1,
//                   cursor: infants === 0 ? "not-allowed" : "pointer",
//                 }}
//               >
//                 -
//               </Button>
//               <FormControl
//                 type="number"
//                 value={infants}
//                 readOnly
//                 className="text-center border-0 bg-white mx-2"
//                 style={{ width: "55px" }}
//               />
//               <Button
//                 variant="outline-secondary"
//                 className="rounded-circle"
//                 onClick={() => handleIncrease("infants")}
//                 disabled={infants === 5}
//                 style={{
//                   opacity: infants === 5 ? 0.4 : 1,
//                   cursor: infants === 5 ? "not-allowed" : "pointer",
//                 }}
//               >
//                 +
//               </Button>
//             </InputGroup>
//           </div>
//         </div>

//         {/* Pets */}
//         <div className="d-flex justify-content-between align-items-center">
//           <div>
//             <p className="mb-1 fw-bold">Pets</p>
//           </div>
//           <div>
//             <InputGroup className="d-flex align-items-center">
//               <Button
//                 variant="outline-secondary"
//                 className="rounded-circle"
//                 onClick={() => handleDecrease("pets")}
//                 disabled={pets === 0}
//                 style={{
//                   opacity: pets === 0 ? 0.4 : 1,
//                   cursor: pets === 0 ? "not-allowed" : "pointer",
//                 }}
//               >
//                 -
//               </Button>
//               <FormControl
//                 type="number"
//                 value={pets}
//                 readOnly
//                 className="text-center border-0 bg-white mx-2"
//                 style={{ width: "55px" }}
//               />
//               <Button
//                 variant="outline-secondary"
//                 className="rounded-circle"
//                 onClick={() => handleIncrease("pets")}
//                 disabled={pets === 5}
//                 style={{
//                   opacity: pets === 5 ? 0.4 : 1,
//                   cursor: pets === 5 ? "not-allowed" : "pointer",
//                 }}
//               >
//                 +
//               </Button>
//             </InputGroup>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Guest;


import React, { useState } from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";

const Guest = ({ onGuestUpdate }) => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [pets, setPets] = useState(0);

  // const handleIncrease = (category) => {
  //   if (category === "adults" && adults < 16) {
  //     setAdults(adults + 1);
  //   } else {
  //     if (adults === 0) setAdults(1); // Ensure adults is at least 1
  //     if (category === "children" && adults + children < 16) setChildren(children + 1);
  //     if (category === "infants" && infants < 5) setInfants(infants + 1);
  //     if (category === "pets" && pets < 5) setPets(pets + 1);
  //   }
  // };

  // const handleDecrease = (category) => {
  //   if (category === "adults" && adults > 0) setAdults(adults - 1);
  //   if (category === "children" && children > 0) setChildren(children - 1);
  //   if (category === "infants" && infants > 0) setInfants(infants - 1);
  //   if (category === "pets" && pets > 0) setPets(pets - 1);
  // };


  const handleIncrease = (category) => {
    if (category === "adults" && adults < 16) {
      setAdults(adults + 1);
    } else {
      if (adults === 0) setAdults(1); // Ensure adults is at least 1
      if (category === "children" && adults + children < 16) setChildren(children + 1);
      if (category === "infants" && infants < 5) setInfants(infants + 1);
      if (category === "pets" && pets < 5) setPets(pets + 1);
    }
  };

  const handleDecrease = (category) => {
    if (category === "adults" && adults > 0) {
      setAdults(adults - 1);
    } else if (category === "children" && children > 0) {
      setChildren(children - 1);
    } else if (category === "infants" && infants > 0) {
      setInfants(infants - 1);
    } else if (category === "pets" && pets > 0) {
      setPets(pets - 1);
    }
  };

  const allOthersAreZero = () => children === 0 && infants === 0 && pets === 0;


  React.useEffect(() => {
    onGuestUpdate({ adults, children, infants, pets });
  }, [adults, children, infants, pets]);


  return (
    <div
      className="container mt-5 ms-auto"
      style={{
        maxWidth: "100%",
        width: "400px",
      }}
    >
      <div className="bg-white shadow-sm p-4 rounded border border-black">
        {/* Adults */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>
            <p className="mb-1 fw-bold">Adults</p>
            <p className="text-muted small">Ages 13 or above</p>
          </div>
          <div>
            <InputGroup className="d-flex align-items-center">
              <Button
                variant="outline-secondary"
                className="rounded-circle fw-bold"
                onClick={() => handleDecrease("adults")}
                disabled={adults === 0 || (adults === 1 && !allOthersAreZero())}
                style={{
                  opacity: adults === 0 || (adults === 1 && !allOthersAreZero()) ? 0.4 : 1,
                  cursor: adults === 0 || (adults === 1 && !allOthersAreZero()) ? "not-allowed" : "pointer",
                }}
              >
                -
              </Button>
              <FormControl
                type="number"
                value={adults}
                readOnly
                className="text-center border-0 bg-white mx-2"
                style={{ width: "55px" }}
              />
              <Button
                variant="outline-secondary"
                className="rounded-circle"
                onClick={() => handleIncrease("adults")}
                disabled={adults + children === 16}
                style={{
                  opacity: adults + children >= 16 ? 0.4 : 1,
                  cursor: adults + children >= 16 ? "not-allowed" : "pointer",
                }}

              >
                +
              </Button>
            </InputGroup>
          </div>
        </div>

        {/* Children */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>
            <p className="mb-1 fw-bold">Children</p>
            <p className="text-muted small">Ages 2–12</p>
          </div>
          <div>
            <InputGroup className="d-flex align-items-center">
              <Button
                variant="outline-secondary"
                className="rounded-circle"
                onClick={() => handleDecrease("children")}
                disabled={children === 0}
                style={{
                  opacity: children === 0 ? 0.4 : 1,
                  cursor: children === 0 ? "not-allowed" : "pointer",
                }}
              >
                -
              </Button>
              <FormControl
                type="number"
                value={children}
                readOnly
                className="text-center border-0 bg-white mx-2"
                style={{ width: "55px" }}
              />
              <Button
                variant="outline-secondary"
                className="rounded-circle"
                onClick={() => handleIncrease("children")}
                disabled={children + adults === 16}
                style={{
                  opacity: adults + children >= 16 ? 0.4 : 1,
                  cursor: adults + children >= 16 ? "not-allowed" : "pointer",
                }}
              >
                +
              </Button>
            </InputGroup>
          </div>
        </div>

        {/* Infants */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>
            <p className="mb-1 fw-bold">Infants</p>
            <p className="text-muted small">Under 2</p>
          </div>
          <div>
            <InputGroup className="d-flex align-items-center">
              <Button
                variant="outline-secondary"
                className="rounded-circle"
                onClick={() => handleDecrease("infants")}
                disabled={infants === 0}
                style={{
                  opacity: infants === 0 ? 0.4 : 1,
                  cursor: infants === 0 ? "not-allowed" : "pointer",
                }}
              >
                -
              </Button>
              <FormControl
                type="number"
                value={infants}
                readOnly
                className="text-center border-0 bg-white mx-2"
                style={{ width: "55px" }}
              />
              <Button
                variant="outline-secondary"
                className="rounded-circle"
                onClick={() => handleIncrease("infants")}
                disabled={infants === 5}
                style={{
                  opacity: infants === 5 ? 0.4 : 1,
                  cursor: infants === 5 ? "not-allowed" : "pointer",
                }}
              >
                +
              </Button>
            </InputGroup>
          </div>
        </div>

        {/* Pets */}
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <p className="mb-1 fw-bold">Pets</p>
          </div>
          <div>
            <InputGroup className="d-flex align-items-center">
              <Button
                variant="outline-secondary"
                className="rounded-circle"
                onClick={() => handleDecrease("pets")}
                disabled={pets === 0}
                style={{
                  opacity: pets === 0 ? 0.4 : 1,
                  cursor: pets === 0 ? "not-allowed" : "pointer",
                }}
              >
                -
              </Button>
              <FormControl
                type="number"
                value={pets}
                readOnly
                className="text-center border-0 bg-white mx-2"
                style={{ width: "55px" }}
              />
              <Button
                variant="outline-secondary"
                className="rounded-circle"
                onClick={() => handleIncrease("pets")}
                disabled={pets === 5}
                style={{
                  opacity: pets === 5 ? 0.4 : 1,
                  cursor: pets === 5 ? "not-allowed" : "pointer",
                }}
              >
                +
              </Button>
            </InputGroup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guest;


