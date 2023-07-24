import { BASE_URL } from "./config";

export const fetchWithHeader = async (path, method, body) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const access_token = window.localStorage.getItem("access_token");
  if(access_token){
    myHeaders.append("Authorization", access_token);
  }

  var requestOptions = {
    method: method,
    headers: myHeaders,
    body: body ? JSON.stringify(body) : undefined,
  };

  return fetch(`${BASE_URL}${path}`, requestOptions)
    .then((response) => response.json())
    .catch((error) => console.log("error", error));
};
