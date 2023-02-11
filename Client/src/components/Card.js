import React, { useState } from "react";
import { useNavigate} from 'react-router-dom';

const Card = ({ property }) => {
    const navigate = useNavigate();
    const [favorite, setFavorite] = useState(false);
    const [viewbox, setviewbox] = useState(false);
    function addFavorites() {
        setFavorite(true);
    }
    function removeFavorites(id) {
        setFavorite(false);
        const fav_ids = JSON.parse(localStorage.getItem('favorite_ids'))
        const f = fav_ids.filter(f => f != id)
        localStorage.setItem('favorite_ids', JSON.stringify(f))
        
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
                <button onClick={() => removeFavorites(property.id)} className="btn bg-danger btn-sm mx-1 text-white">Remove Favorites</button>
                
                  <button 
                onClick={() => navigate("/addreviews")}
                type="button" className="btn btn-primary bg-primary btn-sm" ><span><i
                  className="bi bi-heart-fill me-1 rounded"></i></span>Add Review</button>
              </div>
            </div>
          </div>
        </div>
        <div>
        </div>
      </div>
    );
}
export default Card;