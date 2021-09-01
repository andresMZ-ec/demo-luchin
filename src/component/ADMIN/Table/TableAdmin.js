import React from 'react'
import './table.css'

export default function TableAdmin(props) {
  const { numFila = false, columnas, filas, buttonActions = []} = props;

  /* 
  columnas          //la estructura es un array, donde deberas pasar el nombre de cada columna (si tienes botones al final agrega comillas sin contenido -> "Teléfono", "")
  numFila           //indica al componente si deseas aplicar la enumeracion por fila, si no lo necesitas no es necesario que lo llanes como prop
  estructura para cada uno de los botones que necesita agregar
  {
    type: "edit",                     //el nombre que agregue sera el mismo que tendra el estilo css
    classNameIcon: "fas fa-pencil",   //agregar la clase de fontawesome en el caso de si usar el icono, caso contrario dejar -> ""
    text: "",                         //por defecto vacio, pero si necesita agregar un texto al boton agregelo. Por ejemplo "Mostrar Detalles"
    event: handleEdit                 //onClick que ejecutará el boton
  }, 
  */

  const renderButtons = (id) => {
    if (buttonActions.length !== 0) {
      
      return (
        <td className="action_table">
          {buttonActions.map((button, index) => (
            <button
              key={index}
              className={`table-${button.type}`}
              type="button"
              onClick={() => button.event(id)}
            >
              <i className={button.classNameIcon}></i>
              {button.text}
            </button>
          ))}
        </td>
      )

    } else {
      return;
    }
  }

  return (
    <div className="ct-table_admin">
      <table>
        <thead>
          <tr>
            {columnas.map((column, index) => <th key={index}>{column}</th>)}
          </tr>
        </thead>
        <tbody>
          {filas.map((row, index) => (
            <tr key={index}>

              {Object.values(row).map((colData, i) => {
                let status;
                Object.keys(row).map((keys, iter) => keys === "estado" ? status = iter : "");       //indica si en el objeto de los datos hay un estado, si es asi retorna en que index esta

                //mostrar el numero de columna y no el id
                if (colData === row.id) {
                  if(numFila){
                    return <td key={colData}>{index + 1}</td>
                  }
                }
                //mostrar el estado con su color
                if(status === i){
                  return <td key={colData} className={`status-${colData.toLowerCase()}`}><span>{colData}</span></td>;
                }
                
                return <td key={colData}>{colData}</td>
              })}

              {renderButtons(parseInt(row.id))}

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}