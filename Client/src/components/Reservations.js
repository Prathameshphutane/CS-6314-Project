
import React from 'react';
import {useEffect, useState} from 'react';

function FilterablePropertyList({ properties }) {
    const [filterText, setFilterText] = useState('');
  
    return (
      <div>
        <PropertyList 
          properties={properties} 
          filterText={filterText} />
      </div>
    );
  }

  function PropertyRow({ property }) {
    return (
        <div className="col-sm-3">
          <div className="cardproperty">
              <img src={property.img} className="card-img-top"/>
            <div className="card-body">
              <h5 className="card-title">{property.title}</h5>
            {property.city}
            <br></br>
            {property.location}
            <br></br>
            {property.nightlyfee}
            <div className="row text-center">
              <div className="btn-group p-0" role="group">
                <button type="button" className="btn btn-primary bg-primary btn-sm "><span><i
                  className="bi bi-printer-fill me-1 rounded"></i></span>View</button>
                <button type="button" className="btn bg-danger btn-sm mx-1 text-white"><span><i
                  className="bi bi-heart-fill me-1 rounded"></i></span>Favorite</button>
                <button type="button" className="btn bg-secondary btn-sm text-white"><span><i
                  className="bi bi-heart-fill me-1 rounded"></i></span>Book</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    );
  }

  function PropertyList({ properties, filterText}) {
    const property_rows = [];
    properties.forEach((property) => {
      if ((property.title.toLowerCase().indexOf(filterText.toLowerCase()) === -1)) {
        return;
      }
      property_rows.push(
        <PropertyRow
          property={property}
          key={property.title} />
      );
    });
  
    return (
      <div className="card-body">
        <h3 style={{margin: '20px'}}>List of Properties</h3>
        <div className="row row-cols-1 row-cols-md-3 g-4">
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
        <div className="card">
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
  useEffect( () => {
  const url = "properties.json"; 
  fetch(url)
  .then( resp => resp.json() )
  .then( data => setProperties(data))
  .catch( err => console.error(err));
 },[]);     

      // <Hero />
return (
  
    //<div className="row mt-2">
      //  {cards}
    //</div>
    <main>
        <FilterablePropertyList properties = {properties} />
    </main>
      
)
}