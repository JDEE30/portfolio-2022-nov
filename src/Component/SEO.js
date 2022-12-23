import React, { Component } from 'react';
import SEOSpreadSheet from '../Assets/Images/SEO/SEO-wins.png';


class SEO extends Component {
    render() {
        return (
            <div className="hx-about-style-1" id="SEO">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-xl-6 col-lg-6 d-xl-flex d-lg-flex d-block align-items-center">
                            <div className="hx-about-content">
                                <div className="hx-site-title">
                                    <span>SEO Examples</span>
                                    <h2>SEO WINS</h2>
                                </div>
                                <p>As a developer who often works with web design agencies, I understand how crucial it is to help websites rank well on Google. I've updated my own website here to rank for my name: 'Jeremy Dickey'. But I've also been able to rank articles and non article web pages on the first page of Google's search results. As such, I've compiled a Spreadsheet below showcasing these results.</p>
                                
                                <div className="btns">
                                    <a href="https://docs.google.com/spreadsheets/d/1MLlXtkCoUzHDNtBlKxDYIt-4bowxhkjfJttXX5W7kzI/edit?usp=sharing" alt="click to see Spreadsheet" title="click to see Spreadsheet" className="theme-btn" >See Spreadsheet</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5">
                            <div className="hx-about-img" alt="SEO SPREADSHEET" title="SEO SPREADSHEET" >
                                <img src={SEOSpreadSheet} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SEO;