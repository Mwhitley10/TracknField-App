

const isWeekend = day => {
    return day % 7 === 6 || day % 7 === 0;   //6 when it's saturday and 0 whene it's not.
}

const getDayName = day => {
    const date = new Date(Date.UTC(2022, 0, day));

    const options = { weekday: "short" };
    const dayName = new Intl.DateTimeFormat("en-US", options).format(date);
}