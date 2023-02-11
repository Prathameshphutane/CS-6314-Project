import React,{useState, useEffect} from "react";
import { Link, useNavigate } from 'react-router-dom';
import profile from '../images/profile.png';
import "bootstrap/dist/css/bootstrap.min.css";

	function Login(){
		
		let navigate = useNavigate();
		  const[data, setCustomer] = useState({
			
			  email:'',
			  password:''
		  })
		  const[formErrors, setFormErrors] = useState({});
		  const[isSubmit, setIsSubmit] = useState(false);
	  
	  
		  let name,value;
		  const updateValue = (e)=>{
			name=e.target.name;
			value=e.target.value;
			setCustomer({...data, [name]:value})
			  
		  } 
	  
		  const submitData = async (e) => {
			  e.preventDefault();
			  setFormErrors(validate(data));
			  //setIsSubmit(true);
			  const dataCustomer = {
				
				  email: data.email,
				  password: data.password
				  
			  }
			  //console.log("printing dataTutor "+dataTutor.username+" "+dataTutor.email+" "+dataTutor.password);
			  
			  const res = await fetch("http://localhost:3000/login",{
				  method:'POST',
				  headers : { 
					  'Content-Type': 'application/json',
					   'Accept': 'application/json'
					},
				  body:JSON.stringify(dataCustomer)
			  });

			  const usr = await res.json();
			  
			  if(res.status === 425){
				  window.alert("User doesn't exist. Please SignUp!");
				  navigate('/signup');
			  }
        if(res.status === 420){
          window.alert("User email or password is incorrect!");
        }
			  if(res.status === 200){
				window.alert("Login successful");
				localStorage.setItem('login_email', data.email);
				navigate('/welcomecustomer');
			  }
			  
		  }
	  
		  useEffect(() => {
			  console.log(formErrors);
			  if(Object.keys(formErrors).length === 0 && isSubmit){
			    console.log(data);
			  }
		  },[formErrors]);
	  
		  const validate = (values) => {
			  const errors = {};
		
			  if (!values.email) {
			    errors.email = "Email is required! and should be in format abc@gmail.com";
			  }
			
			  if (!values.password) {
				  errors.password = "Password is required! It should be alphanumeric value";
			  }
			  return errors;
		  };
		 
		  return(
			  <div>
				  <section className="signup">
					  <div className="sub-signup">
						<div>
						  <div className="imgs">
							<div className="container-image">
							<img src={profile} alt="profile" className="profile"/>
							</div>
						  </div>
						  <div>
						  <h1>Login Page</h1>
						  	<div >
							  Email: <input id="email" name="email" value={data.email} onChange = {updateValue} type="text"/><br />
					  		  <span>{formErrors.email}</span><br></br>
							</div>
							
							<div>
							  Password: <input id="password" name="password" value={data.password} onChange = {updateValue}  type="password"/><br />
					          <span>{formErrors.password}</span><br></br>
							</div>
							
							<div className="login-button">
								<button type="submit" onClick={submitData}>Submit</button>
							</div>
							New to HomeStays? <Link to="/signup">Sign Up</Link>
						  </div>
						</div>
					  </div>
				  </section>	  
				  
				  
			  </div>
		  )
	  }
	  
	  
	  export default Login;