import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import certImg_1 from '../Assets/Images/Certifications/Click-Slice-SEO-Certification.png';
import certImg_2 from '../Assets/Images/Certifications/Google-Technical-Support-Certification.png';
import certImg_3 from '../Assets/Images/Certifications/META-Front-End-Engineer-Certification.png';
import certImg_4 from '../Assets/Images/Certifications/Coursera-wordpress-development-certification.png';
import certImg_5 from '../Assets/Images/Certifications/IBM-Technical-Support-Certfication.png';





class Certifications extends Component {
    render () {
        return (
            <div id="certifications" className="hx-service-area ptb-100-70">
                <div className="container">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <span>Certifications</span>
                            <h2>Jeremy Dickey's Current Certifications</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-sm-6 grid col-12">
                            <div className="hx-service-item">
                                <div className="hx-service-single">
                                    <div className="service-img">
                                    <img src={certImg_1}/>
                                    </div>
                                    <div className="hx-service-content">
                                        <h3>SEO</h3>
                                        <p>SEO Certification from Click Slice LTD</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                          <div className="col-md-4 col-sm-6 grid col-12">
                            <div className="hx-service-item">
                                <div className="hx-service-single">
                                    <div className="service-img">
                                    <img src={certImg_3}/>
                                    </div>
                                    <div className="hx-service-content">
                                        <h3>Front End Engineering</h3>
                                        <p>Front End Engineering Certification from Meta</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 grid col-12">
                            <div className="hx-service-item">
                                <div className="hx-service-single">
                                    <div className="service-img">
                                    <img src={certImg_4}/>
                                    </div>
                                    <div className="hx-service-content">
                                        <h3>Wordpress Development</h3>
                                        <p>Wordpress Development Certification from Coursera</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                     
                    </div>
                </div>
            </div>
        );
    }
}

export default Certifications;