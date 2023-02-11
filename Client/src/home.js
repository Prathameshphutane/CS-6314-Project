import './App.css';
import React,{useState, useEffect} from 'react';
import TutorList from './components/TutorList';
import HeaderPage from './components/HeaderPage';	
import FooterPage from './components/FooterPage';
import AddFavourites from './components/AddFavourites';
import RemoveFavourites from './components/RemoveFavourites';
import {useLocation, useNavigate} from "react-router";
import ShowTutors from './components/ShowTutors';
import FavouriteTutor from './components/FavouriteTutor';
//import CreateTutor from './components/CreateTutor';
//import AddTutor from './components/AddTutor';
import { Container } from "react-bootstrap"
import SignUp from './components/Authentication/SignUp';
function Home(){
  const navigate = useNavigate();
  const location = useLocation();
  const [tutors, setTutors] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  //http://localhost:3000/tutors
  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:3000/tutors', {
      headers:{
        'Content-Type' : 'application/json',
        'Accept':'application/json'
      }
    })
    .then(res => res.json())
    .then((data) => {
      //this.setState({tutors: data})
      setTutors(data);
      setLoading(false);
    })
    .catch((error) => {
      console.log(error.message);
      setError(error);
      setLoading(false);
    })
  },[]);
  { tutors.map( (tutor, id) => ( console.log("home list"+tutor.working_hours)))};
    const addFavouriteTutor = (tutor) => {
        const newFavouriteList = [...favourites, tutor];
        setFavourites(newFavouriteList);
    }

    const removeFavouriteMovie = (tutor) => {
      const newFavouriteList = favourites.filter(
        (favourite) => favourite._id !== tutor._id
      );
  
      setFavourites(newFavouriteList);
    };
  

    if(location.state?.from){
      navigate(location.state.from);
    }

    if(isLoading){
        return(
          <div>Loading.....</div>
        );

    }
    else if(error){
      return(
        <div>Error: {error.message}</div>
      );
    }
    else{
      return(
        <div className='wrap'>
            

            
             <TutorList tutorlist = {tutors} handleFavouritesClick={addFavouriteTutor} favouriteComponent = {AddFavourites}/>
          
             <FavouriteTutor tutors={favourites} handleFavouritesClick={removeFavouriteMovie} removeFavouriteComponent={RemoveFavourites} />
             
             <FooterPage></FooterPage>	
             
  
        </div>

      );
    }
  
   
  
}

export default Home;


/*import './App.css';
import React,{useState, useEffect} from 'react';
import TutorList from './components/TutorList';
import HeaderPage from './components/HeaderPage';	
import FooterPage from './components/FooterPage';
import AddFavourites from './components/AddFavourites';
import {useLocation, useNavigate} from "react-router";
//import ShowTutors from './components/ShowTutors';
//import CreateTutor from './components/CreateTutor';
//import AddTutor from './components/AddTutor';
import { Container } from "react-bootstrap"
import SignUp from './components/Authentication/SignUp';
function Home(){
  const navigate = useNavigate();
  const location = useLocation();
  const [tutors, setTutors] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  //http://localhost:3000/tutors
  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:3000/tutors', {
      headers:{
        'Content-Type' : 'application/json',
        'Accept':'application/json'
      }
    })
    .then(res => res.json())
    .then((data) => {
      //this.setState({tutors: data})
      console.log(data);
      setTutors(data);
      setLoading(false);
    })
    .catch((error) => {
      console.log(error.message);
      setError(error);
      setLoading(false);
    })
  },[]);

    const addFavouriteTutor = (tutor) => {
        const newFavouriteList = [...favourites, tutor];
        setFavourites(newFavouriteList);
    }

    if(location.state?.from){
      navigate(location.state.from);
    }

    if(isLoading){
        return(
          <div>Loading.....</div>
        );

    }
    else if(error){
      return(
        <div>Error: {error.message}</div>
      );
    }
    else{
      return(
        <div className="wrapper">
            


             <TutorList tutorlist = {tutors} handleFavouritesClick={addFavouriteTutor} favouriteComponent = {AddFavourites}/>
             
             
             <FooterPage></FooterPage>	
        </div>
       
      );
    }
  
   
  
}

export default Home;
*/