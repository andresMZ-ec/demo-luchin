import '../../../assets/css/admin/Ordenes.css';
import { useEffect, useState } from "react";
import axiosConfig from "../../../API";
import { Modal } from "../../../component/ADMIN/Modal";
import TableAdmin from "../../../component/ADMIN/Table/TableAdmin";
import { useModals } from "../../../component/hooks/useModals";


export function ListaOrdenes() {
  const [isOpen, openModal, closeModal] = useModals(false);
  const [showDataOrder, setShowDataOrder] = useState([]);
  const [orders, setOrders] = useState([]);

  const handleView = (id) => {
    openModal();
    console.log(id);
    return axiosConfig.put(`/ordenes/view/${id}`)
      .then(res => { return setShowDataOrder(res.data) })
      .catch(err => console.error(err));
  }

  useEffect(() => {
    axiosConfig.get('/ordenes/getOrders')
      .then(res => {
        if (res.data) {
          setOrders(res.data);
        }
      })
      .catch(err => console.error(err));
  }, [])

  return (
    <>
      <Modal
        topic="Detalles de Orden"
        isOpen={isOpen}
        closeModal={closeModal}
        actions={[
          {
            name: "Cerrar",
            type: "cancel",
            className: "btn-modal red",
          },
        ]}
      >
        {showDataOrder.length !== 0 && <div className="details-orders">
            <h2 class="topic-dtll">Información del Cliente</h2>
            <div className="grid-dtll">
              <div>
                <p className="sub_title">Nombres y Apellidos</p>
                <p className="item_text ">{showDataOrder.cliente.nombres}</p>
              </div>
              <div>
                <p className="sub_title">Correo Electrónico</p>
                <p className="item_text ">{showDataOrder.cliente.correo}</p>
              </div>
              <div>
                <p className="sub_title">Teléfono</p>
                <p className="item_text ">{showDataOrder.cliente.telefono}</p>
              </div>
            </div>
            <h2 class="topic-dtll">Dirección de Envío</h2>
            <div>
              <div>
                <p className="sub_title">Dirección Principal</p>
                <p className="item_text ">{showDataOrder.cliente.direccion}</p>
              </div>
              <div>
                <p className="sub_title">Descripción de la Dirección:</p>
                <p className="item_text ">{showDataOrder.cliente.descDirecc}</p>
              </div>
            </div>
            <h2 class="topic-dtll">Detalle de Productos</h2>
            <div>
              <table>
                <thead>
                  <tr>
                    <th>Nª</th>
                    <th className="descr_prod">Descripción de Producto</th>
                    <th>Cantidad</th>
                    <th>Precio Unit.</th>
                    <th>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {showDataOrder.productos.map( (row, index) => 
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td className="descr_prod">
                        <p className="produc_table">{row.producto}</p>
                        <p className="inf_adc">{row.adicion}</p>
                      </td>
                      <td>{row.cantidad}</td>
                      <td>{row.precio}</td>
                      <td>{row.subtotal}</td>
                    </tr>
                  )}
                </tbody>
              </table>
              <div className="prices">
                <div className="flex-price"><p>Subtotales:</p><span>{showDataOrder.totales.subtotales.toFixed(2)}</span></div>
                <div className="flex-price"><p>Transporte:</p><span>${showDataOrder.totales.transporte.toFixed(2)}</span></div>
                <div className="flex-price"><p>Total a Cobrar:</p><span>${showDataOrder.totales.totales.toFixed(2)}</span></div>
              </div>
            </div>            
          </div>}
      </Modal>
      <div class="theme-apart">
        <h2>Lista de Ordenes</h2>
      </div>
      <section className="container-main bd__sect">
        <div className="border-tables-ad">
          <h2 class="mi_clase title_card_cl">Detalles de Ordenes</h2>
          <TableAdmin
            columnas={["Num.", "Cantidad de Productos", "Cliente", "Teléfono", "Fecha y Hora", "Precio Total", "Estado", ""]}
            filas={orders}
            buttonActions={[
              {
                type: "view",
                classNameIcon: "",
                text: "Mostrar Detalles",
                event: handleView
              }
            ]}
          />
        </div>
      </section>
    </>
  );
}
