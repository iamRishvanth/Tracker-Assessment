const gallary = document.getElementById("gallary");

let details = [];

async function getData(url) {
    const response = await fetch(url);
    return response.json();
}

const url = `https://randomuser.me/api/?results=10`;
const data = getData(url);
data.then((x) => {
    localStorage.setItem("fileName", JSON.stringify(x.results));
    let detail = JSON.parse(localStorage.getItem("fileName"));
    console.log("Fetched Details stored in Local Variable then Printed");
    console.log(detail);
    console.log(typeof (detail));
    for (let i = 0; i < 10; i++) {
        details.push({
            id: detail[i].login.uuid,
            pass: detail[i].login.password,
            name: detail[i].login.username,
            email: detail[i].email,
            location: detail[i].location.country,
            image: detail[i].picture.large
        })
    }
    console.log("Abstracted Details Printed");
    console.log(details);

    details.forEach(info => {
        //console.log(Object.keys(info), Object.values(info));
        //console.log(info["image"]);

        gallary.innerHTML +=
            `<li class = "card">
                <img class="card_image" src="${info["image"]}" alt="profile"/>
                <div class="card_details">
                    <h3 class="card_name"> ${info["name"]}</h2>
                    <p class="card_mail"> ${info["email"]}</p>
                    <p class="card_location"> ${info["location"]}</p>
                </div>
            </li>`;
    });

}
);

