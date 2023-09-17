import React from 'react';
import { Route, Routes } from 'react-router-dom'
import { Navbar } from './Components/Navbar/navbar';
import { Footer } from './Components/Footer/footer';
import { Home } from './Home/home'
import { Sobre_Nos } from './Sobre_Nos/sobre_nos'
import { Apoie } from './Apoie/Apoie'

function AppRouter() {
  return (
        <React.Fragment>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/SobreNos" element={<Sobre_Nos />} />
            <Route path="/Apoie" element={< Apoie/>} />
          </Routes>
          <Footer />
        </React.Fragment>      
  );
}

export default AppRouter;
