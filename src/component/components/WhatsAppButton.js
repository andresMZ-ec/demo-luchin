import { Link } from "react-router-dom"

export default function WhatsAppButton(){
    return(
        <div className="btn-wss-ct">
            <Link to="#"><i className="fab fa-whatsapp"></i></Link>
        </div>
    )
}