import dayjs from "../utils/my-dayjs.js";
import { renderHoursLoad } from "./form/form-main.js";

const scheduleCalendar = document.getElementById("search-date");

// console.log(scheduleCalendar);
scheduleCalendar.value = dayjs().format("YYYY-MM-DD");
