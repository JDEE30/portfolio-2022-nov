import React, { Component} from 'react';
import Logo from '../Assets/Images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Home_1 from '../Assets/Images/gallery/img-2.svg';
import Home_2 from '../Assets/Images/jeremy-dickey.jpg';
import Home_3 from '../Assets/Images/1.svg';
import Home_4 from '../Assets/Images/gallery/img-6.jpg';
import Home_5 from '../Assets/Images/SEO/SEO-wins.png';
import Home_6 from '../Assets/Images/Certifications/META-Front-End-Engineer-Certification.png';

import { faTimes } from '@fortawesome/free-solid-svg-icons';

class Header extends Component {

    state = {
        isOpen: false,

    }
    
    render() {

        return(
            <header id="header" className="site-header header-style-1">
                <nav className="navigation navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button  type="button"  className="open-btn" onClick={() => this.setState({isOpen: true})}>
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>

                            </button>
                            <a className="navbar-brand" href="index.html">
                                <img src={Logo} alt="logo" title="logo" />
                            </a>
                        </div>
                        <div id="navbar" className={ this.state.isOpen ? "navbar-collapse navigation-holder active" : "navbar-collapse navigation-holder"}>
                            <button className="close-navbar" onClick={() => this.setState({isOpen: false})}>
                                <FontAwesomeIcon icon={faTimes} />    
                            </button>
                            <button className="close-navbar-2" onClick={() => this.setState({isOpen: false})}>
                            <FontAwesomeIcon icon={faTimes} />
                            </button>
                            <ul className="nav navbar-nav">
                                <li className="home">
                                    <a href="#home" title="link to home section">
                                        <img src={Home_1} alt="HomePage" />
                                    </a>
                                </li>
                                <li className="about">
                                    <a href="#about" title="link to about me section">
                                        <img src={Home_2} alt="AboutMe"/>
                                    </a>
                                </li>
                                <li className="service">
                                    <a href="#service" title="link to service section">
                                        <img src={Home_3} alt="Skills"/>
                                    </a>
                                </li>
                                <li className="protfolio">
                                    <a href="#protfolio" title="link to portfolio section">
                                        <img src={Home_4} alt="Portfolio"/>
                                    </a>
                                </li>

                                <li className="seo">
                                    <a href="#seo" title="link to SEO section">
                                        <img src={Home_5} alt="SEO"/>
                                    </a>
                                </li>

                                <li className="certifications">
                                    <a href="#certifications" title="link to cert section">
                                        <img src={Home_6} alt="Certs"/>
                                    </a>
                                </li>
                            
                            </ul>
                        </div>
                        <div className="menu-open-btn-holder">
                            <button  title="open menu" className="menu-open-btn" onClick={() => this.setState({isOpen: true})}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;