import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import '../styles/headFoot/header.css' 
import { opticLogo } from '../assets/Optic/opticIndex';
import { fazeLogo } from '../assets/fazeImgs/fazeIndex';

function Home() {
  return (
    <div className='team-logos'>
      <h1>CALL OF DUTY LEAGUE TEAMS</h1>

      <Link to="/miembrosOptic">
        <Logo 
        imageUrl={opticLogo} 
        alt="Logo de optix texas" 
        className="logo-optic"/>
      </Link>
      

      <Link to="/fazeMembers">
        <Logo imageUrl={fazeLogo} alt="Logo de atlanta faze" className="logo-faze" />
      </Link>
    </div>
  );
}

export default Home;




