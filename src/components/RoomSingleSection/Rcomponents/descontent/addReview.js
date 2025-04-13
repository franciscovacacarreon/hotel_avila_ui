import React from "react";
import {Link} from 'react-router-dom'

const AddReview = (props) => {

   const submitHandler = (e) =>{
    e.preventDefault()
   }

    return(
        <div className="add-review">
        <div className="room-title">
            <h2>Agregar Reseña</h2>
        </div>
        <div className="wpo-blog-single-section">
            <div className="review-text">
                <div className="r-title">
                    <ul>
                        <li><Link to="/room-single"><i className="fi flaticon-star-1"></i></Link></li>
                        <li><Link to="/room-single"><i className="fi flaticon-star-1"></i></Link></li>
                        <li><Link to="/room-single"><i className="fi flaticon-star-1"></i></Link></li>
                        <li><Link to="/room-single"><i className="fi flaticon-star-1"></i></Link></li>
                        <li><Link to="/room-single"><i className="fi flaticon-star-1"></i></Link></li>
                    </ul>
                </div>
            </div>
            <div className="review-add">
                <div className="comment-respond">
                    <form onSubmit={submitHandler} method="post" id="commentform" className="comment-form">
                        <div className="form-inputs">
                            <input placeholder="Tu Nombre*" type="text"/>
                            <input placeholder="Tu Correo Electrónico*" type="email"/>
                        </div>
                        <div className="form-textarea">
                            <textarea id="comment" placeholder="Tu Reseña"></textarea>
                        </div>
                        <div className="form-check">
                            <div className="shipp pb">
                                <input type="checkbox" id="c2" name="cc"/>
                                <label htmlFor="c2"><span></span>Guardar mi nombre, correo electrónico y sitio web en este navegador para la próxima vez que comente.</label>
                            </div>
                        </div>
                        <div className="form-submit">
                            <input id="submit" value="Enviar Ahora" type="submit"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}

export default AddReview;
