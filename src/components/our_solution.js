import React from "react";

const OurSolution = (props) => {
    return (
        <div className="services-caption text-center mb-30 wow  fadeInUp animated" data-wow-delay="0.3s"
            style={props.styles}>
            <div className="service-icon">
                <span className="neobanking">
                    <img src={props.image_} className="img-fluid" alt="Solution Image"/>
                </span>
            </div>
            <div className="service-cap">
                <h4>{props.header}</h4>
                <p>{props.desc}</p>
            </div>
        </div>
    )
}

export default OurSolution;