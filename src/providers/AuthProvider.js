import React from "react";
import { useCallback } from "react";

const AuthContext = React.createContext({});
function AuthProvider({ children }) {
  const [globalState, setglobalState] = React.useState({});
  const setUser = useCallback((user) => {
    setglobalState((s) => {
      return { ...s, user };
    });
  }, []);

  
  return (
    <AuthContext.Provider value={{ globalState, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
