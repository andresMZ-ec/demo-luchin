import { useCallback, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Routes } from "../../routes";
import { loginAdmService, loginService, registerService } from "../services/auth";
import Context from "./Context/useContextUsers";

export function useUser() {
  const { 
    token,  
    setUserData,
    setJWTAdmin, 
    setToken 
  } = useContext(Context);
  const history = useHistory();
  
  const [checkCred, setCheckCred] = useState({ loading: false, error: false });

  const Login = useCallback(({ email, password }) => {
    setCheckCred({ loading: true, error: false })

    loginService({ email, password })
      .then(jwt => {
        if (jwt !== undefined) {
          localStorage.setItem('_tkuser_jwt', jwt)

          setCheckCred({ loading: false, error: false })
          setToken(jwt)
          history.push(Routes.Home.path);
        } else {
          setCheckCred({ loading: false, error: true })
        }
      })
      .catch(err => {
        localStorage.removeItem('_tkuser_jwt')
        setCheckCred({ loading: false, error: true })
        console.log(err)
      })

  }, [setToken, history])


  const Register = useCallback((campos) => {

    registerService(campos)
      .then(jwt => {
        if (jwt !== undefined) {
          localStorage.setItem('_tkuser_jwt', jwt)

          setCheckCred({ loading: false, error: false })
          setToken(jwt)
          history.push(Routes.Home.path);
        } else {
          setCheckCred({ loading: false, error: true })
        }
      })
      .catch(err => {
        localStorage.removeItem('_tkuser_jwt')
        setCheckCred({ loading: false, error: true })
        console.log(err)
      })

  }, [setToken, history]);


  const LoginAdmin = useCallback(({ email, password }) => {
    setCheckCred({ loading: true, error: false })

    loginAdmService({ email, password })
      .then(res => {
        if (res !== undefined) {
          const { jwt, user, typeUser } = res;
          sessionStorage.setItem('userA_jw_dash_tk', jwt)

          setCheckCred({ loading: false, error: false });
          setJWTAdmin(jwt);
          setUserData({user, typeUser});
          history.push(Routes.Dashboard.path);
        } else {
          setCheckCred({ loading: false, error: true })
          sessionStorage.removeItem('userA_jw_dash_tk')
        }
      })
      .catch(err => {
        sessionStorage.removeItem('userA_jw_dash_tk')
        setCheckCred({ loading: false, error: true })
        console.log(err)
      })

  }, [setJWTAdmin, setUserData, history])

  
  const LogOut = useCallback(() => {
    localStorage.removeItem('_tkuser_jwt')

    setToken(null);
    history.push(Routes.Home.path);
  }, [setToken, history])

  
  const LogOutAdmin = useCallback(() => {
    sessionStorage.removeItem('userA_jw_dash_tk')

    setJWTAdmin(null);
    setUserData({});
    history.push(Routes.LoginAdmin.path);
  }, [setJWTAdmin, setUserData, history])


  return {
    isLogged: Boolean(token),
    isLoader: checkCred.loading,
    isError: checkCred.error,
    Login,
    LoginAdmin,
    Register,
    LogOut,
    LogOutAdmin,
  };
}