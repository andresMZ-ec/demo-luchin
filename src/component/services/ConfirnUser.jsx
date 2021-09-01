import axios from "axios";
import { useHistory } from "react-router";
import { Routes } from "../../routes";

export function ComprobarToken(baseURL, token) {  
  const history = useHistory();

  let config = { 
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  return axios.post(baseURL, {}, config)
    .then(res => {
      if(!res.data){
        history.push(Routes.LoginAdmin.path);
        return false;
      }
      return true;
    })
    .catch(err => {
      console.error(err)
      return history.push(Routes.LoginAdmin.path);
    })
}