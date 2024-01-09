import React, { Component } from 'react';
import aboutImg from '../Assets/Images/jeremy-dickey.jpg';

import samstaffing from '../Assets/Images/gallery/samstaffing.png';
import Gallery_4 from '../Assets/Images/gallery/sapc.png';
import saconstruct from '../Assets/Images/gallery/saconst.png';

class Portfolio extends Component {
    render() {
        return (
            <div className="hx-service-area ptb-100-70">
            <div className="container">
                <div className="col-12">
                    <div className="section-title text-center">
                                          
                      <h2>Projects</h2>
                    </div>
                </div>

          /** start project */
                <div className="row">
                    <div className="col-lg-6">
                           
                                <div className="service-img">
                                <img src={samstaffing }/>
                                </div>
                                </div>
                                

                                <div className="col-lg-6">
                                  <h2 style={{ color: 'white'}}>Sam Staffing</h2>
                                  <h3 style={{ color: 'white'}}>A Nurse Staffing platform</h3>
                                <p>


<table>
<tr>problem solved: </tr><td> This customer needed a simple way to hire new applicants, and gather customer, and new applicant data.</td>
<br></br><br></br>
<tr>What I did: </tr><td>I created a central location via an email server with nodejs and roundcube for the company to be able to receive applications, notify applicants of available roles, and collect new user B2B emails</td>
</table>
<td>stack:</td>     <td>ReactJS, NodeJS, JSX, CSS3</td>

                       </p>
                       <div className="btns">
                                        <a href="https://wwww.jeremypdickey.com/projects/san-antonio-nurse-staffing" alt="project button" title="project button" className="theme-btn go-contact-area">Project</a>
                                      

                                    </div>
                                </div>


                                
                </div>

/** end  */
/** start project */
                <div className="row">
                    <div className="col-lg-6">
                           
                                <div className="service-img">
                                <img src={Gallery_4}/>
                                </div>
                                </div>
                                

                                <div className="col-lg-6">
                                  <h2 style={{ color: 'white'}}>San Antonio's Computer repair</h2>
                                  <h3 style={{ color: 'white'}}>An eccomerce store / service business</h3>
                                <p>


<table>
<tr>problem solved: </tr><td>Online Transactions, SEO, website speed optimization</td>
<br></br><br></br>
<tr>What I learned: </tr><td>I learned how something as simple as connecting an API, shortening urls, and doing optimal keyword research could turn a business around completely.</td>
</table>
<td>stack:</td>     <td>HTML5, CSS3, JS</td>



                       </p>
                       <div className="btns">
                                        <a href="https://wwww.samstaffing.jeremypdickey.com/" alt="project button" title="project button" className="theme-btn go-contact-area">Project</a>
                                      

                                    </div>
                                </div>


                                
                </div>  
/** end  */
/** start project */
                <div className="row">
                    <div className="col-lg-6">
                           
                                <div className="service-img">
                                <img src={saconstruct }/>
                                </div>
                                </div>
                                

                                <div className="col-lg-6">
                                  <h2 style={{ color: 'white'}}>SA constructors</h2>
                                  <h3 style={{ color: 'white'}}>A construction service</h3>
                                <p>


<table>
<tr>problem solved: </tr><td>This company needed a website</td>
<br></br><br></br>
<tr>What I learned: </tr><td>I designed and developed a website for this company. I also implemented google maps via the google places API.</td>
</table>
<td>stack:</td>     <td>HTML5, CSS3, JS,</td>

                       </p>
                       <div className="btns">
                                        <a href="https://wwww.jeremypdickey.com/projects/sana-antonio-construction" alt="project button" title="project button" className="theme-btn go-contact-area">Project</a>
                                      

                                    </div>
                                </div>


                                
                </div>

            /** end  */

                
            </div>
        </div>
    );
}
}

export default Portfolio;