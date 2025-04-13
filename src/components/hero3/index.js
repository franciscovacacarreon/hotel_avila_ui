import React from 'react'
import { Link } from 'react-router-dom'
import shape from '../../images/slider/hero-shape.png'

import './style.css'

const Hero3 = (props) => {
    return (
        <section className="hero hero-style-3">
            <div className="hero-slider">
                <div className="slide">
                    <div className="container">
                        <div className="row">
                            <div className="col col-lg-6 col-md-12 col-sm-12 col-12 slide-caption">
                                <div className="slide-title">
                                    <h2>Hotel & Residencial Varaus</h2>
                                </div>
                                <div className="slide-subtitle">
                                    <p>¡Haz tu vida más cómoda y placentera! ¡Viaja con nosotros!</p>
                                </div>
                                <div className="btns">
                                    <Link to="/room" className="theme-btn-s2">Reservar una Habitación</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hero-shape">
                        <img src={shape} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero3;
