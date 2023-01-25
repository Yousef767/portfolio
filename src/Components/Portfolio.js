import React, { Component } from "react";

class Portfolio extends Component {
    render() {
        return (
            <section className="portfolio">
                <div className="section">
                    <h1>MY LATEST PROJECTS</h1>
                    <span className="mp">MY 2023 PORTFOLIO</span>
                    <div className="reach">
                        <span>Take A Look</span>
                        <span className="c">
                            <span>
                                <a href="#project">
                                    <i className="fa-regular fa-down-long"></i>
                                </a>
                            </span>
                        </span>
                    </div>
                    <span className="bubble top"></span>
                    <span className="bubble bottom"></span>
                </div>
                <div className="project img1" id="project">
                    <div className="content">
                        <div className="project-title">
                            Ecommerce Store
                        </div>
                        <div className="visit">
                            <div className="cir">
                                <span>
                                    <a target="_blank" href="https://megastore-yaa.netlify.app" rel="noreferrer">
                                        VISIT WEBSITE
                                        <i className="fa-regular fa-right-long"></i>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project img2" >
                    <div className="content">
                        <div className="project-title">
                            Coffee Shop
                        </div>
                        <div className="visit">
                            <div className="cir">
                                <span>
                                    <a target="_blank" href="https://coffee-ya.netlify.app" rel="noreferrer">
                                        VISIT WEBSITE
                                        <i className="fa-regular fa-right-long"></i>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project img3">
                    <div className="content">
                        <div className="project-title">
                            Software Developers
                        </div>
                        <div className="visit">
                            <div className="cir">
                                <span>
                                    <a target="_blank" href="https://softwaredevs-ya.netlify.app" rel="noreferrer">
                                        VISIT WEBSITE
                                        <i className="fa-regular fa-right-long"></i>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project img4">
                    <div className="content">
                        <div className="project-title">
                            Fashion Store
                        </div>
                        <div className="visit">
                            <div className="cir">
                                <span>
                                    <a target="_blank" href="https://estore-ya.netlify.app" rel="noreferrer">
                                        VISIT WEBSITE
                                        <i className="fa-regular fa-right-long"></i>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project img5">
                    <div className="content">
                        <div className="project-title">
                            Template 1
                        </div>
                        <div className="visit">
                            <div className="cir">
                                <span>
                                    <a target="_blank" href="https://template3-ya.netlify.app" rel="noreferrer">
                                        VISIT WEBSITE
                                        <i className="fa-regular fa-right-long"></i>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project img6">
                    <div className="content">
                        <div className="project-title">
                            Template 2
                        </div>
                        <div className="visit">
                            <div className="cir">
                                <span>
                                    <a href="https://template5-ya.netlify.app" target="_blank" rel="noreferrer">
                                        VISIT WEBSITE<i className="fa-regular fa-right-long"></i>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project img7">
                    <div className="content">
                        <div className="project-title">
                            Template 3
                        </div>
                        <div className="visit">
                            <div className="cir">
                                <span>
                                    <a href="https://template2-ya.netlify.app" target="_blank" rel="noreferrer">
                                        VISIT WEBSITE<i className="fa-regular fa-right-long"></i>
                                    </a>
                                </span>
                            </div>
                                                    
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Portfolio