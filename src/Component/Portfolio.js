import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { fab, faFacebook, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Gallery_1 from '../Assets/Images/gallery/img-1.jpg';
import Gallery_2 from '../Assets/Images/gallery/img-2.svg';
import Gallery_3 from '../Assets/Images/gallery/img-3.jpg';
import Gallery_4 from '../Assets/Images/gallery/img-4.jpg';
import Gallery_5 from '../Assets/Images/gallery/img-5.jpg';
import Gallery_6 from '../Assets/Images/gallery/img-6.jpg';
import Gallery_7 from '../Assets/Images/gallery/img-7.jpg';
import Gallery_8 from '../Assets/Images/gallery/img-8.jpg';
import Gallery_9 from '../Assets/Images/gallery/img-9.jpg';
import Gallery_10 from '../Assets/Images/gallery/img-10.jpg';


class Porfolio extends Component {

    state = {
        onWebDesign: false,
        onPrintDesign: false,
        onWebApp: false,
        onPhotography: false,
        isOpen : false,
    }

    render() {

        const allElement = event => {
            event.preventDefault();
            this.setState({
                onWebApp: true,
                onPrintDesign: true,
                onWebDesign: true,
                onPhotography: true,
            });
        }

        const webDesign = event => {
            event.preventDefault();
            this.setState({
                onWebDesign: true,
                onPrintDesign: false,
                onWebApp: false,
                onPhotography: false,
                isOpen: true,
            });
        }

        const printDesign = event => {
            event.preventDefault();
            this.setState({
                onPrintDesign: true,
                onWebDesign: false,
                onWebApp: false,
                onPhotography: false,
                isOpen: true,
            });
        }

        const webApp = event => {
            event.preventDefault();
            this.setState({
                onWebApp: true,
                onPrintDesign: false,
                onWebDesign: false,
                onPhotography: false,
                isOpen: true,
            });
        }

        const Photography = event => {
            event.preventDefault();
            this.setState({
                onPhotography: true,
                onWebApp: false,
                onPrintDesign: false,
                onWebDesign: false,
                isOpen: true,
            });
        }


        console.log(this.state.onWebDesign);

        return (
            <section id="protfolio" className="gallery-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12 sortable-gallery">
                            <div className="gallery-filters">
                                <div className="section-title">
                                    <span>Portfolio</span>
                                    <h2>Work I Have Done</h2>
                                </div>
                                <ul>
                                    <li><a data-filter="*" href="#" className="current" onClick={allElement}>All</a></li>
                                    <li><a data-filter=".Web-Design" href="#" className="red" onClick={webDesign}>ReactJS</a></li>
                                    <li><a data-filter=".Print-Design" href="#" onClick={printDesign}>Angular</a></li>
                                    <li><a data-filter=".Web-Application" href="#" onClick={webApp}>Wordpress & extensions</a></li>               
                                    <li><a data-filter=".Photography" href="#" onClick={Photography}>HTML,CSS,JS</a></li> 
                                </ul>
                            </div>
                            <div className="gallery-container gallery-fancybox masonry-gallery tumho-masonary">
                               
                           
                              
                                <div className={this.state.onWebDesign ? "grid active" : "grid" 
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                        
                                    <img src={Gallery_2} alt="This Porfolio website" className="img img-responsive"/>
                                    <div className="icon">
                                        <a href="#" className="view-icon">
                                            <FontAwesomeIcon icon={faPlus} />
                                        </a>
                                    </div>
                                </div>


                                <div className={this.state.onWebDesign ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                    
                                    <img src={Gallery_1} alt="Nurse Staffing website built in Reactjs" className="img img-responsive"/>
                                    <div className="icon">
                                        <a href="https://www.samstaffing.com" className="view-icon">
                                            <FontAwesomeIcon icon={faPlus} />
                                        </a>
                                    </div>
                                </div>
                             
                                <div className={this.state.onPrintDesign ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                    
                                    <img src={Gallery_3} alt="Courier app developed in Angularn" className="img img-responsive"/>
                                    <div className="icon">
                                        <a href="https://play.google.com/store/apps/details?id=com.companyname.Gohfr" className="view-icon">
                                            <FontAwesomeIcon icon={faPlus} />
                                        </a>
                                    </div>
                                </div>


                                <div className={this.state.onWebApp ? "grid active" : "grid" 
                                    && this.state.onWebApp ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                        
                                    <img src={Gallery_6} alt="Red Peg WordPress Website" className="img img-responsive"/>
                                    <div className="icon">
                                        <a href="https://www.redpeg.com" className="view-icon">
                                            <FontAwesomeIcon icon={faPlus} />
                                        </a>
                                    </div>
                                </div>



                                <div className={this.state.onWebApp ? "grid active" : "grid" 
                                    && this.state.onWebApp ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                        
                                    <img src={Gallery_7} alt="Wordpress website for Ryan Reiffert" className="img img-responsive"/>
                                    <div className="icon">
                                        <a href="https://ryanreiffert.com/" className="view-icon">
                                            <FontAwesomeIcon icon={faPlus} />
                                        </a>
                                    </div>
                                </div>


                                <div className={this.state.onWebApp ? "grid active" : "grid" 
                                    && this.state.onWebApp ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                        
                                    <img src={Gallery_8} alt="Wordpress website migrated for a credit repair website" className="img img-responsive"/>
                                    <div className="icon">
                                        <a href="https://assurebusinesscredit.com/" className="view-icon">
                                            <FontAwesomeIcon icon={faPlus} />
                                        </a>
                                    </div>
                                </div>


                                <div className={this.state.onWebApp ? "grid active" : "grid" 
                                    && this.state.onWebApp ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                        
                                    <img src={Gallery_9} alt="Chrome Extension" className="img img-responsive"/>
                                    <div className="icon">
                                        <a href="https://chrome.google.com/webstore/detail/rewards/dcmhfjomdegnpgkaahblegjpnppollhc" className="view-icon">
                                            <FontAwesomeIcon icon={faPlus} />
                                        </a>
                                    </div>
                                </div>



                                <div className={this.state.onPhotography ? "grid active" : "grid"
                                    && this.state.onPhotography ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                    <img src={Gallery_5} alt="Construction website" className="img img-responsive"/>
                                    <div className="icon">
                                        <a href="https://jdee30.github.io/sa-constructors/aboutus.html" className="view-icon">
                                            <FontAwesomeIcon icon={faPlus} />
                                        </a>
                                    </div>
                                </div>

                                <div className={this.state.onPhotography ? "grid active" : "grid"
                                    && this.state.onPhotography ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                    <img src={Gallery_4} alt="Computer Repair Website" className="img img-responsive"/>
                                    <div className="icon">
                                        <a href="https://www.sanantonioscomputerrepair.com/index.html" className="view-icon">
                                            <FontAwesomeIcon icon={faPlus} />
                                        </a>
                                    </div>
                                </div>

                                 
                                <div className={this.state.onPhotography ? "grid active" : "grid"
                                    && this.state.onPhotography ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                    <img src={Gallery_10} alt="My previous portfolio made in html" className="img img-responsive"/>
                                    <div className="icon">
                                        <a href="https://www.2020portfolio.jeremypdickey.com" className="view-icon">
                                            <FontAwesomeIcon icon={faPlus} />
                                        </a>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Porfolio;