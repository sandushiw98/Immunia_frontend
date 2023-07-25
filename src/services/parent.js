import { fetchWithHeader } from "./utils";
export const getAllParents = () => {
  return fetchWithHeader("/parent/", "GET");
};
export const getParentById = (id) => {
  return fetchWithHeader(`/parent/${id}`, "GET");
};

export const deleteParentById = (id) => {
    return fetchWithHeader(`/parent/delete/${id}`, "DELETE");
  };
