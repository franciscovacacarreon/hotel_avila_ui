import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Service = (props) => {

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
    }
      
    const serviceWrap = [
        {
           sIcon:'fi flaticon-tray',
           title:"Comida Deliciosa",
           des:'Disfrute de una variedad de platos nacionales e internacionales preparados con ingredientes frescos.', 
           link:"/service-single"
        },
        {
           sIcon:'fi flaticon-pool',
           title:"Piscina",
           des:'Relájese y disfrute del sol en nuestra piscina al aire libre, ideal para toda la familia.',           
           link:"/service-single"
        },
        {
           sIcon:'fi flaticon-herbal',
           title:"Spa y Masajes",
           des:'Ofrecemos tratamientos de relajación, masajes y servicios de spa para su bienestar.',
           link:"/service-single"
        },
        {
           sIcon:'fi flaticon-bowling',
           title:"Sala de Juegos",
           des:'Entretenimiento para grandes y pequeños con juegos de mesa, consolas y más.',
           link:"/service-single"
        },
        {
           sIcon:'fi flaticon-taxi',
           title:"Transporte al Aeropuerto",
           des:'Ofrecemos servicio de taxi desde y hacia el aeropuerto para su comodidad.',
           link:"/service-single"
        },
        {
           sIcon:'fi flaticon-bowling',
           title:"Desayuno Incluido",
           des:'Disfrute de un delicioso desayuno continental incluido en su estancia.',
           link:"/service-single"
        },
    ]

    return(
        <div className="service-area section-padding">
            <div className="container">
                <div className="col-12">
                    <div className="wpo-section-title">
                        <span>Nuestros Servicios</span>
                        <h2>¿Qué Ofrecemos Para Usted?</h2>
                    </div>
                </div>
                <div className="row">
                    {serviceWrap.map((service, sev) => (
                        <div className="col col-lg-4 col-md-6 custom-grid col-12" key={sev}>
                            <div className="service-item">
                                <div className="service-icon">
                                    <i className={service.sIcon}></i>
                                </div>
                                <div className="service-text">
                                    <h2><Link onClick={ClickHandler} to={service.link}>{service.title}</Link></h2>
                                    <p>{service.des}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Service;
