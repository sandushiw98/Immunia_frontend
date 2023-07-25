import { fetchWithHeader } from "./utils";

export const signUpParent = (userData) => {
  return fetchWithHeader("/parent/save/", "POST", userData);
};
export const signUpAdmin = (userData) => {
  return fetchWithHeader("/admin/save/", "POST", userData);
};
export const signUpUser = (userData) => {
  return fetchWithHeader("/user/save/", "POST", userData);
};
export const signInUser = async (userData) => {
  const res = await fetchWithHeader("/login", "POST", userData);
  if (!res.access_token) {
    return;
  }
  window.localStorage.setItem("access_token", res.access_token);
  window.localStorage.setItem("refresh_token", res.refresh_token);
  return res;
};

export const getAllUsers = () => {
  return fetchWithHeader("/user/", "GET");
};
