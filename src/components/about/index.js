import React from 'react';
import { Link } from 'react-router-dom';
import ab1 from '../../images/about/about.png';
import './style.css';

const About = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div className="wpo-about-area section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7 col-md-12 col-sm-12">
                        <div className="wpo-about-img">
                            <img src={ab1} alt="Imagen sobre nosotros" />
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-12 col-sm-12">
                        <div className="wpo-about-text">
                            <div className="wpo-section-title">
                                <span>Sobre Nosotros</span>
                                <h2>El lugar ideal <br /> para relajarte</h2>
                            </div>
                            <p>
                                Somos un espacio pensado para brindarte descanso, comodidad y una experiencia única. 
                                Con instalaciones modernas y un ambiente acogedor, te ofrecemos el equilibrio perfecto 
                                entre tranquilidad y confort. Ya sea que viajes por placer o negocios, aquí encontrarás todo lo que necesitas.
                            </p>
                            <div className="btns">
                                <Link onClick={ClickHandler} to="/about" className="theme-btn-s2">Conoce más</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
