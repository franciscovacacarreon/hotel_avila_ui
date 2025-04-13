import React from 'react';
import { Link } from 'react-router-dom';
import dsn1 from '../../images/destination/img-1.jpg';
import dsn2 from '../../images/destination/img-2.jpg';
import dsn3 from '../../images/destination/img-3.jpg';
import dsn4 from '../../images/destination/img-4.jpg';

import './style.css';

const Destination = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div className="destination-area section-padding">
            <div className="container">
                <div className="row">
                    {/* Texto de introducción */}
                    <div className="col-lg-4">
                        <div className="destination-text">
                            <div className="wpo-section-title">
                                <span>Destinos Populares</span>
                                <h2>Elige tu próximo destino</h2>
                            </div>
                            <p>
                                Explora lugares únicos y vive experiencias inolvidables. Desde ciudades icónicas hasta
                                paraísos escondidos, tenemos el destino ideal para cada tipo de viajero. Atrévete a descubrir
                                el mundo con nosotros.
                            </p>
                            <div className="btns">
                                <Link onClick={ClickHandler} to="/about" className="theme-btn-s2">Descubre Más</Link>
                            </div>
                        </div>
                    </div>

                    {/* Tarjetas de destinos */}
                    <div className="col-lg-8">
                        <div className="destination-wrap">
                            <div className="row">
                                <div className="col-md-6 col-sm-6 custom-grid">
                                    <div className="destination-left">
                                        {/* París */}
                                        <div className="destination-item">
                                            <div className="destination-img">
                                                <img src={dsn1} alt="París, Francia" />
                                            </div>
                                            <div className="destination-content">
                                                <div className="content-left">
                                                    <h5><Link onClick={ClickHandler} to="/room-single">París, Francia</Link></h5>
                                                    <small>11 Jun 2025 - 22 Jun 2025</small>
                                                </div>
                                                <div className="content-right">
                                                    <h5>$835</h5>
                                                    <span>Por día</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* San Francisco */}
                                        <div className="destination-item">
                                            <div className="destination-img">
                                                <img src={dsn2} alt="San Francisco, EE.UU." />
                                            </div>
                                            <div className="destination-content">
                                                <div className="content-left">
                                                    <h5><Link onClick={ClickHandler} to="/room-single">San Francisco</Link></h5>
                                                    <small>11 Jun 2025 - 22 Jun 2025</small>
                                                </div>
                                                <div className="content-right">
                                                    <h5>$750</h5>
                                                    <span>Por día</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 col-sm-6 custom-grid">
                                    <div className="destination-right">
                                        {/* Emiratos Árabes */}
                                        <div className="destination-item">
                                            <div className="destination-img">
                                                <img src={dsn3} alt="Emiratos Árabes Unidos" />
                                            </div>
                                            <div className="destination-content">
                                                <div className="content-left">
                                                    <h5><Link onClick={ClickHandler} to="/room-single">Emiratos Árabes</Link></h5>
                                                    <small>11 Jun 2025 - 22 Jun 2025</small>
                                                </div>
                                                <div className="content-right">
                                                    <h5>$750</h5>
                                                    <span>Por día</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Singapur */}
                                        <div className="destination-item">
                                            <div className="destination-img">
                                                <img src={dsn4} alt="Singapur" />
                                            </div>
                                            <div className="destination-content">
                                                <div className="content-left">
                                                    <h5><Link onClick={ClickHandler} to="/room-single">Singapur</Link></h5>
                                                    <small>11 Jun 2025 - 22 Jun 2025</small>
                                                </div>
                                                <div className="content-right">
                                                    <h5>$550</h5>
                                                    <span>Por día</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Destination;
