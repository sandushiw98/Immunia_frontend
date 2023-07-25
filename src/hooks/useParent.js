import React from "react";
import { getChildrenByParentId } from "../services/child";
import useAuthContext from "./useAuthContext";

function useParent() {
  const { globalState, setChildren } = useAuthContext();
  React.useEffect(() => {
    console.log("Children fetch");
    if (globalState.user) {
      getChildrenByParentId(globalState.user.id).then((v) => setChildren(v));
    }
  }, [globalState.user, setChildren]);
  if (globalState.children) {
    return [globalState.children];
  } else {
    return [[]];
  }
}

export default useParent;
