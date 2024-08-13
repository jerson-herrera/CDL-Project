import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import '../styles/logos/opticLogo.css';
import '../styles/cards/opticCards/opticMembers.css';
import '../styles/cards/opticCards/opticCards.css';
import OpticCards from '../cards/opticCards';

const MiembrosOptic = () => {
  return (
    <div>
      <h1 className='h1Optic'>OPTIC TEXAS PLAYERS</h1>
      <div className="imagenes card-containeroptic">
        <OpticCards />
      </div>
    </div>
  );
}

export default MiembrosOptic;

