import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import FooterPage from './FooterPage';
import {useNavigate} from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dynamic from './Dynamic'
//import logo from '../images/blackT.png';
function WelcomeCustomer() {
    const navigate = useNavigate();
  return (
    <div10>
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
              <NavLink className="nav-link" to="/"> LogOut </NavLink>
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
          <Link to="/favourite">Favourites</Link>
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
        </div></header>
        </div>

        <div>
        <div id='root'></div>
        <Dynamic />
        <br />
      </div>

      

      <div className='reviewcards'>
        <h3 style={{margin: '20px'}}> Our Reviews </h3>
        <div className="row">
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <p className="card-text">" Our experience with Home stays was fantastic. Definitely has the high-end feel that we were looking for." </p>
                <h5> John Cole </h5>
                <h6> Texas, United States </h6>
                <br />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star" /> 
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <p className="card-text">"My experience with Home stays has exceeded all expectations. 
                  The company offers impeccable service and support, and has helped me every step of the way. 
                  They are always one step ahead. I had highly recommend any of my colleagues or professionals to connect with Home stays." </p>
                <h5> Barry Wright </h5>
                <h6> New York City, United States </h6>
                <br />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" /> 
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <p className="card-text">"Home stays was the #1 reason for my record-breaking year. My clients are always telling me that they found me from my website. It’s very important that you’re out there and can be seen. They know real estate, and they know what our audience wants.
                  I could not ask for more" </p>
                <h5> Jade Mills </h5>
                <h6> Washington, D.C. </h6>
                <br />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" /> 
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <p className="card-text">"Best User-friendly and informative website I have come across. It offers huge variety of property types and at much affordable rates. A must experience service from Home stays!!" </p>
                <h5> William Dias </h5>
                <h6> Los Angeles, United States </h6>
                <br />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star" /> 
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
      <FooterPage/>
     </div10>
    );
}

export default WelcomeCustomer;
