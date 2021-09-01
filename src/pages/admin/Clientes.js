import axios from "axios";
import { useEffect, useState } from "react";
import TableAdmin from "../../component/ADMIN/Table/TableAdmin";

// export function estadoInicialClient(){
// const [clients, setClients]=useState([]);
// const [estado, setEstado]= useState({
 // clients:[{"cliente_id":1,"nombres":"Andrés Alejandro - Moncayo Zambrano","cliente_telefono":981562798,"cliente_email":"andresmoncayo123@gmail.com","det_orden_cantidad":5}],
//  cart:{}
 //});
// useEffect(()=>{
// axios.get('http://localhost:9000/api/cliente').then(res=>{
//   console.log(res);
// }).catch(error=>{
//   console.log
// })
// })
// }


export function Clientes() {
  const [listClients, setListClients] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:9000/api/clientes/lista')
      .then(res => setListClients(res.data))
      .then(res => res.json())
      .catch(error => console.log(error))
  }, [])
  return (
    <>
      

      <div className="theme-apart">
        <h2>Clientes</h2>
      </div>

      <section className="container-main">
        <div className="tables_admin bd__sect">
          <h2 className="title_card_cl">Lista de Clientes</h2>
          <TableAdmin
            columnas={[ "ID", "Nombres","Teléfono","Correo"]}
            filas={
              listClients
            }
          />
        </div>
      </section>
    </>
  );
}
