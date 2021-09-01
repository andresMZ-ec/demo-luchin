import { ErrorMessage, Field, Form, Formik } from 'formik';
import '../../../../assets/css/admin/AddNewOrder.css';
import { Modal } from '../../../../component/ADMIN/Modal';
import { useModals } from "../../../../component/hooks/useModals";
import { ProductsToOrder } from "./ProductsToOrder";

export function AddNewOrden(){
  const [ isOpen, openModal, closeModal ] = useModals();
  
  return(
    <>
      <Modal
        topic="Agregar Producto a la Orden"
        isOpen={isOpen} 
        closeModal={closeModal} 
      > <ProductsToOrder /> </Modal>
      <div className="theme-apart">
        <h2><span className="name-user">Agregar orden</span></h2>
      </div>
      <section className="container-main">
          <Formik>
            {(errors) => (
              <Form className="conte_client">
                <div className="column-order dt-resume bd__sect">
                  <h2 className="title_card_cl"> Datos del Cliente</h2>
                  <div className="col-form">
                    <div className="grup_field_dash">
                      <p className="row_field_form div">
                        <label className="labels-dash-sty">Nombres del Cliente</label>
                        <Field
                          className="input-dash-sty"
                          type="text"
                          name="firstName"
                          placeholder="Ingrese Nombres"
                        />
                        <ErrorMessage name="firstName" component={() => (<span className="mnj-error alert-dateNacm active">{errors.text}</span>)} />
                      </p>
                      <p className="row_field_form div">
                        <label className="labels-dash-sty">Apellidos del CLiente</label>
                        <Field
                          className="input-dash-sty"
                          type="text"
                          name="lastName"
                          placeholder="Ingrese Apellidos"
                        />
                        <ErrorMessage name="lastName" component={() => (<span className="mnj-error alert-dateNacm active">{errors.text}</span>)} />
                      </p>
                      <p className="row_field_form div">
                        <label className="labels-dash-sty">Teléfono</label>
                        <Field
                          className="input-dash-sty"
                          type="tel"
                          name="telef"
                          placeholder="Ingrese Número de Teléfono"
                        />
                        <ErrorMessage name="telef" component={() => (<span className="mnj-error alert-dateNacm active">{errors.text}</span>)} />
                      </p>
                      <p className="row_field_form div">
                        <label className="labels-dash-sty">Número de Cédula</label>
                        <Field
                          className="input-dash-sty"
                          type="text"
                          name="numNUI"
                          placeholder="Ingrese NUI"
                        />
                        <ErrorMessage name="numNUI" component={() => (<span className="mnj-error alert-dateNacm active">{errors.text}</span>)} />
                      </p>
                    </div>
                  </div>
                  <h2 className="title_card_cl">Dirección del cliente</h2>
                  <div className="col-form">
                    <div className="grup_field_dash">
                      <p className="row_field_form">
                        <label className="labels-dash-sty">Dirección</label>
                        <Field
                          className="input-dash-sty"
                          type="text"
                          name="text"
                          placeholder="Calle, Avenida, Barrio o Sector"
                        />
                        <ErrorMessage name="text" component={() => (<span className="mnj-error alert-dateNacm active">{errors.text}</span>)} />
                      </p>
                      <p className="row_field_form">
                        <label className="labels-dash-sty">Detalle de la dirección</label>
                        <Field
                          className="textarea-dash-sty"
                          as="textarea"
                          name="textarea"
                          placeholder="Describa la ubicación del cliente"
                        />
                        <ErrorMessage name="textarea" component={() => (<span className="mnj-error alert-dateNacm active">{errors.textarea}</span>)} />
                      </p>
                    </div>
                  </div>
                </div>

                <div className="column-order bd__sect">
                  <h2 className="title_card_cl">Detalles Orden</h2>
                  <div className="detalle_order_row list">
                    <div className="labels-dash-sty">Agregue Platillos para realizar una orden:</div>
                    <div className="comidas">
                      <p className="tr-product_order">
                        <span className="desc_order">Hamburguesa Rellena</span>
                        <span className="cant_order"><button type="button">-</button><input type="text" value="1" /><button type="button">+</button></span>
                        <span className="price_order">$15.99</span>
                      </p>
                      <p className="tr-product_order">
                        <span className="desc_order">Hamburguesa Rellena</span>
                        <span className="cant_order"><button type="button">-</button><input type="text" value="1" /><button type="button">+</button></span>
                        <span className="price_order">$15.99</span>
                      </p>
                      <p className="tr-product_order">
                        <span className="desc_order">Hamburguesa Rellena</span>
                        <span className="cant_order"><button type="button">-</button><input type="text" value="1" /><button type="button">+</button></span>
                        <span className="price_order">$15.99</span>
                      </p>
                    </div>
                    <button onClick={()=>openModal()} className="btn-add-deta" type="button">Agregar producto</button>
                  </div>
                  <p className="detalle_order_r pago">
                    <label className="labels-dash-sty">Indique el Estado de la Orden</label>
                    <select name="estado_orden" className="select-dash-sty">
                      <option value="0">Seleccione un estado</option>
                      <option value="1">Enviado</option>
                      <option value="2">Pedido</option>
                      <option value="3">Servido</option>
                      <option value="4">Cancelado</option>
                    </select>
                  </p>
                  <div className="total-pago_order">
                    <p className="detalle_order_row pago">
                      <span className="topic">SubTotal:</span>
                      <span className="data-resume">$15.25</span>
                    </p>
                    <p className="detalle_order_row pago">
                      <span className="topic">Transporte:</span>
                      <span className="data-resume">$3.00</span>
                    </p>
                    <p className="detalle_order_row pago">
                      <span className="topic">Total a Pagar:</span>
                      <span className="data-resume">$15.25</span>
                    </p>
                  </div>
                  <button className="btn-add-data-lista" type="submit">Guardar y Enviar</button>
                </div>
              </Form>
            )}
          </Formik>

            {/*<div className="column-order bd__sect">
              <h2 className="title_card_cl">Detalles Orden</h2>
              <div className="detalle_order_row list">
                <div className="labels-dash-sty">Agregue Platillos para realizar una orden:</div>
                <div className="comidas">
                  <p className="tr-product_order">
                    <span className="desc_order">Hamburguesa Rellena</span>
                    <span className="cant_order"><button type="button">-</button><input type="text" value="1"><button
                        type="button">+</button></span>
                    <span className="price_order">$15.99</span>
                  </p>
                  <p className="tr-product_order">
                    <span className="desc_order">Hamburguesa Rellena</span>
                    <span className="cant_order"><button type="button">-</button><input type="text" value="1"><button
                        type="button">+</button></span>
                    <span className="price_order">$15.99</span>
                  </p>
                  <p className="tr-product_order">
                    <span className="desc_order">Hamburguesa Rellena</span>
                    <span className="cant_order"><button type="button">-</button><input type="text" value="1"><button
                        type="button">+</button></span>
                    <span className="price_order">$15.99</span>
                  </p>
                  <p className="tr-product_order">
                    <span className="desc_order">Hamburguesa Rellena</span>
                    <span className="cant_order"><button type="button">-</button><input type="text" value="1"><button
                        type="button">+</button></span>
                    <span className="price_order">$15.99</span>
                  </p>
                  <p className="tr-product_order">
                    <span className="desc_order">Hamburguesa Rellena</span>
                    <span className="cant_order"><button type="button">-</button><input type="text" value="1"><button
                        type="button">+</button></span>
                    <span className="price_order">$15.99</span>
                  </p>
                </div>
                <button className="btn-add-deta" type="button">Agregar producto</button>
              </div>
              <p className="detalle_order_r pago">
                <label className="labels-dash-sty">Indique el Estado de la Orden</label>
                <select name="estado_orden" className="select-dash-sty">
                  <option value="0">Seleccione un estado</option>
                  <option value="1">Enviado</option>
                  <option value="2">Pedido</option>
                  <option value="3">Servido</option>
                  <option value="4">Cancelado</option>
                </select>
              </p>
              <div className="total-pago_order">
                <p className="detalle_order_row pago">
                  <span className="topic">SubTotal:</span>
                  <span className="data-resume">$15.25</span>
                </p>
                <p className="detalle_order_row pago">
                  <span className="topic">Transporte:</span>
                  <span className="data-resume">$3.00</span>
                </p>
                <p className="detalle_order_row pago">
                  <span className="topic">Total a Pagar:</span>
                  <span className="data-resume">$15.25</span>
                </p>
              </div>
              <button className="btn-add-data-lista" type="submit">Guardar y Enviar</button>
            </div>
          </form> */}
        </section>
    </>
  )
}