import React from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = React.createContext({
  globalState: {},
  setUser: undefined,
});
function AuthProvider({ children }) {
  const [globalState, setglobalState] = React.useState({});
  const navigate = useNavigate();
  const setUser = useCallback((user) => {
    setglobalState((s) => {
      return { ...s, user };
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
        navigate("/parentDashboard");
      }
    }
  }, [globalState.user, navigate]);

  return (
    <AuthContext.Provider value={{ globalState, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
