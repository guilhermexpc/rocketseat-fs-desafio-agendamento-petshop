import dayjs from "../../utils/my-dayjs.js";

import { openingHours } from "../../utils/opening-hours.js";
import { addNewSchedule } from "../../service/schedule-new";
import { scheduleHourFetchByDay } from "../../service/schedule-fetch.js";

const scheduleModal = document.getElementById("schedule-modal");
const form = document.querySelector("form");
const formOwner = document.getElementById("owner");
const formPet = document.getElementById("pet");
const formPhone = document.getElementById("phone");
const formService = document.getElementById("service");
const formDate = document.getElementById("schedule-date");
const formHour = document.getElementById("hour");

const today = dayjs(new Date()).format("YYYY-MM-DD");
formDate.min = today;

form.onsubmit = (event) => {
  event.preventDefault();
  const ownerName = formOwner.value.trim();
  const pet = formPet.value.trim();
  const phone = formPhone.value.trim();
  const service = formService.value.trim();
  const date = formDate.value;
  const hour = formHour.value;
  const dateFull = dayjs(`${date} ${hour}`);

  if (!validateForm({ ownerName, pet, phone, service, date, hour })) {
    return;
  }

  addNewSchedule({ ownerName, pet, phone, service, date, hour, dateFull });
  form.reset();
  formDate.min = today;
  scheduleModal.close();
};

formDate.onchange = async () => {
  const date = formDate.value;
  const scheduleHours = await scheduleHourFetchByDay({ date });
  console.log("Horarios marcados: ", scheduleHours);

  renderHoursLoad({ date, scheduleHours });
};

function validateForm({ ownerName, pet, phone, service, date, hour }) {
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
  return true;
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
