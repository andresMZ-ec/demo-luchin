import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import categorias from '../../jsonDatabase/categoriasMenu.json';

export function CarrouselHome(){
    const [ current, setCurrent ] = useState(0);
    const categories = categorias;


    const nextElement = ()=>{
        const scrollear = document.querySelector(".group_carrousel");
        
        if(current === categories.length -1){
            scrollear.scrollLeft = 0;
            setCurrent(0);
        }else{
            scrollear.scrollLeft += scrollear.firstChild.offsetWidth;
            setCurrent(current + 1);
        }
    }

    const prevElement = () => {
        const scrollear = document.querySelector(".group_carrousel");
        
        if(current === 0){
            scrollear.scrollLeft = scrollear.firstChild.offsetWidth * categories.length -1;
            setCurrent(categories.length - 1);
        }else{
            scrollear.scrollLeft -= scrollear.firstChild.offsetWidth;
            setCurrent(current - 1);
        }
        setCurrent(current === 0 ? categories.length - 1 : current - 1);
    }

    useEffect(()=>{
        const timer = setTimeout(()=>{
            const scrollear = document.querySelector(".group_carrousel");

            if(current === categories.length -1){
                scrollear.scrollLeft = 0;
                setCurrent(0);
            }else{
                scrollear.scrollLeft += scrollear.firstChild.offsetWidth;
                setCurrent(current + 1);
            }
        }, 3000);
        return ()=>{clearTimeout(timer)}
    }, [setCurrent, current, categories])

    
    return(
        <div className="section_carrousel">
            <button onClick={prevElement} className="previous-btn btn-left"><i className="fas fa-chevron-left"></i></button>
            <div className="group_carrousel">
                {categorias.map((categoria, index) => (
                    <Link key={index} to={"/menu"} className="item-cat_menu">
                        <div className="item-img"><img src={categoria.image} alt={categoria.name}/></div>
                        <p className="name-cat">{categoria.name}</p>
                    </Link>
                ))}
            </div>
            <button onClick={nextElement} className="next-btn btn-rigth"><i className="fas fa-chevron-right"></i></button>
        </div>
    )
}