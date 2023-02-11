import React, { useState, useEffect } from "react";
import Card from "./Card";


function Favourite() {
    const [properties, setProperties] = useState([]);

    //const [userId, setUserId] = useState('');

    //const email = localStorage.getItem("user");
    //const userInput = { emailId: email }
    useEffect(() => {
        // fetch("user/emailId", {
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json'
        //     },
        //     method: 'POST',
        //     body: JSON.stringify(userInput),
        // })
        //     .then(res => {
        //         if (!res.ok) {

        //         } else {
        //             return res.json()
        //         }

        //     })
        //     .then((data) => {

        //         setUserId(data.userId);
        //         const userIdToPass = data.userId;
        //         console.log("State userId: " + { userId });
        //         console.log(userIdToPass);

        //         const inputdata = { userId: userIdToPass }
        //         const getProperties = () => {
        //             fetch('favourites/view', {
        //                 headers: {
        //                     'Content-Type': 'application/json',
        //                     'Accept': 'application/json'
        //                 },
        //                 method: 'POST',
        //                 body: JSON.stringify(inputdata)
        //             })
        //                 .then(res => res.json())
        //                 .then((data) => {
        //                     setProperties(data);
        //                 });
        //         }

        //         getProperties()

        //     });

      const properties = JSON.parse(localStorage.getItem('properties_data'))
      //console.log(properties);
      
      const favorite_ids = JSON.parse(localStorage.getItem('favorite_ids'))
      const f = properties.filter(p => favorite_ids.includes(p.id))
      setProperties(f)
    }, [])



    return (
        <div>
          <h1 >Favorite Properties </h1>
            <div className="wrapper">
            
                <div id="content" className="container" >
                   
                    <div>
                        
                        <br></br>
                        

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

export default Favourite;

