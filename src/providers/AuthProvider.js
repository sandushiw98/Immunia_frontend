import React from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = React.createContext({
  globalState: { children: [] },
  setUser: undefined,
  setChildren: undefined,
  removeUser: undefined,
});
function AuthProvider({ children }) {
  const [globalState, setglobalState] = React.useState({});
  const navigate = useNavigate();
  console.log(globalState);
  const setUser = useCallback((user) => {
    setglobalState((s) => {
      return { ...s, user };
    });
  }, []);

  const removeUser = useCallback(() => {
    setglobalState((s) => {
      return { ...s, user: undefined, children: [] };
    });
  }, []);
  const setChildren = useCallback((children) => {
    setglobalState((s) => {
      return { ...s, children };
    });
  }, []);

  React.useEffect(() => {
    if (globalState.user) {
      window.localStorage.setItem("state", JSON.stringify(globalState));
    }
  }, [globalState]);

  React.useEffect(() => {
    const state = window.localStorage.getItem("state");
    if (state) {
      setglobalState(JSON.parse(state));
    }
  }, []);
  React.useEffect(() => {
    if (globalState.user) {
      if (window.location.pathname === "/login") {
        if (globalState.user.userRole === "parent") {
          navigate("/parentDashboard");
        } else if (globalState.user.userRole === "vaccine_center") {
          navigate("/vaccinationdashboard");
        } else if (globalState.user.userRole === "Admin") {
          navigate("/adminDashboard");
        }
      }
    }
  }, [globalState.user, navigate]);

  React.useEffect(() => {
    const access_token = window.localStorage.getItem("access_token");
    if (!access_token) {
      removeUser();
    }
  }, [removeUser]);

  return (
    <AuthContext.Provider
      value={{ globalState, setUser, setChildren, removeUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
