import { Table } from "./table"
import '../../../assets/css/components/tablas.css';


export function Tab() {
    const tem={
        tabla:" ",
        camposcl:[
            {
                id:"ID",
                producto:"Producto al que aplica", 
                codigo:"Código de Promoción",
                inicio: "Fecha de Inicio",
                fin:"Fecha de Culminación",
                estado:"Estado", 
                numero:"#",
                cliente:"Cliente",
                correo:"Correo",
                tel:"Telefono"
            }    
        ],
        filas:[
            {
                id:1,
                nombre:"Mendoza tres platos", 
                codigo:"1234-1234-1234",
                inicio: "11-08-2021",
                fin:"30-08-2021",
                estado:"Activo", 
                numero:1,
                cliente:"Jose Alvia",
                correo:"jose@gmail.com",
                tel:"0987654321"
            },
            {
                id:2,
                nombre:"yuuju", 
                codigo:"1234-1234-1234",
                inicio: "11-08-2021",
                fin:"30-08-2021",
                estado:"Desactivado",
                numero:2,
                cliente:"Jose Alvia",
                correo:"jose@gmail.com",
                tel:"0987654321" 
            },
            {
                id:3,
                nombre:"Mendoza tres platos", 
                codigo:"1234-1234-1234",
                inicio: "11-08-2021",
                fin:"30-08-2021",
                estado:"Activo",
                numero:3,
                cliente:"Jose Alvia",
                correo:"jose@gmail.com",
                tel:"0987654321" 
            },
            {
                id:4,
                nombre:"Mendoza tres platos", 
                codigo:"1234-1234-1234",
                inicio: "11-08-2021",
                fin:"30-08-2021",
                estado:"Desactivado",
                numero:4,
                cliente:"Jose Alvia",
                correo:"jose@gmail.com",
                tel:"0987654321" 
            },
        ]    
    }
    return ( 
        <div className="container-form">
            <Table tem={tem}/>
        </div>
    );
}
 
