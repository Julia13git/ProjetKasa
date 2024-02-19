import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import Home from './pages/Home'
// import Header from './components/Header'
// import Footer from './components/Footer'
// import './styles/scss/index.scss'
import {RouterProvider } from "react-router-dom";
import router from './Router'


ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
   {/* <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />       
      </Routes>
      <Footer />
    </Router> */}
  </React.StrictMode>,
  document.getElementById('root')
)


