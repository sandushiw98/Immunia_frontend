import React from "react";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

function useAuthContext() {
  const context = useContext(AuthContext);
  return context;
}

export default useAuthContext;
