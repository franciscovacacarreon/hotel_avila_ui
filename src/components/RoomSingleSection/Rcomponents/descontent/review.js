import React from "react";
import rmd1 from '../../../../images/room/r1.jpg'
import rmd2 from '../../../../images/room/r2.jpg'

const Review = (props) => {

    return(
        <div className="room-review">
            <div className="room-title">
                <h2>Reseñas de la habitación</h2>
            </div>
            <div className="review-item">
                <div className="review-img">
                    <img src={rmd1} alt=""/>
                </div>
                <div className="review-text">
                    <div className="r-title">
                        <h2>María Watson</h2>
                        <ul>
                            <li><i className="fi flaticon-star"></i></li>
                            <li><i className="fi flaticon-star"></i></li>
                            <li><i className="fi flaticon-star"></i></li>
                            <li><i className="fi flaticon-star"></i></li>
                            <li><i className="fi flaticon-star"></i></li>
                        </ul>
                    </div>
                    <p>La habitación fue increíble. El servicio fue excelente, el lugar estaba muy limpio y el ambiente era acogedor. Sin duda, volvería a quedarme aquí.</p>
                </div>
            </div>
            <div className="review-item">
                <div className="review-img">
                    <img src={rmd2} alt=""/>
                </div>
                <div className="review-text">
                    <div className="r-title">
                        <h2>Lily Havenly</h2>
                        <ul>
                            <li><i className="fi flaticon-star"></i></li>
                            <li><i className="fi flaticon-star"></i></li>
                            <li><i className="fi flaticon-star"></i></li>
                            <li><i className="fi flaticon-star"></i></li>
                            <li><i className="fi flaticon-star"></i></li>
                        </ul>
                    </div>
                    <p>El lugar tiene todo lo que necesitas para una estancia cómoda. El personal fue amable y la habitación estuvo a la altura de nuestras expectativas. Muy recomendable.</p>
                </div>
            </div>
     </div>
    )
}

export default Review;
