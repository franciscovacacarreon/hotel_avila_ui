import React from "react";
import {Link} from 'react-router-dom'
import Pricing from '../Rcomponents/descontent/pricing'
import Review from '../Rcomponents/descontent/review'
import AddReview from '../Rcomponents/descontent/addReview'
import OtherRoom from '../Rcomponents/descontent/otherRoom'
import rmd1 from '../../../images/room/img-7.jpg'
import rmd2 from '../../../images/room/img-8.jpg'

const Description = (props) => {

    return(
        <div className="Room-details-area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="room-description">
                            <div className="room-title">
                                <h2>Descripción</h2>
                            </div>
                            <p className="p-wrap">Nuestra habitación ofrece una experiencia única de comodidad y tranquilidad. Está equipada con todo lo necesario para hacer de tu estancia un momento agradable, tanto si vienes por negocios como por placer.</p>
                            <p>La habitación está diseñada para brindarte el máximo confort. Desde la temperatura ideal gracias al aire acondicionado, hasta una variedad de amenidades pensadas para tu bienestar, como frutas frescas siempre disponibles y limpieza diaria.</p>
                            <p>Si deseas relajarte o disfrutar de una buena vista, nuestra habitación cuenta con un balcón privado. Además, tendrás acceso a servicios exclusivos como Wi-Fi gratuito, estacionamiento gratuito y un teléfono inteligente de uso gratuito para tu comodidad.</p>
                        </div>
                        <div className="room-details-service">
                            <div className="row">
                                <div className="room-details-item">
                                    <div className="row">
                                        <div className="col-md-5 col-sm-12 col-12">
                                            <div className="room-d-text">
                                                <div className="room-title">
                                                    <h2>Amenidades</h2>
                                                </div>
                                                <ul>
                                                    <li><Link to="/room-single">Refrigerador y agua fresca</Link></li>
                                                    <li><Link to="/room-single">Aire acondicionado</Link></li>
                                                    <li><Link to="/room-single">Frutas siempre disponibles</Link></li>
                                                    <li><Link to="/room-single">2 juegos de ropa de noche</Link></li>
                                                    <li><Link to="/room-single">Mesas y sillas cómodas</Link></li>
                                                    <li><Link to="/room-single">2 ascensores disponibles</Link></li>
                                                    <li><Link to="/room-single">Balcón privado con vista</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-7 col-sm-12 col-12">
                                            <div className="room-d-img">
                                                <img src={rmd1} alt=""/>
                                            </div>
                                        </div>
                                        <div className="col-md-7 col-sm-12 col-12">
                                            <div className="room-d-img">
                                                <img src={rmd2} alt=""/>
                                            </div>
                                        </div>
                                        <div className="col-md-5 col-sm-12 col-12">
                                            <div className="room-d-text2">
                                                <div className="room-title">
                                                    <h2>Servicios de la Habitación</h2>
                                                </div>
                                                <ul>
                                                    <li><Link to="/room-single">Limpieza diaria</Link></li>
                                                    <li><Link to="/room-single">Piscina exclusiva</Link></li>
                                                    <li><Link to="/room-single">Estacionamiento gratuito</Link></li>
                                                    <li><Link to="/room-single">Teléfono inteligente de uso gratuito</Link></li>
                                                    <li><Link to="/room-single">Wi-Fi gratuito</Link></li>
                                                    <li><Link to="/room-single">2 ascensores disponibles</Link></li>
                                                    <li><Link to="/room-single">Balcón con vista</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Pricing/>
                        <Review/>
                        <AddReview/>
                        <OtherRoom/>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Description;
