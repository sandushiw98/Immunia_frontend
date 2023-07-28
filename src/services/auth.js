import { fetchWithHeader } from "./utils";

export const signUpParent = (userData) => {
  return fetchWithHeader("/parent/save", "POST", userData);
};
export const signUpAdmin = (userData) => {
  return fetchWithHeader("/admin/save", "POST", userData);
};

export const signOutUser = () => {
  window.localStorage.removeItem("access_token");
};
export const signUpUser = (userData) => {
  return fetchWithHeader("/user/save", "POST", userData);
};
export const signInUser = async (userData) => {
  const res = await fetchWithHeader("/login", "POST", userData);
  if (!res || !res.access_token) {
    return;
  }
  window.localStorage.setItem("access_token", res.access_token);
  window.localStorage.setItem("refresh_token", res.refresh_token);
  const user = await getUserByEmail(userData.email);
  return { response: res, user };
};

export const getAllUsers = () => {
  return fetchWithHeader("/user/", "GET");
};

export const getUserById = (id) => {
  return fetchWithHeader(`/user/${id}`, "GET");
};
export const getUserByEmail = (email) => {
  return fetchWithHeader(`/user/`, "GET").then((data) =>
    data.find((v) => v.email === email)
  );
};
