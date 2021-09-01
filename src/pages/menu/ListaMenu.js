import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import { useModals } from "../../component/hooks/useModals";
import { TYPES } from "./actionsCar";
import { carReducer } from "./carReducer";

import { ModalAddCar } from '../../component/components/ModalAddCar';
const NotFoundImage = 'https://safetyaustraliagroup.com.au/wp-content/uploads/2019/05/image-not-found.png';

export function ListaMenu() {
    const [isOpen, openModal, closeModal] = useModals();
    const [estadoMenu, setEstado] = useState({
        products:[], 
        cart:{}
    });
   
    useEffect(() => {
        axios.get('http://localhost:9000/api/menu')
        .then(res => {
            setEstado({
                products: res.data,
                cart: {}
            });
        })
        .then(res => res.json())
        .catch(error => {
            console.error(error);
        })    
    }, []);

    const [stateProduct, dispatch] = useReducer(carReducer, estadoMenu);
    stateProduct.products = estadoMenu.products; 
    const { products, cart } = stateProduct;
    
    const AddToBolsa = (id) => {
        
        dispatch({ type: TYPES.SHOW_DETAILS_PRODUCT, payload: id })
    };

    return (
        <section className="list-product pdd-border">
            <ModalAddCar
                isOpen={isOpen}
                closeModal={closeModal}
                product={cart}
            />
            <div className="grid-product">
                {products.map((producto, index) => (
                    <div key={index} className="card">
                        <div>
                            <div className="img-product">
                                <img src={producto.imageURL === null ? NotFoundImage : producto.imageURL} alt={`${producto.title} - La parrilla de Luchin`} />
                            </div>
                            <div className="descripciones">
                                <p className="descrip-product">{producto.title}</p>
                                <p className="precio">${(producto.price).toFixed(2)}</p>
                            </div>
                        </div>
                        <div className="cont-add">
                            <button onClick={() => { AddToBolsa(producto.id); openModal(); }} className="btn-agregar" type="submit">Agregar</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}