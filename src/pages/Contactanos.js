import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import '../assets/css/contactanos.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from "axios";

export function Contactanos() {
    const [respState, setRespState] = useState("");

    const handleSubmitCom = (values) => {
        return axios.post('http://localhost:9000/api/coments', values)
            .then(res => {return res})
            .catch(err => console.error(err));
    }

    return (
        <Fragment>
            <section className="contact-infor">
                <h1 className="theme-section">Contacto & Información</h1>
                <div className="contenedor_contac">
                    <div className="column">
                        <Formik
                            initialValues={{       
                                firstName: "", 
                                lastName: "",          
                                email: "",
                                textarea: ""
                            }}

                            validate={(values) => {
                                let errors = {}  
                                
                                //nombres
                                if(!values.firstName){
                                    errors.firstName = "Este campo es requerido";
                                }else if(!/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g.test(values.firstName)){
                                    errors.firstName = "Este campo no puede contener números ni caracteres especiales";
                                }

                                //apellidos
                                if(!values.lastName){
                                    errors.lastName = "Este campo es requerido";
                                }else if(!/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g.test(values.lastName)){
                                    errors.lastName = "Este campo no puede contener números ni caracteres especiales";
                                }

                                //CORREOS ELECTRONICOS
                                if (!values.email) {
                                    errors.email = "El correo es requerido";
                                } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)) {
                                    errors.email = 'Por favor ingresa un correo válido';
                                }

                                //MENSAJE
                                if(!values.textarea){
                                    errors.textarea = "Por favor rellene este campo";
                                }

                                return errors;
                            }}

                            onSubmit={(values, { resetForm }) => {
                                const { firstName, lastName, email, textarea } = values;
                                resetForm();
                                handleSubmitCom({
                                    nombres: firstName,
                                    apellidos: lastName,
                                    correo: email,
                                    mensaje: textarea
                                })
                                    .then(res => setRespState(res.data))
                                    .catch(err => console.error(err));
                            }}
                        >
                            {({ errors }) => (
                                <Form className="form-contact">
                                    <h3 className="title_contac_izq">Ponte en Contacto con Nosotros</h3>
                                    <div className="container_fields_us">
                                        <p className="field_u div">
                                            <label>Nombre</label>
                                            <Field
                                                type="text"
                                                name="firstName"
                                                placeholder="Ingrese su Nombre"
                                            />
                                            <ErrorMessage name="firstName" component={() => (<span className="mnj-error alert-dateNacm active">{errors.firstName}</span>)} />
                                        </p>
                                        <p className="field_u div">
                                            <label>Apellidos</label>
                                            <Field
                                                type="text"
                                                name="lastName"
                                                placeholder="Ingrese su Apellido"
                                            />
                                            <ErrorMessage name="lastName" component={() => (<span className="mnj-error alert-dateNacm active">{errors.lastName}</span>)} />
                                        </p>
                                        <p className="field_u cl-2">
                                            <label>Correo Electrónico</label>
                                            <Field
                                                type="email"
                                                name="email"
                                                placeholder="Ingrese su Correo Electrónico"
                                            />
                                            <ErrorMessage name="email" component={() => (<span className="mnj-error alert-dateNacm active">{errors.email}</span>)} />
                                        </p>
                                        <p className="field_u cl-2">
                                            <label>Mensaje</label>
                                            <Field
                                                as="textarea"
                                                name="textarea"
                                                placeholder="Dejanos un Mensaje"
                                                className="text_area"
                                            />
                                            <ErrorMessage name="textarea" component={() => (<span className="mnj-error alert-dateNacm active">{errors.textarea}</span>)} />
                                        </p>
                                    </div>
                                    <button type="submit" className="btn_send-contact">Enviar</button>
                                    <p className="alert_send">{respState}</p>
                                </Form>
                            )}
                        </Formik>
                    </div>
                    <div className="column">
                        <div className="anuncio">
                            <div className="contac_icon"><i className="fas fa-phone-alt"></i></div>
                            <div className="contac_description">
                                <p className="topic">Teléfono</p>
                                <Link to="tel:+593333" className="detalle">0963217004</Link>
                            </div>
                        </div>
                        <div className="anuncio">
                            <div className="contac_icon"><i className="fas fa-envelope-open-text"></i></div>
                            <div className="contac_description">
                                <p className="topic">Correo Electrónico</p>
                                <Link to="mailto: luchin@gmail.com" className="detalle"> luchinsantanacastillo@gmail.com</Link>
                            </div>
                        </div>
                        <div className="anuncio">
                            <div className="contac_icon"><i className="far fa-share-alt"></i></div>
                            <div className="contac_description">
                                <p className="topic">Redes Sociales</p>
                                <p className="detalle iconos">
                                    <Link to="#" className="detalle"><i className="fab fa-facebook" aria-hidden="true"></i></Link>
                                    <Link to="#" className="detalle"><i className="fab fa-instagram" aria-hidden="true"></i></Link>

                                </p>
                            </div>
                        </div>
                        <div className="anuncio">
                            <div className="contac_icon"><i className="far fa-clock"></i></div>
                            <div className="contac_description">
                                <p className="topic">Horarios de Atención</p>
                                <p className="detalle">Jueves a Domingo</p>
                                <p className="detalle">Desde 17:00h hasta 23:00h</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-ubi">
                <div className="container-ubicacion">
                    <div className="ubi_detalle">
                        <div className="ico_ubi"><i className="fas fa-map-marker-alt"></i></div>
                        <div className="descr">
                            <p>Calle 13 de octubre y Av Metropolitana</p>
                            <p className="bold">Montecristi - Ecuador</p>
                        </div>
                    </div>
                    <h1>La Parrilla de Luchin</h1>
                </div>
            </section>

            <section className="location-main">
                <div>
                    <iframe title="mapaluchin" src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d63826.51149409486!2d-80.69629358598279!3d-1.0432379873241444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x902be555b3991ab1%3A0x6900289d39a0fe14!2sla%20parrilla%20de%20Luchin%20montecristi!3m2!1d-1.043324!2d-80.6612741!5e0!3m2!1ses!2sec!4v1624141824849!5m2!1ses!2sec" height="450" loading="lazy"></iframe>
                </div>
            </section>

        </Fragment>
    )
}