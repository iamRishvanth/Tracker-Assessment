const user = document.getElementById("username");
const pass = document.getElementById("password");
const gallery = document.getElementById("gallery");
const message = document.getElementById("warning");

async function getData(url) {
    const response = await fetch(url);
    return response.json();
}

const validateDetails = (details) => {
    for (let i = 0; i < 10; i++) {
        if (user === details[i].id) {
            if (pass !== details[i].pass) {
                document.getElementById("message").innerHTML = "Password Incorrect";
            }
            else {
                document.getElementById("message").innerHTML = "Login Succesfully";
            }
        }
        else {
            document.getElementById("message").innerHTML = "User ID not found";
        }
    }
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

const url = `https://randomuser.me/api/?results=10`;
const data = getData(url);
console.log(data);
data.then((x) => {
    localStorage.setItem("fileName", JSON.stringify(x.results))
    let detail = JSON.parse(localStorage.getItem("fileName"));
    console.log(detail);
    let details = [];
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
    validateDetails();
    //displayDetails(details);
}
);

