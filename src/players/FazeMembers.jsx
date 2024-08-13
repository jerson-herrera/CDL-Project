import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import '../styles/logos/fazeLogo.css';
import "../styles/cards/fazeCards/fazeMembers.css";
import '../styles/cards/fazeCards/fazeCards.css';
import FazeCards from '../cards/fazeCards';

const MiembrosFaze = () => {
  return (
    <div>
      <h1 className='h1Faze'>ATLANTA FAZE PLAYERS</h1>
      <div className="imagenes card-containerfaze">
        <FazeCards />
      </div>
    </div>
  );
}

export default MiembrosFaze;

