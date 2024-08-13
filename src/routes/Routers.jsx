import React from 'react';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import MiembrosOptic from '../players/OpticMembers';
import Service from '../pages/Service';
import Error from '../pages/Error';
import { Routes, Route } from 'react-router-dom';
import FazeMembers from '../players/FazeMembers';
// import Standings from '../pages/Standings';
import Standings from '../components/standings';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/service" element={<Service />} />
      <Route path="/standings" element={<Standings />} />
      <Route path="/miembrosOptic" element={<MiembrosOptic />} />
      <Route path="/fazeMembers" element={<FazeMembers />} />
      

      <Route path="/*" element={<Error />} />
    </Routes>
  );
};

export default Routers;
