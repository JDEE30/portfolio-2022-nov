import React, { Component } from 'react';
import aboutImg from '../Assets/Images/about.jpg';

class About extends Component {
    render() {
        return (
            <div className="hx-about-style-1" id="about">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-xl-6 col-lg-6 d-xl-flex d-lg-flex d-block align-items-center">
                            <div className="hx-about-content">
                                <div className="hx-site-title">
                                    <span>Expert Web Developer & Designer</span>
                                    <h2>About Me</h2>
                                </div>
                                <p>I think of myself as problem solver. I can hit the ground running on any project and I love designing and developing interfaces, dashboards, websites, forms, etc from the ground up. I'm definately a team player, and can do more then just development. I often handle devops, integrations, design, administrator duties, migrations, SSL issues, Oauth and other duties.</p>
                                <p>I am always learning more skills. However, here are some of the technologies I am familiar with: SalesForce, SalesForce Administration, React, Angular, Wordpress, Shopify, GIT, Trello, CI, CLI, Jira, Atlasian, AWS, JS, JSON, PHP, HTML, CSS, GCD, C#, SQL, Azure, SEO, Web Design, Figma, Affinity Photo, and more.</p>
                                
                                <div className="btns">
                                    <a href="#protfolio" alt="click to see portfolio" title="click to see portfolio" className="theme-btn" >See my work</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5">
                            <div className="hx-about-img" alt="picture of me" title="picture of me" >
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