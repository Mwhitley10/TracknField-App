const isWeekend = day => {
    return day % 7 === 6 || day % 7 === 0;   //6 when it's saturday and 0 whene it's not.
}

const getDayName = (year, month, day) => {
    const date = new Date(Date.UTC(year, month, day));

    const options = { weekday: "short" };
    return dayName = new Intl.DateTimeFormat("en-US", options).format(date);
}


var today = new Date();

const calendar = document.querySelector("#app-calendar");

console.log(calendar);
const thisYear = 2023;
const months = 6;
const dayInMonth = new Date(thisYear, months, 0).getDate();


for (let day = 1; day <= dayInMonth; day++) {

    console.log(getDayName(thisYear, months, day))

    const date = new Date(thisYear, months, day);
    const options = { weekday: "short" };


    const weekend = isWeekend(day);
    let name = "";

    if (day <= 7) {

        const dayName = getDayName(thisYear, months, day);
        name = `<div class= "name">${dayName}</div>`;

    }

    console.log(weekend ? "weekend" : "");
    calendar.insertAdjacentHTML("beforeend", `<div class="day ${weekend ? "weekend" : ""}">${name}${day}</div>`);
}

document.querySelectorAll("#app-calendar .day").forEach(day => {
    day.addEventListener("click", event => {
        event.currentTarget.classList.toggle("selected");
        const popup = document.getElementById("popup");
        popup.style.display = popup.style.display === "none" ? "block" : "none";
        console.log("click");
    })

    console.log(day);

});


fetch_demo();
function scrapeCSV(url) {
    const response = fetch(url);
    if (response.status === 200) {
        const data = response.text();
        const reader = csv.parse(data, { delimiter: ',' });
        for (const row of reader) {
            console.log(row);
        }
    } else {
        console.log('Error: ' + response.status);
    }
}

scrapeCSV('https://example.com/data.csv');