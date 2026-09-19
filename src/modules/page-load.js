import dayjs from "../utils/my-dayjs.js";

const scheduleCalendar = document.getElementById("search-date");

console.log(scheduleCalendar);
scheduleCalendar.value = dayjs().format("YYYY-MM-DD");
