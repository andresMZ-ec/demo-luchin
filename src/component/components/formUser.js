import { Formik, Form, Field, ErrorMessage } from 'formik';
import '../../assets/css/components/formUser.css';

export function FormsUser( {template, children}){
    const { titulo, campos } = template;    
    
    return(
        <Formik
            initialValues={{
                firstName: "",
                email: "",
                password : "",
            }}

            validate={(values)=>{
                let errors = {}
                 if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)){
                    errors.email = 'Por favor ingresa un correo válido';
                }
                if(!/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/.test(values.firstName)){
                    errors.firstName = "El nombre es un campo requerido";
                }      
      
                return errors;
            }}

            onSubmit={(values, {resetForm}) => {
                resetForm();                
            }}
        >
            {({errors})=>(
                <Form className={`form-send ${titulo === "Iniciar Sesión" ? "log" : ""}`}>
                    <h1 className="form__titulo">{titulo}</h1>
                    <div className="input-contenedor">
                        {campos.map(campo => {
                            const {oneColumn, label, type, name } = campo;
                            return(                
                                <p key={name} className={`row-input ${oneColumn ? "" : "cl-2"}`}>
                                    <label>{label}</label>
                                    <Field 
                                        type={type} 
                                        name={name}
                                    />
                                    <ErrorMessage name={name} component={()=>(<span className="mnj-error alert-dateNacm active">{errors[name]}</span>)} />
                                </p>
                            )
                        })}
                    </div>
                    <div className="pie-form">                 
                        <button type="submit" className="btn-send-infor">{titulo}</button>
                        {children}
                    </div>
                </Form>  
            )}
        </Formik>
    )
}