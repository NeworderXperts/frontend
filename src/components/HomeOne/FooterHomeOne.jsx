import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import orderXpertLogo from './OrderXpertLogo.png';

function FooterHomeOne({ className }) {
    const linkStyle = { color: '#ffffff', fontSize: '16px', textDecoration: 'none' };

    return (
        <>
            <section
                className={`appie-footer-area ${className || ''}`}
                style={{ backgroundColor: '#007BFF', color: '#ffffff', paddingTop: '40px', paddingBottom: '20px' }}
            >
                <div className="container">
                    <div className="row">
                        {/* Logo */}
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="footer-about-widget">
                                <div className="logo mb-3">
                                    <a href="#">
                                        <img src={orderXpertLogo} alt="OrderXpert Logo" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Company Links */}
                        <div className="col-lg-2 col-md-6 mb-4">
                            <div className="footer-navigation">
                                <h4 className="title" style={{ fontSize: '18px', color: '#ffffff' }}>Company</h4>
                                <ul style={{ padding: 0, listStyle: 'none' }}>
                                    <li><Link to="/about-us" style={linkStyle}>About Us</Link></li>
                                    <li><Link to="/Service" style={linkStyle}>Service</Link></li>
                                    <li><a href="#" style={linkStyle}>Case Studies</a></li>
                                    <li><Link to="/news" style={linkStyle}>Blog</Link></li>
                                    <li><Link to="/contact" style={linkStyle}>Contact</Link></li>
                                </ul>
                            </div>
                        </div>

                        {/* Support Links */}
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="footer-navigation">
                                <h4 className="title" style={{ fontSize: '18px', color: '#ffffff' }}>Support</h4>
                                <ul style={{ padding: 0, listStyle: 'none' }}>
                                    <li><Link to="/about-us" style={linkStyle}>Community</Link></li>
                                    <li><a href="#" style={linkStyle}>Resources</a></li>
                                    <li><a href="#" style={linkStyle}>FAQs</a></li>
                                    <li><a href="#" style={linkStyle}>Privacy Policy</a></li>
                                    <li><a href="#" style={linkStyle}>Careers</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="col-lg-3 col-md-6 mb-0">
                            <div className="footer-widget-info">
                                <h4 className="title" style={{ fontSize: '18px', color: '#ffffff' }}>Get In Touch</h4>
                                <ul style={{ padding: 0, listStyle: 'none' }}>
                                    <li>
                                        <a href="#" style={linkStyle}>
                                            <i className="fal fa-envelope" /> Info@order-xperts.com
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" style={linkStyle}>
                                            <i className="fal fa-phone" /> Call - (206)571-7659
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" style={linkStyle}>
                                            <i className="fal fa-map-marker-alt" /> 3055 NW YEON AVE UNTT#271

Portland, OR 97210
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="d-flex justify-content-center pt-0">
                                <p style={{
                                    fontWeight: 'bold',
                                    margin: 0,
                                    fontSize: '45px',
                                    color: 'white',
                                    padding: '1px 20px',
                                }}>
                                    © 2021 Order-Xperts. All rights reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default FooterHomeOne;
