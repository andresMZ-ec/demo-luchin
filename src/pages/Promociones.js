import { Fragment } from "react";
import '../assets/css/promociones.css'
import BannerPromociones from '../assets/pictures/copia.jpg';

export function Promociones() {
    const promocion = [
        {
            name: 'Hamburguesa rellena',
            picture: "https://www.makro.es/-/media/Project/MCW/ES_Makro/Info-y-servicios/productos/Carnes/Hamburguesas/cabecera-hamburguesas.jpg?w=1416&hash=9AE7DA1AE41B107788E039E09A664769",
            price_des: '$9.99',
            price: '$10.99',
            descripcion: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia consequuntur iste, repellendus enim in, sequi eos atque tempore laborum molestiae voluptatum aspernatur accusamus? Laudantium pariatur necessitatibus quam quod illum quasi.'
        },
        {
            name: 'Hamburguesa pollo',
            picture: "https://www.makro.es/-/media/Project/MCW/ES_Makro/Info-y-servicios/productos/Carnes/Hamburguesas/cabecera-hamburguesas.jpg?w=1416&hash=9AE7DA1AE41B107788E039E09A664769",
            price_des: '$9.99',
            price: '$10.99',
            descripcion: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia consequuntur iste, repellendus enim in, sequi eos atque tempore laborum molestiae voluptatum aspernatur accusamus? Laudantium pariatur necessitatibus quam quod illum quasi.'
        },
        {
            name: 'Hamburguesa triple pack',
            picture: "https://www.makro.es/-/media/Project/MCW/ES_Makro/Info-y-servicios/productos/Carnes/Hamburguesas/cabecera-hamburguesas.jpg?w=1416&hash=9AE7DA1AE41B107788E039E09A664769",
            price_des: '$9.99',
            price: '$10.99',
            descripcion: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia consequuntur iste, repellendus enim in, sequi eos atque tempore laborum molestiae voluptatum aspernatur accusamus? Laudantium pariatur necessitatibus quam quod illum quasi.'

        },
        {
            name: 'Hamburguesa Doble',
            picture: "https://www.makro.es/-/media/Project/MCW/ES_Makro/Info-y-servicios/productos/Carnes/Hamburguesas/cabecera-hamburguesas.jpg?w=1416&hash=9AE7DA1AE41B107788E039E09A664769",
            price_des: '$9.99',
            price: '$10.99',
            descripcion: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia consequuntur iste, repellendus enim in, sequi eos atque tempore laborum molestiae voluptatum aspernatur accusamus? Laudantium pariatur necessitatibus quam quod illum quasi.'

        },
        {
            name: 'Hamburguesa sencilla',
            picture: "https://www.makro.es/-/media/Project/MCW/ES_Makro/Info-y-servicios/productos/Carnes/Hamburguesas/cabecera-hamburguesas.jpg?w=1416&hash=9AE7DA1AE41B107788E039E09A664769",
            price_des: '$9.99',
            price: '$10.99',
            descripcion: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia consequuntur iste, repellendus enim in, sequi eos atque tempore laborum molestiae voluptatum aspernatur accusamus? Laudantium pariatur necessitatibus quam quod illum quasi.'

        }

    ]
    return (
        <Fragment>
            <div>
                <div className="main-banner-out">
                    <div className="main-banner-inner">
                        <div className="main-banner-img">
                            <img src={BannerPromociones} alt="Nuestras promociones mas recientes" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="head_main_section pdd_border">
                <h1>Promociones</h1>
            </div>            
            <section className="section-box-prom">
                <div className="contenedor-promox">
                    <div className="caja_columna">
                        {promocion.map((promocion, index) => (
                            <div key={index} className="caja">
                                <img src={promocion.picture} alt="Hamburguesa" />
                                <div className="detalle-product">
                                    <p className="name-producto">{promocion.name}</p>
                                    <p className="price"><span className="price-new">{promocion.price_des}</span><span><s>{promocion.price}</s></span></p>
                                    <p className="descripcion">{promocion.descripcion}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </Fragment>
    )
}
