const gallery = document.getElementById("gallery");
const message = document.getElementById("warning");

async function getData(url) {
    const response = await fetch(url);
    return response.json();
}

const displayDetails = (details) => {
    //console.log(details);
    const detailsHTMLString = details.map(info => `
        <li class = "card">
            <img class="card_image" src="${info.image}"/>
            <h3 class="card_name"> ${info.name}</h2>
            <p class="card_mail"> ${info.mail}</p>
            <p class="card_location"> ${info.location}</p>
            <p class="card_amount">100000</p>
        </li>
    `)
    gallery.innerHTML = detailsHTMLString;
};

function testPrint(z) {
    console.log("zee", z);
}

const url = `https://randomuser.me/api/?results=10`;
const data = getData(url);
console.log("Fetched Details Printed");
console.log(data);
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
    console.log("Specific Single Person Detail is Printed");
    console.log(details[1]);
    testPrint(details[1].id);
    //displayDetails(details);
}
);

console.log("hai");
console.log(details[1]);
console.log("hello");

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
