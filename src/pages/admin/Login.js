import { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../../assets/css/admin/components/ModalAuthAdmin.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Routes } from '../../routes';
import { useUser } from '../../component/hooks/useUser';
import Context from '../../component/hooks/Context/useContextUsers';
import { ComprobarToken } from '../../component/services/ConfirnUser';

import Logo from '../../assets/pictures/brand/logo-luchin.svg';

export function Login() {
  const { LoginAdmin, isLoader, isError } = useUser();
  const history = useHistory();
  const { jwtAdmin } = useContext(Context);

  const handlleSessionAdmin = (campos) => {
    const { email, password } = campos;
    LoginAdmin({ email, password });
  }


  if(jwtAdmin){
    ComprobarToken('http://localhost:9000/api/auth/admin/login', jwtAdmin)
      .then(res => {
        if(res){
          return history.push(Routes.Dashboard.path);
        }
      })
      .catch(err => console.error(err));
  }
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
          <h3 className="topic-form-aut">¡Bienvenido de nuevo!</h3>
          <p className="instruct-form">Ingrese su dirección de correo electrónico y contraseña para acceder al panel de administración.</p>
          {isLoader && <span className="mnj-error active" style={{color: "#0000"}}>Comprobando datos.</span>}
          {isError && <span className="mnj-error active">El correo electrónico o contraseña introducidos no son correctos.</span>}                              
        </div>
        <Formik
          initialValues={{
            email: "",
            password: ""
          }}

          validate={(values) => {
            let errors = {}

            //CORREO ELECTRONICO
            if (!values.email) {
              errors.email = "El correo es requerido";
            } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)) {
              errors.email = 'Por favor ingresa un correo válido';
            }

            //CONTRASEÑA
            if (!values.password) {
              errors.password = "La contraseña es requerida por favor ingresela";
            } else if (!/^(?=.*[A-Za-z])[A-Za-z\d#?!@$%^&*-]{4,16}/.test(values.password)) {
              errors.password = "La contraseña debe contener de 8 a 16 caracteres y al menos una letra";
            }

            return errors;
          }}

          onSubmit={(values) => {
            handlleSessionAdmin(values)
          }}
        >
          {({ errors }) => (
            <Form className="form-dash-ctn">
              <div className="grup-casilla">
                <p>
                  <label className="labels-dash-sty">Correo Electrónico</label>
                  <Field
                    className="input-dash-sty"
                    type="email"
                    name="email"
                    placeholder="Ingrese su dirección de correo"
                  />
                  <ErrorMessage name="email" component={() => (<span className="mnj-error alert-dateNacm active">{errors.email}</span>)} />
                </p>
                <p>
                  <label className="labels-dash-sty">Contraseña</label>
                  <Field
                    className="input-dash-sty"
                    type="password"
                    name="password"
                    placeholder="Ingrese su contraseña"
                  />
                  <ErrorMessage name="password" component={() => (<span className="mnj-error alert-dateNacm active">{errors.password}</span>)} />
                </p>
              </div>
              <button className="send_form-dash" type="submit">Iniciar Sesión</button>
            </Form>
          )}
        </Formik>
        <div className="more_actionn"><Link to={Routes.ResetPassAdmin.path} className="redirect-page">¿Olvidaste tu Contraseña?</Link></div>
      </div>
    </div>
  );
}