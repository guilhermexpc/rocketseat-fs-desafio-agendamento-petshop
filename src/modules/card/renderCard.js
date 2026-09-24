import dayjs from "dayjs";
import { scheduleFetchByDay } from "../../service/schedule-fetch";

import morningIcon from "../../assets/icons/sun-set-blue.svg";
import afternoonIcon from "../../assets/icons/clound-sun-color.svg";
import nightIcon from "../../assets/icons/sun-set-blue.svg";

async function renderCards({ scheduleCalendar }, { periodMoarning, periodAfternoon, periodNight }) {
  try {
    console.log("scheduleCalendar: ", scheduleCalendar.value);
    const schedules = await scheduleFetchByDay({
      date: scheduleCalendar.value
    });

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

    renderPeriod(morningSchedules, periodMoarning, "Manhã", "09h-12h", morningIcon);
    renderPeriod(afternoonSchedules, periodAfternoon, "Tarde", "13h-18h", afternoonIcon);
    renderPeriod(nightSchedules, periodNight, "Noite", "19-22h", nightIcon);
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

function renderPeriod(schedules, periodElement, title, time, periodIcon) {
  periodElement.innerHTML = "";
  const cardHeader = renderHeader(title, time, periodIcon);
  periodElement.append(cardHeader);

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

function renderHeader(title, time, periodIcon) {
  const cardHeader = createElementWithClass("div", "card-header");
  const headerIcon = createElementWithClass("img", "");
  const periodTitle = createElementWithClass("span", "period-title");
  const periodTime = createElementWithClass("span", "period-time");

  headerIcon.setAttribute("src", periodIcon);
  periodTitle.textContent = title;
  periodTime.textContent = time;

  cardHeader.append(headerIcon, headerIcon, periodTitle, periodTime);
  return cardHeader;
}

function createElementWithClass(type, className) {
  const element = document.createElement(type);
  if (className) {
    element.classList.add(className);
  }
  return element;
}

export { renderCards };
