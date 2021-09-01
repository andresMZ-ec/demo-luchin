import { Link } from "react-router-dom"


export function TablaBolsa(props) {
    const { productBolsa, sumar, restar, deleteProd } = props;

    return (
        <div className="cl-table">
            <table className="tablita">
                <thead>
                    <tr>
                        <th className="ti producto-table">Producto</th>
                        <th className="ti precio-table">Precio</th>
                        <th className="ti cantidad-table">Cantidad</th>
                        <th className="ti subtotal-table">SubTotal</th>
                        <th className="ti acciones-table"></th>
                    </tr>
                </thead>

                <tbody className="tody">
                    {productBolsa.map((producto, index) => (
                        <tr key={index}>
                            <td className="dt descrip-dttlle producto-table" data-label="prod">
                                <div className="image">
                                    <img src={producto.imageURL} alt={`${producto.title} la parrilla de luchin`} />
                                </div>
                                <div>
                                    <h2 className="tittle-pd">{producto.title}</h2>
                                    <p className="infor-adicion">{producto.inforAdd}</p>
                                </div>
                            </td>
                            <td className="dt precio-tabla precio-table price_unit" data-label="precio">
                                ${(producto.price).toFixed(2)}
                            </td>
                            <td className="dtcantidad cantidad-table" data-label="cantidad">
                                <div className="container-cantidad">
                                    <button onClick={() => restar(producto.id, producto.quantity)} className="btn_cantdd">-</button>
                                    <input type="tel" className="can_num" onChange={(e) => producto.id = e.target.value} value={producto.quantity} />
                                    <button onClick={() => sumar(producto.id, producto.quantity)} className="btn_cantdd">+</button>
                                </div>
                            </td>
                            <td className="dt precio-tabla precio-table">${(producto.price * producto.quantity).toFixed(2)}</td>
                            <td className="dt acciones-table" data-label="action">
                                <Link to="#" onClick={() => deleteProd(producto.id)} className="button-delete fas fa-trash-alt"></Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {productBolsa.length === 0 && <p className="content-empty">Tu bolsa se encuentra vacía</p>}
        </div>
    );
}









