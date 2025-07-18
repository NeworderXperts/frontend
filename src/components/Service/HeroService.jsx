import React from 'react';
import thumb from '../../assets/images/fun-fact-thumb.png';
import { color } from 'framer-motion';


function HeroService() {
    return (
        <>
            <div className="appie-page-title-area appie-page-service-title-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="appie-page-title-item">
                                <span>Order-Xperts </span>
                                <h3 className="title">
                                    "Satisfy your <span style={{ color: '#ccc0d6ff', fontWeight: 'bold' }}>hunger,</span>


  <br /> not your patience."
                                </h3>
                                <div className="thumb">
                                    <img src={thumb} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeroService;
