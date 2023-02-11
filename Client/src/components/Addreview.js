import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams, NavLink } from 'react-router-dom';
// Import Bootstrap
import { Nav, Navbar, Container, Row, Col }   from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
  
// Import Custom CSS
import "./host.css";
  
// Import from react-router-dom
import { BrowserRouter as Router, Routes,
    Route} from "react-router-dom";
  
// Import other React Component
import FooterPage from "./FooterPage";
import axios from 'axios';
import Card from "./Card";

const Addreview = () => {
    const[data, setRating] = useState({
        reviewer_first_name:'',
        reviewer_last_name:'',
        rating:'',
        comment:''
        

    })
    
    const navigate = useNavigate();
    const updateValue = (e)=>{
        
        setRating({...data, [e.target.id] : e.target.value});
    }
    
    const submitData = (e) => {
        e.preventDefault()
        const dataRating = {
            reviewer_first_name: data.reviewer_first_name,
            reviewer_last_name: data.reviewer_last_name,
            rating: data.rating,
            comment: data.comment           
            
        }
        fetch("http://localhost:3000/reviews",{
            method:'POST',
            headers : { 
                'Content-Type': 'application/json',
                 'Accept': 'application/json'
              },
            body:JSON.stringify(dataRating)
        })
        .then(response => response.json())
        .then(window.alert("Review added successfully"))
        .then(navigate("/reviews"))
        .catch(e => {
            console.log("e",e)
        })
   
        
    }
    return (
        <div className="columns mt-5">
      <div className="column is-half">
        <form onSubmit={submitData}>
        <div className="field">
            <label className="label">First Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                id="reviewer_first_name"
                describedby="reviewer_first_name"
                onChange={updateValue}
                placeholder="FirstName"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Last Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                id="reviewer_last_name"
                describedby="reviewer_last_name"
                onChange={updateValue}
                placeholder="LastName"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Rate Property</label>
            <div className="control">
              <input
                type="text"
                className="input"
                id="rating"
                describedby="rating"
                onChange={updateValue}
                placeholder="Rating"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Add Comments</label>
            <div className="control">
              <input
                type="text"
                className="input"
                id="comment"
                describedby="comment"
                onChange={updateValue}
                placeholder="Comment"
              />
            </div>
          </div>
         
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    );
}
export default Addreview;






