import dayjs from "dayjs";
import { scheduleFetchByDay } from "../../service/schedule-fetch";

async function renderCards({ scheduleCalendar }, { periodMoarning, periodAfternoon, periodNight }) {
  try {
    const schedules = await scheduleFetchByDay({ scheduleCalendar });

    const morningSchedules = schedules.filter((schedule) => {
      const hour = Number(schedule.hour.split(":")[0]);
      return hour <= 12;
    });

    const afternoonSchedules = schedules.filter((schedule) => {
      const hour = Number(schedule.hour.split(":")[0]);
      return hour > 12 && hour <= 18;
    });

    const nightSchedules = schedules.filter((schedule) => {
      const hour = Number(schedule.hour.split(":")[0]);
      return hour > 18;
    });

    renderPeriod(morningSchedules, periodMoarning);
    renderPeriod(afternoonSchedules, periodAfternoon);
    renderPeriod(nightSchedules, periodNight);

    // console.log("scheduleCalendar: ", scheduleCalendar);
    // console.log("schedules: ", schedules);

    // schedules.forEach((schedule, index) => {
    //   const cardContent = createElementWithClass("div", "card-content");
    //   const cardContentInfo = createElementWithClass("div", "card-content-info");
    //   const scheduleTime = createElementWithClass("span", "schedule-time");
    //   const cardOwnerInfo = createElementWithClass("div", "card-owner-info");
    //   const petName = createElementWithClass("span", "pet-name");
    //   const onwerSlash = createElementWithClass("span", "owner-name");
    //   const ownerName = createElementWithClass("span", "owner-name");
    //   const scheduleDescription = createElementWithClass("p", "schedule-description");
    //   const cardBtnDelete = createElementWithClass("button", "card-btn-delete");

    //   const separatorInternal = createElementWithClass("div", "separator-internal-container");
    //   const separator = createElementWithClass("div", "separator");

    //   scheduleTime.textContent = schedule.hour;
    //   petName.textContent = schedule.pet;
    //   onwerSlash.textContent = " / ";
    //   ownerName.textContent = schedule.ownerName;
    //   scheduleDescription.textContent = schedule.service;
    //   cardBtnDelete.textContent = "Remover agendamento";

    //   cardContent.append(cardContentInfo, cardBtnDelete);
    //   cardContentInfo.append(scheduleTime, cardOwnerInfo, scheduleDescription);
    //   cardOwnerInfo.append(petName, onwerSlash, ownerName);
    //   separatorInternal.append(separator);

    //   // const hour = dayjs(schedule.dateFull).hour();
    //   const [hour] = schedule.hour.split(":");

    //   console.log(hour);
    //   if (hour <= 12) {
    //     periodMoarning.append(cardContent, separatorInternal);
    //   } else if (hour <= 18) {
    //     periodAfternoon.append(cardContent, separatorInternal);
    //   } else {
    //     periodNight.append(cardContent, separatorInternal);
    //   }
    // });
  } catch (error) {
    console.log("Error", error);
  }
}

function createCard(schedule) {
  const cardContent = createElementWithClass("div", "card-content");
  const cardContentInfo = createElementWithClass("div", "card-content-info");
  const scheduleTime = createElementWithClass("span", "schedule-time");
  const cardOwnerInfo = createElementWithClass("div", "card-owner-info");
  const petName = createElementWithClass("span", "pet-name");
  const ownerSlash = createElementWithClass("span", "owner-name");
  const ownerName = createElementWithClass("span", "owner-name");
  const scheduleDescription = createElementWithClass("p", "schedule-description");
  const cardBtnDelete = createElementWithClass("button", "card-btn-delete");

  scheduleTime.textContent = schedule.hour;
  petName.textContent = schedule.pet;
  ownerSlash.textContent = " / ";
  ownerName.textContent = schedule.ownerName;
  scheduleDescription.textContent = schedule.service;
  cardBtnDelete.textContent = "Remover agendamento";

  cardContent.append(cardContentInfo, cardBtnDelete);
  cardContentInfo.append(scheduleTime, cardOwnerInfo, scheduleDescription);
  cardOwnerInfo.append(petName, ownerSlash, ownerName);

  return cardContent;
}

function renderPeriod(schedules, periodElement) {
  if (schedules.length > 0) {
    const separatorHeader = createElementWithClass("div", "separator");
    periodElement.append(separatorHeader);
    schedules.forEach((schedule, index) => {
      const cardContent = createCard(schedule);

      periodElement.append(cardContent);

      const isLastCard = index === schedules.length - 1;

      if (!isLastCard) {
        const separatorInternal = createElementWithClass("div", "separator-internal-container");

        const separator = createElementWithClass("div", "separator");

        separatorInternal.append(separator);
        periodElement.append(separatorInternal);
      }
    });
  }
}

function createElementWithClass(type, className) {
  const element = document.createElement(type);
  element.classList.add(className);
  return element;
}

export { renderCards };
