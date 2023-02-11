import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams, NavLink } from 'react-router-dom';
import axios from 'axios';
import Card from "./Card";

function Reviews() {
    const [properties, setProperties] = useState([]);
    useEffect(() => {
        const properties = JSON.parse(localStorage.getItem('properties_data'))
      
      const favorite_ids = JSON.parse(localStorage.getItem('favorite_ids'))
      const f = properties.filter(p => favorite_ids.includes(p.id))
      setProperties(f)
      console.log(properties)
      getProperties();
    }, []);

    const getProperties = async () => {
      const response = await axios.get("http://localhost:3000/reviews");
      setProperties(response.data);
    }


    return (
        <div>
          <h1 >Review of selected property: </h1>
            <div className="wrapper">
            
                <div id="content" className="container" >
                   
                    <div>
                        
                        <br></br>
                        <h1>Rating</h1>
                    </div >
                    {
                      properties.map((p, i) => (
                        <Card property={p} />
                      ))
                    }
                </div>
            </div>

           
        </div>




    );
}
export default Reviews;






