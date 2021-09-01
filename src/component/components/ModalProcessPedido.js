import { useHistory } from 'react-router-dom';
import { Routes } from '../../routes';
import '../../assets/css/components/ModalProcessPedido.css';

import ProcessTransaction from '../../assets/pictures/orderTransacc.gif';
import orderOK from '../../assets/pictures/orderOK.gif';
import NOTorderOK from '../../assets/pictures/RedX.gif';

export default function ModalProcessPedido(props) {
  const { isOpen, closeModal, mensaje} = props;
  const redirect = useHistory();
  const showModal = isOpen ? "active" : "";
  
  return (
    <div className={`over_proc ${showModal}`}>
      <div className="vent_modal_prcc">
        <div className="loader_prcc">
          <img src={mensaje.state === null ? ProcessTransaction : mensaje.state === true ? orderOK : NOTorderOK } alt="Ilustracion tipo de orden"></img>
        </div>
        <div className="contend_prcc">
          <p>{mensaje.send}</p>
          {mensaje.state && <p>En unos minutos nos contactaremos con usted para la confirmación del pedido.</p>}

          {mensaje.state && <button onClick={()=>redirect.push(Routes.Home.path)} className="btn_subm_home">Volver al inicio</button>}
          {mensaje.state === false && <button onClick={()=>closeModal()} className="btn_subm_home">Volver a Intentar</button>}
        </div>
      </div>
    </div>
  )
}