import { ErrorMessage, FastField, Field, Form, Formik } from "formik";
import axios from 'axios';
import { Fragment } from "react";
import '../../assets/css/admin/listamenu.css';
import { useEffect, useState } from "react";
import { Modal } from "../../component/ADMIN/Modal";
import TableAdmin from "../../component/ADMIN/Table/TableAdmin";
import { useModals } from "../../component/hooks/useModals";
import { useModalsEdit } from "../../component/components/ModalVent/useModalsEdit";

export function MenuListProducts()  {
    const [ isOpen, openModal, closeModal ] = useModals(false);
    // const [isEdit, openEdit, closeEdit] = useModalsEdit(false);
    const [menu, setmenu] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:9000/api/menu/menulista')
        .then(res=> setmenu(res.data))
        .then(res=>res.json())
        .catch(error=>console.log(error)) 
    }, [])
    const handleEdit = (id) => {
        console.log(id);
    }
    const handleDlt = (id) => {
        console.log(id);
    }
    return (  
        <Fragment>
            <Modal 
                topic="Editar Producto del Menú"
                isOpen={isOpen}
                closeModal={closeModal}
            >
                <Formik
                    initialValues={{
                        name: "",
                        code: "",
                        textarea: "",
                        file: "",
                        select:"",
                        selectsub:""
                    }}
                    validate={(values)=>{
                        let erroresV = {}
                        //nombre
                        if(!values.name) {
                            erroresV.name = "Este campo es requerido";
                        } else if (!/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g.test(values.name)) {
                            erroresV.name = "Este campo no puede contener números ni caracteres especiales";
                        }
                        //codigo del cupon
                        if(!values.code) {
                            erroresV.code = "ingrese codigo";
                        }
                        return erroresV;
                    }}
                    onSubmit={(values, { resetForm }) => {      //peticion HTTP hacia el servidor (API)
                        resetForm();
                        // handleEdit(values)
                    }}
                >
                    {( {errors} )=>(
                        <Form className="col-form">
                            <div className="grup_field_dash">
                                <p className="row_field_form div">
                                    <label className="labels-dash-sty">Nombre Promoción</label>
                                    <Field
                                        className="input-dash-sty"
                                        type="text"
                                        name="name"
                                        placeholder="Ej: Jueves 2x1"
                                    />
                                    <ErrorMessage name="name" component={() => (<span className="mnj-error alert-dateNacm active">{errors.name}</span>)} />
                                </p>
                                <p className="row_field_form div">
                                    <label className="labels-dash-sty">Código del Cupón</label>
                                    <Field
                                        className="input-dash-sty"
                                        type="code"
                                        name="code"
                                        placeholder="Ej: Ej: JUEV-ESDE-PROM"
                                    />
                                    <ErrorMessage name="code" component={() => (<span className="mnj-error alert-dateNacm active">{errors.code}</span>)} />
                                </p>
                                <p className="row_field_form div">
                                    <label className="labels-dash-sty">Seleccione una Categoria</label>
                                    <Field className="input-dash-sty" name="select" as="select">
                                   
                                        < option value="0">Seleccione Categoria </option>
                                        < option value="1">Hamburguesa </option>
                                        < option value="2">Sanduches </option>
                                        < option value="3">Varios </option>
                                        < option value="4">Bebidas </option>
                                        < option value="5">Cortes </option>
                                        < option value="6">Alitas de Pollo </option>
                                        
                                    </Field>
                                    <ErrorMessage name="select" component={() => (<span className="mnj-error alert-dateNacm active">{errors.select}</span>)} />
                                </p>
                                <p className="row_field_form div">
                                    <label className="labels-dash-sty">Seleccione una SubCategoria</label>
                                    <Field className="input-dash-sty" name="selectsub" as="select">
                                   
                                        < option value="0">Seleccione una SubCategoria </option>
                                        < option value="1">Alcoholicas </option>
                                        < option value="2">No Alcoholicas </option>
                                        < option value="3">Agua </option>                                    
                                    </Field>
                                    <ErrorMessage name="select" component={() => (<span className="mnj-error alert-dateNacm active">{errors.selectsub}</span>)} />
                                </p>
                                <p className="row_field_form div">
                                    <label className="labels-dash-sty">Descripcion del <strong>Platillo</strong></label>
                                    <Field
                                        className="textarea-dash-sty"
                                        as="textarea"
                                        name="textarea"
                                        placeholder="Ingresa una Descripcion"
                                    />
                                    <ErrorMessage name="textarea" component={() => (<span className="mnj-error alert-dateNacm active">{errors.textarea}</span>)} />
                                </p>
                                <p className="row_field_form div">
                                    <label className="labels-dash-sty">Seleccione una imagen para el <strong>Platillo</strong></label>
                                    <div class="file_input_text">
                                        <Field
                                            className="file_text"
                                            type="file"
                                            name="file"
                                            placeholder="Ingresa una imagen png"
                                        />
                                        Subir imagen
                                    </div>
                                    <ErrorMessage name="file" component={() => (<span className="mnj-error alert-dateNacm active">{errors.file}</span>)} />
                                </p>
                            </div>
                            
                            <button class="btn-add-data-lista" type="submit">Agregar Platillo</button>
                        </Form>
                    )}
                </Formik>
            </Modal>
            <div className="theme-apart">
                <h2 className="name-user"><span>Lista del Menú</span></h2>
            </div>
            <section className="container-main">
            <div className="tables_admin bd__sect">
                    <h2 className="title_card_cl">Platillos</h2>
                    <TableAdmin
                            columnas={["ID"," Categoria", " Nombre", "Descripcion"," Precio", ""]}
                            filas={
                                menu
                            }
                            buttonActions={[
                            {
                                type: "edit",
                                classNameIcon: "fas fa-pencil",
                                text: "",
                                event: handleEdit,
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
        </Fragment>
    );
}