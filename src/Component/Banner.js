import React, { Component } from 'react';
import { faFacebook, faAccessibleIcon, faFacebookF, faTwitter, faInstagram, faPinterest, faPinterestP, faLinkedin, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons';
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
                                        <h1 style={{ color: 'white'}}>Jeremy Dickey</h1>
                                    </div>
                                    <div className="slide-title">
                                        <h2>Creative <span className="spanred">Web Designer </span>and Developer</h2>
                                    </div>
                                    <div className="btns">
                                        <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3fsXlmUTW0J1ngFy7SAP1IaZYYzuRHHo3C9OCeDyHxG9C8jarP02p2RM6NJUM1evB1LVfeP1Mx" alt="calendar button" title="Calendar button" className="theme-btn go-contact-area">Calender</a>
                                        <a href="mailto:jobsforjdee@gmail.com" alt="email me" title="email" className="theme-btn go-contact-area">Email</a>

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
                               <a href="https://github.com/JDEE30/" alt="My GitHub" title="my GitHub">
                                <FontAwesomeIcon icon={faGithub} /> </a>
                        </li>

                     

                        <li>  
                               <a href="https://twitter.com/jeremypdickey" alt="My Twitter" title="My Twitter">
                                <FontAwesomeIcon icon={faTwitter} /> </a>
                        </li>

                        <li>  
                               <a href="https://www.facebook.com/Jeremypdickey" alt="My Facebook" title="My FaceBook">
                                <FontAwesomeIcon icon={faFacebook} /> </a>
                        </li>

                        <li>  
                               <a href="https://medium.com/@jeremydickey" alt="My Medium" title="My Medium">
                                <FontAwesomeIcon icon={faMedium} /> </a>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Banner;