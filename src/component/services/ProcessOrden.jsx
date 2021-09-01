import axios from "axios";

export function ProcesarOrden(products, precios, dataCliente){
  
  return axios.post("http://localhost:9000/api/ordenes/new=orden", { products, precios, dataCliente })
    .then(res => {
      return res.data}
    )
    .catch(err => {return err.data});
}