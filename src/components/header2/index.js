import React from 'react'
import Logo from '../../images/logo.png'
import { Link } from 'react-router-dom'
import MobileMenu from '../../components/MobileMenu'
import min1 from '../../images/shop/mini-cart/img-1.jpg'
import min2 from '../../images/shop/mini-cart/img-2.jpg'
import HeaderTopbar from '../HeaderTopbar'
import './style.css'

const Header = () => {
    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div className="middle-header">
            <HeaderTopbar />
            <div className="header-style-2">
                <div className="container-fluid">
                    <div className="header-content">
                        <div className="row align-items-center">
                            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-4">
                                <div className="logo">
                                    <Link onClick={ClickHandler} to="/home" title=""><img src={Logo} alt="" /></Link>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-8 d-lg-block d-none">
                                <nav>
                                    <ul>
                                        <li><Link onClick={ClickHandler} className="active" to="/home" title="">Inicio +</Link>
                                            <ul>
                                                <li><Link onClick={ClickHandler} className="active" to="/home">Estilo de inicio 1</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link onClick={ClickHandler} to="/room" title="">Habitación +</Link>
                                            <ul>
                                                <li><Link onClick={ClickHandler} to="/room" title="">Habitación</Link></li>
                                                <li><Link onClick={ClickHandler} to="/room-single" title="">Habitación Individual</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link onClick={ClickHandler} to="/destination" title="">Destino</Link></li>
                                        <li><Link onClick={ClickHandler} to="/home" title="">Páginas +</Link>
                                            <ul>
                                                <li><Link onClick={ClickHandler} to="/about" title="">Acerca de</Link></li>
                                                <li><Link onClick={ClickHandler} to="/faq" title="">Preguntas Frecuentes</Link></li>
                                                <li><Link onClick={ClickHandler} to="/404" title="">Error 404</Link></li>
                                                <li><i className="fa fa-angle-right"></i><Link onClick={ClickHandler} to="/" title="">Tienda</Link>
                                                    <ul>
                                                        <li><Link onClick={ClickHandler} to="/shop" title="">Tienda</Link></li>
                                                        <li><Link onClick={ClickHandler} to="/shop-single" title="">Producto Individual</Link></li>
                                                    </ul>
                                                </li>
                                                <li><i className="fa fa-angle-right"></i><Link onClick={ClickHandler} to="/" title="">Página de Autenticación</Link>
                                                    <ul>
                                                        <li><Link onClick={ClickHandler} to="/login" title="">Página de Inicio de Sesión</Link></li>
                                                        <li><Link onClick={ClickHandler} to="/signup" title="">Página de Registro</Link></li>
                                                        <li><Link onClick={ClickHandler} to="/forgot-password" title="">Olvidé mi Contraseña</Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><Link onClick={ClickHandler} to="/service" title="">Servicio +</Link>
                                            <ul>
                                                <li><Link onClick={ClickHandler} to="/service" title="">Servicio</Link></li>
                                                <li><Link onClick={ClickHandler} to="/service-single" title="">Servicio Individual</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link onClick={ClickHandler} to="/blog">Blog +</Link>
                                            <ul>
                                                <li><Link onClick={ClickHandler} to="/blog">Blog</Link></li>
                                                <li><Link onClick={ClickHandler} to="/blog-left">Blog con barra lateral izquierda</Link></li>
                                                <li><Link onClick={ClickHandler} to="/blog-fullwidth">Blog de ancho completo</Link></li>
                                                <li><i className="fa fa-angle-right"></i><Link onClick={ClickHandler} to="/blog-details" title="">Detalles del Blog</Link>
                                                    <ul>
                                                        <li><Link onClick={ClickHandler} to="/blog-details" title="">Entrada Individual del Blog</Link></li>
                                                        <li><Link onClick={ClickHandler} to="/blog-details-left" title="">Entrada Individual con barra lateral izquierda</Link></li>
                                                        <li><Link onClick={ClickHandler} to="/blog-details-fullwidth" title="">Entrada Individual de ancho completo</Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><Link onClick={ClickHandler} to="/contact" title="">Contacto</Link></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="col-xl-3 get-q">
                                <div className="get-quote">
                                    <Link to="/contact"><i className="fi flaticon-support-1"></i>Llama: +0123-456-789</Link>
                                </div>
                            </div>
                            <div className="col-xl-1 col-lg-1 col-md-6 col-sm-6 col-6">
                                <div className="contact">
                                    <div className="cart-search-contact">
                                        <div className="header-search-form-wrapper">
                                            <button className="search-toggle-btn"><i className="fi flaticon-search"></i></button>
                                            <div className="header-search-form">
                                                <form onSubmit={SubmitHandler}>
                                                    <div>
                                                        <input type="text" className="form-control" placeholder="Buscar aquí..." />
                                                        <button type="submit"><i className="ti-search"></i></button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="mini-cart">
                                            <button className="cart-toggle-btn"> <i className="fi flaticon-shopping-cart"></i> <span className="cart-count">02</span></button>
                                            <div className="mini-cart-content">
                                                <div className="mini-cart-items">
                                                    <div className="mini-cart-item clearfix">
                                                        <div className="mini-cart-item-image">
                                                            <Link onClick={ClickHandler} to="/shop"><img src={min1} alt="" /></Link>
                                                        </div>
                                                        <div className="mini-cart-item-des">
                                                            <Link onClick={ClickHandler} to="/shop">Sudadera con cremallera</Link>
                                                            <span className="mini-cart-item-price">$20.15</span>
                                                            <span className="mini-cart-item-quantity">x 1</span>
                                                        </div>
                                                    </div>
                                                    <div className="mini-cart-item clearfix">
                                                        <div className="mini-cart-item-image">
                                                            <Link onClick={ClickHandler} to="/shop"><img src={min2} alt="" /></Link>
                                                        </div>
                                                        <div className="mini-cart-item-des">
                                                            <Link onClick={ClickHandler} to="/shop">Camiseta Ninja</Link>
                                                            <span className="mini-cart-item-price">$13.25</span>
                                                            <span className="mini-cart-item-quantity">x 2</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mini-cart-action clearfix">
                                                    <span className="mini-checkout-price">$215.14</span>
                                                    <Link onClick={ClickHandler} to="/shop" className="view-cart-btn theme-btn">Ver Carrito</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-2 col-2">
                                <MobileMenu />
                            </div>
                        </div>

                        <div className="clearfix"></div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header;
