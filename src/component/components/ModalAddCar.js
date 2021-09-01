import { useState, useEffect } from "react";
import '../../assets/css/vent_add_car.css';
import { useLocalStorage } from "../hooks/useLocalStorage";

export function ModalAddCar(props) {
    const { isOpen, closeModal, product } = props;
    const haveElements = product.productSelect === undefined ? false : true;

    const [obtenerDatosLS, saveProductLS] = useLocalStorage();
    const [inforAdicional, setInforAdicional] = useState("");
    const [cantActual, setCantActual] = useState(1);
    const showModal = isOpen ? "active" : "";


    useEffect(() => {
        if (isOpen) {
            let dataLS = obtenerDatosLS();
            let oldProduct = dataLS.find(item => item.id === product.productSelect.id);
            if (!(oldProduct === undefined)) {
                setCantActual(oldProduct.quantity);
                setInforAdicional(oldProduct.inforAdd);
            } else { setCantActual(1); setInforAdicional("") }
        } else {
            setCantActual(1);
            setCantActual("");
        }
    }, [isOpen])


    // function para actualizar la cantidad
    const sumCantidad = () => {
        setCantActual(cantActual >= 0 && cantActual < 10 ? parseInt(cantActual) + 1 : cantActual);
    }
    const restCantidad = () => {
        setCantActual(cantActual <= 1 ? cantActual : cantActual - 1);
    }

    const changeCantidad = (event) => {
        if (/^[0-9]+$/.test(event)) {
            if (event <= 10 && event >= 1) {
                setCantActual(event);
            }
        } else { setCantActual(cantActual); }
    }

    const { productSelect } = product;

    const saveLocalStorage = () => {

        saveProductLS(
            {
                id: productSelect.id,
                imageURL: productSelect.imageURL,
                title: productSelect.title,
                description: productSelect.description,
                price: productSelect.price,
                quantity: cantActual,
                inforAdd: inforAdicional
            }
        );
    }

    return (
        <div className={`overlay ${showModal}`}>
            <div className="popup">
                <div className="iz">
                    <button type="button" className="btn_regresar" onClick={closeModal}><i className="fas fa-chevron-left"></i>Regresar</button>
                    <div className="photo_comida">
                        <h2 className="titulo">{haveElements && productSelect.title}</h2>
                        <img className="food_img" src={haveElements && productSelect.imageURL} alt="producto seleccionado para agregar" />
                    </div>
                </div>
                <div className="der">
                    <div className="primer">
                        <p className="precio">${haveElements && (productSelect.price).toFixed(2)}</p>
                        <div className="cant">
                            <p>Cantidad: </p>
                            <button className="btn_can" onClick={restCantidad} ><i className="fas fa-minus"></i></button>
                            <input type="tel" className="num_can" onChange={e => changeCantidad(e.target.value)} value={cantActual}></input>
                            <button className="btn_can" onClick={sumCantidad}><i className="fas fa-plus"></i></button>
                        </div>
                    </div>
                    <div className="des">
                        <h3>Descripción:</h3>
                        <p>{haveElements && productSelect.descripcion}</p>
                    </div>
                    <div className="adicional">
                        <h3>Agregue una información adicional o complementos a su pedido:</h3>
                        <textarea name="complemento" className="input-adicional" placeholder="Ejemplo: Porción de Papas" value={inforAdicional} onChange={e => { setInforAdicional(e.target.value) }}></textarea>
                        <p className="inf-import">El precio de su pedido puede aumentar a consideración del precio estimado</p>
                    </div>
                    <div className="cl-btn-agg">
                        <button onClick={() => { saveLocalStorage(); closeModal(); }} type="button" className="DSD btn_añadir"> Añadir a la Bolsa</button>
                    </div>
                </div>

            </div>
        </div>
    );
}