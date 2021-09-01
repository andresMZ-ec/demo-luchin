import { Link } from 'react-router-dom';
import Logo from '../../assets/pictures/brand/logo-luchin.svg';
import '../../assets/css/admin/components/ModalAuthAdmin.css';
import { Routes } from '../../routes';

export function ResetPassword() {
  return (
    <div className="main-auth-users">
      <div className="present-slide">
        <div className="overflow"></div>
        <img
          src="https://images.unsplash.com/photo-1505826759037-406b40feb4cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
          alt="Dashboard LPL"
        />
      </div>
      <div className="autentif-forms">
        <div className="head-form">
          <div className="brand-logo"><img src={Logo} alt="Logo la parrilla de luchin ventana dashboard" /></div>
          <h3 className="topic-form-aut">Restablecer Contraseña</h3>
          <p className="instruct-form">Por el momento no podemos restablecer tu contraseña, pide soporte al administrador de este sitio para obtener una nueva contraseña.</p>
        </div>
        <div className="more_actionn">Volver a intentar <Link to={Routes.LoginAdmin.path} className="redirect-page">Iniciar Sesión</Link></div>
      </div>
    </div>
  );
}