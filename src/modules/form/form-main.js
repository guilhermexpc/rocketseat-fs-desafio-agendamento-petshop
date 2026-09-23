import dayjs from "../../utils/my-dayjs.js";

import { openingHours } from "../../utils/opening-hours.js";
import { addNewSchedule } from "../../service/schedule-new";
import { scheduleFetchByDay } from "../../service/schedule-fetch.js";

const scheduleModal = document.getElementById("schedule-modal");
const form = document.querySelector("form");
const formOwner = document.getElementById("owner");
const formPet = document.getElementById("pet");
const formPhone = document.getElementById("phone");
const formService = document.getElementById("service");
const formDate = document.getElementById("schedule-date");
const formHour = document.getElementById("hour");

// console.log(formHour);

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

formDate.onchange = async () => {
  const date = formDate.value;
  const scheduleHours = await scheduleFetchByDay({ date });
  console.log("Horarios marcados: ", scheduleHours);
  if (validateForm()) {
    return;
  }
  renderHoursLoad({ date, scheduleHours });
};

function validateForm() {
  console.log("validateForm");
  if (!ownerName) {
    alert("Nome do cliente não foi informado");
    return false;
  }

  if (!pet) {
    alert("Nome do pet não foi informado");
    return false;
  }

  if (!phone) {
    alert("Telefone não informado");
    return false;
  }

  if (!service) {
    alert("Serviço não informado");
    return false;
  }

  if (!date) {
    alert("Por favor, selecione uma data");
    return false;
  }

  if (!hour) {
    alert("Por favor, selecione uma data");
    return false;
  }
}

function renderHoursLoad({ date, scheduleHours }) {
  formHour.innerHTML = "";

  const unAvailableHours = openingHours.filter((openHour) => scheduleHours.includes(openHour));

  const open = openingHours.filter((hour) => {
    const [scheduleHour] = hour.split(":");
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs());
    return isHourPast;
  });

  const availableHours = open.filter((hour) => !unAvailableHours.includes(hour));

  // Codigo otimizado
  const availableHours2Optimized = openingHours.filter((hour) => {
    const [scheduleHour] = hour.split(":");
    const isHourAvailable = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs());
    const isHourScheduled = scheduleHours.includes(hour);

    return isHourAvailable && !isHourScheduled;
  });

  // console.log("open:", open);
  // console.log("Horário availableHours: ", availableHours);
  // console.log("Horário availableHours2Optimized: ", availableHours2Optimized);

  const optionTitle = document.createElement("option");
  optionTitle.setAttribute("value", "");
  optionTitle.textContent = "Selecione um horário";
  formHour.append(optionTitle);

  // Lógica das horas
  availableHours.forEach((hour) => {
    const optionHour = document.createElement("option");
    optionHour.setAttribute("value", hour);
    optionHour.textContent = hour;
    formHour.append(optionHour);
  });

  formHour.removeAttribute("disabled");
}

export { renderHoursLoad };
