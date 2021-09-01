import axios from "axios";
import { useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import TableAdmin from "../../component/ADMIN/Table/TableAdmin";
import "../../assets/css/admin/Promociones.css";
import { Modal } from "../../component/ADMIN/Modal";
import { useModalsEdit } from "../../component/components/ModalVent/useModalsEdit";
import { useModals } from "../../component/hooks/useModals";

export function Empleados() {

    
    const [Empleados, setEmpleados] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:9000/api/empleados/empleado/lista')
        .then(res => setEmpleados(res.data))
        .then(res => res.json())
        .catch(error => console.log(error))
       
    }, [])
    // console.log(Empleados)

    const handleSumitE = (data) => {
                
        axios.post('http://localhost:9000/api/empleados/insertar/empleado', data)
        .then(res => {
            // setRespLog(res.data)
            if(res.data.response){
                alert("Has Insertado Correctamente.");
            }
        })
        .catch(err=> console.log(err))

    }

    const handleDlt = (id) => {
        console.log(id)
        axios.delete(`http://localhost:9000/api/empleados/eliminaremp/${id}`)
        .then(res => {
            console.log(res.data);
        })
        .catch(err=>console.log(err))

    }
    
    const handleEdit = (id) => {
        console.log(id);
        // axios.put(`http://localhost:9000/api/empleados/actualizar/empleado-admin/${id}`)
        // .then(res => {
        //     console.log(res.data);
        // })
        // .catch(err=>console.log(err))
    }

   
    


    const [isOpen, openModal, closeModal] = useModals(false);
    const [isEdit, openEdit, closeEdit] = useModalsEdit(false);
    // const [isDelete, openDelete, closeDelete]=useModalsDelete(false);
    

    return (
        <>
        
            <Modal
                topic="Editar Empleado"
                isOpen={isEdit}
                closeModal={closeEdit}
                actions={[
                    {
                        name: "Cerrar",
                        type: "cancel",
                        className: "btn-modal red"
                    }
                ]}
            >
                <Formik
                    initialValues={{
                        name: "",
                        namel: "",
                        dat: "",
                        tel: "",
                        email: "",
                        select: ""
                    }}

                    validate={(values) => {
                        let errors = {}

                        //NOMBRE 
                        if (!values.name) {
                            errors.name = "Este campo es requerido";
                        } else if (!/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g.test(values.name)) {
                            errors.name = "Este campo no puede contener números ni caracteres especiales";
                        }

                        //apellido
                        if (!values.namel) {
                            errors.namel = "Este campo es requerido";
                        } else if (!/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g.test(values.namel)) {
                            errors.namel = "Este campo no puede contener números ni caracteres especiales";
                        }

                        //CODIGO DE CUPON
                        if (!values.code) {
                            errors.code = "Ingrese el código";
                        }
                        // else if(!/([^\w])/g.test(values.code)){
                        //     errors.code = "El código solo debe contener mayúsculas y números";
                        // }


                        //FECHA INCIO
                        if (!values.dat) {
                            errors.dat = "La fecha de inicio es requerida";
                        }


                        //telefono
                        if (!values.tel) {  // -> poner el campo que necesitan con el nombre que asignaron en el inicializador
                            errors.tel = "El campo teléfono es un campo requerido";
                        } else if (/^[0-9]{11}/g.test(values.tel)) {
                            errors.tel = "La cedula debe contener 10 números y no se aceptan letras";
                        }
                        //cedula
                        if (!values.ced) {  // -> poner el campo que necesitan con el nombre que asignaron en el inicializador
                            errors.ced = "El campo teléfono es un campo requerido";
                        } else if (/^[0-9]{11}/g.test(values.ced)) {
                            errors.ced = "La cedula debe contener 10 números y no se aceptan letras";
                        }

                        return errors;
                    }}

                    onSubmit={(values, { resetForm }) => {      //peticion HTTP hacia el servidor (API)
                        resetForm();
                        // handleEdit(values)
                    }}
                    
                >
                    {(errors) => (
                        <Form>
                            <div className="grup_field_dash">
                                <p className="row_field_form div">
                                    <label className="labels-dash-sty">Nombres</label>
                                    <Field
                                        className="input-dash-sty"
                                        type="text"
                                        name="name"
                                        placeholder="Luis"
                                    />
                                    <ErrorMessage name="name" component={() => (<span className="mnj-error alert-dateNacm active">{errors.name}</span>)} />
                                </p>
                                <p className="row_field_form div">
                                    <label className="labels-dash-sty">Apellidos</label>
                                    <Field
                                        className="input-dash-sty"
                                        type="text"
                                        name="namel"
                                        placeholder="Santana"
                                    />
                                    <ErrorMessage name="namel" component={() => (<span className="mnj-error alert-dateNacm active">{errors.name1}</span>)} />
                                </p>
                                <p className="row_field_form div">
                                    <label className="labels-dash-sty">Feccha de Nacimiento</label>
                                    <Field
                                        className="input-dash-sty"
                                        type="date"
                                        name="dat"
                                    />
                                    <ErrorMessage name="dat" component={() => (<span className="mnj-error alert-dateNacm active">{errors.dat}</span>)} />
                                </p>
                                <p className="row_field_form div">
                                    <label className="labels-dash-sty">Correo Electronico</label>
                                    <Field
                                        className="input-dash-sty"
                                        type="email"
                                        name="email"
                                        placeholder="EJ: 1350209669"
                                    />
                                    <ErrorMessage
                                        name="email"
                                        component={() => (
                                            <span className="mnj-error alert-dateNacm active">
                                                {errors.email}
                                            </span>
                                        )}
                                    />
                                </p>
                                <p className="row_field_form div">
                                    <label className="labels-dash-sty">Telefono</label>
                                    <Field
                                        className="input-dash-sty"
                                        type="tel"
                                        name="tel"
                                        placeholder="Ingresa Numero Celular"
                                    />
                                    <ErrorMessage name="tel" component={() => (<span className="mnj-error alert-dateNacm active">{errors.tel}</span>)} />
                                </p>
                                <p className="row_field_form ">
                                    <label className="labels-dash-sty">Tipo de Empleado</label>
                                    <Field className="input-dash-sty" as="select" name="select">
                                        <option value="0">Seleccione un Tipo de Empleado</option>
                                        <option value="1">Administrador</option>
                                        <option value="2">Despachador</option>
                                    </Field>
                                    <ErrorMessage
                                        name="select1"
                                        component={() => (
                                            <span className="mnj-error alert-dateNacm active">
                                                {errors.select}
                                            </span>
                                        )}
                                    />
                                </p>
                            </div>
                            <button className="btn-add-data-promo" type="submit" 
                            // onClick={()=>(onSubmit())}
                            // event={onSubmit}
                            onClick={()=>(handleEdit())}
                            >
                                Guardar Cambios</button>
                        </Form>
                    )}
                </Formik>
            </Modal>

            <Modal
                topic="Agregar Empleado"
                isOpen={isOpen}
                closeModal={closeModal}
                actions={[
                    {
                        name: "Cerrar",
                        type: "cancel",
                        className: "btn-modal red"
                    }
                ]}
            >
                <Formik
                    initialValues={{
                        name: "",
                        namel: "",
                        dat: "",
                        tel: "",
                        email: "",
                        password:"",
                        select: ""
                    }}

                    validate={(values) => {
                        let errors = {}

                        //NOMBRE 
                        if (!values.name) {
                            errors.name = "Este campo es requerido";
                        } else if (!/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g.test(values.name)) {
                            errors.name = "Este campo no puede contener números ni caracteres especiales";
                        }

                        //apellido
                        if (!values.namel) {
                            errors.namel = "Este campo es requerido";
                        } else if (!/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g.test(values.namel)) {
                            errors.namel = "Este campo no puede contener números ni caracteres especiales";
                        }
                        //telefono
                        if (!values.tel) {  // -> poner el campo que necesitan con el nombre que asignaron en el inicializador
                            errors.tel = "El campo teléfono es un campo requerido";
                        } else if (/^[0-9]{11}/g.test(values.tel)) {
                            errors.tel = "La telefono debe contener 10 números y no se aceptan letras";
                        }
                        //CONTRASEÑA
                        if (!values.password) {
                            errors.password = "La contraseña es requerida por favor ingresela";
                        } else if (!/^(?=.*[A-Za-z])[A-Za-z\d#?!@$%^&*-]{4,16}/.test(values.password)) {
                            errors.password = "La contraseña debe contener de 8 a 16 caracteres y al menos una letra";
                        }
                        return errors;
                    }}

                    onSubmit={(values, { resetForm }) => {      //peticion HTTP hacia el servidor (API)
                        resetForm();
                        handleSumitE(values);
                    }}
                >
                    {(errors) => (
                        <Form>
                            <div className="grup_field_dash">
                                <p className="row_field_form div">
                                    <label className="labels-dash-sty">Nombres</label>
                                    <Field
                                        className="input-dash-sty"
                                        type="text"
                                        name="name"
                                        placeholder="Luis"
                                    />
                                    <ErrorMessage name="name" component={() => (<span className="mnj-error alert-dateNacm active">{errors.name}</span>)} />
                                </p>
                                <p className="row_field_form div">
                                    <label className="labels-dash-sty">Apellidos</label>
                                    <Field
                                        className="input-dash-sty"
                                        type="text"
                                        name="namel"
                                        placeholder="Santana"
                                    />
                                    <ErrorMessage name="namel" component={() => (<span className="mnj-error alert-dateNacm active">{errors.namel}</span>)} />
                                </p>
                                <p className="row_field_form div">
                                    <label className="labels-dash-sty">Feccha de Nacimiento</label>
                                    <Field
                                        className="input-dash-sty"
                                        type="date"
                                        name="dat"
                                    />
                                    <ErrorMessage name="dat" component={() => (<span className="mnj-error alert-dateNacm active">{errors.dateIn}</span>)} />
                                </p>
                                <p className="row_field_form div">
                                    <label className="labels-dash-sty">Telefono</label>
                                    <Field
                                        className="input-dash-sty"
                                        type="tel"
                                        name="tel"
                                        placeholder="Ingresa Numero Celular"
                                    />
                                    <ErrorMessage name="tel" component={() => (<span className="mnj-error alert-dateNacm active">{errors.tel}</span>)} />
                                </p>
                                <p className="row_field_form div">
                                    <label className="labels-dash-sty">Correo Electronico</label>
                                    <Field
                                        className="input-dash-sty"
                                        type="email"
                                        name="email"
                                        placeholder="EJ: luchin@luchin.com"
                                    />
                                    <ErrorMessage
                                        name="email"
                                        component={() => (
                                            <span className="mnj-error alert-dateNacm active">
                                                {errors.email}
                                            </span>
                                        )}
                                    />
                                </p>
                                <p className="row_field_form div">
                                    <label className="labels-dash-sty">Contraseña</label>
                                    <Field
                                        className="input-dash-sty"
                                        type="password"
                                        name="password"
                                        placeholder="Ingrese su contraseña"
                                    />
                                    <ErrorMessage name="password" component={() => (<span className="mnj-error alert-dateNacm active">{errors.password}</span>)} />
                                    </p>
                                <p className="row_field_form ">
                                    <label className="labels-dash-sty">Tipo de Empleado</label>
                                    <Field className="input-dash-sty" as="select" name="select">
                                        <option value="0">Seleccione un Tipo de Empleado</option>
                                        <option value="1">Cocinero</option>
                                        <option value="2">Mesero</option>
                                    </Field>
                                    <ErrorMessage
                                        name="select"
                                        component={() => (
                                            <span className="mnj-error alert-dateNacm active">
                                                {errors.select}
                                            </span>
                                        )}
                                    />
                                </p>
                            </div>
                            <button className="btn-add-data-promo" type="submit">Agregar Empleado</button>
                        </Form>
                    )}
                </Formik>
            </Modal>

            <div className="theme-apart">
                <h2>Empleados</h2>
                <button
                    type="button"
                    className="button_th_head"
                    onClick={() => openModal()}
                >
                    Agregar Nuevo
                </button>
                
                
            </div>
            <section className="container-main">
                <div className="tables_admin bd__sect">
                    <h2 className="title_card_cl">Lista de Empleados</h2>
                    
                    <TableAdmin
                        
                        columnas={["Id","Nombres", " Apellidos", "Correo Electronico", "Telefono", "Fecha de Nacimiento", ""]}
                        filas={
                            Empleados
                        }

                        buttonActions={[
                        {
                            type: "edit",
                            classNameIcon: "fas fa-pencil",
                            text: "",
                            event: handleEdit ,
                        },
                        {
                            type: "delete",
                            classNameIcon: "fas fa-trash",
                            text: "",
                            event: handleDlt
                        },
                        ]}
                    />
                </div>
            </section>
        </>
    );
}
