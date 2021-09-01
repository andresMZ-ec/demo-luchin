import '../../assets/css/bolsa.css'
import { Routes } from "../../routes";
import { Link } from "react-router-dom";

import { TablaBolsa } from "./tabla";
import { useLocalStorage } from '../../component/hooks/useLocalStorage';
import { useEffect, useState } from 'react';
import axios from 'axios';


export function Bolsa()  {
    const [obtenerDatosLS, , updateProductLS, deleteProductLS, calcularValores] = useLocalStorage();
    let productos = obtenerDatosLS();
    let totales  = calcularValores();

    const [ load, setLoad ] = useState(false);                  //estado para cambiar la cantidad
    const [ canjearPromocion, setCanjearPromocion ] = useState(()=>localStorage.getItem("uQx-GGh_zTHpq_ZcZvLy_qU"));
    const [ codeCupon, setCodeCupon ] = useState("");           //obtiene el codigo
    const [ alertCupon, setAlertCupon ] = useState(canjearPromocion !== null ? {state: true, alert: "Cupón canjeado"} : {state: false, alert:""});
    let data="";
    

    useEffect(()=>{
        if(load){
            productos.current = obtenerDatosLS();
            setLoad(false);
            totales.current = calcularValores();
        }
    }, [productos, load, setLoad, totales, obtenerDatosLS, calcularValores]);

    useEffect(()=>{
        setCodeCupon(data);
    }, [data])


    const handleSumCant = (id, value) => {
        value > 0 && value < 10 ? updateProductLS(id, value +1): updateProductLS(id, value); 
        setLoad(true);
    }
    
    const handleResCant = (id, value) => {
        value <= 1 ? updateProductLS(id, value): updateProductLS(id, value - 1);
        setLoad(true);
    }

    //eliminar espacios, simbolos y convertir a mayusculas el texto
    const handleChangeCupon = (codigo) => {
        let newElement = codigo;
        newElement = newElement.replace(/([^\w])/g, '');
        setCodeCupon(newElement);        
    }

    const validateCupon = (code) => {
        if(productos.length === 0){
            return setAlertCupon({
                state: false, 
                alert:"Tu bolsa esta vacía, selecciona un producto y vuelve a intentarlo."
            })
        }

        let prodinBolsa = [];
        productos.map(product => prodinBolsa.push({id: product.id}))
        
        axios.post("http://localhost:9000/api/promociones/validate=cDE", { code, prodinBolsa })
            .then(response => {
                if(!response.data.state){
                    setAlertCupon({
                        state: false,
                        alert: response.data.alert
                    })
                }else{
                    const { alert, desc, productAplica } = response.data;
                    setAlertCupon({
                        state: true,
                        alert: alert
                    });
                    localStorage.setItem("uQx-GGh_zTHpq_ZcZvLy_qU", JSON.stringify({ desc, productAplica}));
                }
                
                return setCanjearPromocion(()=>localStorage.getItem("uQx-GGh_zTHpq_ZcZvLy_qU"));
            })
            .catch(err => console.error(err));
    }

    return (  
        <>
            <div className="textoo pdd_border">
                <h1 className="subtitulo">RESUMEN DE TU BOLSA</h1>
            </div>
            <div className="tabla pdd_border">
                <div>
                    <TablaBolsa productBolsa={productos} sumar={handleSumCant} restar={handleResCant} deleteProd={deleteProductLS} />
                    <div className="cont-totales">
                        <div className="ctn__resumen">
                            <div className="recl-cupon">
                                <div className="topic-cpp">¿Tienes algún cupón? Canjéalo aquí</div>
                                <div className="contenedor-inputt">
                                    <div className="field_cupon">
                                        <input 
                                            type="text" 
                                            className="cupon-100" 
                                            placeholder="Ingresa el código de un cupón" 
                                            onChange={(e)=>{handleChangeCupon(e.target.value.toUpperCase())}} 
                                            value={codeCupon} 
                                            maxLength={12}        
                                            disabled={canjearPromocion === null ? false : true}
                                        />
                                        <button 
                                            onClick={()=>validateCupon(codeCupon)} 
                                            className="inputt-boton"
                                            disabled={canjearPromocion === null ? false : true}
                                        >+</button>
                                    </div>
                                    <p className={`alert_${alertCupon.state ? "send" : "error"}`}>{alertCupon.alert}</p>
                                </div>
                            </div>
                            <div className="sub-iva-total">
                                <p><span className="tema-rsm">SubTotales:</span><span className="price_total_pago">${(totales.subtotales).toFixed(2)}</span></p>
                                <p><span className="tema-rsm">Valor de Envío:</span><span className="price_total_pago">${(totales.delivery).toFixed(2)}</span></p>
                                {totales.totalDesc !== 0 && <p className="min-pay"><span className="tema-rsm">Descuento:</span><span className="price_total_pago">-${(totales.totalDesc).toFixed(2)}</span></p>}
                                <p><span className="tema-rsm">Total a Pagar:</span><span id="price_total_pago" className="price_total_pago">${(totales.total).toFixed(2)}</span></p>
                            </div>
                        </div>
                        <div className="cont-botones">
                            <Link className="button-resume-edit" to={Routes.Menu.path}>Ver más Productos</Link>
                            {productos.length !== 0 && <Link className="button-resume-delete" to={Routes.ProcessPedido.path}>Procesar Pedido</Link>}
                        </div>
                    </div>
                </div>

            </div>
           
        </>
    );
}

