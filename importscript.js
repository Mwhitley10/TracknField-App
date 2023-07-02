import { isWeekend } from "./importscript.js";

const calendar = Document.querySelector("#app-calendar");

const isWeekend = day => {
    return day % 7 === 6 || day % 7 === 0;   //6 when it's saturday and 0 whene it's not.
}

for (let day = 1; day < 31; day++) {

    const weekend = isWeekend(day);

    console.log(weekend ? "weekend" : "");
    calendar.insertAdjacentHTML("beforeend", `<divclass="day ${weekend ? "weekend" : ""}">${day}</div>`);
}


var today = new Date();
var day = today.getDay();
var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
console.log("Today is : " + daylist[day] + ".");
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var prepand = (hour >= 12) ? " PM " : " AM ";
hour = (hour >= 12) ? hour - 12 : hour;
if (hour === 0 && prepand === ' PM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Noon';
    }
    else {
        hour = 12;
        prepand = ' PM';
    }
}
if (hour === 0 && prepand === ' AM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Midnight';
    }
    else {
        hour = 12;
        prepand = ' AM';
    }
}
console.log("Current Time : " + hour + prepand + " : " + minute + " : " + second);


async function fetch_data() {
    const resp = await fetch('https://www.reddit.com/r/programming.json');

    console.log(await resp.json());
}

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