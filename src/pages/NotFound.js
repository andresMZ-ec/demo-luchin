import { useHistory } from 'react-router';
import '../assets/css/components/NotFound.css';
import Error404 from '../assets/pictures/error-6482984_1280.png';
import { Routes } from '../routes';

export function NotFound(){
    const redirect = useHistory();

    return(
        <div id="bg-error">
            <div className="container-error">
                <img className="image_err" src={Error404} alt="Pagina no encontrada" />
                <div>
                    <h1><strong>Oh no!</strong> <br/> No encontramos la página que buscabas</h1>
                    <button onClick={()=>redirect.push(Routes.Home.path)}>Ir al Inicio</button>
                </div>
            </div>
            
        </div>
    )
}