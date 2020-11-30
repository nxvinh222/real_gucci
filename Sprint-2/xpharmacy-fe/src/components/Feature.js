import React, { Component } from 'react';

class Feature extends Component {
    render() {
        return (
            <div>
                <div className="features">
                    <div className="container">
                            <hr/>
                            <div className="row" style={{margintop: '90px', marginbottom: '30px', color: '#ADADAD'}}>
                                <div className="col-md-5"></div>
                                <div className="col-md-2">
                                    <h2 style={{fontsize: '2.0rem'}}>FEATURES.</h2>
                                </div>
                                <div className="col-md-5"></div>
                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col-md-1"></div>
                                <div className="col-md-5 trai">
                                    <h4 className="features-title">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24/7</h4>
                                    <div className="duoi" style={{display: 'flex'}}>
                                        <div className="col-md-2" style={{display: 'flex', flexdirection: 'column'}}>
                                            <div style={{backgroundcolor: '#15cda8', width: '52px', height: '3px'}}></div>    
                                            <div></div>
                                        </div>
                                        <div className="col-md-10">
                                            <p> Our website opens 24/7 h. You can shopping anytime you want. Moreover we accept many payment methods like Visa, Master Card, JCB. Search, Add, Checkout, Get then Be Happy.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-5 phai">
                                    <h4 className="features-title ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; DELIVERY FAST</h4>
                                    <div className="duoi" style={{display: 'flex'}}>
                                        <div className="col-md-2" style={{display: 'flex', flexdirection: 'column'}}>
                                            <div style={{backgroundcolor: '#15cda8', width: '52px', height: '3px'}}></div>    
                                            <div></div>
                                        </div>
                                        <div className="col-md-10">
                                            <p> We operate Vietnam’s largest express parcel transportation network with fully integrated and self-owned pickup, mid-mile and delivery operations that successfully reach 50 households every second across Vietnam. Our in-house transport management platform enables our clients to schedule pickups, track orders in real-time, manage returns and replacements with ease. 
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-1"></div>
                                <div className="col-md-5 trai">
                                    <h4 className="features-title">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ENVIRONMENTALLY FRIENDLY</h4>
                                    <div className="duoi" style={{display: 'flex'}}>
                                        <div className="col-md-2" style={{display: 'flex', flexdirection: 'column'}}>
                                            <div style={{backgroundcolor: '#15cda8', width: '52px', height: '3px'}}></div>    
                                            <div></div>
                                        </div>
                                        <div className="col-md-10">
                                            <p> We start with greener materials like organic wool and cotton, polyester from recycled plastic bottles, and cellulose from sustainably grown trees. We treat these fabrics with less-toxic dyes and processes. We aim to reduce the carbon footprint of their factories while making them safer for workers.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-5 phai">
                                    <h4 className="features-title">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AFFORDABLE</h4>
                                    <div className="duoi" style={{display: 'flex'}}>
                                        <div className="col-md-2" style={{display: 'flex', flexdirection: 'column'}}>
                                            <div style={{backgroundcolor: '#15cda8', width: '52px', height: '3px'}}></div>    
                                            <div></div>
                                        </div>
                                        <div className="col-md-10">
                                            <p> Love online shopping for new clothes, but hate looking at my bank account after, ya feel? We know you want a cute outfit, but, yeah, burning through a ton of money to get one can be stressful. We offer items that are just as trendy and stylish as luxe designs, but they don't make your wallet suffer thanks to the lower price tags.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Feature;