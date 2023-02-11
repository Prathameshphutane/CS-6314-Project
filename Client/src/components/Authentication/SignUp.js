import React,{useState, useEffect} from "react";
import { Link,useNavigate } from 'react-router-dom';
import profile from '../images/profile.png';
import email from '../images/email.jpg';
import pass from '../images/pass.png';
import usr from '../images/usr.jpg';
	function SignUp(){
		let navigate = useNavigate();
		  const[data, setTutor] = useState({
			username:'',
			  email:'',
			  password:''
		  })
		  const[formErrors, setFormErrors] = useState({});
		  const[isSubmit, setIsSubmit] = useState(false);
	  
	  
		  let name,value;
		  const updateValue = (e)=>{
			name=e.target.name;
			value=e.target.value;
			setTutor({...data, [name]:value})
			  //setTutor({...data, [e.target.id] : e.target.value});
		  } 
	  
		  const submitData = async (e) => {
			  e.preventDefault();
			  setFormErrors(validate(data));
			  //setIsSubmit(true);
			  const dataTutor = {
				username: data.username,
				  email: data.email,
				  password: data.password
				  
			  }
			  //console.log("printing dataTutor "+dataTutor.username+" "+dataTutor.email+" "+dataTutor.password);
			  
			  const res = await fetch("http://localhost:3000/register",{
				  method:'POST',
				  headers : { 
					  'Content-Type': 'application/json',
					   'Accept': 'application/json'
					},
				  body:JSON.stringify(dataTutor)
			  });

			  const usr = await res.json();
			  //console.log("res "+res.status);
			  console.log("usr status = "+usr.status)
			  if(res.status === 422 || !usr){
				window.alert("Invalid registration");
			  }
			  else if(res.status === 425){
				  window.alert("User already exists. Please login!");
				  navigate('/login');
			  }
			  else{
				window.alert("Registration successful");
				navigate('/login');
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
			//const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
			const regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{5,})"); 
			if (!values.username) {
			  errors.username = "Username is required!";
			}
			if (!values.email) {
			  errors.email = "Email is required!";
			}
			/*else if(!regex.test(values.email)){
			  errors.email = "This is not a valid email format!";
			}*/
			if(!regex.test(values.password)){
			  errors.password = "Password min. length 5 and include at least 1 uppercase and lowercase letter, 1 number and 1 special character!";
			  setIsSubmit(false);
			}
			if (!values.password) {
				errors.password = "Password is required!";
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
							  <h1>Sign Up</h1>
							  <div>
								  
								  Name: <input id="username" name="username" value={data.username} onChange = {updateValue}  type="text"/><br />
					  			  <span>{formErrors.username}</span><br></br>
							  </div>
							  
							  <div>
								  
								  	Email: <input id="email" name="email" value={data.email} onChange = {updateValue}  type="text"/><br />
					  				<span>{formErrors.email}</span><br></br>
							  </div>
							  
							  <div>
								  
								  	Password: <input id="password" name="password" value={data.password} onChange = {updateValue}   type="password"/><br />
					  				<span>{formErrors.password}</span><br></br>
							  </div>
							  
							  <div className="login-button">
							  		<button onClick={submitData}>Submit</button>
							  </div>
							  Already have an account? <Link to="/login">Login</Link>
						  </div>
					  </div>
					  
					  </div>
				  
				  </section>
			  </div>
		  )
	  }
	  
	  
	  export default SignUp;