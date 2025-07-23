import React from "react";
import qrImage from "./qr.jpg"; // Ensure path is correct
import { LuSmartphone, LuClock } from "react-icons/lu";
import { FaLeaf, FaHandHoldingUsd } from "react-icons/fa";
const QRMenuSection = () => {
  return (
    <section
      style={{
        margin: "110px auto",
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
          Simplify Your Menu Updates With Real-Time <br />
          <span style={{ color: "#F39C12" }}>
            Our Real-Time Restaurant QR Code App
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
          Enhance the dining experience with ease and flexibility. QR menus
          allow your customers to browse and select their meals ahead of time,
          reduce wait times, and view vivid images of each dish — all while
          cutting down on printing expenses for your restaurant.
        </p>

        {/* Why Do QR Menus Matter Section */}
        <div
          style={{
            marginTop: "100px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2
            style={{
              fontSize: "3rem",
              fontWeight: "800",
              marginBottom: "60px",
              textAlign: "center",
            borderBottom: "2px solid black",
            }}
          >
            Why Do <span style={{ color: "orange" }}>QR Menus</span> Matter?
          </h2>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "80px",
              maxWidth: "1200px",
              textAlign: "center",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "3rem",
                  fontWeight: "bold",
                  color: "orange",
                }}
              >
                30%
              </div>
              <p style={{ fontSize: "1.2rem", maxWidth: "250px" }}>
                reduction in menu printing costs by using QR Menus.
              </p>
            </div>

            <div>
              <div
                style={{
                  fontSize: "3rem",
                  fontWeight: "bold",
                  color: "orange",
                }}
              >
                78%
              </div>
              <p style={{ fontSize: "1.2rem", maxWidth: "250px" }}>
                of customers enjoy QR code menu ordering.
              </p>
            </div>

            <div>
              <div
                style={{
                  fontSize: "3rem",
                  fontWeight: "bold",
                  color: "orange",
                }}
              >
                75%
              </div>
              <p style={{ fontSize: "1.2rem", maxWidth: "250px" }}>
                of restaurants use QR codes, increasing engagement by 40%.
              </p>
            </div>

            <div>
              <div
                style={{
                  fontSize: "3rem",
                  fontWeight: "bold",
                  color: "orange",
                }}
              >
                51%
              </div>
              <p style={{ fontSize: "1.2rem", maxWidth: "250px" }}>
                of 2,500 US consumers say QR code menus improve satisfaction.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Orders-xperts Section */}
        <div style={{ marginTop: "100px", textAlign: "center" }}>
      <h2
        style={{
          fontSize: "3rem",
          fontWeight: "800",
          marginBottom: "60px",
          textAlign: "center",
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
        {/* 100% Free For All */}
        <div
          style={{
            backgroundColor: "rgb(244, 96, 54)",
            color: "white",
            padding: "40px",
            borderRadius: "16px",
            width: "300px",
            fontSize: "1.5rem",
            fontWeight: "bold",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FaHandHoldingUsd size={40} style={{ marginBottom: "10px" }} />
          100% Free For All
        </div>

        {/* For Both iOS And Android OS */}
        <div
          style={{
            backgroundColor: "white",
            color: "black",
            padding: "40px",
            borderRadius: "16px",
            width: "300px",
            fontSize: "1.5rem",
            fontWeight: "bold",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid rgb(244, 96, 54)",
          }}
        >
          <LuSmartphone size={40} style={{ marginBottom: "10px" }} />
          For Both iOS And Android OS
        </div>

        {/* Eco-Friendly */}
        <div
          style={{
            backgroundColor: "rgb(244, 96, 54)",
            color: "white",
            padding: "40px",
            borderRadius: "16px",
            width: "300px",
            fontSize: "1.5rem",
            fontWeight: "bold",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FaLeaf size={40} style={{ marginBottom: "10px" }} />
          Eco-Friendly
        </div>
      </div>

      {/* 24/7 Customer Support */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "rgb(244, 96, 54)",
            color: "white",
            padding: "40px",
            borderRadius: "16px",
            width: "300px",
            fontSize: "1.5rem",
            fontWeight: "bold",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <LuClock size={40} style={{ marginBottom: "10px" }} />
          24/7 Customer Support
        </div>
      </div>
    </div>
      </div>
    </section>
  );
};

export default QRMenuSection;
