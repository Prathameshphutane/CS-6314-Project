import './App.css';
import React,{useState, useEffect} from 'react';
//import TutorList from './components/TutorList';
import HeaderPage from './components/HeaderPage';	
import FooterPage from './components/FooterPage';
import { useParams } from 'react-router-dom';
import ShowTutorDetail from './components/ShowTutorDetail';
function Details(){
  const [tutors, setTutors] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  let {id} = useParams();
  console.log(id);

  //http://localhost:3000/tutors
  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:3000/tutors/'+id, {
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
             <ShowTutorDetail tutorlist = {tutors} />
             <FooterPage></FooterPage>	
        </div>
       
      );
    }
  
   
  
}

export default Details;
