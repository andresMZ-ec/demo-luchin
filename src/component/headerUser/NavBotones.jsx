import { useState } from "react"
import { Link } from "react-router-dom"
import { Routes } from "../../routes";
import { ModalUser } from "../components/ModalVent/ModalUser";
import { useModals } from "../hooks/useModals";
import { useChangeForm } from "../hooks/useChangeForm";
import { useUser } from "../hooks/useUser";


export function NavBotones(props){
    const { isLogged } = props;                         //si fue recibido un JavaScriptWebToken poner el navbar de registrado

    const [ isOpen, openModal, closeModal ] = useModals(true);     
    const { LogOut } = useUser();
    const [ stateType, handleChangeType, typeForm ] = useChangeForm("");

    const [changeUser, setchangeUser] = useState(false);
    
    if(isLogged){
        return(
            <div className="nav__botones account botones-option">
                <button className="nav__items--cta account" onClick={()=>setchangeUser(!changeUser)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 288 288"><g id="Capa_2" data-name="Capa 2"><g id="Capa_12" data-name="Capa 12"><path className="cls-1" d="M144,0A144,144,0,0,0,37.65,241.08h0q3.9,4.28,8.12,8.22c1.41,1.32,2.85,2.6,4.31,3.86q4.38,3.78,9.06,7.2a144.14,144.14,0,0,0,155.15,9.35A144.56,144.56,0,0,0,245.61,246q2-2,3.9-4A144,144,0,0,0,144,0Zm98.67,219.11a18.32,18.32,0,0,0-5.41-2.93c-13.7-5-27.36-10.22-40.64-16.21a71,71,0,0,1-19.88-13.63c-5.64-5.38-8.54-11.26-6.1-17.58,2.37-6.14,4.36-18.46,7.45-18.57C183,150,188.88,131.82,188,123c-.12-1.25-3.13,0-3-1,1-8,.63-7.67.92-11.13,1-11.89.44-23.83-4.73-34.7-4.73-10-13.6-13.89-23.77-15.08a26.68,26.68,0,0,0-3.91-.56c-3.34-.22-6.68-.26-10-.2s-6.67,0-10,.2a26.68,26.68,0,0,0-3.91.56c-10.17,1.19-19,5.13-23.77,15.08-5.17,10.87-5.75,22.81-4.73,34.7.29,3.46-.08,3.13.92,11.13.13,1-2.88-.25-3,1-.88,8.82,5,27,9.91,27.19,3.09.11,5.08,12.43,7.45,18.57,2.44,6.32-.46,12.2-6.1,17.58A71,71,0,0,1,90.38,200c-13.28,6-26.94,11.23-40.64,16.21A19.43,19.43,0,0,0,45,218.62a124,124,0,1,1,197.71.49Z"/></g></g></svg>
                </button>
                <div className={`option-account ${changeUser ? "active" : ""}`}>
                    <Link to={Routes.Account.path} exact className="opt-acc-item">Mi Cuenta</Link>
                    <div onClick={()=> {LogOut(); closeModal()}} className="opt-acc-item">Cerrar Sesión <i className="fas fa-sign-out-alt"></i></div>
                </div> 
            </div>
        );
    }else{
        return(
            <>
                <div className="nav__botones botones-option">
                    <button className="nav__items--cta login" onClick={() => {openModal(); handleChangeType(typeForm.Login);}}>Iniciar Sesión</button>
                    <button className="nav__items--cta register" onClick={() => {openModal(); handleChangeType(typeForm.Register);}} >Registrarme</button>
                    <ModalUser 
                        isOpen={isOpen} 
                        closeVent={closeModal} 
                        handleChangeType={handleChangeType}
                        typesForm = {typeForm}
                        formCurrent = {stateType}
                    />
                </div>
            </>
        );
    }  
}



export function formChange(){
    console.log("cambiar")
}