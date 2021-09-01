import React, { useState } from 'react';

const Context = React.createContext({});

export function UserContextProvider({children}) {
  const [ userData, setUserData ] = useState({});
  const [ jwtAdmin, setJWTAdmin ]  = useState(() => sessionStorage.getItem("userA_jw_dash_tk"));
  const [ token, setToken ] = useState(() => localStorage.getItem("_tkuser_jwt"));

  return <Context.Provider value={ { 
    userData, 
    jwtAdmin, 
    token,  
    setUserData, 
    setJWTAdmin, 
    setToken 
  } }>{children}</Context.Provider>;
}

export default Context;
