import React from 'react';
import orderXpertLogo from './OrderXpertLogo.png';
import Navigation from '../Navigation.jsx';

function HeaderService({ action }) {
  return (
    <>
      <header
        className="appie-header-area appie-header-page-area appie-sticky"
        style={{
          padding: '10px 0',
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
        }}
      >
        <div className="container">
          <div
            className="header-nav-box header-nav-box-3 header-nav-box-inner-page"
            style={{ padding: '10px 0' }} // reduce inner padding
          >
            <div className="row align-items-center">
              <div className="col-lg-2 col-md-4 col-sm-5 col-6 order-1 order-sm-1">
                <div className="appie-logo-box">
                  <a href="/">
                    <img
                      src={orderXpertLogo}
                      alt="OrderXpert Logo"
                      style={{ height: '90px', width: 'auto' }} // reduce logo size
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-md-1 col-sm-1 order-3 order-sm-2">
                <div className="appie-header-main-menu">
                  <Navigation />
                </div>
              </div>
              <div className="col-lg-4 col-md-7 col-sm-6 col-6 order-2 order-sm-3">
                <div className="appie-btn-box text-right" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '12px' }}>
                  <a className="login-btn" href="https://www.orderxperts.com/admin/public/login">
                    <i className="fal fa-user"></i> Login
                  </a>
                  <a className="main-btn" href="#">
                    Get Started
                  </a>
                  <div
                    onClick={(e) => action(e)}
                    className="toggle-btn canvas_open d-lg-none d-block"
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

export default HeaderService;
