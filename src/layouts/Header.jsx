// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import BurguerButtom from "./BurguerButtom";
// import BgDiv from "./BgDiv";
// import { cdlLogo } from "../assets/header/socialIndex";

// const Navbar = () => {
//   const [clicked, setClicked] = useState(false);
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
//   // const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

//   useEffect(() => {
//     function handleResize() {
//       setIsMobile(window.innerWidth <= 768);
//       // setIsMobile(window.innerWidth <= 768);
//       if (window.innerWidth > 768) {
//       // if (window.innerWidth > 768) {
//         setClicked(false);
//       }
//     }
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const handleClick = () => {
//     if (isMobile) {
//       setClicked(!clicked);
//     }
//   };

//   return (
//     <nav className="Navbar">
//       <Link to="/">
//         <img src={cdlLogo} alt="Logo" className="logoCdl" />
//       </Link>
//       <ul className={`items ${clicked ? "active" : ""}`}>
//         <li>
//           <Link onClick={handleClick} to="/">Home</Link>
//         </li>
//         <li>
//           <Link onClick={handleClick} to="/service">Service</Link>
//         </li>
//         <li>
//           <Link onClick={handleClick} to="/contact">Contact</Link>
//         </li>
//         <li>
//           <Link onClick={handleClick} to="/standings">Standings</Link>
//         </li>
//         {/* otras opciones de navegación */}
//       </ul>

//       <div className="burguer">
//         <BurguerButtom clicked={clicked} handleClick={handleClick} />
//       </div>
//       <BgDiv className={`initial ${clicked ? 'active' : ''}`}></BgDiv>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BurguerButtom from "./BurguerButtom";
import BgDiv from "./BgDiv";
import { cdlLogo } from "../assets/header/socialIndex";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setClicked(false); // Resetea el estado cuando se cambia a escritorio
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = () => {
    if (isMobile) {
      setClicked(!clicked);
    }
  };

  return (
    <nav className="Navbar">
      <Link to="/">
        <img src={cdlLogo} alt="Logo" className="logoCdl" />
      </Link>
      <ul className={`items ${clicked ? "active" : ""}`}>
        <li>
          <Link onClick={handleClick} to="/">Home</Link>
        </li>
        {/* <li>
          <Link onClick={handleClick} to="/service">Service</Link>
        </li>
        <li>
          <Link onClick={handleClick} to="/contact">Contact</Link>
        </li> */}
        <li>
          <Link onClick={handleClick} to="/standings">Standings</Link>
        </li>
      </ul>

      <div className="burguer">
        <BurguerButtom clicked={clicked} handleClick={handleClick} />
      </div>
      <BgDiv className={clicked ? 'active' : ''} />
    </nav>
  );
};

export default Navbar;
