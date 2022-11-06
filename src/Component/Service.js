import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import serviceImg_1 from '../Assets/Images/1.svg';
import serviceImg_2 from '../Assets/Images/2.svg';
import serviceImg_3 from '../Assets/Images/3.svg';
import serviceImg_4 from '../Assets/Images/4.svg';
import serviceImg_5 from '../Assets/Images/5.svg';
import serviceImg_6 from '../Assets/Images/6.svg';

class Service extends Component {
    render () {
        return (
            <div id="service" className="hx-service-area ptb-100-70">
                <div className="container">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <span>What I Do</span>
                            <h2>My Services</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-sm-6 grid col-12">
                            <div className="hx-service-item">
                                <div className="hx-service-single">
                                    <div className="service-img">
                                        <img src={serviceImg_1}/>
                                    </div>
                                    <div className="hx-service-content">
                                        <h3>ReactJS</h3>
                                        <p>I am Expert In</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 grid col-12">
                            <div className="hx-service-item">
                                <div className="hx-service-single">
                                    <div className="service-img">
                                        <img src={serviceImg_2}/>
                                    </div>
                                    <div className="hx-service-content">
                                        <h3>Web Development</h3>
                                        <p>I am Expert In</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 grid col-12">
                            <div className="hx-service-item">
                                <div className="hx-service-single">
                                    <div className="service-img">
                                        <img src={serviceImg_3}/>
                                    </div>
                                    <div className="hx-service-content">
                                        <h3>Web Design</h3>
                                        <p>I am Expert In</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 grid col-12">
                            <div className="hx-service-item">
                                <div className="hx-service-single">
                                    <div className="service-img">
                                        <img src={serviceImg_4}/>
                                    </div>
                                    <div className="hx-service-content">
                                        <h3>Responsive Design</h3>
                                        <p>I am Expert In</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 grid col-12">
                            <div className="hx-service-item">
                                <div className="hx-service-single">
                                    <div className="service-img">
                                        <img src={serviceImg_5}/>
                                    </div>
                                    <div className="hx-service-content">
                                        <h3>Wordpress</h3>
                                        <p>I am Expert In</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 grid col-12">
                            <div className="hx-service-item">
                                <div className="hx-service-single">
                                    <div className="service-img">
                                        <img src={serviceImg_6}/>
                                    </div>
                                    <div className="hx-service-content">
                                        <h3>Javascript</h3>
                                        <p>I am Expert In</p>
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

export default Service;