import React from 'react';
import Menu from "../image/menu.svg"

const Layout = () => {
    return (
        <div className="container">
            <div className="card">
                {/* Navigation top */}
                <div className="nav">
                    <div className="menu">
                        {/* <img src={Menu} alt="menu phone" className="menu-svg"/> */}
                    </div>
                    <ul className="nav-list">
                        <li className="list">HEADPHONES</li>
                        <li className="list">SPEAKERS</li>
                        <li className="list">OUTLET</li>
                        <li className="list">SALE</li>
                    </ul>
                </div>
                <div className="flex-container">
                    {/* Navigation left */}
                    <div className="nav-left">
                        <div className="text-rotate">
                            <p className="text-left">OVEREAR</p>
                            <p className="text-left">HEADPHONES</p>
                        </div>
                        <div className="number-rotate">
                            <p className="number">01</p>
                            <p className="number">02</p>
                            <p className="number">03</p>
                        </div>
                    </div>
                    {/* Container text */}
                    <div className="text-container">
                        <div className="title">
                            <h1>An Exquisite Audio Experience.</h1>
                            <p>JBL T450BT</p>
                        </div>
                        <div className="block-text">
                            <div className="block left">
                                <h3>A NEW ERA</h3>
                                <span></span>
                                <p className="text-center">The new era of listening deep, powerfull JBL Pure Bass brings you the highest quality, and most precise sound / For a crystal clear level of audio meant to be felt, not just  heard</p>
                            </div>
                            <div className="block right">
                                <h3>YOUR SOUNDS</h3>
                                <span></span>
                                <p className="text-center">Your sounds, your  time rechargeable, extensive battery life offers up to 11 hours uninterrupted music listening / Long lasting fun and no messy cords wherever you go</p>
                            </div>
                        </div>
                        {/* Navigation bottom */}
                        <div className="nav-bottom">
                            <div className="slide">
                                <div className="slider-left">

                                </div>  
                                <div className="slider-right">
                                    
                                </div>    
                            </div>
                            <div className="stars">
                                <span></span>
                                <p>SOUND MAGAZINE</p>
                                <div>étoiles</div>
                            </div>
                        </div>
                    </div>  
                    {/* Model 3D */}
                    <div className="canvas">

                    </div>
                    {/* Icon right */}
                    <div className="icon">
                        <ul className="list-icon">
                            <li className="github-icon"><a href=""></a></li>
                            <li className="linkedin-icon"><a href=""></a></li>
                        </ul>
                        <div className="text-rotate">
                            <p className="text-left">2021</p>
                            <p className="text-left">FOLLOW</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout;
