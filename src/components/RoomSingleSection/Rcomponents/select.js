import React from "react";
import "react-datepicker/dist/react-datepicker.css";

const SearchSection = (props) => {
    const submitHandler = (e) =>{
        e.preventDefault()
       }

    return(
        <div className="wpo-select-section-3">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="wpo-select-wrap">
                            <div className="wpo-select-area">
                                <form onSubmit={submitHandler} className="clearfix">
                                    <div className="select-sub">
                                        <span>CAMAS</span>
                                        <h2>1 Cama doble</h2>
                                    </div>
                                    <div className="select-sub">
                                        <span>TAMAÑO</span>
                                        <h2>870 pies cuadrados / 132 metros cuadrados</h2>
                                    </div>
                                    <div className="select-sub">
                                        <span>OCUPACIÓN</span>
                                        <h2>2 adultos (1 niño)</h2>
                                    </div>
                                    <div className="select-sub">
                                        <span>Baño</span>
                                        <h2>Baño con ducha</h2>
                                    </div>
                                    <div className="select-sub">
                                        <h5>Precio <span>$250</span> / Noche</h5>
                                        <button className="theme-btn-s2" type="submit">Ver Disponibilidad</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchSection;
