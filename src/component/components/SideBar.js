import { useEffect, useState } from "react";
import { Link, useLocation, NavLink } from "react-router-dom";
import '../../assets/css/admin/sidebar.css';

import { Routes } from "../../routes";
import Logo from '../../assets/pictures/brand/logo-luchin.svg';
import LogoConcept from '../../assets/pictures/brand/luchin-vino-concept.svg';

export default function SideBar(){
    const [reducSideBar, setReducSideBar] = useState(false);
    const [AddLogo, setAddLogo] = useState(LogoConcept);
    const [ onCollapse, setOnCollapse ] = useState(null);

    const location = useLocation();
    const { pathname } = location;

    useEffect(()=>{
        const divRoot = document.getElementById("root");

        if(reducSideBar){
            divRoot.classList.add('left-navbar');
            setAddLogo(Logo);
        }else{
            divRoot.classList.remove('left-navbar');
            setAddLogo(LogoConcept);
        }

    }, [reducSideBar]);

    const NavItemsCollapse = (props) => {
        const { icon, title, children = null, eventKey} = props;

        return(
            <div className="container-item">
                <Link to="#" className="item-aside" onClick={() =>setOnCollapse(eventKey)}>
                    <i className="estado"></i>
                    <i className={`icon-item ${icon}`}></i>
                    <p className="topic-item">{title}</p>
                    <i className="down-more fas fa-angle-down"></i>
                </Link>
                <div className={`subitem-aside ${onCollapse === eventKey ? "active" : ""}`}>
                    {children}
                </div>
            </div>
        )
    }


    const NavItem = (props) => {
        const { title, icon, path } = props;
        const activeClassName = path === pathname ? "active" : "";

        return(
            <NavLink to={path} className={`item-aside ${activeClassName}`}>
                <i className={`estado ${activeClassName}`}></i>
                <i className={`icon-item ${icon}`}></i>
                <p className="topic-item">{title}</p>
            </NavLink>
        )
    }


    return(
        <aside className="aside-bar aside">
            <button className="btn__menu admin" onClick={()=>setReducSideBar(!reducSideBar)}><i className="fal fa-bars"></i></button>
            <div className="image-navbar">
                <img src={AddLogo} alt="logo-luchin"/>
            </div>
            <div className="legend">PRINCIPAL</div>

            <NavItem title="Resumen" icon="far fa-border-all" path={Routes.Dashboard.path} />

            <NavItemsCollapse title="Menú" icon="far fa-burger-soda" eventKey={0}>
                <NavItem title="Agregar un Producto" path={Routes.AddProducto.path} />
                <NavItem title="Lista de Menú" path={Routes.ListaMenu.path} />
            </NavItemsCollapse>

            <NavItemsCollapse title="Ordenes" icon="far fa-bags-shopping" eventKey={1}>
                <NavItem title="Agregar Nueva Orden" path={Routes.AddOrden.path} />
                <NavItem title="Lista de Ordenes" path={Routes.ListaOrdenes.path} />
            </NavItemsCollapse>

            <div className="legend">ADMINISTRACIÓN</div>

            <NavItem title="Clientes" icon="far fa-users" path={Routes.Clientes.path} />

            <NavItem title="Ventas" icon="far fa-analytics" path={Routes.Ventas.path} />

            <NavItem title="Promociones" icon="far fa-badge-percent" path={Routes.PromocionesAdmin.path} />

            <NavItem title="Empleados" icon="far fa-poll-people" path={Routes.Empleados.path} />
            
        </aside>
    )
}