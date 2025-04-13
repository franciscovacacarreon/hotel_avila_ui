import React from 'react'
import { Link } from 'react-router-dom'

const WhyChoose = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const serviceWrap = [
        {
            sIcon: 'fi flaticon-tray',
            title: "Comida Deliciosa",
            des: 'Disfruta de una exquisita variedad de platos preparados por nuestros chefs con ingredientes frescos y de calidad.',
            link: "/service-single"
        },
        {
            sIcon: 'fi flaticon-pool',
            title: "Piscina",
            des: 'Relájate y refréscate en nuestra piscina, perfecta para disfrutar de momentos tranquilos o en familia.',
            link: "/service-single"
        },
        {
            sIcon: 'fi flaticon-bowling',
            title: "Sala de Juegos",
            des: 'Diversión garantizada con nuestra sala de juegos equipada para todas las edades.',
            link: "/service-single"
        },
    ]

    return (
        <div className="why-choose-section">
            <h3>¿Por Qué Elegir Este Servicio?</h3>
            <div className="feature-grids clearfix">
                {serviceWrap.map((service, sev) => (
                    <div className="grid" key={sev}>
                        <div className="icon">
                            <i className={service.sIcon}></i>
                        </div>
                        <div className="hover-icon">
                            <i className={service.sIcon}></i>
                        </div>
                        <h3><Link onClick={ClickHandler} to={service.link}>{service.title}</Link></h3>
                        <p>{service.des}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WhyChoose;
