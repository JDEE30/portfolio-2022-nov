import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import testimonialImg_1 from '../Assets/Images/testimonial/1.jpg';
import testimonialImg_2 from '../Assets/Images/testimonial/2.jpg';
import testimonialImg_3 from '../Assets/Images/testimonial/3.png';
import { faAlignCenter } from '@fortawesome/free-solid-svg-icons';

class Testimonial extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            arrows: false,
            slidesToScroll: 1,
            centerPadding: 30,
            focusOnSelect: false,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    initialSlide: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
            ]
        };
        return (
            <div className="testimonial-area">
                <div className="container">
                    <h2 style={{ color: 'white', padding: '50', textAlign: 'center',}}>Jeremy's Feedback</h2>
                    <div className="testimonial-active">
                    <Slider {...settings}>
                        <div className="testimonial-wrap">
                            <div className="testimonial-item">
                                <div className="testimonial-content">
                                    <p>"I encourage anyone who needs a website build or needs mentoring on how to build one to contact San Antonio’s Web design and work with Jeremy. I found Jeremy on Facebook and sought his guidance on how to complete a website that I was designing. He has knowledge, understanding and patience’s, which are key when teaching and working with someone who is new in the field. My project is completed, however, I still reach out to Jeremy for guidance and he is always willing to help me."</p>
                                </div>
                                <div className="testimonial-sub">
                                    <div className="testimonial-img">
                                        <img src={testimonialImg_1}/>
                                    </div>
                                    <div className="testimonial-tumb-content">
                                        <h4>Court Ell</h4>
                                        <span>Ceo Of <a href="https://www.cecubed.com/">CeCubed</a></span>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        <div className="testimonial-wrap">
                            <div className="testimonial-item">
                                <div className="testimonial-content">
                                    <p>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  
                                        
                                        
                                        
                                        "Jeremy was great to work with and provided a product that was even better than I could have expected." 

                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


                                    </p>
                                </div>
                                <div className="testimonial-sub">
                                    <div className="testimonial-img">
                                        <img src={testimonialImg_2}/>
                                    </div>
                                    <div className="testimonial-tumb-content">
                                        <h4>James Bueller</h4>
                                        <span>Ceo Of <a href="https://chrome.google.com/webstore/detail/rewards/dcmhfjomdegnpgkaahblegjpnppollhc">CC Rewards</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>   
                      
                        <div className="testimonial-wrap">
                            <div className="testimonial-item">
                                <div className="testimonial-content">
                                    <p>
                                  
                                    "Jeremy came in as a lifesaver when I happened upon some freelance work. A local family physician wanted me to build what is now directfamilycare from the ground up. It's a simple website for a local physician, but I was new to software development. I had met him online through a community for software devs, at a time when I didn't know who else to turn to for help. He was always very approachable & I found it easy to reach out and message him to ask questions directly..."
                                  
                                    </p>
                                </div>
                                <div className="testimonial-sub">
                                    <div className="testimonial-img">
                                        <img src={testimonialImg_3}/>
                                    </div>
                                    <div className="testimonial-tumb-content">
                                        <h4>John D. | Senior Software Engineer</h4>
                                    </div>
                                </div>
                            </div>
                        </div>   
                      {/* 
  Multi
  line
  comment


                        <div className="testimonial-wrap">
                            <div className="testimonial-item">
                                <div className="testimonial-content">
                                    <p>
                                     
                                    "I am satisfied with the website that Jeremy created. The design is visually appealing and user-friendly, making it easy for visitors to navigate and find the information they need. I appreciate Jeremy's attention to detail and responsiveness throughout the development process. He was receptive to my input and implemented changes promptly..."
                             
                                    </p>
                                </div>
                                <div className="testimonial-sub">
                                    <div className="testimonial-img">
                                        <img src={testimonialImg_2}/>
                                    </div>
                                    <div className="testimonial-tumb-content">
                                        <h4>Bin E.</h4>
                                    </div>
                                </div>
                            </div>
                        </div>   
                      

                        <div className="testimonial-wrap">
                            <div className="testimonial-item">
                                <div className="testimonial-content">
                                    <p>
                           
                                    "I hired Jeremy to help my company Johnson 80 Games with quality assurance for our mobile app development. Jeremy D always went above and beyond on all of his duties. I would highly recommend him." 

                                    </p>
                                </div>
                                <div className="testimonial-sub">
                                    <div className="testimonial-img">
                                        <img src={testimonialImg_2}/>
                                    </div>
                                    <div className="testimonial-tumb-content">
                                        <h4>Tavaris J. </h4>
                                        <span>Ceo Of <a href="https://johnson-80-games.itch.io/">Johnson 80 Games</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>   



                        <div className="testimonial-wrap">
                            <div className="testimonial-item">
                                <div className="testimonial-content">
                                    <p>
                               
                                    "When it comes to software development and coding, Jeremy consistently has demonstrated a wealth of knowledge. As someone starting out in the industry, I recognize him as someone I can ask any programming question and get a reliable answer."
                             </p>
                                </div>
                                <div className="testimonial-sub">
                                    <div className="testimonial-img">
                                        <img src={testimonialImg_2}/>
                                    </div>
                                    <div className="testimonial-tumb-content">
                                        <h4>Ashley C. | L2 Production Support</h4>
                                    </div>
                                </div>
                            </div>
                        </div>   




                        <div className="testimonial-wrap">
                            <div className="testimonial-item">
                                <div className="testimonial-content">
                                    <p>
                                    "I worked with Jeremy on a few web development projects. He was able to provide meaningful input on various stages of the project. His knowledge expertise ranged from React, Angular, Wordpress, Jira, AWS, JS, JSON, PHP, HTML, CSS, with a primary focus on Web Design. Definitely a great addition to the project, would recommend! "
                                 </p>
                                </div>
                                <div className="testimonial-sub">
                                    <div className="testimonial-img">
                                        <img src={testimonialImg_2}/>
                                    </div>
                                    <div className="testimonial-tumb-content">
                                        <h4>Jason n. | CEO</h4>
                                    </div>
                                </div>
                            </div>
                        </div>   




                        <div className="testimonial-wrap">
                            <div className="testimonial-item">
                                <div className="testimonial-content">
                                    <p>
                                        "Working with you on our front-end project was a pleasure. Your attention to detail and ability to bring our vision to life was impressive. Your communication throughout the project was top-notch, and your willingness to make adjustments based on our feedback was greatly appreciated. I'm thrilled with the end result and would highly recommend you to anyone looking for a skilled front-end developer. Thanks again for your hard work!"

                                    </p>
                                </div>
                                <div className="testimonial-sub">
                                    <div className="testimonial-img">
                                        <img src={testimonialImg_2}/>
                                    </div>
                                    <div className="testimonial-tumb-content">
                                        <h4>Adam R. | Software Engineer</h4>
                                    </div>
                                </div>
                            </div>
                        </div>   
*/}  

        </Slider>
                    </div>
                </div>
            </div>

            
            
           
        );
    }
}

export default Testimonial;            