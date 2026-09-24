import dayjs from "dayjs";

import { apiConfig } from "./api-config";

async function scheduleHourFetchByDay({ date }) {
  try {
    const response = await fetch(apiConfig.scheduleUrl);
    const data = await response.json();

    // const scheduleHours = data.map((schedule) => {
    //   const [scheduleHour] = schedule.hour.split(":");
    //   return scheduleHour;
    // });

    // Agendamentos do dia selecionado
    const dailySchedules = data.filter((schedule) => dayjs(date).isSame(schedule.date, "day"));
    console.log("Agendamentos:", dailySchedules);

    return dailySchedules.map((schedule) => schedule.hour);
  } catch (error) {
    console.log("ERROR: ", error);
  }
}

async function scheduleFetchByDay({ date }) {
  try {
    const response = await fetch(apiConfig.scheduleUrl);
    const data = await response.json();
    console.log("schedule.date::", dayjs(date));

    // Agendamentos do dia selecionado
    const dailySchedules = data
      .filter((schedule) => dayjs(date).isSame(schedule.date, "day"))
      .sort((scheduleA, scheduleB) => {
        return new Date(scheduleA.dateFull) - new Date(scheduleB.dateFull);
      });
    console.log("Agendamento Carregado:", dailySchedules);

    return dailySchedules;
  } catch (error) {
    console.log("ERROR: ", error);
  }
}

export { scheduleHourFetchByDay, scheduleFetchByDay };
