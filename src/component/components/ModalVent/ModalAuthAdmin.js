// import { FormAdmin } from '../../ADMIN/FormsAdmin';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Logo from '../../../assets/pictures/brand/logo-luchin.svg';
import '../../../assets/css/admin/components/ModalAuthAdmin.css';
import { Link } from 'react-router-dom';


export function ModalAuthAdmin(props) {
  const { title, description } = props;
  // const {Login, isLogged} = useUser();
  // const history = useHistory();

  // useEffect(() => {
  //   if(isLogged) history.push('/');
  // }, [history, isLogged])

  // const handleSubmit = (e)=>{
  //   e.preventDefault();
  //   Login();
  // }

  return (
    <div className="autentif-forms">
      <div className="head-form">
        <div className="brand-logo"><img src={Logo} alt="Logo la parrilla de luchin ventana dashboard" /></div>
        <h3 className="topic-form-aut">{title}</h3>
        <p className="instruct-form">{description}</p>
      </div>
      <Formik
        initialValues={{
          email: "",
          password : ""
        }}

        validate={(values)=>{
          const errors = {}

          if(!values.email){
            errors.email = 'El correo es un campo requerido';
          }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)){
            errors.email = 'Por favor ingresa un correo válido';
          }

          if(!/^(?=.*[A-Za-z])[A-Za-z\d#?!@$%^&*-]{4,16}/.test(values.password)){
            errors.password = "La contraseña debe contener minimo 8 digitos y un máximo de 16 dígitos y al menos una mayúscula"
          }

          return errors;
        }}

        onSubmit = {(values, {resetForm}) => {
          resetForm();
          console.log('enviado')
        }}
      >
        {( {errors} ) => (
            <Form className="form-dash-ctn">
              <div className="box-input">
                <label>Correo electrónico</label>
                <Field 
                  type="email" 
                  name="email"
                  placeholder="Ingrese su dirección de correo"                  
                />
                <ErrorMessage name="email" component={()=>(<p className="point-error">{errors.email}</p>)} />
              </div>
              <div className="box-input">
                <label>Contraseña</label>
                <Field 
                  type="password" 
                  name="password"
                  placeholder="Ingrese Contraseña" 
                  maxLength={16}
                />
                <ErrorMessage name="password" component={()=>(<p className="point-error">{errors.password}</p>)} />
              </div>
              <button className="send_form-dash" type="submit">Iniciar Sesión</button>
            </Form> 
        )}
      </Formik>
      
      <div className="more_actionn">Prefiero <Link to="#" className="redirect-page">Iniciar Sesión</Link></div>
    </div>
  );
}