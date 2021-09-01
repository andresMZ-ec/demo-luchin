import '.././../assets/css/admin/components/FormAdmin.css';

export function FormAdmin({template}){
  
  return(
    <div className="container-form">
        <div className="items-form flex">
            <div className="field-cont-2">
                <label className="labels-dash-sty">Nombre Producto</label>
                <input className="input-dash-sty" type="text" placeholder="Ingrese nombre producto"/>
            </div>
            <div className="field-cont-2">
                <label className="labels-dash-sty">Preco Producto</label>
                <input className="input-dash-sty" type="tel" placeholder="Ingrese precio producto"/>
            </div>           
        </div>
        <div className="row-botones_form">
            <button className="button_modal cancel" type="submit">Cancelar</button>
            <button className="button_modal submit" type="submit">Agregar Producto</button>
        </div>
    </div>
  );
}