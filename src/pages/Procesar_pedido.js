import { useState } from "react";
import '../assets/css/procesar_pedido.css';
import { Routes } from "../routes";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useHistory } from "react-router-dom";
import { useLocalStorage } from '../component/hooks/useLocalStorage';
import ModalProcessPedido from "../component/components/ModalProcessPedido";
import { useModals } from '../component/hooks/useModals';
import { ProcesarOrden } from "../component/services/ProcessOrden";


export function ProcesarPedido(){
    const [ obtenerDatosLS, , , , calcularValores ] = useLocalStorage();
    const [ isOpen, openModal, closeModal ] = useModals();
    const allTotals = calcularValores();
    const history = useHistory();

    const [ alert, setAlert ] = useState( {state: null, send:"Estamos procesando tu pedido, esto puede tardar unos segundos."});
    const [ fnameClient, setFnameClient ] = useState("Rellene el Formulario");
    const [ lnameClient, setLnameClient ] = useState(""); 
    const [ directionTo, setDirectionTo ] = useState("Rellene el Formulario"); 


    if(obtenerDatosLS().length === 0){
        history.push(Routes.Home.path);
    }
    return(
        <> 
            {isOpen && <ModalProcessPedido 
                isOpen={isOpen} 
                closeModal={closeModal}  
                mensaje={alert}
            />}
            <div className="main_process-pay">   
                <div className="proceso_compra">
                    <p>PROCESAR COMPRA</p>
                </div>
                <Formik
                    initialValues={{
                        firstName: "",
                        lastName: "",
                        email: "",
                        telefono: "",
                        direccion: "",
                        textarea: ""
                    }}

                    validate={(values) => {
                        let errors = {}
                        setLnameClient(values.lastName);
                        setFnameClient(values.firstName);
                        setDirectionTo(values.direccion);

                        //nombres
                        if(!values.firstName){
                            errors.firstName = "Para hacer tu pedido necesitamos tu nombre";
                        }else if(!/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g.test(values.firstName)){
                            errors.firstName = "Este campo no puede contener números ni caracteres especiales";
                        }

                        //apellidos
                        if(!values.lastName){
                            errors.lastName = "Para hacer tu pedido necesitamos tu apellido";
                        }else if(!/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g.test(values.lastName)){
                            errors.lastName = "Este campo no puede contener números ni caracteres especiales";
                        }

                        //CORREO ELECTRONICO
                        if (!values.email) {
                            errors.email = "Para hacer tu pedido necesitamos tu correo electrónico";
                        } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)) {
                            errors.email = 'Por favor ingresa un correo válido';
                        }

                        //TELEFONO
                        if (!values.telefono) {  // -> poner el campo que necesitan con el nombre que asignaron en el inicializador
                            errors.telefono = "Para hacer tu pedido necesitamos tu número de teléfono";
                        } else if (!/[0-9]{10}/g.test(values.telefono)) {
                            errors.telefono = "Ingrese un teléfono válido, ejemplo: 09155656XX";
                        }

                        //DIRECCION
                        if(!values.direccion){
                            errors.direccion = "Ingresa la Calle, Avenida o Ciudadela donde recibiras tu pedido";
                        }

                        //MENSAJE
                        if(!values.textarea){
                            errors.textarea = "Para encontrarte más rapido, completa este campo";
                        }

                        return errors;
                    }}

                    onSubmit={(values, { resetForm }) => {
                        const allproducts = obtenerDatosLS();

                        if(allproducts.length !== 0){
                            openModal();
                            ProcesarOrden( obtenerDatosLS(), allTotals, values)
                                .then(res => {
                                    setTimeout(() => {
                                        setAlert(res);
                                        if(res.state){
                                            localStorage.removeItem('uQx-GGh_zTHpq_ZcZvLy_qU');
                                            return localStorage.removeItem('__bolsa');
                                        }
                                    }, 5000);
                                })
                            return resetForm();
                        }
                    }}
                >
                    {({errors}) => (
                        <Form className="form_group">
                            <div className="infor-general">
                                <div>
                                    <p className="title-group-item">DATOS DEL CLIENTE</p>
                                    <div className="container_fields_us">
                                        <p className="field_u div">
                                            <label>Nombre</label>
                                            <Field
                                                type="text"
                                                name="firstName"
                                                placeholder="Ingrese su nombre"
                                            />
                                            <ErrorMessage name="firstName" component={() => (<span className="mnj-error alert-dateNacm active">{errors.firstName}</span>)} />
                                        </p>
                                        <p className="field_u div">
                                            <label>Apellido</label>
                                            <Field
                                                type="text"
                                                name="lastName"
                                                placeholder="Ingrese sus apellidos"
                                            />
                                            <ErrorMessage name="lastName" component={() => (<span className="mnj-error alert-dateNacm active">{errors.lastName}</span>)} />
                                        </p>
                                        <p className="field_u div">
                                            <label>Correo Electrónico</label>
                                            <Field
                                                type="email"
                                                name="email"
                                                placeholder="Ingrese su dirección de correo"
                                            />
                                            <ErrorMessage name="email" component={() => (<span className="mnj-error alert-dateNacm active">{errors.email}</span>)} />
                                        </p>
                                        <p className="field_u div">
                                            <label>Teléfono</label>
                                            <Field
                                                type="tel"
                                                name="telefono"
                                                maxLength={10}
                                                placeholder="Ingrese su número de teléfono"
                                            />
                                            <ErrorMessage name="telefono" component={() => (<span className="mnj-error alert-dateNacm active">{errors.telefono}</span>)} />
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <p className="title-group-item">DIRECCIÓN DEL ENVÍO</p>
                                    <div className="container_fields_us">
                                        <p className="field_u">
                                            <label>Descripción de su Dirección</label>
                                            <Field
                                                type="text"
                                                name="direccion"
                                                placeholder="Calle, Avenida, Barrio o Sector"
                                            />
                                            <ErrorMessage name="direccion" component={() => (<span className="mnj-error alert-dateNacm active">{errors.direccion}</span>)} />
                                        </p>
                                        <p className="field_u">
                                            <label>Descripción de su Dirección</label>
                                            <Field
                                                as="textarea"
                                                name="textarea"
                                                className="text_area"
                                                placeholder="Describanos mejor su dirección para ubicarlo más rápido. Referencia de domicilio, frente a..., etc"
                                            />
                                            <ErrorMessage name="textarea" component={() => (<span className="mnj-error alert-dateNacm active">{errors.textarea}</span>)} />
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="cont_resume">
                                <div className="resume">
                                    <p className="topic-resume">Resumen del Pedido</p>
                                    <p className="group-detalle_res"><span className="topic">Para:</span><span className="data-resume">{fnameClient} {lnameClient}</span></p>
                                    <p className="group-detalle_res"><span className="topic">Hacia:</span><span className="data-resume">{directionTo}</span></p>
                                    <p className="group-detalle_res pago"><span className="topic">Total a Pagar:</span><span className="data-resume">${allTotals.length !== 0 ?(allTotals.total).toFixed(2) : 0.00}</span></p>
                                </div>
                                <button type="submit" className="guardar_pago">GUARDAR Y ENVIAR PEDIDO</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    )
}