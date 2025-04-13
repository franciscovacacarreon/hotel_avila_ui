import React from "react";
import { Link } from 'react-router-dom';
import rm1 from '../../../../images/room/img-1.jpg';
import rm2 from '../../../../images/room/img-2.jpg';
import rm3 from '../../../../images/room/img-3.jpg';

const OtrasHabitaciones = (props) => {

    const habitaciones = [
        {
            imagenHabitacion: rm1,
            tituloHabitacion: "Habitación con vista al lago",
            tipoHabitacion: 'Habitación doble',
            descripcion: "Si vas a utilizar un pasaje de Lorem Ipsum, lo necesitas.",
            precio: "$142",
            enlace: "/room-single",
        },
        {
            imagenHabitacion: rm2,
            tituloHabitacion: "Habitación Queen con balcón",
            tipoHabitacion: 'Habitación doble',
            descripcion: "Si vas a utilizar un pasaje de Lorem Ipsum, lo necesitas.",
            precio: "$142",
            enlace: "/room-single",
        },
        {
            imagenHabitacion: rm3,
            tituloHabitacion: "Apartamento",
            tipoHabitacion: 'Habitación doble',
            descripcion: "Si vas a utilizar un pasaje de Lorem Ipsum, lo necesitas.",
            precio: "$142",
            enlace: "/room-single",
        },
    ];

    return (
        <div className="otras-habitaciones">
            <div className="seccion-habitaciones">
                <div className="container">
                    <div className="col-12">
                        <div className="titulo-habitacion">
                            <h2>Otras Habitaciones</h2>
                        </div>
                        <div className="row">
                            <div className="col col-xs-12 galeria-clasificable">
                                <div className="contenedor-galeria">
                                    {habitaciones.map((habitacion, index) => (
                                        <div className="grid" key={index}> 
                                            <div className="item-habitacion">
                                                <img src={habitacion.imagenHabitacion} alt="" className="img img-responsive"/>
                                                <div className="texto-habitacion-mostrar">
                                                    <h2>{habitacion.tituloHabitacion}</h2>
                                                </div>
                                                <div className="texto-habitacion-oculto">
                                                    <h2>{habitacion.tituloHabitacion}</h2>
                                                    <span>{habitacion.tipoHabitacion}</span>
                                                    <p>{habitacion.descripcion}</p>
                                                    <small>Desde: <span>{habitacion.precio}</span> / Noche</small>
                                                    <Link className="boton-tema" to={habitacion.enlace}>Ver disponibilidad</Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OtrasHabitaciones;
