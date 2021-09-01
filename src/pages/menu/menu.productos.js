import { useState } from 'react';
import './menu-pd.css';
import { NavLink } from "react-router-dom";
import { ListaMenu } from "./ListaMenu";
import CategoriesItems from '../../jsonDatabase/categoriasMenu.json';
import { Routes } from '../../routes';

export function MenuProductos() {
    const [ current, setCurrent ] = useState(0);

    const nextElement = ()=>{
        const scrollear = document.querySelector(".items-carru");
        
        if(current === CategoriesItems.length -1){
            scrollear.scrollLeft = 0;
            setCurrent(0);
        }else{
            scrollear.scrollLeft += scrollear.firstChild.offsetWidth;
            setCurrent(current + 1);
        }
    }

    const prevElement = () => {
        const scrollear = document.querySelector(".items-carru");
        
        if(current === 0){
            scrollear.scrollLeft = scrollear.firstChild.offsetWidth * CategoriesItems.length -1;
            setCurrent(CategoriesItems.length - 1);
        }else{
            scrollear.scrollLeft -= scrollear.firstChild.offsetWidth;
            setCurrent(current - 1);
        }
        setCurrent(current === 0 ? CategoriesItems.length - 1 : current - 1);
    }

    return (
        <>
            <main className="main-contains">
                <div className="head_main_section">
                    <h1 className="menuPin">Menú Completo</h1>
                </div>                
                <section className="carru">
                    <div className="carrousel2">
                        <button onClick={prevElement} className="previous-btn"><i className="fas fa-chevron-left"></i></button>
                        <div className="items-carru">
                            <NavLink to={Routes.Menu.path} exact className="item-categoria2">
                                <div className="img-cat">
                                    <i className="fas fa-burger-soda"></i>
                                </div>
                                <p className="name-cat">Todos los Productos</p>
                            </NavLink>
                            {CategoriesItems.map((categoria, index) => (
                                <NavLink to={`${Routes.Menu.path}/${categoria.name}`} exact key={index} className="item-categoria2">
                                    <div className="img-cat">
                                        <img src={categoria.image} alt={`${categoria.name} categoria de nuestro menú`} />
                                    </div>
                                    <p className="name-cat">{categoria.name}</p>
                                </NavLink>
                            ))}
                        </div>
                        <button onClick={nextElement} className="next-btn"><i className="fas fa-chevron-right"></i></button>
                    </div>
                </section >


                {/* <section className="filter-menu">
                    <div className="container-filtros">
                        <div className="filter">
                            <p>Ordenar por: </p>
                            <select name="menu2" className="select">
                                <option disabled="menor"> Seleccione una opcion</option>
                                <option>Menor a Mayor</option>
                                <option>Mayor a Menor</option>
                            </select>
                        </div>
                    </div>
                </section> */}

                <ListaMenu />
            </main>
        </>
    )
}


