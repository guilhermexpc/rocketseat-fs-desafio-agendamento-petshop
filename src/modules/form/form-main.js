import dayjs from "../../utils/my-dayjs.js";
import { addNewSchedule } from "../../service/schedule-new";

const form = document.querySelector("form");
const formOwner = document.getElementById("owner");
const formPet = document.getElementById("pet");
const formPhone = document.getElementById("phone");
const formService = document.getElementById("service");
const formDate = document.getElementById("schedule-date");
const formHour = document.getElementById("hour");

console.log(form);

form.onsubmit = (event) => {
  event.preventDefault();
  const ownerName = formOwner.value.trim();
  const pet = formPet.value.trim();
  const phone = formPhone.value.trim();
  const service = formService.value.trim();
  const date = formDate.value;
  const hour = formHour.value;
  const dateFull = dayjs(`${date} ${hour}`);

  console.log(ownerName);
  console.log(pet);
  console.log(phone);
  console.log(service);
  console.log(date);
  console.log(hour);

  addNewSchedule({ ownerName, pet, phone, service, date, hour, dateFull });
};

function name(params) {}
