import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../images/logo-residencial.png'
import ft1 from '../../images/footer/img-1.jpg'
import ft2 from '../../images/footer/img-2.jpg'
import './style.css'

const Footer = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    return (
        <footer className="wpo-site-footer">
            <div className="wpo-upper-footer">
                <div className="wpo-footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12 custom-grid">
                                <div className="logo widget-title d-flex align-items-center">
                                    <img src={Logo} alt="logo" />
                                    <span className="logo-text" style={{color: "white"}}>Avila</span>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12 custom-grid">
                                <ul>
                                    <li><Link onClick={ClickHandler} to="/"><i className="ti-facebook"></i></Link></li>
                                    <li><Link onClick={ClickHandler} to="/"><i className="ti-twitter-alt"></i></Link></li>
                                    <li><Link onClick={ClickHandler} to="/"><i className="ti-instagram"></i></Link></li>
                                    <li><Link onClick={ClickHandler} to="/"><i className="ti-google"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-middle">
                    <div className="container">
                        <div className="row">
                            <div className="col col-lg-4 col-md-6 col-sm-12 col-12">
                                <div className="widget market-widget wpo-service-link-widget">
                                    <div className="widget-title">
                                        <h3>Contacto</h3>
                                    </div>
                                    <p>Tienda en línea con muchas funciones geniales y exclusivas</p>
                                    <div className="contact-ft">
                                        <ul>
                                            <li><i className="fi ti-location-pin"></i>Calle Punata Frente a Rokola "Los Tajibos"</li>
                                            <li><i className="fi ti-mobile"></i>+59167540196</li>
                                            <li><i className="fi flaticon-email"></i>varaus@gmail.com</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                                <div className="widget link-widget resource-widget">
                                    <div className="widget-title">
                                        <h3>Destino</h3>
                                    </div>
                                    <div className="news-wrap">
                                        <div className="news-img">
                                            <img src={ft1} alt="" />
                                        </div>
                                        <div className="news-text">
                                            <h3>París, Francia</h3>
                                            <span>11 Jun 2020 - 22 Jun 2020</span>
                                            <h2>$835</h2>
                                        </div>
                                    </div>
                                    <div className="news-wrap">
                                        <div className="news-img">
                                            <img src={ft2} alt="" />
                                        </div>
                                        <div className="news-text">
                                            <h3>San Francisco</h3>
                                            <span>11 Jun 2020 - 22 Jun 2020</span>
                                            <h2>$835</h2>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            <div className="col col-lg-4 col-md-6 col-sm-12 col-12">
                                <div className="widget link-widget">
                                    <div className="widget-title">
                                        <h3>Enlaces Útiles</h3>
                                    </div>
                                    <ul>
                                        <li><Link onClick={ClickHandler} to="/about">Sobre Nosotros</Link></li>
                                        <li><Link onClick={ClickHandler} to="/room">Nuestras Ofertas</Link></li>
                                        <li><Link onClick={ClickHandler} to="/service">Cómo nos expandimos</Link></li>
                                        <li><Link onClick={ClickHandler} to="/contact">Contáctanos</Link></li>
                                        <li><Link onClick={ClickHandler} to="/service-single">Nuestro Evento</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col col-lg-4 col-md-6 col-sm-12 col-12">
                                <div className="widget newsletter-widget">
                                    <div className="widget-title">
                                        <h3>Boletín</h3>
                                    </div>
                                    <form onSubmit={SubmitHandler}>
                                        <div className="input-1">
                                            <input type="email" className="form-control" placeholder="Dirección de correo *" required="" />
                                        </div>
                                        <div className="submit clearfix">
                                            <button type="submit">Suscribirse<i className="ti-angle-right"></i></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-6 col-md-6 col-12">
                            <div className="term">
                                <ul>
                                    <li><Link onClick={ClickHandler} to="/">Política de Privacidad</Link></li>
                                    <li><Link onClick={ClickHandler} to="/">Términos y Condiciones</Link></li>
                                    <li><Link onClick={ClickHandler} to="/">Cookies</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-6 col-md-6 col-12">
                            <p className="copyright">&copy; 2025 IntiCode. Todos los derechos reservados</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
