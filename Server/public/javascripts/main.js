fetch("http://localhost:3000/tutors")
     
    // Converting received data to JSON
    .then(response => response.json())
    .then(json => {

        let tr = `<tr><th>Title</th><th>Genre</th><th>Description</th></tr>`;

        json.forEach(tutor => {
            
            tr += `<tr class="item">
                <td>${tutor.name}</td>
                <td>${tutor.description}</td>
                <td>${tutor.rating}</td>
                <td>${tutor.from}</td>
                <td>${tutor.subject}</td>
                <td><button id="${tutor._id}" class="show">Details</button></td>
                <td><button id="${tutor._id}" class="remove">Delete</button></td>
            `;
            

        });

        document.getElementById("videolist").innerHTML = tr;

 });

 document.getElementById("add").onclick = function(){

    fetch("http://localhost:3000/tutors", {
        method: 'POST',
        body: JSON.stringify({
            name: document.getElementById("name").value,
            description: document.getElementById("description").value,
            rating: document.getElementById("rating").value,
            from: document.getElementById("from").value,
            experience: document.getElementById("experience").value,
            subject: document.getElementById("subject").value,
            certificates: document.getElementById("certificates").value

        }),
        headers: {
            "Content-type": "application/json"

        }

    })  
    // Converting received data to JSON
    .then(response => response.json())
    .then(json => console.log(json));

 }