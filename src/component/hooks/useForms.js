import { useState } from "react";

// PASAR LOS VALUES DE CADA INPUT QUE ME RETORNA LA LIBRERIA FORMIK
export const useForm = (initialForm, validateForm) => {
  const { form, setForm } = useState(initialForm);
  const { errors, setErrors } = useState({});
  const { loading, setLoading } = useState(false);
  const { response, setResponse } = useState(null);

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const handleBlur = (e) => {};

  const handleSubmit = (e) => {};

  return{
    form,
    errors,
    loading,
    response,
    handleChange, 
    handleBlur, 
    handleSubmit
  };
}