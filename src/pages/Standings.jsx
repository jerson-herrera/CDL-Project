import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Asegúrate de importar tus estilos si es necesario
import { standings } from '../assets/standings/standingsIndex'; // Importa la imagen de standings

function Standings() {
  return (
    <div>
      <h1>STANDINGS CDL 2024</h1>
      {/* Renderiza la imagen directamente usando la etiqueta <img> */}
      <Link to="/standings">
        <img src={standings} alt="Standings" className="standing-img" />
      </Link>
    </div>
  );
}

export default Standings;





