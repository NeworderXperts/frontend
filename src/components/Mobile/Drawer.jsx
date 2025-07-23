import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from './OrderXpertLogo.png';

function Drawer({ drawer, action }) {
  const [item, setItem] = useState("");

  const toggleDropdown = (e, value) => {
    e.preventDefault();
    setItem((prev) => (prev === value ? "" : value));
  };

  return (
    <>
      <div onClick={action} className={`off_canvars_overlay ${drawer ? "active" : ""}`} />

      <div className="offcanvas_menu">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className={`offcanvas_menu_wrapper ${drawer ? "active" : ""}`}>

                {/* Close Button */}
                <div className="canvas_close">
                  <button onClick={action} className="close-btn">
                    <i className="fa fa-times"></i>
                  </button>
                </div>

                {/* Logo */}
                <div className="offcanvas-brand text-center mb-40">
                  <img src={logo} alt="OrderXpert Logo" />
                </div>

                {/* Menu */}
                <div id="menu" className="text-left">
                  <ul className="offcanvas_main_menu">

                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/service">Pricing</Link></li>

                    {/* Features Dropdown */}
                    <li className="menu-item-has-children">
                      <div
                        onClick={(e) => toggleDropdown(e, "features")}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          width: "100%",
                          padding: "10px 0",
                          cursor: "pointer",
                          color: "#000",
                        }}
                      >
                        <span>Features</span>
                        <i className="fa fa-angle-down" style={{ fontSize: "14px" }}></i>
                      </div>
                      <ul
                        className="sub-menu"
                        style={{
                          height: item === "features" ? "172px" : "0px",
                          overflow: "hidden",
                          transition: "height 0.3s ease",
                        }}
                      >
                        <li><Link to="/about-us">Menu-Management</Link></li>
                        <li><Link to="/about-us-another">Customer ordering website</Link></li>
                        <li><Link to="/shops">QR menu maker</Link></li>
                        <li><Link to="/shops/shop-details">Local business optimization</Link></li>
                      </ul>
                    </li>

                    {/* Who Are We Dropdown */}
                    <li className="menu-item-has-children">
                      <div
                        onClick={(e) => toggleDropdown(e, "about")}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          width: "100%",
                          padding: "10px 0",
                          cursor: "pointer",
                          color: "#000",
                        }}
                      >
                        <span>Who Are We</span>
                        <i className="fa fa-angle-down" style={{ fontSize: "14px" }}></i>
                      </div>
                      <ul
                        className="sub-menu"
                        style={{
                          height: item === "about" ? "86px" : "0px",
                          overflow: "hidden",
                          transition: "height 0.3s ease",
                        }}
                      >
                        <li><Link to="/news">Who Are We</Link></li>
                        <li><Link to="/news/single-news">Contact Us</Link></li>
                      </ul>
                    </li>

                    <li><Link to="/contact">Contact</Link></li>
                  </ul>
                </div>

                {/* Social Links */}
                <div className="offcanvas-social">
                  <ul className="text-center">
                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="#"><i className="fab fa-dribbble"></i></a></li>
                  </ul>
                </div>

                {/* Contact Info */}
                <div className="footer-widget-info">
                  <ul>
                    <li>
                      <a href="mailto:Info@order-xperts.com">
                        <i className="fal fa-envelope"></i> Info@order-xperts.com
                      </a>
                    </li>
                    <li>
                      <a href="tel:+12065717659">
                        <i className="fal fa-phone"></i> Call - (206)571-7659
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.google.com/maps/place/3055+NW+YEON+AVE+UNTT%23271+Portland,+OR+97210"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fal fa-map-marker-alt"></i> 3055 NW YEON AVE UNTT#271, Portland, OR 97210
                      </a>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Drawer;
