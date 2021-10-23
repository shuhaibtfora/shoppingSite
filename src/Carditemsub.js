import React from 'react'


function Carditemsub(props) {
    return (
        <div>
            <div className="card-row second-row">
                <div className="crd">
                    <div className="card-demo" >
                        <img className="lpimg" src={props.bgimg} alt="" />

                        {props.id % 2 == 1 ? <div style={{}} className="Featured">Featured</div> : ""}

                        <div className="fav-star">
                            <img src="./star.png" alt="" />
                        </div>
                    </div>
                    <h5 className="desc-txt">{props.category}</h5>
                    <h5 className="price-txt">{`price ${props.price}`}</h5>
                    <div className="eye">
                        <img src="./view.png" alt="" />
                        <h6>100</h6>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Carditemsub
