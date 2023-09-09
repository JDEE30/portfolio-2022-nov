import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { fab, faFacebook, faFacebookF,  faGithub } from '@fortawesome/free-brands-svg-icons';
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
import Gallery_11 from '../Assets/Images/gallery/img-11.jpg';



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
                                    <h2>Jeremy's Portfolio</h2>
                                </div>
                                <ul>
                            
                                
                                    <li><a data-filter="*" href="#" className="current" className="red"  onClick={allElement}>All</a></li>
                                    <li><a data-filter=".Web-Design" href="#" className="red" onClick={webDesign}>ReactJS</a></li>
                                    <li><a data-filter=".Print-Design" href="#" className="red" onClick={printDesign}>Angular</a></li>
                                    <li><a data-filter=".Web-Application" href="#" className="red" onClick={webApp}>Wordpress & extensions</a></li>               
                                    <li><a data-filter=".Photography" href="#" className="red" onClick={Photography}>HTML,CSS,JS</a></li> 
                                </ul>
                            </div>
                            <div className="gallery-container gallery-fancybox masonry-gallery tumho-masonary">
                               
                           
                              
                                <div className={this.state.onWebDesign ? "grid active" : "grid" 
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                        
                                    <img src={Gallery_2}  className="img img-responsive"/>
                                    <div className="icon">
                                        <a href="#" alt="Current portfolio website built in Reactjs" title="Current portfolio website built in Reactjs"className="view-icon">
                                            <FontAwesomeIcon icon={faPlus} />
                                        </a> <a href="https://github.com/JDEE30/portfolio-2022-nov" alt="Click to see this repository on Github" title="Click to see this repository on Github" className="view-icon">
                                <FontAwesomeIcon icon={faGithub} />   </a>
                                    </div>
                                </div>


                                <div className={this.state.onWebDesign ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                    
                                    <img src={Gallery_1}  className="img img-responsive"/>
                                    <div className="icon">
                                        <a href="https://www.samstaffing.com" alt="Click to see this React App" title="Click to see this React App" className="view-icon">
                                            <FontAwesomeIcon icon={faPlus} />
                                        </a> <a href="https://github.com/JDEE30/awsm-project" alt="Click to see this repository on Github" title="Click to see this repository on Github" className="view-icon">
                                <FontAwesomeIcon icon={faGithub} />   </a>
                                    </div>
                                    
                                </div>
                             
                                <div className={this.state.onPrintDesign ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                    
                                    <img src={Gallery_3} className="img img-responsive"/>
                                    <div className="icon">
                                        <a href="https://play.google.com/store/apps/details?id=com.companyname.Gohfr" alt="Click to see this Angular app" title="Click to see this Angular app" className="view-icon">
                                            <FontAwesomeIcon icon={faPlus} />
                                        </a>

                                       
                                    </div>
                                </div>

                                 
                                <div className={this.state.onPrintDesign ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                    
                                    <img src={Gallery_11} className="img img-responsive"/>
                                    <div className="icon">
                                        <a href="https://main.d1j4jfo42mc2zt.amplifyapp.com/" alt="Click to see this Angular app" title="Click to see this Angular app" className="view-icon">
                                            <FontAwesomeIcon icon={faPlus} />
                                        </a> <a href="https://github.com/JDEE30/07082023" alt="Click to see this repository on Github" title="Click to see this repository on Github" className="view-icon">
                                <FontAwesomeIcon icon={faGithub} />   </a>
                                    </div>
                                </div>


                                <div className={this.state.onWebApp ? "grid active" : "grid" 
                                    && this.state.onWebApp ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                        
                                    <img src={Gallery_6} className="img img-responsive"/>
                                    <div className="icon">
                                        <a href="https://www.redpeg.com" alt="Click to see Red Peg Wordpress Website" title="Click to see this Wordpress website"   className="view-icon">
                                            <FontAwesomeIcon icon={faPlus} />
                                        </a>
                                    </div>
                                </div>



                                <div className={this.state.onWebApp ? "grid active" : "grid" 
                                    && this.state.onWebApp ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                        
                                    <img src={Gallery_7}className="img img-responsive"/>
                                    <div className="icon">
                                        <a href="https://ryanreiffert.com/"  alt="Click to see this Wordpress website" title="Click to see this Wordpress website"  className="view-icon">
                                            <FontAwesomeIcon icon={faPlus} />
                                        </a>
                                    </div>
                                </div>


                                <div className={this.state.onWebApp ? "grid active" : "grid" 
                                    && this.state.onWebApp ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                        
                                    <img src={Gallery_8} className="img img-responsive"/>
                                    <div className="icon">
                                        <a href="https://assurebusinesscredit.com/" alt="Click to see this Wordpress website" title="Click to see this Wordpress website" className="view-icon">
                                            <FontAwesomeIcon icon={faPlus} />
                                        </a>
                                    </div>
                                </div>


                                <div className={this.state.onWebApp ? "grid active" : "grid" 
                                    && this.state.onWebApp ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                        
                                    <img src={Gallery_9}  className="img img-responsive"/>
                                    <div className="icon">
                                        <a href="https://chrome.google.com/webstore/detail/rewards/dcmhfjomdegnpgkaahblegjpnppollhc" alt="Click to see this Chrome extension" title="Click to see this Chrome extension" className="view-icon">
                                            <FontAwesomeIcon icon={faPlus} />
                                        </a> <a href="https://github.com/JDEE30/RewardsChromeExtensino" alt="Click to see this repository on Github" title="Click to see this repository on Github" className="view-icon">
                             <FontAwesomeIcon icon={faGithub} />   </a>
                                    </div>
                                </div>



                                <div className={this.state.onPhotography ? "grid active" : "grid"
                                    && this.state.onPhotography ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                    <img src={Gallery_5}  className="img img-responsive"/>
                                    <div className="icon">
                                        <a href="https://jdee30.github.io/sa-constructors/aboutus.html" alt="Click to see this HTML website" title="Click to see this HTML website" className="view-icon">
                                            <FontAwesomeIcon icon={faPlus} />
                                        </a> <a href="https://github.com/JDEE30/sa-constructors" alt="Click to see this repository on Github" title="Click to see this repository on Github" className="view-icon">
                             <FontAwesomeIcon icon={faGithub} />   </a>
                                    </div>
                                </div>

                                <div className={this.state.onPhotography ? "grid active" : "grid"
                                    && this.state.onPhotography ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                    <img src={Gallery_4}  className="img img-responsive"/>
                                    <div className="icon">
                                        <a href="https://www.sanantonioscomputerrepair.com/index.html"alt="Click to see this Computer Repair Website" title="Click to see this HTML website"  className="view-icon">
                                            <FontAwesomeIcon icon={faPlus} />  
                                        </a> <a href="https://github.com/JDEE30/San-Antonios-Computer-Repair-with-Ecom" alt="Click to see this repository on Github" title="Click to see this repository on Github" className="view-icon">
                             <FontAwesomeIcon icon={faGithub} />   </a>  
                                    </div>
                                </div>

                                 
                                <div className={this.state.onPhotography ? "grid active" : "grid"
                                    && this.state.onPhotography ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                    <img src={Gallery_10} className="img img-responsive"/>
                                    <div className="icon">
                                        <a href="https://www.2020portfolio.jeremypdickey.com"  alt="Click to see my previous portfolio made in HTML" title="Click to see my previous portfolio made in HTML"  className="view-icon">
                                            <FontAwesomeIcon icon={faPlus} />
                                        </a> <a href="https://github.com/JDEE30/Portfolio2" alt="Click to see this repository on Github" title="Click to see this repository on Github" className="view-icon">
                             <FontAwesomeIcon icon={faGithub} />   </a>  
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