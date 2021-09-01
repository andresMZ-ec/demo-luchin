import React from'react';
import '../../assets/css/footer.css';

import LogoBlanco from '../../assets/pictures/brand/luchin-blanco-concept.svg';
import { inforFooter } from '../../jsonDatabase/informationContact';

export function Footer(){
    const { descripcion, direccion, contacto, horario, socialMedia } = inforFooter;

    return(
        <footer>
            <div className="grid-ftt">
                <div className="box column_grid-ftt">
                    <div className="content">
                        <img src={LogoBlanco} alt="Logo Parrilla de Luchin"/> 
                        <p className="text">{descripcion}</p>
                    </div>
                </div>
                <div className="box column_grid-ftt">
                    <div className="content">
                        <h2 className="name__categoria">Dirección:</h2>
                        <div>
                            <p className="text">{direccion.calle}</p>
                            <p className="text"><span className="weigth">{direccion.ciudad}, {direccion.provincia} - {direccion.pais}</span></p>
                        </div>

                        <h2 className="name__categoria">Contáctanos:</h2>
                        <div>
                            <p className="text"><span className="weigth">WhatsApp:  </span><a href={`tel:${contacto.telefono}`}>{contacto.telefono}</a></p>
                        </div>
                        <div className="email">
                            <p className="text"><span className="weigth">Correo:  </span><a href={`mailto:${contacto.email}`}>{contacto.email}</a></p>
                        </div>
                    </div>
                </div>
                <div className="box column_grid-ftt">
                    <div className="content">
                        <h2 className="name__categoria">Horarios de Atención:</h2>
                        <div>
                            <p className="text"><span className="weigth">{horario.dias}: </span>{horario.horas}</p>
                        </div>
                        <div className="social">
                            <a href={socialMedia.facebook}><i className="fab fa-facebook-f"></i></a>
                            <a href={socialMedia.instagram}><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="legend__ftt">
                    <p className="credit"><span className="detalle">Derechos Reservados <i className="fal fa-registered"></i> 2021</span> La Parrilla de Luchín</p>
                    <p className="credit"><span className="detalle">Developed and Designed for</span> Vinculación Fase 1</p>
                </div>
            </div>
        </footer>
    );
}