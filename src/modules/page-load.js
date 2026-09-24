import dayjs from "../utils/my-dayjs.js";
import { renderHoursLoad } from "./form/form-main.js";
import { scheduleFetchByDay } from "../service/schedule-fetch.js";
import { renderCards } from "./card/renderCard.js";

const today = dayjs(new Date()).format("YYYY-MM-DD");
const scheduleCalendar = document.getElementById("search-date");
const cards = document.querySelector(".cards");
const periodMoarning = document.getElementById("period-morning");
const periodAfternoon = document.getElementById("period-afternoon");
const periodNight = document.getElementById("period-night");

// console.log(scheduleCalendar);
scheduleCalendar.value = dayjs().format("YYYY-MM-DD");

scheduleCalendar.value = today;
scheduleCalendar.min = today;

scheduleCalendar.onchange = () => {
  console.log("scheduleCalendar", scheduleCalendar);
  renderCards({ scheduleCalendar }, { periodMoarning, periodAfternoon, periodNight });
};

renderCards({ scheduleCalendar }, { periodMoarning, periodAfternoon, periodNight });
