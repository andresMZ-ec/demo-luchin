import { useReducer } from "react";
import { stateInitialOrder, orderReducer, TYPES } from "./orderReducer";

export function ProductsToOrder() {
  const [state, dispatch] = useReducer(orderReducer, stateInitialOrder);
  const { products, orders } = state;

  const AddToOrder = (id) => { 
    dispatch({type: TYPES.ADD_TO_ORDER, payload: id});
  };
  const RemoveOfOrder = (id) => {
    dispatch({type: TYPES.REMOVE_ELEMENT_ORDER, payload:id})
   };
  // const incCantidad = () => { };
  // const decrCantidad = () => { };

  return (
    <>
      <div className="new-order-container">
        <div className="selecc-products-oder">
          <h3 className="sub_sub">Seleccionar un Producto</h3>
          <table className="tables_adm">
            <thead>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th></th>
            </thead>
            <tbody>
              {products.map((prod, index) => (
                <tr key={index}>
                  <td>{prod.title}</td>
                  <td>${(prod.price).toFixed(2)}</td>
                  <td>
                    <div className="cant">
                      <button className="btn_can"><i className="fas fa-minus"></i></button>
                      <input type="tel" className="num_can" />
                      <button className="btn_can"><i className="fas fa-plus"></i></button>
                    </div>
                  </td>
                  <td className="action_table">
                    <button className="table-view" type="button" onClick={()=>{AddToOrder(prod.id)}}>Seleccionar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="resume-order">
          {orders.map((order, index) => (
            <div key={index} className="row-prod-order">
              <h5>{order.title}-------<span>X{order.id}</span></h5>
              <button className="eliminar-order" onClick={()=>{RemoveOfOrder()}}><i className="fas fa-trash-alt"></i></button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}