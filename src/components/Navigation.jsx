import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from './OrderXpertLogo.png';
import StickyMenu from '../lib/StickyMenu.js';

function Navigation({action}) {
    useEffect(() => {
        StickyMenu();
    });
    return (
        <>
            <header className="appie-header-area appie-header-page-area appie-sticky" style={{ backgroundColor: 'red' }}>
                <div className="container">
                    <div className="header-nav-box header-nav-box-3 header-nav-box-inner-page">
                        <div className="row align-items-center">
                            <div className="col-lg-2 col-md-4 col-sm-5 col-6 order-1 order-sm-1">
                                <div className="appie-logo-box">
                                    <a href="/">
                                        <img src={logo} alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-1 col-sm-1 order-3 order-sm-2">
                                <div className="appie-header-main-menu">
                                    <div>
                                        <ul>
                                            <li>
                                                <Link to="/">Home</Link>
                                            </li>
                                            <li>
                                                <Link to="/service">Pricing</Link>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    Products <i className="fal fa-angle-down" />
                                                </a>
                                                <ul className="sub-menu" style={{ minWidth: '380px' }}>
                                                    <li>
                                                        <Link to="/about-us">Menu-Management</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/about-us-another">customer odering website-About 2</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/error">Error/ dine in ordering</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/shops">Shops/qr menu maker</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/shops/shop-details">Shop details/ local business opitimization</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    Who Are We <i className="fal fa-angle-down" />
                                                </a>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <Link to="/news">Who Are We</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/news/single-news">Contact Us</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link to="/contact">Contact</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4  col-md-7 col-sm-6 col-6 order-2 order-sm-3">
                                <div className="appie-btn-box text-right">
                                    <a className="login-btn" href="#">
                                        <i className="fal fa-user"></i> Login
                                    </a>
                                    <a className="main-btn ml-30" href="#">
                                        Get Started
                                    </a>
                                    <div
                                        onClick={(e) => action(e)}
                                        className="toggle-btn ml-30 canvas_open d-lg-none d-block"
                                    >
                                        <i className="fa fa-bars"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    );
}



export default Navigation;
