import React, { Component } from 'react';
import aboutImg from '../Assets/Images/jeremy-dickey.jpg';

class About extends Component {
    render() {
        return (
            <div className="hx-about-style-1" id="about">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-xl-6 col-lg-6 d-xl-flex d-lg-flex d-block align-items-center">
                            <div className="hx-about-content">
                                <div className="hx-site-title">
                                    <h2>Full-Stack Software Engineer </h2>
                                </div>
                                  <p> React, Javascript, HTML5, CSS3, Restful API, Wordpress</p>
                                
                                <div className="btns">
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5">
                            <div className="hx-about-img" alt="Jeremy Dickey" title="Jeremy Dickey" >
                                <img src={aboutImg} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;