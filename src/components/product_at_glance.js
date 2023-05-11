import React from "react";

const ProductAtGlance = (props) => {
    return (
        <div className="single-features mb-4 wow fadeInUp  animated" data-wow-delay="0.2s"
            style={props.styles}>
            <div className="features-icon">
                <span className="customize">
                    <img src={props.image_} className="img-fluid" alt="customize" title="customize" />
                </span>
            </div>
            <div className="features-caption">
                <h3>{props.header}</h3>
                <p>{props.desc}</p>
            </div>
        </div>
    )
}

export default ProductAtGlance;