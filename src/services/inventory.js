import { fetchWithHeader } from "./utils";

export const getInventory = (id) => {
  return fetchWithHeader(`/vaccineInventory/`, "GET").then((v) =>
    v.filter((rec) => rec.vaccineCenter.id === id)
  );
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
