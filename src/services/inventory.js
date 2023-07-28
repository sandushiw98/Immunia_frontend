import { fetchWithHeader } from "./utils";

export const getInventory = () => {
  return fetchWithHeader(`/vaccineInventory/`, "GET");
};

export const getInventoryById = (id) => {
  return fetchWithHeader(`/vaccineInventory/${id}`, "GET");
};

export const saveInventory = (data) => {
  return fetchWithHeader(`/vaccineInventory/save`, "POST", data);
};

export const updateInventory = (id, data) => {
  return fetchWithHeader(`/vaccineInventory/update/${id}`, "PUT", data);
};
