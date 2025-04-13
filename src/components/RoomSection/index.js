import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';
import classnames from 'classnames';
import './style.css'
import {Link} from 'react-router-dom'
import rm1 from '../../images/room/img-1.jpg'
import rm2 from '../../images/room/img-2.jpg'
import rm3 from '../../images/room/img-3.jpg'
import rm4 from '../../images/room/img-9.jpg'
import rm5 from '../../images/room/img-10.jpg'
import rm6 from '../../images/room/img-11.jpg'


const RoomSection = (props) => {

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }

    const Room = [
        {
            RoomImg: rm1,
            RoomHeading: "Habitación con vista al lago",
            RoomCount: 'Habitación doble',
            Des: "Disfrute de una estancia cómoda con todas las comodidades necesarias para su relax y confort.",
            Price: "$142",
            Link: "/room-single",
        },
        {
            RoomImg: rm2,
            RoomHeading: "Habitación Queen con balcón",
            RoomCount: 'Habitación doble',
            Des: "Amplia habitación con balcón privado y vistas espectaculares, perfecta para una estancia romántica.",
            Price: "$142",
            Link: "/room-single",
        },
        {
            RoomImg: rm3,
            RoomHeading: "Apartamento",
            RoomCount: 'Habitación doble',
            Des: "Espacio amplio con cocina totalmente equipada, ideal para estancias prolongadas.",
            Price: "$142",
            Link: "/room-single",
        },
    ]

    const Room2 = [
        {
            RoomImg: rm4,
            RoomHeading: "Habitación con vista al lago",
            RoomCount: 'Habitación doble',
            Des: "Disfrute de una estancia cómoda con todas las comodidades necesarias para su relax y confort.",
            Price: "$142",
            Link: "/room-single",
        },
        {
            RoomImg: rm5,
            RoomHeading: "Habitación Queen con balcón",
            RoomCount: 'Habitación doble',
            Des: "Amplia habitación con balcón privado y vistas espectaculares, perfecta para una estancia romántica.",
            Price: "$142",
            Link: "/room-single",
        },
        {
            RoomImg: rm6,
            RoomHeading: "Apartamento",
            RoomCount: 'Habitación doble',
            Des: "Espacio amplio con cocina totalmente equipada, ideal para estancias prolongadas.",
            Price: "$142",
            Link: "/room-single",
        },
    ]

    return(
        <section className={`Room-area section-padding ${props.rClass}`}>
            <div className="Room-section">
                <div className="container">
                    <div className="col-12">
                        <div className="wpo-section-title">
                            <span>Nuestras Habitaciones</span>
                            <h2>Descubre Nuestras Habitaciones</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-xs-12 sortable-gallery">
                            <div className="gallery-filters">
                                <Nav tabs>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: activeTab === '1' })}
                                            onClick={() => { toggle('1'); }}
                                        >
                                          Clásicas
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: activeTab === '2' })}
                                            onClick={() => { toggle('2'); }}
                                        >
                                            Económicas
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: activeTab === '3' })}
                                            onClick={() => { toggle('3'); }}
                                        >
                                            Lujo
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: activeTab === '4' })}
                                            onClick={() => { toggle('4'); }}
                                        >
                                            Dobles
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: activeTab === '5' })}
                                            onClick={() => { toggle('5'); }}
                                        >
                                            Individuales
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </div>
                            <div className="gallery-container">
                                <TabContent activeTab={activeTab}>
                                    <TabPane tabId="1">
                                        {Room.map((room, rm) => (
                                            <div className="grid" key={rm}> 
                                                <div className="room-item">
                                                    <img src={room.RoomImg} alt="" className="img img-responsive"/>
                                                    <div className="room-text-show">
                                                        <h2>{room.RoomHeading}</h2>
                                                    </div>
                                                    <div className="room-text-hide">
                                                        <h2>{room.RoomHeading}</h2>
                                                        <span>{room.RoomCount}</span>
                                                        <p>{room.Des}</p>
                                                        <small>Desde: <span>{room.Price}</span> / Noche</small>
                                                        <Link className="theme-btn-s2" to={room.Link}>Consultar Disponibilidad</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </TabPane>
                                    <TabPane tabId="2">
                                        {Room2.map((room, rm) => (
                                            <div className="grid" key={rm}> 
                                                <div className="room-item">
                                                    <img src={room.RoomImg} alt="" className="img img-responsive"/>
                                                    <div className="room-text-show">
                                                        <h2>{room.RoomHeading}</h2>
                                                    </div>
                                                    <div className="room-text-hide">
                                                        <h2>{room.RoomHeading}</h2>
                                                        <span>{room.RoomCount}</span>
                                                        <p>{room.Des}</p>
                                                        <small>Desde: <span>{room.Price}</span> / Noche</small>
                                                        <Link className="theme-btn-s2" to={room.Link}>Consultar Disponibilidad</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </TabPane>
                                    <TabPane tabId="3">
                                        {Room.map((room, rm) => (
                                            <div className="grid" key={rm}> 
                                                <div className="room-item">
                                                    <img src={room.RoomImg} alt="" className="img img-responsive"/>
                                                    <div className="room-text-show">
                                                        <h2>{room.RoomHeading}</h2>
                                                    </div>
                                                    <div className="room-text-hide">
                                                        <h2>{room.RoomHeading}</h2>
                                                        <span>{room.RoomCount}</span>
                                                        <p>{room.Des}</p>
                                                        <small>Desde: <span>{room.Price}</span> / Noche</small>
                                                        <Link className="theme-btn-s2" to={room.Link}>Consultar Disponibilidad</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </TabPane>
                                    <TabPane tabId="4">
                                        {Room2.map((room, rm) => (
                                            <div className="grid" key={rm}> 
                                                <div className="room-item">
                                                    <img src={room.RoomImg} alt="" className="img img-responsive"/>
                                                    <div className="room-text-show">
                                                        <h2>{room.RoomHeading}</h2>
                                                    </div>
                                                    <div className="room-text-hide">
                                                        <h2>{room.RoomHeading}</h2>
                                                        <span>{room.RoomCount}</span>
                                                        <p>{room.Des}</p>
                                                        <small>Desde: <span>{room.Price}</span> / Noche</small>
                                                        <Link className="theme-btn-s2" to={room.Link}>Consultar Disponibilidad</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </TabPane>
                                    <TabPane tabId="5">
                                        {Room.map((room, rm) => (
                                            <div className="grid" key={rm}> 
                                                <div className="room-item">
                                                    <img src={room.RoomImg} alt="" className="img img-responsive"/>
                                                    <div className="room-text-show">
                                                        <h2>{room.RoomHeading}</h2>
                                                    </div>
                                                    <div className="room-text-hide">
                                                        <h2>{room.RoomHeading}</h2>
                                                        <span>{room.RoomCount}</span>
                                                        <p>{room.Des}</p>
                                                        <small>Desde: <span>{room.Price}</span> / Noche</small>
                                                        <Link className="theme-btn-s2" to={room.Link}>Consultar Disponibilidad</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </TabPane>
                                </TabContent>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RoomSection;