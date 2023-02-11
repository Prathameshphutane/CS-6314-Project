import React from "react";
import { NavLink } from 'react-router-dom';
import {useNavigate} from "react-router";
  
// Import Bootstrap
import { Nav, Navbar, Container, Row, Col } 
        from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
  
// Import Custom CSS
import "./host.css";
  
// Import from react-router-dom
import { BrowserRouter as Router, Routes,
    Route, Link } from "react-router-dom";
  
// Import other React Component
import FooterPage from "./FooterPage";
  

import { useState, useEffect } from "react";
import axios from "axios";


/*export const deleteProperty = (id) =>
{
  fetch("http://localhost:3000/properties/delete"+id, {
    method: 'DELETE'
  })
  .then(response => response.json())
  .catch(e => {
    console.log("error",e)
  })
}*/

 function HostPage() {
  const [properties, setProperty] = useState([]);

  useEffect(() => {
    getProperties();
  }, []);

  const getProperties = async () => {
    const response = await axios.get("http://localhost:3000/properties/property");
    setProperty(response.data);
  };  

  const deleteProperty = id => {

    fetch("http://localhost:3000/properties/delete/"+id, {
      method: 'DELETE'
    })
    .then(res => res.text())
    .then(
      (result) => {
        window.alert("Property deleted");
        getProperties();
      }
    )
  }

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
           <NavLink className="nav-link" to="/"> LogOut </NavLink>
         </li>
         <li className="nav-item ms-auto">
           <a className="nav-link" href="#"> Help </a>
         </li>
       </ul>
     </div>
   </nav>
    <div className="columns is-justify-content-center pt-5 mt-5">
      <div className="column is-half">
        <Link to="/hostPage/add" className="btn btn-primary">
        Add New Property
        </Link>
      </div>
    </div>
    <div className="row row-cols-1 row-cols-md-2 g-4">
    {properties.map((property, index)=>(
    <article key={property._id} className="column is-4">
    <div className="col">
    <div className="card">
      <img src={property.img_url} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{property.title}</h5>
        <p className="card-text">{property.description}</p>
        <p className="card-text">{property.nightlyfee} </p>
      </div>
      <div>
        <Link
              to={'/hostPage/update/'+property._id}
              className="btn btn-primary"
            >
            Update Property
            </Link>
            &nbsp;
            &nbsp;
            <button type="submit" onClick={() => deleteProperty(property._id)}> Delete </button>
        </div>
    </div>
  </div>
  </article>
  ))}
    </div>

    </div>
  )}
    
  
export default HostPage;