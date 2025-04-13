import React from 'react';
import ContactForm from '../ContactFrom';
import './style.css';

const Contactpage = () => {

    return(
        <div id="Contacto" className="contact-area section-padding">
            <div className="container">
                <div className="wpo-contact-info">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="info-item">
                                <div className="info-wrap">
                                    <div className="info-icon">
                                        <i className="fi flaticon-internet"></i>
                                    </div>
                                    <div className="info-text">
                                        <span>Dirección del Residencial</span>
                                    </div>
                                </div>
                                <h2>Calle 25 Norte, Residencial Ávila</h2>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="info-item">
                                <div className="info-wrap">
                                    <div className="info-icon">
                                        <i className="fi flaticon-email"></i>
                                    </div>
                                    <div className="info-text">
                                        <span>Correo Oficial</span>
                                    </div>
                                </div>
                                <h2>info@avila.com</h2>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="info-item">
                                <div className="info-wrap">
                                    <div className="info-icon">
                                        <i className="fi flaticon-null-1"></i>
                                    </div>
                                    <div className="info-text">
                                        <span>Teléfono Oficial</span>
                                    </div>
                                </div>
                                <h2>+591 256-987-239</h2>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="contact-content">
                    <h2>Envíanos un Mensaje</h2>
                    <div className="contact-form">
                        <ContactForm/>
                    </div>
                </div>
                <div className="contact-map">
                    <iframe 
                        title='mapa-contacto' 
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14108.536207239285!2d-64.859373113619!3d-17.0355250642934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sbo!4v1700000000000"
                        allowFullScreen="" 
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </div>
    );
}

export default Contactpage;
