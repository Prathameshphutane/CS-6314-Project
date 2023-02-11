/*eslint-disable no-undef*/

import { set } from 'mongoose';
import React from 'react';
import {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import {Routes, Route, useNavigate} from 'react-router-dom';

function FilterablePropertyList({ properties, update_fav_ids }) {
    const [filterText, setFilterText] = useState('');
         

    return (
      <div>
        <SearchBar 
          filterText={filterText}
          onFilterTextChange={setFilterText}  />
        <PropertyList 
          properties={properties} 
          filterText={filterText} 
          update_fav_ids = {update_fav_ids}/>
      </div>
    );
  }

  function PropertyRow({ property ,update_fav_ids}) {
    const [showBox, updateBox] = useState({
      display : false,
      description : "",
      name : "",
      nightlyfee : "",
      cleaningfee : "",
      servicefee : "",
      amenities : "",
      bedrooms : "",
      location : ""
    })
    
    const viewBox = () => {
      const { description,image, name, nightlyfee, cleaningfee, servicefee, amenities,location,bedrooms } = showBox
      return (
        <div className="card border md-2 mt-2 px-2 py-2 ">
          <button onClick = {()=>{updateBox({display : false,})}}type="button" className="closebtn btn bg-secondary btn-sm text-white"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg></button>
              <h5 className="property-title"> { name }</h5>
              <p className="card-text">Description :{ description } </p>
              <p className="card-text">Amenities : { amenities } </p>
              <p className="card-text">Location : { location } </p>
              <p className="card-text">Cleaning fee : { cleaningfee } </p>
              <p className="card-text">Service fee : { servicefee } </p>
              <p className="card-text">Nightly fee : { nightlyfee } </p>
              <p className="card-text"> Bedrooms : {bedrooms }</p>
            </div>
      )
    }
    
    const { display } = showBox
    const navigate = useNavigate();     
    const [favorite, setFavorite] = useState(false);
    
    
 

    async function addFavorites(property_id) {
      setFavorite(true);
      const login_email = localStorage.getItem('login_email');
      const favData = {
        user_id:login_email,
        property_id: property_id
      }
      update_fav_ids(property_id, 'ADD');
      //console.log(fav_ids)

      const res = await fetch("http://localhost:3000/fav",{
        method:'POST',
        headers : { 
          'Content-Type': 'application/json',
           'Accept': 'application/json'
        },
        body:JSON.stringify(favData)
      });
  }
  async function removeFavorites(property_id) {

      setFavorite(false);
      update_fav_ids(property_id, 'REMOVE');
      //console.log(fav_ids)
      // const login_email = localStorage.getItem('login_email');
      // const favData = {
      //   user_id:login_email,
      //   property_id: property_id
      // }
      // update_fav_ids(property_id)
      // const res = await fetch("http://localhost:3000/fav",{
      //   method:'POST',
      //   headers : { 
      //     'Content-Type': 'application/json',
      //      'Accept': 'application/json'
      //   },
      //   body:JSON.stringify(favData)
      // });
  }
    return (
        <div className="col pb-1">
        <div className="card border py-2 rounded-0 cardWidth">
          <div className="container-fluid">
            <div className="row mb-2">
              <img src={property.img} className="img-thumbnail"/>
            </div>
            <div className="row text-center d-flex justify-content-center">
              {property.title}
            </div>
            <br></br>
            {property.location}<br>
            </br>
            {property.nightlyfee}
            
            <div className="row text-center">
              <div className="btn-group p-0" role="group">
                <button onClick = {()=>{updateBox({
                  display : true,
                  name : property.title,
                  image : property.img,
                  description : property.description,
                  nightlyfee : property.nightlyfee,
                  cleaningfee : property.cleaningfee,
                  servicefee : property.servicefee,
                  amenities : property.amenities,
                  location : property.location,
                  bedrooms : property.bedrooms
                })}} type="button" className="btn btn-primary bg-primary btn-sm "><span><i
                  className="bi bi-printer-fill me-1 rounded"></i></span>View</button>
                {(favorite) ? <button onClick={() => removeFavorites(property.id)} className="btn bg-danger btn-sm mx-1 text-white">Remove Favorites</button> :
                            <button onClick={() => addFavorites(property.id)} className="btn bg-danger btn-sm mx-1 text-white">Add Favorites</button>}
                <button 
                onClick={() => navigate("/property")}
                type="button" className="btn bg-secondary btn-sm text-white" ><span><i
                  className="bi bi-heart-fill me-1 rounded"></i></span>Book</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          {display && viewBox()}
        </div>
      </div>
    );
  }
  

  function PropertyList({ properties, filterText, update_fav_ids}) {
    const property_rows = [];
    properties.forEach((property) => {
      if (property.title.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
        return;
      }
      property_rows.push(
        <PropertyRow
          property={property}
          key={property.title} 
          update_fav_ids = {update_fav_ids}
          />
      )
    })
  
    return (
      <div className="card-body">
        <h3 style={{margin: '20px'}}>List of Properties</h3>
        <div className='row row-cols-1 row-cols-md-3 g-4  ' >
            {property_rows}
            </div>
          </div>
    );
  }

  function SearchBar({
    filterText,
    onFilterTextChange
  }) {
    return (
        <div className="card1">
        <div className="card-body">
          <div className="jumbotron d-flex flex-column justify-content-center h-100" style={{top: 0}}>
            <h1 className="display-4"> Find Properties To Stay </h1>
          </div>
          <form className="d-flex">
            <input className="form-control" type="search" placeholder=" City(Houston,etc) or Property(Beach House, etc) " aria-label="Search" value={filterText} onChange={(e) => onFilterTextChange(e.target.value)}  />
            <button type="button" className="btn btn-danger">
              <svg xmlns="http://www.w3.org/2000/svg" width={20} height={30} fill="currentColor" className="bi bi-search" viewBox="0 0 17 17">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    );
  }
  

export default function Dynamic(){
  const [properties, setProperties] = useState([]); 
  const [favorite_ids, setFavorite_ids] = useState(JSON.parse(localStorage.getItem('favorite_ids')));

  const update_favorites = (id, action) =>{
    let f = []
    if(action == 'ADD') {
      //console.log("here")
      f = [...favorite_ids, id]
      //console.log(f);
    } else {
      const fav_ids = JSON.parse(localStorage.getItem('favorite_ids'))
      //console.log(fav_id);
      f = fav_ids.filter(f => f != id)
    }
    setFavorite_ids(f);
  }

  useEffect( () => {

    localStorage.setItem('favorite_ids', JSON.stringify(favorite_ids))
   },[favorite_ids]); 

  useEffect( () => {
  const url = 'http://localhost:3000/welcomecustomer/property'; 
  fetch(url)
  .then( resp => resp.json() )
  .then( data => {
    setProperties(data);
    localStorage.setItem('properties_data',JSON.stringify(data))
  }) 
  .catch( err => console.error(err));


 },[]); 

 
 
return (
  
    //<div className="row mt-2">
      //  {cards}
    //</div>
    <main>
        <FilterablePropertyList properties = {properties} update_fav_ids = {(id,action) => update_favorites(id, action)}/>
    </main>
      
)
}