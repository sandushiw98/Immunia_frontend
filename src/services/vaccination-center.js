import { fetchWithHeader } from "./utils";

export const saveVaccinationCenter = (userData) => {
  return fetchWithHeader("/center/save/", "POST", userData);
};
export const getVaccinationCenterById = (id) => {
  return fetchWithHeader(`/center/${id}`, "GET");
};

export const deleteVaccinationCenterById = (id) => {
  return fetchWithHeader(`/center/delete/${id}`, "DELETE");
};

export const getVaccinationCenters = () => {
  return fetchWithHeader(`/center/`, "GET");
};
