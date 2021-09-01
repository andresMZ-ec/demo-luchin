import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import '../../assets/css/admin/Promociones.css';
import { Modal } from '../../component/ADMIN/Modal';
import { useModalsEdit } from '../../component/components/ModalVent/useModalsEdit';
import { useModals } from '../../component/hooks/useModals';


export function PromocionesAdmin() {
    const [ isOpen, openModal, closeModal ] = useModals(false);
    const [ isEdit, openEdit, closeEdit ] = useModalsEdit(false);
    const [ listPromos, setListPromos ] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:9000/api/promociones/promociones-admin')
        .then(res => setListPromos(res.data))
        .then(res => res.json())
        .catch(error => console.log(error))
    }, [])

    // console.log(listPromos)

    const showStatus = (estado) => {
        if(estado === "Activo"){
            return "act"
        }else if(estado === "Desactivado"){
            return "desact"
        }
    }

    const handleSumit = (data) => {
                
        axios.post('http://localhost:9000/api/promociones/insertar/promociones-admin', data)
        .then(res => {
            // setRespLog(res.data)
            if(res.data.response){
                alert("Has Insertado Correctamente.");
            }
        })
        .catch(err=> console.log(err))

    }
    
    const handleDlt=(id)=>{
        console.log(id)
        axios.delete(`http://localhost:9000/api/promociones/dltpromo/${id}`)
        .then(res =>{
            if(res.data){
                alert("Eliminada.")
            }
        })
        .catch(err=> console.log(err))
    }

    const handleEdit=(id)=>{
        console.log(id)
    }

    // const editpromo=(id)=>{
    //     axios.put(`http://localhost:9000/api/promociones/actualizar/promociones-admin/${id}`)
    //     .then(res =>{
    //         if(res.data.response){
    //             alert("actualizada.")
    //         }
    //     })
    //     .catch(err=> console.log(err))
    // }
    
    return (
        <>
        <Modal
            topic="Editar Promocion"
            isOpen={isEdit}
            closeModal={closeEdit}
            actions={[
            {
                name: "Cerrar",
                type: "cancel",
                className: "btn-modal red",
            },
            ]}
        
        >
          <Formik
            initialValues={{
                        name: "",           
                        code: "",           
                        dateIn: "",           
                        dateOut: "",           
                        desc: "",
                        fileImage: "",
                        descripcion:""
                    }}
                    validate={(values)=>{
                        let errorsV = {}

                      /*  if(!values.code){
                                    errorsV.code = "Ingrese el código";
                                }else if(!/([^\w])/g.test(values.code)){
                                    errorsV.code = "El código solo debe contener mayúsculas y números";
                                }
                         if(!values.text){
                                    errorsV.text = "Este campo es requerido";
                                }else if(!/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g.test(values.text)){
                                    errorsV.text = "Este campo no puede contener números ni caracteres especiales";
                                }
                                */
                             
                                if(!/(.|)(png)$/g.test(values.file)){
                                    errorsV.file = "Por favor suba un archivo .png";
                                }



                               

                        return errorsV;
                    }}
                    onSubmit={(values, { resetForm }) => {      //peticion HTTP hacia el servidor (API)
                        resetForm();
                        // editpromo(values);
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
                                    <ErrorMessage name="name" component={() => (<span className="mnj-error alert-dateNacm active">{errors.text}</span>)} />
                                </p>
                                <p className="row_field_form div">
                                    <label className="labels-dash-sty">Código del Cupón</label>
                                    <Field
                                        className="input-dash-sty"
                                        type="code"
                                        name="code"
                                        placeholder="Ej: JUEV-ESDE-PROM"
                                    />
                                    <ErrorMessage name="code" component={() => (<span className="mnj-error alert-dateNacm active">{errors.code}</span>)} />
                                </p>
                                <p className="row_field_form div">
                                    <label className="labels-dash-sty">Fecha Inicio Promoción</label>
                                    <Field
                                        className="input-dash-sty"
                                        type="date"
                                        name="dateIn"
                                    />
                                    <ErrorMessage name="dateIn" component={() => (<span className="mnj-error alert-dateNacm active">{errors.date}</span>)} />
                                </p>
                                <p className="row_field_form div">
                                    <label className="labels-dash-sty">Fecha Culminación Promoción</label>
                                    <Field
                                        className="input-dash-sty"
                                        type="date"
                                        name="dateOut"
                                    />
                                    <ErrorMessage name="dateOut" component={() => (<span className="mnj-error alert-dateNacm active">{errors.date}</span>)} />
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
                                    <label className="labels-dash-sty">Seleccione una imagen para la <strong>Promocion</strong></label>
                                    <div class="file_input_text">
                                        <Field
                                            className="file_text"
                                            type="file"
                                            name="file"
                                            
                                        />
                                        Subir imagen
                                    </div>
                                    <ErrorMessage name="file" component={() => (<span className="mnj-error alert-dateNacm active">{errors.file}</span>)} />
                                </p>
                            </div>
                            <button class="btn-add-data-lista" type="submit" 
                            // onClick={()=>editpromo()}
                            >
                                Editar Promocion
                            </button>
                        </Form>
            )}

          </Formik>
      </Modal>
            <Modal 
                topic="Nueva Promoción" 
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
                        code: "",           
                        dateIn: "",           
                        dateOut: "",           
                        desc: "",
                        fileImage: "",
                        descripcion:""
                    }}

                    validate={(values) => {
                        let errors = {}

                        //NOMBRE PROMOCION
                        if(!values.name){
                            errors.name = "Este campo es requerido";
                        }else if(!/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g.test(values.name)){
                            errors.name = "Este campo no puede contener números ni caracteres especiales";
                        }

                        //CODIGO DE CUPON
                        if(!values.code){
                            errors.code = "Ingrese el código";
                        }
                        else if(!/[A-Z0-9]{12}/g.test(values.code)){
                            errors.code = "El código solo debe contener mayúsculas y números";
                        }


                        //FECHA INCIO
                        // if (!values.dateIn) {
                        //     errors.dateIn = "La fecha de inicio es requerida";
                        // } 

                        //FECHA culminacion
                        // if (!values.dateOut) {
                        //     errors.dateOut = "La fecha de inicio es requerida";
                        // } 

                        //DESCUENTO
                        if (!values.desc) {  // -> poner el campo que necesitan con el nombre que asignaron en el inicializador
                            errors.desc = "El campo teléfono es un campo requerido";
                        } else if (/[0-9]{10}/g.test(values.desc)) {
                            errors.desc = "La cedula debe contener 10 números y no se aceptan letras";
                        }
                        


                        //FORMATO DE TIPO ARCHIVO (IMAGENES, DOCUMENTOS)
                        // if(!/(.|)(jpg)$/g.test(values.fileImage)){
                        //     errors.fileImage = "Por favor suba un importe un archivo";
                        // }

                        return errors;
                    }}

                    onSubmit={(values, { resetForm }) => {      //peticion HTTP hacia el servidor (API)
                        resetForm();
                        handleSumit(values);
                    }}
                >
                    {(errors)=>(
                        <Form >
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
                                        type="text"
                                        name="code"
                                        placeholder="Ej: JUEV-ESDE-PROM"
                                        maxLength={12}
                                    />
                                    <ErrorMessage name="code" component={() => (<span className="mnj-error alert-dateNacm active">{errors.code}</span>)} />
                                </p>
                                <p className="row_field_form div">
                                    <label className="labels-dash-sty">Fecha Inicio Promoción</label>
                                    <Field
                                        className="input-dash-sty"
                                        type="date"
                                        name="dateIn"
                                    />
                                    <ErrorMessage name="dateIn" component={() => (<span className="mnj-error alert-dateNacm active">{errors.dateIn}</span>)} />
                                </p>
                                <p className="row_field_form div">
                                    <label className="labels-dash-sty">Fecha Culminación Promoción</label>
                                    <Field
                                        className="input-dash-sty"
                                        type="date"
                                        name="dateOut"
                                    />
                                    <ErrorMessage name="dateOut" component={() => (<span className="mnj-error alert-dateNacm active">{errors.dateOut}</span>)} />
                                </p>
                                <p className="row_field_form div">
                                    <label className="labels-dash-sty">Descuento que aplica en <strong>porcentaje</strong></label>
                                    <Field
                                        className="input-dash-sty"
                                        type="tel"
                                        name="desc"
                                        placeholder="Ingresa un Descuento"
                                    />
                                    <ErrorMessage name="desc" component={() => (<span className="mnj-error alert-dateNacm active">{errors.desc}</span>)} />
                                </p>
                                
                                <p className="row_field_form div ">
                                    <label className="labels-dash-sty">Ingresar un Imagen <strong>.png</strong></label>
                                    <div className="file_input_text">
                                        <Field
                                            className="file_text"
                                            type="file"
                                            name="fileImage"
                                            placeholder="Ingresa un Descuento"
                                            accept="image/gif,image/jpeg,image/jpg,image/png"
                                        />
                                        Subir imagen
                                    </div>
                                    <ErrorMessage name="fileImage" component={() => (<span className="mnj-error alert-dateNacm active">{errors.fileImage}</span>)} />
                                </p>
                                <p className="row_field_form ">
                                    <label className="labels-dash-sty">Descripcion del <strong>Platillo</strong></label>
                                    <Field
                                        className="textarea-dash-sty"
                                        as="textarea"
                                        name="descripcion"
                                        placeholder="Ingresa una Descripcion"
                                    />
                                    <ErrorMessage name="descripcion" component={() => (<span className="mnj-error alert-dateNacm active">{errors.textarea}</span>)} />
                                </p>
                            </div>
                            <button className="btn-add-data-promo" type="submit">Agregar Promoción</button>
                        </Form>
                    )}
                </Formik>
            </Modal>            
            <div className="theme-apart">
                <h2>Promociones</h2>
                <button type="button" className="button_th_head" onClick={()=>openModal()}>Agregar</button>
            </div>
            
            <section className="container-main">
                <div className="grid_promo">
                    {listPromos.map(promocion => (
                        <div key={promocion.id} className="card-prom-list bd__sect">
                            <div className="row_dt_prom">
                                <div className="col_dt_promo">
                                    
                                    <p className="name_prom">{promocion.prod_menu_nombre}</p>
                                    <p className="tick_prom">Cupón:{promocion.prom_code_promo}</p>
                                </div>
                                <div className="col_dt_promo_bt">
                                    <p className="desc_prom">-{promocion.prom_descuento}%</p>
                                    <p className={`status_prom  ${showStatus(promocion.prom_estado)}`}><span>{promocion.prom_estado}</span></p>
                                </div>
                            </div>
                            <div className="row_dates_p">
                                <div className="f_inicio">
                                    <p className="ttl-date">Fecha Inicio</p>
                                    <p className="date">{promocion.prom_fecha_inicio}</p>
                                </div>
                                <div className="f_fin">
                                    <p className="ttl-date">Fecha Fin </p>
                                    <p className="date">{promocion.prom_fecha_fin}</p>
                                </div>
                            </div>
                            <div className="row_descrip_prom">
                                <p>{promocion.prom_descripcion} </p>
                            </div>
                            {console.log(promocion.prom_id)}
                            <div className="row_buttons">
                                <button className="btn_edit-prom" type="button" 
                                onClick={()=>openEdit()} 
                                onClick={()=>handleEdit(promocion.id)}
                                >
                                    Editar
                                </button>
                                <button className="btn_eli_prom" type="btn_edit-prom"  
                                onClick={()=>handleDlt(promocion.prom_id)}
                                >
                                    Eliminar
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}