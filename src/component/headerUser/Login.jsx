import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import { useUser } from '../hooks/useUser';

export function Login(props) {
    const { changeForm, typeForm} = props; 
    const {Login, isLoader, isError} = useUser();
    
    const handleSession = (data) => {
        const { email, password } = data;
        Login({email, password});
    }

    return (
        <>
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
                    } else if (!/^(?=.*[A-Za-z])[A-Za-z\d#?!@$%^&*-]{8,16}/.test(values.password)) {
                        errors.password = "La contraseña debe contener de 8 a 16 caracteres y al menos una letra";
                    }

                    return errors;
                }}

                onSubmit={(values) => {
                    handleSession(values)
                }}
            >
                {({ errors }) => (
                    <Form className="form-send log">
                        <h1 className="form__titulo">Iniciar Sesión</h1> 
                        <div className="input-contenedor container_fields_us">
                            <p className="field_u">
                                <label>Correo Electrónico</label>
                                <Field
                                    type="email"
                                    name="email"
                                />
                                <ErrorMessage name="email" component={() => (<span className="mnj-error active">{errors.email}</span>)} />
                            </p>
                            <p className="field_u">
                                <label>Contraseña</label>
                                <Field
                                    type="password"
                                    name="password"
                                />
                                <ErrorMessage name="password" component={() => (<span className="mnj-error active">{errors.password}</span>)} />
                            </p>
                        </div>
                        <div className="pie-form">
                            {isLoader && <span className="mnj-error active" style={{color: "#0000"}}>Comprobando datos.</span>}
                            {isError && <span className="mnj-error active">El correo electrónico o contraseña introducidos no son correctos.</span>}                              
                            <button type="submit" className="btn-send-infor">Iniciar Sesión</button>
                            <p className="form__link">¿No tienes Cuenta?<Link to="#" onClick={()=>changeForm(typeForm.Register)} >Crear una Cuenta</Link></p>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    )
}

