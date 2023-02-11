import './App.css';
import React,{useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import SignUp from './components/Authentication/SignUp';
import Login from './components/Authentication/Login';
import Welcome from './components/Welcome';
import HostLogin from './components/Authentication/HostLogin';
import HostSignup from './components/Authentication/HostSignup'
import "bootstrap/dist/css/bootstrap.min.css";
import WelcomeCustomer from './components/WelcomeCustomer';
import Reservations from './components/Reservations';
import Property from './components/Property';
import HostPage from './components/HostPage';
import Favourite from './components/favourite';
import Reviews from './components/reviews';
import AddReview from './components/Addreview';
import AddProperty from './components/AddProperty';
import UpdateProperty from './components/UpdateProperty';

//import TrySignup from './components/TrySignup';
//import { Axios } from "axios";

function App(){
  return(
    <Routes>
      <Route path="/property" element={<Property/>}></Route>
      <Route path="/reservations" element={<Reservations/>}></Route>
      <Route path='/signup' element={<SignUp />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/hostSignup' element={<HostSignup />}/>
      <Route path='/hostLogin' element={<HostLogin />} />
      <Route path='/' element={<Welcome />} />
      <Route path='/welcomecustomer' element={<WelcomeCustomer/>}/>
      <Route path='/hostPage' element={<HostPage/>}/>
      <Route path="/favourite" element={<Favourite/>}/>
      <Route path="/hostPage/add" element={<AddProperty />} />
      <Route path="/hostPage/update/:id" element={<UpdateProperty />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/addreviews" element={<AddReview />} />
    </Routes>
  );
}

export default App;
