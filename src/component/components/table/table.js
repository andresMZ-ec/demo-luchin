import { Fragment } from "react";


 
export function Table({tem}) {
    const { tabla, camposcl, filas } = tem;

    const verEstado = (estado) => {
        if(estado === "Activo"){
            return "status-activo"
        }else if(estado === "Desactivado"){
            return "status-desactivado"
        }
    }
   
    
    
    const tablas = ()=>{
        if(tabla === "align-center") {
            return(
                <Fragment>
                    <thead>
                        {camposcl.map(campo=>(
                            <tr>
                                <th>{campo.id}</th>
                                <th>{campo.producto}</th>
                                <th>{campo.codigo}</th>
                                <th>{campo.inicio}</th>
                                <th>{campo.fin}</th>
                                <th>{campo.estado}</th>
                                <th></th>
                            </tr>
                        ))}
                    </thead>
                    <tbody>
                        
                        {filas.map(fila=>(
                            <tr>
                                <td>{fila.id}</td>
                                <td>{fila.nombre} </td>
                                <td>{fila.codigo}</td>
                                <td>{fila.inicio}</td>
                                <td>{fila.fin}</td>
                                <td className={`${verEstado(fila.estado)}`}><span>{fila.estado}</span></td>
                                <td className="action_table">
                                    <button className="table-edit" type="button"><i className="fas fa-pencil"></i></button>
                                    <button className="table-delete" type="button"><i className="fas fa-trash"></i></button>
                                </td>
                            </tr>
                        ))}
                        {/* {mapContenido(filas)} */}
                    </tbody>    
                </Fragment>               
            );
        }else if(tabla ===" "){
            return(
                <Fragment>
                    <thead>
                        {camposcl.map(campo=>(
                            <tr>
                                <th>{campo.numero}</th>
                                <th>{campo.cliente}</th>
                                <th>{campo.correo}</th>
                                <th>{campo.tel}</th>
                                <th></th>
                            </tr>
                        ))}
                    </thead>
                    <tbody>
                        
                        {filas.map(fila=>(
                            <tr>
                                <td>{fila.id}</td>
                                <td>{fila.cliente} </td>
                                <td>{fila.correo}</td>
                                <td>{fila.tel}</td>
                                <td className="action_table">
                                    <button className="table-edit" type="button"><i className="fas fa-pencil"></i></button>
                                    <button className="table-delete" type="button"><i className="fas fa-trash"></i></button>
                                    <button className="table-view" type="button">Mostrar Detalles</button>
                                </td>
                            </tr>
                        ))}
                        {/* {mapContenido(filas)} */}
                    </tbody>    
                </Fragment>               
            );

        }
    }
    return (  
        <table className={`tables_adm ${tabla}`}>
            {tablas()}
        </table>

    );
}
 
