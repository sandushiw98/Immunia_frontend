import useAuthContext from "./useAuthContext";

function useUser() {
  const context = useAuthContext();
  return context.globalState.user;
}

export default useUser;
