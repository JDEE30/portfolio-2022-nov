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
                                    <h2>Expert Web Developer & Designer </h2>
                                </div>
                                  <p> I think of myself as problem solver. I can hit the ground running on any project and I love designing and developing interfaces, dashboards, websites, forms, etc from the ground up. I'm definately a team player, and can do more then just development. I often handle devops, integrations, design, administrator duties, migrations, SSL issues, Oauth and other duties.

I am always learning more skills. However, here are some of the technologies I am familiar with: SalesForce, SalesForce Administration, React, Angular, Wordpress, Shopify, GIT, Trello, CI, CLI, Jira, Atlasian, AWS, JS, JSON, PHP, Python, XSL, SQL, HTML, CSS, GCD, C#, SQL, Azure, SEO, Web Design, Figma, Affinity Photo, and more.</p>
                                
                                <div className="btns">
                                <a href="#protfolio" alt="See my projects" title="See my projects" className="theme-btn go-contact-area">Portfolio</a> </div>
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