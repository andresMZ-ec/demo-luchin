import { useEffect, useState } from "react";
import { Fragment } from "react";
import axiosConfig from "../../API";
import '../../assets/css/admin/home.css'

export function Homeadmin() {
    const [ valuesCard, setValuesCard ] = useState({});
    const [ orders, setOrders ] = useState([]);
    const [ alls, setalls ] = useState({});
    let dta;
    let orderall = [];
    
    
    useEffect(() => {
        let allOrders = [];
        //cards
        axiosConfig.get('/home/resumen=all')
            .then(res => setValuesCard(res.data))
            .catch(err => console.error(err));
            
            //ordenes pendientes
        axiosConfig.get('/home/orders=pend')
        .then(res => {
            if(res){
                allOrders.push(res.data)
                // allOrders.map(order => 
                //     axiosConfig.post("/home/get-detailsorders", {id: order.id, total: order.total} )
                //         .then(response => {
                //             if(response){ 
                //                 orderall.push(response.data);
                //             }
                //         })
                //         .catch(err => console.error(err))
                // )
                
            }})
            .catch(err => console.error(err));

            
            // return setOrders(allOrders) ;
            // setOrders(orderall)
        return setOrders(allOrders);
    }, [])
        

    // const [ordenreciente, setordenreciente] = useState([]);
    // const [ordersPen, setOrdersPen] = useState([])
    // const [Torden, setTorden] = useState([]);


    const Usuarioname = {
        nombreUsuario: 'Luis Santana'
    }


    // useEffect(() => {
    //     axios.get('http://localhost:9000/api/home/resumentabl_clientes')
    //         .then(res => setordenreciente(res.data))
    //         .then(res => res.json())
    //         .catch(error => console.log(error))
    // }, [])


    // useEffect(() => {
    //     axios.get('http://localhost:9000/api/home/ordenes_pen')
    //         .then(resp => setordersPend(resp.data))
    //         .then(resp => resp.json())
    //         .catch(error => console.log(error))
    // }, [])



    // useEffect(() => {
    //     axios.get('http://localhost:9000/api/home/ordenes_pen/cantidad')
    //         .then(resp => setCantidadpendiente(resp.data))
    //         .then(resp => resp.json())
    //         .catch(error => console.log(error))
    // }, [])
    // console.log(cantidadpendiente)

    //ordenes totales
    // useEffect(() => {
    //     axios.get('http://localhost:9000/api/home/ordenes/cantidad')
    //         .then(resp => setTorden(resp.data))
    //         .then(resp => resp.json())
    //         .catch(error => console.log(error))
    // }, [])
    // console.log(Torden)

    return (
        <Fragment>
            <div className="theme-apart">
                <h2>Bienvenido, <span className="name-user">{Usuarioname.nombreUsuario}</span></h2>
            </div>
            <section className="container-main">
                <div className="flex-container">
                    <div className="cl1">
                        <div className="group-resume">
                            <div className="card-rsm bd__sect">
                                <p className="title">TOTAL DE CLIENTES</p>
                                <div className="dt-resume up">
                                    <div>
                                        <h1 className="total">{valuesCard.clientes}</h1>
                                        <div className="porcentaje"><i className="fas fa-arrow-up"></i><span>12.5%</span></div>
                                    </div>
                                    <div className="icon"><i className="fas fa-users"></i></div>
                                </div>
                            </div>
                            <div className="card-rsm bd__sect">
                                <p className="title">Ordenes Completadas</p>
                                <div className="dt-resume down">
                                    <div>
                                        <h1 className="total">{valuesCard.entregas}</h1>
                                        <div className="porcentaje"><i className="fas fa-arrow-up"></i><span>1.5%</span></div>
                                    </div>
                                    <div className="icon"><i className="fas fa-burger-soda"></i></div>
                                </div>
                            </div>
                            <div className="card-rsm bd__sect">
                                <p className="title">total de ordenes</p>
                                <div className="dt-resume">
                                    <div>
                                        <h1 className="total">{valuesCard.ordenes}</h1>
                                        <div className="porcentaje down"><i className="fas fa-arrow-up"></i><span>12.5%</span></div>
                                    </div>
                                    <div className="icon"><i className="fas fa-calendar-check"></i></div>
                                </div>
                            </div>
                        </div>
                        <div className="table-orders bd__sect">
                            <h2 className="title_card_cl">Ordenes Recientes</h2>
                            <div className="ct-table_orders">
                                <table>
                                    <thead>
                                        <th>Productos</th>
                                        <th>Cliente</th>
                                        <th>Price</th>
                                        <th>Estado</th>
                                    </thead>
                                    <tbody>
                                        {()=>{
                                            if(!orders === undefined){
                                                return <tr key="">
                                                    <td>Puta madre</td>
                                                </tr>
                                            }
                                            return <p>Hsas</p>
                        
                                        }}
                                    </tbody>
                                    <tbody>
                                        {orders.map(orden => (
                                            <tr>
                                                {console.log(orden)}
                                                <td>
                                                    {/* <ul>
                                                        {orden.products.map(product => (
                                                            <li>{product.producto}</li>
                                                        ))}
                                                    </ul> */}
                                                </td>
                                                <td>{"pepito"}</td>
                                                <td>{orden.total}</td>
                                                <td><p className="state-order pendiente">{"Entregado"}</p></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                {console.log(orders)}
                                {/* {orders.length === 0 && <p className="content-empty">Aún no tienes ordenes el dia de hoy</p>} */}
                            </div>
                        </div>
                    </div>
                    {/* <div className="cl2">
                        <div className="view-order bd__sect">
                            <div className="container-tille__order">
                                <h2 className="title_card_cl">Ordenes Pendientes</h2>
                                <p className="contador">{}</p>

                            </div>
                            <div className="container-card_order">
                                {orders.map(pendiente => (<div className="card-order">
                                    <p className="num-order">ID Pedido: <span>{pendiente.orden_id}</span></p>
                                    <div className="dtlle-order_pend">
                                        <ul className="cl-products">
                                            <li>{pendiente.det_orden_infor_adic}</li>
                                        </ul>
                                        <p className="cl-price">${pendiente.orden_total_orden}</p>
                                    </div>
                                </div>))}
                            </div>
                        </div>
                    </div> */}
                </div>
            </section>
        </Fragment>
    )
}