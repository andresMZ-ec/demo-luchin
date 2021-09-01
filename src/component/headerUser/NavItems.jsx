import { Fragment, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Carrousel } from "./CarrouselNav";
import {Routes} from '../../routes';

export function NavItems(){
    const [activador, setActivador] = useState(false);

    const hideMenuCat = ()=>{setActivador(!activador)};

    return(
        <Fragment>
            <Link to="#" className={`nav__items ${activador ? "active down" : ""}` } onClick={hideMenuCat}>Menú<i className="fas fa-chevron-down"></i></Link>
            <Carrousel visualizar = {activador}/>
            <NavLink to={Routes.Promociones.path} exact className="nav__items">Promociones</NavLink>
            <NavLink to={Routes.Contactanos.path} exact className="nav__items">Contáctanos</NavLink>
        </Fragment>
    )
}