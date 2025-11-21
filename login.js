const click = document.getElementById('login-form');

click.addEventListener('submit', function(event){
    event.preventDefault();
    getlogindetails();
})

function getlogindetails() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const logindata = {
        username : username,
        email : email,
        password : password
    }
    fetch('http://localhost:8080/api/users/login',{
        method : 'POST',
        headers : {'Content-Type': 'application/json'},
        body : JSON.stringify(logindata)
    }).then(response => {
        if (response.ok){
            window.location.href = "landin-page.html"
            // if the server responds  unpack the recieved json file
            return response.json;
        }else{
            alert("User not found");
        }
    }).then(data =>{
        console.log("Found data", data)
    })
}

