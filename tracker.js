const user = document.getElementById("username");
const pass = document.getElementById("password");
const gallery = document.getElementById("gallery");

const fetchDetails = () => {

    const array_res = [];
    const url = `https://randomuser.me/api/?results=10`;
    fetch(url).then(res => res.json()).then(data => console.log(data.results[0].name.first));
    //const details = {
    //id: array_res[0].gender,
    //pass: array_res[0].login.password,
    //name: array_res[0].login.username,
    //email: array_res[0].email,+
    //location: array_res[0].location.country,
    //image: array_res[0].picture.medium,
    //}
    //console.log(details);
    //displayDetails(details);
};

const displayDetails = (details) => {
    console.log(details);
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

fetchDetails();
