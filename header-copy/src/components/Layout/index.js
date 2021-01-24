import React from 'react';

const Layout = () => {
    return (
        <div className="container">
            <div className="card">
                {/* Navigation top */}
                <div className="nav">
                    <div className="menu">

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
                            <p className="text">OVEREAR</p>
                            <p className="text">HEADPHONES</p>
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
                            <div className="block-left">
                                <h3>A New ERA</h3>
                                <span></span>
                                <p>The new era of listening deep, powerfull JBL Pure Bass brings you the highest quality, and most precise sound / For a crystal clear level of audio meant to be felt, not just  heard</p>
                            </div>
                            <div className="block-right">
                                <h3>YOUR SOUNDS</h3>
                                <span></span>
                                <p>Your sounds, your  time rechargeable, extensive battery life offers up to 11 hours uninterrupted music listening / Long lasting fun and no messy cords wherever you go</p>
                            </div>
                        </div>
                    </div>  
                    {/* Navigation bottom */}
                    <div className="nav-bottom">

                    </div>
                    {/* Model 3D */}
                    <div className="canvas">

                    </div>
                    {/* Icon right */}
                    <div className="icon">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout;
