import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './style.css';

const SearchSection = (props) => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [adults, setAdults] = useState(2);
    const [children, setChildren] = useState(0);

    const SubmitHandler = (e) => {
        e.preventDefault();
        // Aquí puedes manejar el envío del formulario
        console.log({ startDate, endDate, adults, children });
    }

    return (
        <div className={`wpo-select-section ${props.selectClass}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="wpo-select-wrap">
                            <div className="wpo-select-area">
                                <form onSubmit={SubmitHandler} className="search-form">
                                    {/* Fecha de Entrada */}
                                    <div className="form-group select-sub">
                                        <label>
                                            <i className="fi flaticon-calendar"></i> Entrada
                                        </label>
                                        <div className="date-picker-container">
                                            <DatePicker 
                                                selected={startDate} 
                                                onChange={(date) => setStartDate(date)} 
                                                minDate={new Date()}
                                                className="form-control"
                                                dateFormat="dd/MM/yyyy"
                                                placeholderText="Seleccione fecha"
                                            />
                                            <span className="calendar-icon ti-angle-down"></span>
                                        </div>
                                    </div>

                                    {/* Fecha de Salida */}
                                    <div className="form-group select-sub">
                                        <label>
                                            <i className="fi flaticon-calendar"></i> Salida
                                        </label>
                                        <div className="date-picker-container">
                                            <DatePicker 
                                                selected={endDate} 
                                                onChange={(date) => setEndDate(date)} 
                                                minDate={startDate}
                                                className="form-control"
                                                dateFormat="dd/MM/yyyy"
                                                placeholderText="Seleccione fecha"
                                            />
                                            <span className="calendar-icon ti-angle-down"></span>
                                        </div>
                                    </div>

                                    {/* Adultos */}
                                    <div className="form-group select-sub">
                                        <label>
                                            <i className="fi flaticon-user"></i> Adultos
                                        </label>
                                        <select 
                                            className="form-select" 
                                            value={adults}
                                            onChange={(e) => setAdults(parseInt(e.target.value))}
                                        >
                                            {[1, 2, 3, 4, 5, 6].map(num => (
                                                <option key={`adult-${num}`} value={num}>{num}</option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Niños */}
                                    <div className="form-group select-sub">
                                        <label>
                                            <i className="fi flaticon-user"></i> Niños
                                        </label>
                                        <select 
                                            className="form-select" 
                                            value={children}
                                            onChange={(e) => setChildren(parseInt(e.target.value))}
                                        >
                                            {[0, 1, 2, 3, 4, 5, 6].map(num => (
                                                <option key={`child-${num}`} value={num}>{num}</option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Botón de búsqueda */}
                                    <div className="form-group select-sub submit-btn">
                                        <button className="theme-btn-s2" type="submit">
                                            Disponibilidad
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchSection;