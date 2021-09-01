import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CarrouselHome } from "./CarrouselHome";
import { Promociones } from "./PromocionesHome";
import { Routes } from "../../routes";

import Hamburguesa from '../../assets/pictures/hamburguesas.jpg';
import Delivery from '../../assets/pictures/delivery.png';

export function Home(){
    
    const SlideShow = ()=>{
        const slides = [
            {image: "https://wallpaperaccess.com/full/825322.jpg"},
            {image: "https://images.unsplash.com/photo-1610614991969-ceeb293e7ff5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGZhc3QlMjBmb29kfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
            {image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGZhc3QlMjBmb29kfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
            {image: "https://images.unsplash.com/photo-1536255187577-810d29780d1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"},
        ]
        const [ current, setCurrent ] = useState(0);
        const length = slides.length;

        const nextMove = () => {
            setCurrent(current === length - 1 ? 0 : current + 1);
        }

        const prevMove = () => {
            setCurrent(current === 0 ? length - 1 : current - 1);
        }

        const MoveTouch = (index) => {
            setCurrent(index);
        }

        useEffect(()=>{
            const timer = setTimeout(()=>{
                setCurrent(current === length -1 ? 0 : current + 1);
            }, 8000);
            return ()=>{clearTimeout(timer)}
        }, [setCurrent, current, length])

        //controla que se haga slide si no hay diapositivas que mostrar
        if(!Array.isArray(slides) || slides.length <= 0){
            return null;
        }

        return(
            <section className="container-slider">
                <button className="btn-slider-previous" onClick={prevMove} ><i className="fal fa-chevron-left"></i></button>
                <button className="btn-slider-next" onClick={nextMove} ><i className="fal fa-chevron-right"></i></button>
                <div className="size-slider">
                    {slides.map((slide, index) => {
                        return(
                            <button 
                                key={index} 
                                className={`icon ${index === current ? "active" : ""}`}
                                onClick={() => MoveTouch(index)}
                            ></button>
                        )
                    })}
                </div>
                <div className="txt-slider">
                    <p className="hero__subtitulo">¡Bienvenido al Portal!</p>
                    <h2 className="hero__titulo">La Parrilla de<p className="hero__titulo grand__text">Luchin</p></h2>
                    <p className="hero__subtitulo text">Nos especializamos en carnes preparadas al carbón contamos con personal capacitado en atención al cliente para brindarles el mejor servicio a nuestros clientes</p>                
                </div>
                <ul className="slider-pictures">
                    {slides.map((slide, index) => {
                        return(
                            <li key={index} className={`slide ${index === current ? "active" : ""}`}>
                                {index === current && (
                                    <img src={slide.image} alt="slideshow la parrilla de luchin"/>
                                )}
                            </li>
                        )
                    })}
                </ul>
            </section>
        );
    }


    return(
        <>                           
            <SlideShow />
            <section className="promo-general">
                <div className="head_main_section pdd_border">
                    <h1>Promociones</h1>
                </div>
                <div className="contain-promos">
                    <Promociones/>
                </div>
                <div className="more_promo">
                    <Link to={Routes.Promociones.path} className="btn_more_promo">Ver más Promociones</Link>
                </div>
            </section>

            <section className="aside-delivery">
                <div className="over">
                    <div className="content-infor">
                        <div className="theme">
                            <hr/>
                            <p>Servicio Delivery</p>
                            <hr/>
                        </div>
                        <div className="detalle_delivery">
                            <p className="detalle-sms">Envíos solo <span>Montecristi</span></p>
                            <p className="price">$3<span>00</span></p>
                            <img src={Delivery} alt="delivery solo montecristi manabi ecuador"/>
                        </div>
                    </div>
                    <div className="public-aside"><img src={Hamburguesa} alt="fondo delivery"/></div>
                </div>
            </section>

            <section className="menu__category">
                <div className="head_main_section pdd_border section-topic">
                    <h1>Nuestro Menú</h1>
                </div>
                <CarrouselHome/>                
            </section>

            <section className="location-main">
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d63826.51149409486!2d-80.69629358598279!3d-1.0432379873241444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x902be555b3991ab1%3A0x6900289d39a0fe14!2sla%20parrilla%20de%20Luchin%20montecristi!3m2!1d-1.043324!2d-80.6612741!5e0!3m2!1ses!2sec!4v1624141824849!5m2!1ses!2sec"
                        height="450" allowFullScreen="" loading="lazy" title="Direccion La parrilla de luchin"></iframe>
                </div>
            </section>
        </>
    )
}