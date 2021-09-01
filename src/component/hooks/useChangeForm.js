import { useState } from "react";

export function useChangeForm(){
  const typeForm = {
    Login: "SigIn",
    Register: "SignUp",
    ResetPassword: "ResetPass",
  }

  const [ stateType, setStateType ] = useState("");

  const handleChangeType = (e)=>setStateType(e);


  return[ stateType, handleChangeType, typeForm ]
}