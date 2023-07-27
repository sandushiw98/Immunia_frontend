import { fetchWithHeader } from "./utils";

export const saveAppointment = (userData) => {
  return fetchWithHeader("/appointment/save", "POST", userData);
};
export const getAppointmentById = (id) => {
  return fetchWithHeader(`/appointment/${id}/`, "GET");
};

export const deleteAppointmentById = (id) => {
  return fetchWithHeader(`/appointment/delete/${id}/`, "DELETE");
};

export const getAppointments = () => {
  return fetchWithHeader(`/appointment/`, "GET");
};

export const getAppointmentsByParent = (id) => {
  return getAppointments().then((apps) =>
    apps.filter((app) => app.parent.id === id)
  );
};

export const getAppointmentsByCenter = (id) => {
  return getAppointments().then((apps) =>
    apps.filter((app) => app.vaccineCenter.id === id)
  );
};
