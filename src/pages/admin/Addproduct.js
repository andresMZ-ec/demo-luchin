import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import '../../assets/css/admin/Addproduct.css'
export function Addproduct() {

    const handleSumitP = (data) => {
        axios.post('http://localhost:9000/api/menu/insertar/product', data)
            .then(res => {
                if (res.data.response) {
                    alert("Producto Agregado :)");
                }
            })
            .catch(err => console.log(err))
    }
    return (
        <>
            <div class="theme-apart">
                <h2><span class="name-user">Agregar Producto</span></h2>
            </div>
            <section class="container-main ">
                <div class="add-produ_deta dt-resume bd__sect">
                    <h2 class="title_card_cl"> Información Producto</h2>
                    <Formik
                        initialValues={{
                            nameProduct: "",
                            priceProduct: "",
                            selectCat: "",
                            imgProduct: "",
                            descriPrduct: ""
                        }}
                        validate={(values) => {
                            let errors = {}

                            //NOMBRE PRODUCTO
                            if (!values.nameProduct) {
                                errors.nameProduct = "Este campo es requerido";
                            } else if (!/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g.test(values.nameProduct)) {
                                errors.nameProduct = "Este campo no puede contener números ni caracteres especiales";
                            }
                            //PRECIO
                            if (!values.priceProduct) {  // -> poner el campo que necesitan con el nombre que asignaron en el inicializador
                                errors.priceProduct = "El campo precio es un campo requerido";
                            } else if (/^[0-9]{11}/g.test(values.priceProduct)) {
                                errors.tel = "No se aceptan letras";
                            }
                            return errors;
                        }}
                        onSubmit={(values, { resetForm }) => {
                            resetForm();
                            handleSumitP(values);
                        }}
                    >
                        {(errors) => (
                            <Form className="col-form">
                                <div class="grup_field_dash">
                                    <p><label className="labels-dash-sty">Nombre producto</label>
                                        <Field
                                            className="input-dash-sty"
                                            type="text"
                                            name="nameProduct"
                                            placeholder="Ingrese nombre producto"
                                        />
                                        <ErrorMessage name="nameProduct" component={() => (<span className="mnj-error alert-dateNacm active">{errors.nameProduct}</span>)} />
                                    </p>
                                    <p><label className="labels-dash-sty">Producto precio</label>
                                        <Field
                                            className="input-dash-sty"
                                            type="text"
                                            name="priceProduct"
                                            placeholder="Ingrese precio de producto"
                                        />
                                        <ErrorMessage name="priceProduct" component={() => (<span className="mnj-error alert-dateNacm active">{errors.priceProduct}</span>)} />
                                    </p>
                                </div>
                                <div class="grup_field_dash">
                                    <p><label className="labels-dash-sty">Seleccione Categoria</label>
                                        <Field className="select-dash-sty" as="select" name="selectCat">
                                            <option value="0">Seleccione una Categoria</option>
                                            <option value="1">Bebidas</option>
                                            <option value="2">Hamburguesas</option>
                                            <option value="3">Sanduches</option>
                                            <option value="4">Alitas</option>
                                            <option value="5">Cortes de carne</option>
                                            <option value="6">Papas</option>
                                        </Field>
                                        <ErrorMessage name="selectCat" component={() => (<span className="mnj-error alert-dateNacm active">{errors.selectCat}</span>)} />
                                    </p>
                                    <p><label className="labels-dash-sty">Seleccione subcategoria</label>
                                        <Field className="select-dash-sty" as="select" name="selectSubcat">
                                            <option value="0">Seleccione una subcategoria</option>
                                            <option value="1">Bebidas Alcoholicas</option>
                                            <option value="2">Bebidas No Alcoholicas</option>
                                        </Field>                                        
                                    </p>
                                </div>
                                <div>
                                    <p><label className="labels-dash-sty">Imagen promoción</label></p>
                                    <div className="file_input_text">
                                        <Field
                                        name="imgProduct"
                                            type="file"
                                            className="file_text"
                                            accept="image/gif,image/jpeg,image/jpg,image/png"
                                        />
                                        Subir imagen
                                        <ErrorMessage name="imgProduct" component={() => (<span className="mnj-error alert-dateNacm active">{errors.imgProduct}</span>)} />
                                    </div>
                                </div>
                                <p><label className="labels-dash-sty">descripción de producto</label>
                                    <Field
                                        className="textarea-dash-sty"
                                        as="textarea"
                                        placeholder="Hola que tal"
                                        name="descriProduct"
                                    />
                                    <ErrorMessage name="descriProduct" component={() => (<span className="mnj-error alert-dateNacm active">{errors.descriProduct}</span>)} />
                                </p>
                                <button class="btn-add-data-produ" type="submit" event={onsubmit}>Agregar producto</button>
                            </Form>
                        )}
                    </Formik>
                </div>

            </section>

        </>
    )
}