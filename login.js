const click = document.getElementById('login-form');

click.addEventListener('submit', function(event){
    event.preventDefault();
    getlogindetails();
})

function getlogindetails() {
    const username = document.getElementById('username').value;
    const email = document.getElementsByName('username').value;
    const password = document.getElementById('password').value;

    const logindata = {
        username : username,
        email : email,
        password : password
    }
    console.log(logindata);
    fetch('http://localhost:8080/api/users/login',{
        method : 'POST',
        headers : {'Content-Type': 'application/json'},
        body : JSON.stringify(logindata)
    }).then(response => {
        if (response.ok){
            location.href = "index.html";
            // if the server responds  unpack the recieved json file
            return response.json;
        }else{
            throw new Error('Server rejected the request')
        }
    }).then(data =>{
        console.log("Found data", data)
    })
}

