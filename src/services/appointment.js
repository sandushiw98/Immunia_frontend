import { fetchWithHeader } from "./utils";

export const saveAppointment = (userData) => {
  return fetchWithHeader("/appointment/save", "POST", userData);
};
export const getAppointmentById = (id) => {
  return fetchWithHeader(`/appointment/${id}`, "GET");
};

export const deleteAppointmentById = (id) => {
  return fetchWithHeader(`/appointment/delete/${id}`, "DELETE");
};

export const getAppointments = () => {
  return fetchWithHeader(`/appointment`, "GET");
};
