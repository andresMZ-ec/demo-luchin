import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import { useUser } from '../hooks/useUser';

export function RegisterUser(props) {
  const { changeForm, typeForm } = props;
  const { Register, isLoader, isError } = useUser();

  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          telefono: "",
          password: "",
          password2: ""
        }}

        validate={(values) => {
          let errors = {}

          //nombres
          if (!values.firstName) {
            errors.firstName = "Este campo es requerido";
          } else if (!/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g.test(values.firstName)) {
            errors.firstName = "Este campo no puede contener números ni caracteres especiales";
          }

          //apellidos
          if (!values.lastName) {
            errors.lastName = "Este campo es requerido";
          } else if (!/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g.test(values.lastName)) {
            errors.lastName = "Este campo no puede contener números ni caracteres especiales";
          }

          //FECHA DE NACIMIENTO

          //CORREO ELECTRONICO
          if (!values.email) {
            errors.email = "El correo es requerido";
          } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)) {
            errors.email = 'Por favor ingresa un correo válido';
          }

          //TELEFONO
          if (!values.telefono) {
            errors.telefono = "El campo teléfono es un campo requerido";
          } else if (!/[0-9]{10}/.test(values.telefono)) {
            errors.telefono = "La cedula debe contener 10 números y no se aceptan letras";
          }

          //CONTRASEÑA
          if (!values.password) {
            errors.password = "La contraseña es requerida por favor ingresela";
          } else if (!/^(?=.*[A-Za-z])[A-Za-z\d#?!@$%^&*-]{8,16}/.test(values.password)) {
            errors.password = "La contraseña debe contener de 8 a 16 caracteres y al menos una letra";
          }

          // CONFIRMAR CONTRASEÑA
          if(values.password2 !== values.password){
            errors.password2 = "Las contraseñas no coinciden";
          }

          return errors;
        }}

        onSubmit={(values, { resetForm }) => {      //peticion HTTP hacia el servidor (API)
          resetForm();
          Register(values);
        }}
      >
        {({ errors }) => (
          <Form className="form-send">
            <h1 className="form__titulo">Crear Cuenta</h1>
            <div className="input-contenedor container_fields_us">
              <p className="field_u div">
                <label>Nombre(s)</label>
                <Field
                  type="text"
                  name="firstName"
                />
                <ErrorMessage name="firstName" component={() => (<span className="mnj-error">{errors.firstName}</span>)} />
              </p>
              <p className="field_u div">
                <label>Apellido(s)</label>
                <Field
                  type="text"
                  name="lastName"
                />
                <ErrorMessage name="lastName" component={() => (<span className="mnj-error">{errors.lastName}</span>)} />
              </p>
              <p className="field_u">
                <label>Fecha de Nacimiento</label>
                <Field
                  type="date"
                  name="dateNacm"
                />
                <ErrorMessage name="dateNacm" component={() => (<span className="mnj-error">{errors.dateNacm}</span>)} />
              </p>
              <p className="field_u">
                <label>Correo Electrónico</label>
                <Field
                  type="email"
                  name="email"
                />
                <ErrorMessage name="email" component={() => (<span className="mnj-error">{errors.email}</span>)} />
              </p>
              <p className="field_u">
                <label>Número de Teléfono</label>
                <Field
                  type="text"
                  name="telefono"
                  maxLength={10}
                />
                <ErrorMessage name="telefono" component={() => (<span className="mnj-error">{errors.telefono}</span>)} />
              </p>
              <p className="field_u div">
                <label>Contraseña</label>
                <Field
                  type="password"
                  name="password"
                />
                <ErrorMessage name="password" component={() => (<span className="mnj-error">{errors.password}</span>)} />
              </p>
              <p className="field_u div">
                <label>Confirmar Contraseña</label>
                <Field
                  type="password"
                  name="password2"
                />
                <ErrorMessage name="password2" component={() => (<span className="mnj-error">{errors.password2}</span>)} />
              </p>
            </div>
            <div className="pie-form">
              {isLoader && <span className="mnj-error" style={{color: "#0000"}}>Enviando Datos</span>}
              {isError && <span className="mnj-error">El correo que ingreso ya se encuentra registrado.</span>}                              
              <button type="submit" className="btn-send-infor">Crear Cuenta</button>
              <p className="form__link">Ya tienes una Cuenta?<Link to="#" onClick={()=>changeForm(typeForm.Login)} >Iniciar Sesión</Link></p>
            </div>
          </Form>
        )}
      </Formik>
    </>
  )
}

