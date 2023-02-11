import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const AddProperty = () => {
    const[data, setProperty] = useState({
        title:'',
        description:'',
        amenities:'',
        location:'',
        cleaningfee:'',
        servicefee:'',
        nightlyfee:'',
        bedrooms:'',
        img_url:''

    })
    
    const navigate = useNavigate();
    const updateValue = (e)=>{
        
        setProperty({...data, [e.target.id] : e.target.value});
    }
    
    const submitData = (e) => {
        e.preventDefault()
        const dataProperty = {
            title: data.title,
            description: data.description,
            amenities: data.amenities,
            location: data.location,
            cleaningfee: data.cleaningfee,
            servicefee: data.servicefee,
            nightlyfee: data.nightlyfee,
            bedrooms: data.bedrooms,
            img_url: "006.jpg"
            
        }
        fetch("http://localhost:3000/properties",{
            method:'POST',
            headers : { 
                'Content-Type': 'application/json',
                 'Accept': 'application/json'
              },
            body:JSON.stringify(dataProperty)
        })
        .then(response => response.json())
        .then(window.alert("Property added successfully"))
        .then(navigate("/hostPage"))
        .catch(e => {
            console.log("e",e)
        })
        
    }
  return (
    <div>
      <section className="signup">
        <form onSubmit={submitData}>
          <div className="field">
            <label className="label" for="title">Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                id="title"
                describedby="title"
                onChange={updateValue}
                placeholder="Name"
              />
            </div>
          </div>
          <div className="field">
            <label className="label" for="description">Description</label>
            <div className="control">
              <input
                type="text"
                className="input"
                id="description"
                describedby="description"
                onChange={updateValue}
                placeholder="Description"
              />
            </div>
          </div>
          <div className="field">
            <label className="label" for="amenities">Amenities</label>
            <div className="control">
              <input
                type="text"
                className="input"
                id="amenities"
                describedby="amenities"
                onChange={updateValue}
                placeholder="Amenities"
              />
            </div>
          </div>
          <div className="field">
            <label className="label" for="location">Location</label>
            <div className="control">
              <input
                type="text"
                className="input"
                id="location"
                describedby="location"
                onChange={updateValue}
                placeholder="Location"
              />
            </div>
          </div>
          <div className="field">
            <label className="label" for="cleaningfee">Cleaning fee</label>
            <div className="control">
              <input
                type="text"
                className="input"
                id="cleaningfee"
                describedby="cleaningfee"
                onChange={updateValue}
                placeholder="Cleaning fee"
              />
            </div>
          </div>
          <div className="field">
            <label className="label" for="servicefee">Service Fee</label>
            <div className="control">
              <input
                type="text"
                className="input"
                id="servicefee"
                describedby="servicefee"
                onChange={updateValue}
                placeholder="Service fee"
              />
            </div>
          </div>
          <div className="field">
            <label className="label" for="nightlyfee">Nightly fee</label>
            <div className="control">
              <input
                type="text"
                className="input"
                id="nightlyfee"
                describedby="nightlyfee"
                onChange={updateValue}
                placeholder="Nightly fee"
              />
            </div>
          </div>
          <div className="field">
            <label className="label" for="bedrooms">Bedrooms</label>
            <div className="control">
              <input
                type="number"
                className="input"
                id="bedrooms"
                describedby="bedrooms"
                onChange={updateValue}
                placeholder="Bedrooms"
              />
            </div>
          </div>
          <div className="field">
            <label className="label" for="img_url">Image</label>
            <div className="control">
              <input
                type="file"
                className="input"
                id="img_url"
                describedby="img_url"
                onChange={updateValue}
                placeholder="Image"
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
        </section>
    </div>
  );
};

/*const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Male");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/users", {
        name,
        email,
        gender,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5">
      <div className="column is-half">
        <form onSubmit={saveUser}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Gender</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
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
};*/

export default AddProperty;