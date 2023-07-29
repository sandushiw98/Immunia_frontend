import { fetchWithHeader } from "./utils";

export const submitVaccineRecord = (data) => {
  return fetchWithHeader("/records/vaccineRecord/submit", "POST", data);
};

export const getVaccineRecordsById = (id) => {
  return fetchWithHeader(`/records/vaccineRecordByChild/${id}`, "GET");
};

export const getReturnDatesById = (id) => {
  return fetchWithHeader(`/records/returnDateByChild/${id}`, "GET");
};
