import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '@fortawesome/fontawesome-free/css/all.css';
import logo from './logo.svg';
import './App.css';
import AOS from './AosInit';
import './assets/css/style.css';
import Header from './component/Header';
import Home from './pages/Home';
import Footer from './component/Footer';

import Services from './component/Services';
import Portfolio from './pages/Portfolio';
import Solutions from './component/Solutions';
import Gingko from './component/Gingko';
import Atms from './component/Atms';
import Stulyfe from './component/Stulyfe';
import Genie from './component/Genie';

function App() {

  const [load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(false);
  }, [])

  return (
    <div className='overflow-hidden '>
      {/* <!-- Spinner Start --> */}
      {load == true && (<>
        <div id="spinner"
          className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
          <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }}></div>
        </div>
        {/* <!-- Spinner End --> */}
      </>)}
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/gingko_project' element={<Gingko />} />
          <Route path='/atms_project' element={<Atms />} />
          <Route path='/stulyfe_project' element={<Stulyfe />} />
          <Route path='/genie_project' element={<Genie />} />
          <Route path='/webdev' element={<Services />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/crm' element={<Solutions />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
