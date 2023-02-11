import React,{Component} from 'react';

class FooterPage extends Component{
    render (){
        return(
            <footer>
              <div>
        <div className="row footer text-white py-2 px-4">
          <div className="col-md-6">
            <h3>Homestays</h3>
            <div className="row footer-row">
              <p id="footer-text">
                This is an online property management website which allows users to view the properties, make reservations or check availability of properties. 
              </p>
            </div>
            <div className="row">
              <div className="col-md-6">
                <h4>Headquarters</h4>
                <p id="address">
                  3000 Northside Blvd <br />
                  The University of Texas at Dallas <br />
                  Richardson, Texas-75080</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <h4><i className="bi bi-envelope-fill" /> Contact Us</h4>
            <form>
              <div className="form-group">
                <input type="text" id="visitor-name" name="visitor-name" required placeholder="Enter Name" className="form-control" />
              </div>
              <div className="form-group mt-2">
                <input type="email" id="visitor-email" name="visitor-email" placeholder="Enter Email" className="form-control" />
              </div>
              <div className="form-group mt-2">
                <textarea id="visitor-message" name="visitor-message" cols={10} rows={3} placeholder="Enter Message" className="form-control" defaultValue={""} />
              </div>
              <div className="form-group mt-2">
                <input id="visitor-submit" type="submit" defaultValue="Submit" className="btn btn-danger w-100 text-center" />
              </div>
            </form>
          </div>
          <div className="col-md-2 mb-10" style={{paddingLeft: '100px'}}>
            <h4>Follow Us</h4>
            <div className="social-footer-icons">
              <a href="https://www.facebook.com/"><i className="fa fa-facebook" style={{color: 'white'}} aria-hidden="true" /></a>
              <a href="https://www.instagram.com/?hl=en"><i className="fa fa-instagram" style={{color: 'white'}} aria-hidden="true" /></a>
              <a href="https://twitter.com/?lang=en"><i className="fa fa-twitter" style={{color: 'white'}} aria-hidden="true" /></a>
            </div>
          </div>
        </div>
        <div className="row bottom-row pt-2 text-white">
          <div className="footer-copyright pb-1 text-center">
            Copyright © 2022 Homestays.com
          </div>
        </div>
      </div>
            </footer>
        
        );
    }
}

export default FooterPage;