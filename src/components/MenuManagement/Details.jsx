import React, { useRef, useState } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import qrImage from "./loc.webp";
import useToggle from "../../Hooks/useToggle.js";
import BackToTop from "../BackToTop.jsx";
import FooterHomeOne from "../HomeOne/FooterHomeOne.jsx";
import Drawer from "../Mobile/Drawer.jsx";
import { LuSmartphone, LuClock, LuRefreshCcw } from "react-icons/lu";
import { FaLeaf, FaHandHoldingUsd, FaKeyboard } from "react-icons/fa";
import { TbSeo } from "react-icons/tb";
import { PiNotePencilBold } from "react-icons/pi";
import Navigation from "../Navigation.jsx";
import Image1 from './1image.jpg';
import Image2 from './2image.jpg';
import Image3 from './3image.webp';

function Details() {
  const [drawer, drawerAction] = useToggle(false);
  const [quantity, setQuantity] = useState(1);
  const [detailsTab, setTab] = useState("review");
  const detailsTabHandler = (e, value) => {
    e.preventDefault();
    setTab(value);
  };
  const sliderRef = useRef();
  const miniSliderRef = useRef();
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
  };
  const rlProductSettings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const quantityHandler = (e) => {
    setQuantity(e.target.value);
  };
  const inputStyle = {
    padding: "15px",
    borderRadius: "30px",
    border: "none",
    fontSize: "1rem",
    marginTop: "10px",
  };

  return (
    <>
      <Drawer drawer={drawer} action={drawerAction.toggle} />
      <Navigation action={drawerAction.toggle} />
      <section
        style={{
          marginTop: "100px",
          width: "100%",
          backgroundColor: "#ffffff",
          padding: "100px 60px",
          boxSizing: "border-box",
          fontFamily: "Arial, sans-serif",
        
        }}
      >
        <div>
          {/* Top Heading */}
          <h2
            style={{
              fontSize: "3rem",
            fontWeight: "800",
            lineHeight: "1.2",
            marginBottom: "60px",
            textAlign: "center",
            borderBottom: "2px solid black",
            paddingBottom: "10px",
            }}
          >
            Boost Your Restaurant’s Visibility with <br />
            <span style={{ color: "#F39C12" }}>
              Local SEO That Brings More Customers
            </span>
          </h2>

          {/* QR Image */}
          <div style={{ marginTop: "60px", width: "100%" }}>
            <img
              src={qrImage}
              alt="Restaurant QR Code App"
              style={{
                width: "100%",
              height: "auto",
              maxHeight: "700px",
              maxWidth: "1500px",
              borderRadius: "30px",
              boxShadow: "0 20px 50px grey",
              }}
            />
          </div>

          {/* Description */}
          <p
            style={{
             border: "2px solid black",
            marginTop: "60px",
            fontSize: "1.75rem",
            color: "black",
            lineHeight: "1.6",
            width: "100%",
            textAlign: "center",
            borderRadius: "20px",
            }}
          >
            Make it easy for customers to find you! With consistent info like hours, menu, and contact details across all platforms, your restaurant stands out and stays trusted.
          </p>

          {/* Why Choose Orders-Xperts Section */}
           <div style={{ marginTop: "100px", textAlign: "center" }}>
      <h2
        style={{
          fontSize: "3rem",
          fontWeight: "800",
          marginBottom: "60px",
          borderBottom: "2px solid black",
        }}
      >
        Why Choose <span style={{ color: "#F39C12" }}>OrdersXperts</span>
      </h2>

      {/* Top 3 Cards */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "30px",
          marginBottom: "30px",
        }}
      >
        {/* Real-Time Listing Updates */}
        <div
          style={{
            backgroundColor: "rgb(244, 96, 54)",
            color: "white",
            padding: "40px",
            borderRadius: "16px",
            width: "300px",
            fontSize: "1.3rem",
            fontWeight: "bold",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <LuRefreshCcw size={40} style={{ marginBottom: "10px" }} />
          Real-Time Listing Updates
        </div>

        {/* Multi-Platform Visibility */}
        <div
          style={{
            backgroundColor: "white",
            color: "black",
            padding: "40px",
            borderRadius: "16px",
            width: "300px",
            fontSize: "1.3rem",
            fontWeight: "bold",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: "2px solid black",
          }}
        >
          <FaKeyboard size={40} style={{ marginBottom: "10px" }} />
          Multi-Platform Visibility
        </div>

        {/* SEO-Enhanced Ranking */}
        <div
          style={{
            backgroundColor: "rgb(244, 96, 54)",
            color: "white",
            padding: "40px",
            borderRadius: "16px",
            width: "300px",
            fontSize: "1.3rem",
            fontWeight: "bold",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TbSeo size={40} style={{ marginBottom: "10px" }} />
          SEO-Enhanced Local Search Ranking
        </div>
      </div>

      {/* Bottom Card */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            backgroundColor: "rgb(244, 96, 54)",
            color: "white",
            padding: "40px",
            borderRadius: "16px",
            width: "300px",
            fontSize: "1.3rem",
            fontWeight: "bold",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "30px",
          }}
        >
          <PiNotePencilBold size={40} style={{ marginBottom: "10px" }} />
          Comprehensive Review Management
        </div>
      </div>
    </div>
          {/* Local Optimization Section */}
          <div
            style={{
              marginTop: "100px",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "40px",
              border: "2px solid black",
              padding: "60px",
            }}
          >
            {/* Left Heading */}
            <div style={{ flex: "1 1 400px" }}>
              <h2
                style={{
                  fontSize: "3rem",
                  fontWeight: "800",
                  lineHeight: "1.2",
                }}
              >
                Why Does{" "}
                <span style={{ color: "orange" }}>
                  Local Restaurant
                  <br />
                  Business Optimization
                </span>{" "}
                <br />
                Matters?
              </h2>
            </div>

            {/* Right Stats */}
            <div
              style={{
                flex: "1 1 400px",
                display: "flex",
                flexDirection: "column",
                gap: "30px",
                fontSize: "1.5rem",
                color: "#333",
              }}
            >
              <div style={{ fontWeight: "700", color: "orange" }}>
                62%{" "}
                <span style={{ fontWeight: "400", color: "#333" }}>
                  of diners use Google to search for restaurants.
                </span>
              </div>
              <div style={{ fontWeight: "700", color: "orange" }}>
                67%{" "}
                <span style={{ fontWeight: "400", color: "#333" }}>
                  of diners look up reviews before making a decision.
                </span>
              </div>
              <div style={{ fontWeight: "700", color: "orange" }}>
                7X{" "}
                <span style={{ fontWeight: "400", color: "#333" }}>
                  more views are received on a restaurant's Google Business
                  profile compared to its website.
                </span>
              </div>
            </div>
          </div>
          {/* POS / Restaurants / Delivery Section */}
          <div
            style={{
              marginTop: "100px",
              padding: "60px",
              backgroundColor: "#f5f5f5",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "40px",
              borderRadius: "20px",
            }}
          >
            {/* POS Integrations */}
            <div
              style={{
                backgroundColor: "#fff",
                padding: "40px",
                borderRadius: "30px",
                width: "300px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                textAlign: "center",
              }}
            >
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  marginBottom: "30px",
                }}
              >
                30+ POS Integrations
              </h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "15px",
                  fontSize: "1rem",
                }}
              >
                <span>🟢 Clover</span>
                <span>⬛ Square</span>
                <span>🔵 PAR | Brink POS</span>
                <span>⬛ THRIVE</span>
                <span>🔵 Olo</span>
                <span>{`{ OMNIVORE }`}</span>
              </div>
              <button
                style={{
                  marginTop: "30px",
                  padding: "10px 20px",
                  borderRadius: "10px",
                  border: "1px solid black",
                  backgroundColor: "white",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                See more
              </button>
            </div>

            {/* Restaurants We Serve */}
            <div
              style={{
                backgroundColor: "#fff",
                padding: "40px",
                borderRadius: "30px",
                width: "300px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                textAlign: "center",
              }}
            >
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  marginBottom: "30px",
                }}
              >
                Restaurants We Serve
              </h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                }}
              >
                {[
                  "Chain Restaurants",
                  "Ghost Kitchen",
                  "Independent Restaurants",
                  "Q-Commerce",
                ].map((label, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: `linear-gradient(to right, rgb(244, 96, 54), #004e92)`,
                      padding: "12px",
                      borderRadius: "30px",
                      color: "white",
                      fontWeight: "600",
                    }}
                  >
                    {label}
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery Everywhere */}
            <div
              style={{
                backgroundColor: "white",
                padding: "40px",
                borderRadius: "30px",
                width: "300px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                textAlign: "center",
              }}
            >
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  marginBottom: "30px",
                }}
              >
                Delivery Everywhere
              </h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "15px",
                  fontSize: "1rem",
                }}
              >
                <span style={{ color: "#f23d3d" }}>DOORDASH</span>
                <span style={{ color: "#0f9d58" }}>Uber Eats</span>
                <span>Postmates</span>
                <span style={{ color: "#32b44a" }}>ez cater</span>
                <span style={{ color: "#007bff" }}>delivery.com</span>
                <span style={{ color: "#f68b1f" }}>GRUBHUB</span>
                <span style={{ color: "#f06423" }}>doocado</span>
              </div>
            </div>
          </div>
          {/* 2500 Orders CTA Section */}
          <div
            style={{
              marginTop: "100px",
              backgroundColor: "#1c1c1c",
              padding: "100px 20px",
              textAlign: "center",
              borderRadius: "20px",
              color: "#fff",
            }}
          >
            <h2
              style={{
                fontSize: "3.5rem",
                fontWeight: "800",
                marginBottom: "40px",
                background: "linear-gradient(to right, orange, orangered)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Have More Than 2,500 Orders <br /> Annually?
            </h2>

            <button
              style={{
                marginTop: "20px",
                padding: "15px 30px",
                backgroundColor: "orange",
                border: "none",
                borderRadius: "8px",
                color: "#fff",
                fontWeight: "bold",
                fontSize: "1rem",
                cursor: "pointer",
                transition: "background 0.3s ease",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#e07a00")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "orange")
              }
            >
              EXPLORE OUR REGULAR PACKAGES
            </button>
          </div>
          {/* Latest Blog Posts Section */}
          <div style={{ marginTop: "100px", padding: "0 60px" }}>
            <h2
              style={{
                fontSize: "3rem",
                fontWeight: "800",
                marginBottom: "40px",
                textAlign: "center",
                borderBottom: "2px solid black",
              }}
            >
              Our Latest <span style={{ color: "orange" }}>Blog</span> Posts
            </h2>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "40px",
                justifyContent: "center",
              }}
            >
              {/* === Blog Card 1 === */}
              <div style={{ width: "350px" , border: "2px solid black", padding: "20px", borderRadius: "20px" }}>
                <div style={{ position: "relative" }}>
                  <img
                    src={Image1}
                    alt="Blog"
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "20px",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "10px",
                      left: "10px",
                      backgroundColor: "#fff",
                      padding: "5px 12px",
                      borderRadius: "20px",
                      fontSize: "0.9rem",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    🕒 8 Min Read
                  </div>
                </div>

                <div style={{ marginTop: "20px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      fontSize: "0.85rem",
                      color: "#888",
                      marginBottom: "10px",
                    }}
                  >
                    <span
                      style={{
                        backgroundColor: "orange",
                        color: "white",
                        padding: "3px 10px",
                        borderRadius: "10px",
                        fontSize: "0.8rem",
                        fontWeight: "600",
                      }}
                    >
                      POS
                    </span>
                    <span>July 03, 2025</span>
                  </div>
                  <h3
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: "700",
                      marginBottom: "10px",
                    }}
                  >
                    Why Mobile And Tablet-Based POS Flexibility Matters For
                    Hybrid Catering In 2025?
                  </h3>
                  <p style={{ color: "#555", fontSize: "1rem" }}>
                    If you’re running a catering business in 2025, you’re
                    probably doing more than just hosting events...
                  </p>
                </div>
              </div>

              {/* === Blog Card 2 === */}
              <div style={{ width: "350px" , border: "2px solid black", padding: "20px", borderRadius: "20px" }}>
                <div style={{ position: "relative" }}>
                  <img
                    src={Image2}
                    alt="Blog"
                    style={{
                      width: "100%",
                      height: "auto",
                      maxHeight: "220px",
                      borderRadius: "20px",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "10px",
                      left: "10px",
                      backgroundColor: "#fff",
                      padding: "5px 12px",
                      borderRadius: "20px",
                      fontSize: "0.9rem",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    🕒 7 Min Read
                  </div>
                </div>

                <div style={{ marginTop: "20px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      fontSize: "0.85rem",
                      color: "#888",
                      marginBottom: "10px",
                    }}
                  >
                    <span
                      style={{
                        backgroundColor: "orange",
                        color: "white",
                        padding: "3px 10px",
                        borderRadius: "10px",
                        fontSize: "0.8rem",
                        fontWeight: "600",
                      }}
                    >
                      POS
                    </span>
                    <span>July 03, 2025</span>
                  </div>
                  <h3
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: "700",
                      marginBottom: "10px",
                    }}
                  >
                    Essential Catering POS Features Every Caterer Needs For
                    Hybrid Catering In 2025
                  </h3>
                  <p style={{ color: "#555", fontSize: "1rem" }}>
                    Why a catering POS is essential in 2025. Catering isn’t just
                    for weddings anymore...
                  </p>
                </div>
              </div>

              {/* === Blog Card 3 === */}
              <div style={{ width: "350px", border: "2px solid black", padding: "20px", borderRadius: "20px" }}>
                <div style={{ position: "relative" }}>
                  <img
                    src={Image3}
                    alt="Blog"
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "20px",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "10px",
                      left: "10px",
                      backgroundColor: "#fff",
                      padding: "5px 12px",
                      borderRadius: "20px",
                      fontSize: "0.9rem",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    🕒 8 Min Read
                  </div>
                </div>

                <div style={{ marginTop: "20px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      fontSize: "0.85rem",
                      color: "#888",
                      marginBottom: "10px",
                    }}
                  >
                    <span
                      style={{
                        backgroundColor: "orange",
                        color: "white",
                        padding: "3px 10px",
                        borderRadius: "10px",
                        fontSize: "0.8rem",
                        fontWeight: "600",
                      }}
                    >
                      Local Business Optimization
                    </span>
                    <span>July 02, 2025</span>
                  </div>
                  <h3
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: "700",
                      marginBottom: "10px",
                    }}
                  >
                    Mastering Online Presence: Yelp Strategies For Restaurant
                    Success
                  </h3>
                  <p style={{ color: "#555", fontSize: "1rem" }}>
                    If you’re not showing up on Yelp in 2025, diners still trust
                    Yelp to guide their next...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterHomeOne />
      <BackToTop />
    </>
  );
}

export default Details;
