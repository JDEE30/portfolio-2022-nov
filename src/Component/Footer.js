import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faAccessibleIcon, faFacebookF, faTwitter, faInstagram, faPinterest, faPinterestP, faLinkedin, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../Assets/Images/logo.png';

class Footer extends Component {
    render() {
        return (
            <div className="footer-area text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="footer-image">
                                <a href="index.html">
                                </a>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="footer-menu">
                                <ul className="d-flex " >
                                <li>  
                               <a href="https://github.com/JDEE30/" alt="My GitHub" title="my GitHub">
                                <FontAwesomeIcon icon={faGithub} /> </a>
                        </li>

                        <li>  
                               <a href="https://www.linkedin.com/in/jeremy-dickey/" alt="My LinkedIn" title="My linkedin">
                                <FontAwesomeIcon icon={faLinkedin} /> </a>
                        </li>

                        <li>  
                               <a href="https://twitter.com/jeremypdickey" alt="My Twitter" title="My Twitter">
                                <FontAwesomeIcon icon={faTwitter} /> </a>
                        </li>

               
         
                                </ul>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="footer-sub">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;