import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div className="col col-lg-4 col-12 order-lg-1">
            <div className="service-sidebar">
                <div className="widget service-list-widget">
                    <h3>Todos los Servicios</h3>
                    <ul>
                        <li><Link onClick={ClickHandler} to="/service-single">Todos los Servicios</Link></li>
                        <li className="current"><Link onClick={ClickHandler} to="/service-single">Gestión Hotelera</Link></li>
                        <li><Link onClick={ClickHandler} to="/service-single">Planes Vacacionales</Link></li>
                        <li><Link onClick={ClickHandler} to="/service-single">Tours Internacionales</Link></li>
                        <li><Link onClick={ClickHandler} to="/service-single">Guías Turísticas</Link></li>
                        <li><Link onClick={ClickHandler} to="/service-single">Viajes y Excursiones</Link></li>
                        <li><Link onClick={ClickHandler} to="/service-single">Habitaciones del Hotel</Link></li>
                    </ul>
                </div>
                <div className="widget contact-widget">
                    <div>
                        <h4>Solicitar una Llamada</h4>
                        <h2>(591) 67540196</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
