import axios from 'axios';
import { useEffect, useState } from "react";
import '../../assets/css/admin/Ventas.css';
import TableAdmin from '../../component/ADMIN/Table/TableAdmin';

export function Ventas() {

    const [ingresos, setIngresos] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:9000/api/ventas/ingresosmes')
        .then(res=> setIngresos(res.data))
        .then(res=>res.json())
        .catch(error=>console.log(error))        
    }, [])

    const [productV, setProductV] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:9000/api/ventas/resumentabl/mas_vendido')
        .then(res=> setProductV(res.data))
        .then(res=>res.json())
        .catch(error=>console.log(error))        
    }, [])



    const [Tclientes, setTclientes] = useState([]);    
    useEffect(() => {
        axios.get('http://localhost:9000/api/ventas/ventas/topcliente')
        .then(res=> setTclientes(res.data))
        .then(res=>res.json())
        .catch(error=>console.log(error))        
    }, [])


    return (
        <>
            <div className="theme-apart">
                <h2>Ventas</h2>
            </div>
            <section className="container-main">
                <div className="row-ventas-flex">
                    <div className="cards_sales">
                        {ingresos.map((card) => (
                            <div class="ctn-card">
                                <p className="cant_cd">{card.ingresos}</p>
                                <p className="tema_cd">Mes: {card.mes}</p>
                                <p className="slogan_cd">Ingresos Estimados</p>
                            </div>
                        ))}                     
                           {productV.map((cards) => (
                            <div class="ctn-card">
                                <p className="cant_cd">{cards.cantidad}</p>
                                <p className="tema_cd">{cards.nombre}</p>
                                <p className="slogan_cd">Producto más vendido</p>
                            </div>
                        ))}        
                    </div>

                    <div className="tb_cl_orders bd__sect">
                        <h2 className="title_card_cl">Clientes con mayor compras</h2>
                        <div className="ct-table_customers">
                            <TableAdmin
                                columnas={["Cliente", "Correo Electrónico", " Teléfono", "Pedidos"]}
                                filas={
                                    Tclientes.map(cli => (
                                    [
                                        cli.nombres,
                                        cli.cliente_email,
                                        cli.cliente_telefono,
                                        cli.to_orden
                                    ]
                                  ))
                                }
                            
                            />
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

