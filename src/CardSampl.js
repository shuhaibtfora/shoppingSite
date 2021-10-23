import React from 'react'
import "./Mainpage.css"

function CardSampl(props) {

    return (
        <div>
            <div className="card-row second-row">
                <div className="crd">
                    <div className="card-demo">
                        <div style={{}} className="Featured">Featured</div>
                        <div className="fav-star">
                            <img src="./star.png" alt="" />
                        </div>
                    </div>
                    <h5 className="desc-txt">Car for sale</h5>
                    <h5 className="price-txt">price 200</h5>
                    <div className="eye">
                        <img src="./view.png" alt="" />
                        <h6>100</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardSampl
