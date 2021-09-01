import LogoConcept from '../../../assets/pictures/brand/luchin-vino-concept.svg';
import { Login } from '../../headerUser/Login';
import { RegisterUser } from '../../headerUser/Register';

export function ModalUser(props) {
    const {isOpen, closeVent, typesForm, handleChangeType, formCurrent } = props;   
    
    return (
        <div className={`vent-form-user loginForm ${isOpen ? "active" : ""}`}>
            <div className="head_wind">
                <button className="login" onClick={closeVent} ><i className="fas fa-chevron-left"></i></button>
                <img src={LogoConcept} alt="logo luchin"/>
            </div>
            {formCurrent === "SigIn" && <Login changeForm={handleChangeType} typeForm={typesForm} /> }
            {formCurrent === "SignUp" && <RegisterUser changeForm={handleChangeType} typeForm={typesForm} /> }
        </div>
    )
}