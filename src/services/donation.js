import { fetchWithHeader } from "./utils";

export const saveDonor = (data) => {
  return fetchWithHeader(`/donor/save`, "POST", data);
};

export const saveDonation = (data) => {
  return fetchWithHeader(`/donation/save`, "POST", data);
};
export const saveDonationWithDonor = (data) => {
  return saveDonor(data).then((v) => {
    return saveDonation({ ...data, donor: { donorID: v.donorId } });
  });
};
