const clicked = document.getElementById('register.form');

clicked.addEventListener('submit', function(event){
    event.preventDefault();
    collectdata();
}
);

function collectdata(){
    const user = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password')

    const formdata = {
        Username : user,
        Email: email,
        Password : password
    }
    fetch('http://localhost:8080/api/users/register',{
        method : 'POST',
        headers : {'Content-Type' : 'application/json'},
        body : JSON.stringify(formdata)
    })
    .then(response => {
        if(response.ok){
            return response.json;
        }else {
            throw new Error('Server rejected the request')
        }
    })
    .then(data => {
        console.log("User saved", data.user);

        alert("User registered succesfully");
    })
    .catch(error => {
        console.error("Network error", error);
        alert("Issues connectng to the network");
    });
}