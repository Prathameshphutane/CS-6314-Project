import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import FooterPage from './FooterPage';
import {useNavigate} from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dynamic from './Dynamic'
//import logo from '../images/blackT.png';
function Welcome() {
    const navigate = useNavigate();
  return (
    <div>
       <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <img src="logo.JPG" width={150} height={60} className="d-inline-block align-top" alt="" />
          <img src="logoName.JPG" width={250} height={60} className="d-inline-block align-top" alt="" />
        </a>
        <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContentMenu" aria-controls="navbarSupportedContentMenu" aria-expanded="false" aria-label="Toggle navigation">
          Account &nbsp;<span className="dropdown-toggle" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContentMenu">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item ms-auto">
              <a className="nav-link" href="#"> Home </a>
            </li>
            <li className="nav-item ms-auto">
              <NavLink className="nav-link" to="/login"> Login </NavLink>
            </li>
            <li className="nav-item ms-auto">
              <NavLink className="nav-link" to="/signup"> SignUp </NavLink>
            </li>
            <li className="nav-item ms-auto">
              <NavLink className="nav-link" to="/hostLogin"> HostLogin </NavLink>
            </li>
            <li className="nav-item ms-auto">
              <a className="nav-link" href="#"> Help </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className='sidebar1'>
      <header>
      <div className="sidenav">
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </div>
        <div className="main">
          <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-interval={3000}>
            <div className="carousel-inner">
              <div className="carousel-item active" style={{backgroundImage: 'url("carousel_img1.jpg")'}}>
                <div className="carousel-caption d-none d-md-block">
                  <h1> We help match tenants looking for a home and landlords with properties </h1>
                </div>
              </div>
            </div>
          </div>
        </div></header></div>
      <FooterPage/>
     </div>
    );
}

export default Welcome;
