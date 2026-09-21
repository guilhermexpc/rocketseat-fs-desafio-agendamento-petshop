import { apiConfig } from "../service/api-config";

async function addNewSchedule({ ownerName, pet, phone, service, date, hour, dateFull }) {
  const newSchedure = {
    id: "",
    ownerName: ownerName,
    pet: pet,
    phone: phone,
    service: service,
    date: date,
    hour: hour,
    dateFull: dateFull
  };

  try {
    await fetch(`${apiConfig.baseUrl}/schedule`, {
      method: "POST",
      "Content-Type": "application/json",
      body: JSON.stringify(newSchedure)
    });
    alert("Horário agendado com sucesso");
    console.log("Agendamento OK");
  } catch (error) {
    console.log("Error:", error);
  }
}

export { addNewSchedule };
