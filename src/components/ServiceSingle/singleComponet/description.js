import React from 'react'
import dimg from '../../../images/service-single/img-1.jpg'

const Description = (props) => {
    return (
        <div className="service-single-des">
            <div className="service-single-img">
                <img src={dimg} alt="Imagen del hotel" />
            </div>
            <h2>Hotel & Residencial Avila</h2>
            <p>En el Hotel & Residencial Varaus, ofrecemos una experiencia única pensada para tu comodidad y descanso. Nuestro compromiso es brindarte un servicio de alta calidad en un ambiente acogedor y moderno.</p>
            <p>Disfruta de nuestras cómodas habitaciones, atención personalizada y una variedad de servicios diseñados para que tu estancia sea inolvidable. Ya sea por negocios o placer, en Varaus te sentirás como en casa.</p>                   
        </div>
    )
}

export default Description;
