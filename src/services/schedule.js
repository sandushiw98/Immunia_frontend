import { fetchWithHeader } from "./utils";

export const saveSchedule = (userData) => {
  return fetchWithHeader("/schedule/save/", "POST", userData);
};
export const saveAllSchedule = (userData) => {
  return fetchWithHeader("/schedule/saveAll", "POST", userData);
};

export const getScheduleByDate = (vaccinCentId, date) => {
  return fetchWithHeader(
    `/schedule/date?date=${date}&id=${vaccinCentId}`,
    "GET"
  );
};

export const getScheduleById = (id) => {
  return fetchWithHeader(`/schedule/${id}/`, "GET");
};

export const deleteScheduleById = (id) => {
  return fetchWithHeader(`/schedule/delete/${id}/`, "DELETE");
};

export const getSchedules = () => {
  return fetchWithHeader(`/schedule/`, "GET");
};
