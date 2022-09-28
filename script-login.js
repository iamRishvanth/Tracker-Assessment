const gallary = document.getElementById("gallary");
const message = document.getElementById("warning");

async function getData(url) {
    const response = await fetch(url);
    return response.json();
}


const url = `https://randomuser.me/api/?results=10`;
const data = getData(url);
let details = [];
data.then((x) => {
    localStorage.setItem("fileName", JSON.stringify(x.results));
    let detail = JSON.parse(localStorage.getItem("fileName"));
    console.log("Fectched Details stored in Local Variable then Printed");
    console.log(detail);
    for (let i = 0; i < 10; i++) {
        details.push({
            id: detail[i].login.uuid,
            pass: detail[i].login.password,
            name: detail[i].login.username,
            email: detail[i].email,
            location: detail[i].location.country,
            image: detail[i].picture.medium
        })
    }
    console.log("Abstracted Details Printed");
    console.log(details);
}
);

// Validate User Details
function validateDetails() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    console.log('check');
    for (let i = 0; i < 10; i++) {
        console.log(user);
        console.log(details[i].id);
        if (user === details[i].id && pass === details[i].pass) {
            message.innerHTML = "Login Succesful";
            window.location = "index-1.html";
            break;
        }
        else if (user === details[i].id && pass !== details[i].pass) {
            message.innerHTML = "Password Incorrect";
            break;
        }
        else if (user !== details[i].id) {
            message.innerHTML = "User ID not found";
        }
    }
}
