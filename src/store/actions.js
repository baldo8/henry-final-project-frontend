import api from "@/services/api.js";


/*-----------------------------------------------------------------------------------------*/
/* Action Creators. */
/*-----------------------------------------------------------------------------------------*/
export const function_action = () => {
  return async function (dispatch){
    return dispatch({ type: "TYPE", payload: "PAYLOAD" });
  }
};
