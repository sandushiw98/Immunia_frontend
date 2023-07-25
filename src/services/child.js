import { fetchWithHeader } from "./utils";

export const saveChild = (userData) => {
  return fetchWithHeader("/child/save/", "POST", userData);
};
export const getChildById = (id) => {
  return fetchWithHeader(`/child/${id}/`, "GET");
};

export const deleteChildById = (id) => {
  return fetchWithHeader(`/child/delete/${id}/`, "DELETE");
};

export const getChildren = () => {
  return fetchWithHeader(`/child/`, "GET");
};
