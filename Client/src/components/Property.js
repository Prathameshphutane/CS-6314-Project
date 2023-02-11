

import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams, NavLink, Navigate, useNavigate } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css';
//import 'react-date-range/dist/styles.css'; // main style file
//import 'react-date-range/dist/theme/default.css'; // theme css file
import { Calendar } from 'react-calendar';



class Property extends React.Component {
  state = {
    date: new Date(),
  }
  
    constructor(props)
    {
        super(props)
        this.state = {
            allBooks:[],
            singleBook : {
                id : '',
                title : ''
            },
            reservation: {
              startDate :'',
              endDate : ''
            },
            isavailable: [],
            description:[],
            location:[],          
            img_url:''
            
        }
        this.getAllBooks = this.GetPropertyDetails.bind(this)
        this.getbook = this.getbook.bind(this)
        this.book = this.book.bind(this)
        this.getDates = this.getDates.bind(this)
        this.DisableDates = this.DisableDates.bind(this)
    }


    GetPropertyDetails() {
        fetch('http://localhost:3000/properties/property').then(res => res.json()).then(result => {
          //console.log(result)
            this.setState({
                allBooks : result[0].title,
                singleBook:
                {id : result[0]["_id"]},
                isavailable : result[0].is_available,
                description : result[0].description,
                location: result[0].location,          
                img_url: result[0].img_url




            })
        }).catch(console.log('error'))
    }


    getDates(date){
      console.log(date)
      this.setState({
        reservation: {
          startDate: date[0],
          endDate: date[1]
        }
      })
    }

    DisableDates({activestartDate, date, view}){
      //console.log(date)
      var startdate = this.state.startDate
      var enddate = this.state.endDate
      if(startdate>date && date<enddate)
        return false
      
    }


    



    book() {  // dates are saved in reservation as start and end date.
      //console.log(this.state.reservation)
      
      fetch('http://localhost:3000/properties/property/'+this.state.singleBook.id,{
        method:'POST',
				  headers : { 
					  'Content-Type': 'application/json',
					   'Accept': 'application/json'
					},
          body:JSON.stringify(this.state.reservation,this.state.singleBook)
      })
      .then(response => response.json())
      .then(window.alert("Booking successful"))
      .catch(e => {
        //window.alert("error");
            console.log("e",e)
        })
    }




    
    getbook(e,id) {
        fetch('http://localhost:3000/property'+id).then(res => res.json()).then(result => {
            this.setState({
                singleBook : {id : result[0].id, title : result[0].title}
            })
        }).catch(console.log('error'))
    }
    render() {
      //console.log(this.state.reservation)
      console.log(this.state)
        return (
          <div className='center'>
            <div className='div md 3 pt 2 px 2 container=fluid'>
                <button type="button" onClick={this.GetPropertyDetails}>Get Details of property</button>
                <div>
                  <br/>
                  <br/>
                  <div className="row row-cols-1 row-cols-md-2 g-4">
                  <div className="card">
                  <img src={this.state.img_url} className="card-img-top"/>
                  </div>
                  </div>
                Property name:
                {this.state.allBooks}
                <br></br>
                Is Available: 
                {this.state.isavailable}
                <br></br>
                Description: 
                {this.state.description}
                <br></br>
                Location: 
                {this.state.location}
                <br></br>
                

                </div>
                

                <div>
              <Calendar selectRange = {true} onChange = {this.getDates} tileDisabled = {this.DisableDates} />
                </div>
                <br/>

                <div>
                  <Link to="/welcomeCustomer">
                  <button type='button1' onClick={this.state.book}>Book</button>
                  </Link>
                </div>
                <br/>

                
                
            </div>
            </div>
           
            
        )
    }
}









/*class Property extends React.Component {

  state = {
    title: '',
    body: '',
    posts: []
  };

  componentDidMount = () => {
    this.getBlogPost();
  };


  getBlogPost = () => {
    axios.get('/property')
      .then((response) => {
        const data = response.data;
        this.setState({ posts: data });
        console.log('Data has been received!!');
      })
      .catch(() => {
        alert('Error retrieving data!!!');
      });
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };


  submit = (event) => {
    event.preventDefault();

    const payload = {
      title: this.state.title,
      body: this.state.body
    };


    axios({
      url: '/property/save',
      method: 'POST',
      data: payload
    })
      .then(() => {
        console.log('Data has been sent to the server');
        this.resetUserInputs();
        this.getBlogPost();
      })
      .catch(() => {
        console.log('Internal server error');
      });;
  };

  resetUserInputs = () => {
    this.setState({
      title: '',
      body: ''
    });
  };

  displayBlogPost = (posts) => {

    if (!posts.length) return null;


    return posts.map((post, index) => (
      <div key={index} className="blog-post__display">
        <h3>{post.title}</h3>
        <p>{post.description}</p>
        <p>{post.nightlyfee}</p>
        <p>{post.cleaningfee}</p>
        <p>{post.servicefee}</p>
        <p>{post.amenities}</p>
        <p>{post.location}</p>
      </div>
    ));
  };

  render() {

    console.log('State: ', this.state);

    //JSX
    return(
      <div className="app">
        <h2>Property Details</h2>

        <div className="blog-">
          {this.displayBlogPost(this.state.posts)}
        </div>
      </div>
    );
  }
}*/




/*const Property = (props) => {
    const [property, setProperties] = useState([]);
    useEffect( () => {
        const url = "http://localhost:3000/property"; 
        fetch(url)
        .then( resp => resp.json() )
        .then( data => setProperties(data))
        .catch( err => console.error(err));
       },[]); 
    return ( 	
       <h5>Hello World</h5>

      );

}*/

export default Property





