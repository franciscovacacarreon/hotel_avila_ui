import React, { Component } from "react";
import Slider from "react-slick";
import {Link} from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css'


class Hero extends Component {
    render() {
        var settings = {
            dots: true,
            arrows: true,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2500,
            fade: true
        };
        return (
            <section className={`hero ${this.props.heroClass}`}>
                <div className="hero-slider">
                    <Slider {...settings}>
                        <div className="slide">
                            <div className="slide-inner" style={{ backgroundImage: `url(${this.props.heroImg1})` }}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col col-lg-8 col-md-12 col-12 slide-caption">
                                            <div className="slide-title">
                                                <h2>Hotel & Resort Avila</h2>
                                            </div>
                                            <div className="slide-subtitle">
                                                <p>¡Haz tu vida mejor y más brillante! ¡Debes viajar con nosotros!</p>
                                            </div>
                                            <div className="btns">
                                                <Link to="/room" className="theme-btn">Reservar Habitación</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slide">
                            <div className="slide-inner" style={{ backgroundImage: `url(${this.props.heroImg2})` }}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col col-lg-8 col-md-12 col-12 slide-caption">
                                            <div className="slide-title">
                                                <h2>Hotel & Resort Varaus</h2>
                                            </div>
                                            <div className="slide-subtitle">
                                                <p>Experiencias inolvidables en el corazón de la naturaleza</p>
                                            </div>
                                            <div className="btns">
                                                <Link to="/room" className="theme-btn">Reservar Ahora</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slide">
                            <div className="slide-inner" style={{ backgroundImage: `url(${this.props.heroImg3})` }}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col col-lg-8 col-md-12 col-12 slide-caption">
                                            <div className="slide-title">
                                                <h2>Hotel & Resort Varaus</h2>
                                            </div>
                                            <div className="slide-subtitle">
                                                <p>Lujo y comodidad en un entorno paradisíaco</p>
                                            </div>
                                            <div className="btns">
                                                <Link to="/room" className="theme-btn">Ver Habitaciones</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
        );
    }
}
export default Hero;