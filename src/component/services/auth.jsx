import axios from "axios";

export function loginService ( {email, password} ){
    return axios.post('http://localhost:9000/api/auth/login', {email, password})
    .then(res =>{
      if(res.data.response){
        const { jwt } = res.data;
        return jwt
      }else return res.json()
    })
    .catch(err => console.log(err));
}


export function registerService( campos ){
  return axios.post('http://localhost:9000/api/auth/signup', campos)
    .then(res =>{
      if(res.data.response){
        const { jwt } = res.data;
        return jwt
      }else return res.json()
    })
    .catch(err => console.log(err));
}


//services for authentication of UI admin
export function loginAdmService ( {email, password} ){
  return axios.post('http://localhost:9000/api/auth/admin/login', {email, password})
  .then(res =>{
    if(res.data.response){
      const { jwt, user, typeUser } = res.data;
      return { jwt, user, typeUser };
    }else return res.json()
  })
  .catch(err => console.error(err));
}

export function DetallesCards (){
  return axios.get('http://localhost:9000/api/home/resumen=all')
    .then(res => {return res.data})
    .catch(err => console.error(err));
}