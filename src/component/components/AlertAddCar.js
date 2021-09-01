export default function PopUpAgregarCar({activator}){
    let mensaje = '';

    if(activator){
        mensaje = {"class":"aprobado" ,"detalle":"Aprobado", "icono":`<i className="fas fa-check-circle"></i>`};
    }else{
        mensaje = {"class":"reprobado","detalle":"Error al agregar", "icono":'<i className="fas fa-times-circle"></i>'};
    }


    return(
        <div className="box-sms active">
            <div className={`txt-sms ${mensaje.class}`}>Aprobado <i className="fas fa-check-circle"></i></div>
            <div className="lay"></div>
        </div>
    )
}