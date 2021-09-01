import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Routes } from '../../routes';
import All from '../../assets/pictures/hamburguesas.jpg';
import CategoriesItems from '../../jsonDatabase/categoriasMenu.json'

export function Carrousel(props) {
    const { visualizar } = props;
    const [ current, setCurrent ] = useState(0);

    const nextElement = ()=>{
        const scrollear = document.querySelector(".group-items");
        
        if(current === CategoriesItems.length -1){
            scrollear.scrollLeft = 0;
            setCurrent(0);
        }else{
            scrollear.scrollLeft += scrollear.firstChild.offsetWidth;
            setCurrent(current + 1);
        }
    }

    const prevElement = () => {
        const scrollear = document.querySelector(".group-items");
        
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
        <div className={`menu-container ${visualizar ? "active" : ""}`}>
            <div className="carrousel-menu">
                <button onClick={prevElement} className="previous-btn"><i className="fas fa-angle-left"></i></button>
                <div className="group-items">
                    <NavLink to={Routes.Menu.path} exact className="item-categoria">
                        <div className="item-img"><img src={All} alt="Todos los productos"/></div>
                        <p className="name-cat-menuD">Todos los Productos</p>
                    </NavLink>
                    {CategoriesItems.map( (categoria, index) => (
                        <NavLink to={`${Routes.Menu.path}/${categoria.name}`} exact key={index} className="item-categoria">
                            <div className="item-img"><img src={categoria.image} alt={categoria.name}/></div>
                            <p className="name-cat-menuD">{categoria.name}</p>
                        </NavLink>
                    ))}
                </div>
                <button onClick={nextElement} className="next-btn"><i className="fas fa-angle-right"></i></button>
            </div>
        </div>
    )
}
