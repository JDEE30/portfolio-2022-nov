import React, { Component } from 'react';
import { faFacebook, faAccessibleIcon, faFacebookF, faTwitter, faInstagram, faPinterest, faPinterestP, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Slides from '../Assets/Images/slide-2.svg';

class Banner extends Component {
    render() {
        return(
            <section id="home" className="hero hero-slider-wrapper hero-style-1">
                <div className="hero-slider">
                    <div className="slide">
                        <div className="slider-image">
                            <img src={Slides}/>
                        </div>
                        <div className="container">
                            <div className="row">

                                <div className="col col-md-8 col-sm-12 slide-caption">
                                    <div className="slide-subtitle">
                                        <h4>I Am Jeremy Dickey</h4>
                                    </div>
                                    <div className="slide-title">
                                        <h2>Creative <span className="spanred">Web Designer </span>and Developer</h2>
                                    </div>
                                    <div className="btns">
                                        <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3fsXlmUTW0J1ngFy7SAP1IaZYYzuRHHo3C9OCeDyHxG9C8jarP02p2RM6NJUM1evB1LVfeP1Mx" alt="calendar button" className="theme-btn go-contact-area">Contact Me</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copy"><p>Creative Designer And Developer</p></div>
                <div className="social-links">
                    <ul>
                       
                        <li>
                            <a href="https://www.linkedin.com/in/jeremy-dickey/">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            </li>
                            <li>  
                                
                            <a href="https://github.com/JDEE30/">
                                <FontAwesomeIcon icon={faGithub} />
                                
                            
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Banner;