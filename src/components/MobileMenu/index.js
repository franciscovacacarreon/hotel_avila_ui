import React, { Component } from 'react'
import { Collapse, CardBody, Card } from 'reactstrap';
import { Link } from 'react-router-dom'
import './style.css';

// Menú traducido
const menus = [
    {
        id: 1,
        title: 'Inicio',
        link: '/home',
        submenu: [
            {
                id: 11,
                title: 'Estilo de Inicio 1',
                link: '/home'
            },
            // {
            //     id: 12,
            //     title: 'Estilo de Inicio 2',
            //     link: '/home2'
            // },
            // {
            //     id: 13,
            //     title: 'Estilo de Inicio 3',
            //     link: '/home3'
            // },
        ]
    },
    {
        id: 2,
        title: 'Habitaciones',
        link: '/room',
        submenu: [
            {
                id: 21,
                title: 'Habitaciones',
                link: '/room'
            },
            {
                id: 22,
                title: 'Habitación Individual',
                link: '/room-single'
            }
        ]
    },
    // {
    //     id: 9,
    //     title: 'Destinos',
    //     link: '/destination',
    // },
    {
        id: 7,
        title: 'Páginas',
        link: '/',
        submenu: [
            {
                id: 71,
                title: 'Acerca de',
                link: '/about'
            },
            {
                id: 75,
                title: 'Preguntas Frecuentes',
                link: '/faq'
            },
            {
                id: 79,
                title: 'Error 404',
                link: '/404'
            },
            {
                id: 87,
                title: 'Tienda',
                link: '/shop'
            },
            {
                id: 88,
                title: 'Detalle de Producto',
                link: '/shop-single'
            },
            {
                id: 80,
                title: 'Iniciar Sesión',
                link: '/404'
            },
            {
                id: 81,
                title: 'Registrarse',
                link: '/signup'
            },
            {
                id: 82,
                title: 'Recuperar Contraseña',
                link: '/forgot-password'
            },
        ]
    },
    {
        id: 3,
        title: 'Servicios',
        link: '/service',
        submenu: [
            {
                id: 31,
                title: 'Servicios',
                link: '/service'
            },
            {
                id: 32,
                title: 'Detalle del Servicio',
                link: '/service-single'
            }
        ]
    },
    // {
    //     id: 5,
    //     title: 'Blog',
    //     link: '/blog',
    //     submenu: [
    //         {
    //             id: 51,
    //             title: 'Blog',
    //             link: '/blog'
    //         },
    //         {
    //             id: 52,
    //             title: 'Blog con Barra Izquierda',
    //             link: '/blog-left'
    //         },
    //         {
    //             id: 53,
    //             title: 'Blog de Ancho Completo',
    //             link: '/blog-fullwidth'
    //         },
    //         {
    //             id: 54,
    //             title: 'Entrada de Blog',
    //             link: '/blog-details'
    //         },
    //         {
    //             id: 55,
    //             title: 'Entrada con Barra Izquierda',
    //             link: '/blog-details-left'
    //         },
    //         {
    //             id: 56,
    //             title: 'Entrada de Ancho Completo',
    //             link: '/blog-details-fullwidth'
    //         },
    //     ]
    // },
    {
        id: 88,
        title: 'Contacto',
        link: '/contact',
    }
]

export default class MobileMenu extends Component {

    state = {
        isMenuShow: false,
        isOpen: 0,
    }

    // Manejador para mostrar u ocultar el menú
    menuHandler = () => {
        this.setState({
            isMenuShow: !this.state.isMenuShow
        })
    }

    // Manejador para abrir/cerrar submenús
    setIsOpen = id => () => {
        this.setState({
            isOpen: id === this.state.isOpen ? 0 : id
        })
    }

    render() {
        const { isMenuShow, isOpen } = this.state;

        const ClickHandler = () => {
            window.scrollTo(10, 0);
        }

        return (
            <div>
                <div className={`mobileMenu ${isMenuShow ? 'show' : ''}`}>
                    {/* Menú lateral para dispositivos móviles */}

                    <ul className="responsivemenu">
                        {menus.map(item => {
                            return (
                                <li key={item.id}>
                                    {item.submenu ? (
                                        <p onClick={this.setIsOpen(item.id)}>
                                            {item.title}
                                            {item.submenu && <i className="fa fa-angle-right" aria-hidden="true"></i>}
                                        </p>
                                    ) : (
                                        <Link to={item.link}>{item.title}</Link>
                                    )}

                                    {item.submenu && (
                                        <Collapse isOpen={item.id === isOpen}>
                                            <Card>
                                                <CardBody>
                                                    <ul>
                                                        {item.submenu.map(submenu => (
                                                            <li key={submenu.id}>
                                                                <Link onClick={ClickHandler} className="active" to={submenu.link}>
                                                                    {submenu.title}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </CardBody>
                                            </Card>
                                        </Collapse>
                                    )}
                                </li>
                            )
                        })}
                    </ul>
                </div>

                {/* Botón para abrir el menú */}
                <div className="showmenu" style={{ marginTop: "55px" }} onClick={this.menuHandler}>
                    <i className="fa fa-bars" aria-hidden="true"></i>
                </div>
            </div>
        )
    }
}
