import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import teamImage from "./1image.jpg";
import foodImage from "./food.png";

const features = [
  "We help restaurants innovate and lead, rather than playing catch-up.",
  "We help restaurants create extra revenue channels through software and technology solutions.",
  "We allow restaurants to concentrate on the things they enjoy the most – cooking and running their restaurant.",
];

const leaders = [
  // { name: "Arsen Stepanyan", title: "Chief Executive Officer" },
  // { name: "Ashot Bayatyan", title: "Chief Technology Officer" },
  // { name: "Harry Ayvazyan", title: "Business Development" },
];

const locations = [{ title: "All Over Country", subtitle: "United States" }];

const TeamSection = () => {
  return (
    <section className="w-100" style={{ marginTop: "150px" }}>
      {/* Heading */}
      <motion.div
        className="text-center py-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="fw-bold" style={{ fontSize: "3rem" }}>
          The <span style={{ color: "rgb(243, 156, 18)" }}>Team</span> Behind
          You
        </h1>
      </motion.div>

      {/* Team Image */}
      <motion.div
        className="d-flex justify-content-center mb-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <img
          src={teamImage}
          alt="Team Orders.co"
          className="img-fluid"
          style={{
            width: "100%",
            maxWidth: "1200px",
            height: "500px",
            objectFit: "cover",
            borderRadius: "12px",
          }}
        />
      </motion.div>

      {/* Mission Text */}
      <div className="container text-center" style={{ maxWidth: "1000px" }}>
        {[
          "At Order-Xpert, our mission is simple: to empower restaurants to maximize their revenue potential through a smart, seamless online ordering system. Whether you're a local diner, a family-owned spot, or a growing franchise, the right digital tools can transform your business.",
          "We understand the restaurant industry because we've been in your shoes. We've felt the challenges of day-to-day operations and the limitations of outdated online platforms. You want to focus on delivering amazing food and experiences — not battle clunky tech. That’s exactly why we built Order-Xpert.",
          "In today’s fast-moving, AI-driven world, we knew there had to be a better way to manage orders and grow customer relationships. With intelligent automation, behavior-based messaging, loyalty features, and more — Order-Xpert gives you a powerful yet effortless way to take control of your online presence and scale your success.",
        ].map((para, i) => (
          <motion.p
            key={i}
            className="text-muted"
            style={{
              fontSize: "1.25rem",
              marginBottom: i !== 2 ? "2rem" : "0",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            {para}
          </motion.p>
        ))}
      </div>

      {/* Features */}
      <div className="container my-5" style={{ maxWidth: "1000px" }}>
        <div className="text-center py-4">
          <h1 className="fw-bold" style={{ fontSize: "3rem" }}>
            What <span style={{ color: "rgb(243, 156, 18)" }}>Order-Xpert</span>{" "}
            Does for You
          </h1>
        </div>
        {features.map((text, index) => (
          <motion.div
            key={index}
            className="d-flex align-items-center mb-5"
            style={{ gap: "20px" }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div
              style={{
                fontSize: "4rem",
                fontWeight: "700",
                color: "#f0f0f0",
                minWidth: "60px",
              }}
            >
              {index + 1}
            </div>
            <div
              style={{
                backgroundColor: "#fff",
                padding: "20px 25px",
                borderRadius: "25px",
                boxShadow: "0 8px 18px rgba(0,0,0,0.07)",
                fontSize: "1.1rem",
                flex: 1,
                transition: "box-shadow 0.3s ease",
              }}
            >
              {text}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Leaders */}
      <div className="container my-5">
        <div className="row justify-content-center">
          {leaders.map((leader, index) => (
            <motion.div
              className="col-md-4 text-center mb-4"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              viewport={{ once: true }}
              style={{ transition: "box-shadow 0.3s ease-in-out" }}
            >
              <img
                src={teamImage}
                alt={leader.name}
                className="img-fluid"
                style={{
                  borderRadius: "20px",
                  maxWidth: "220px",
                  height: "auto",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
                  transition: "box-shadow 0.3s ease",
                }}
              />
              <h5
                className="mt-3 mb-1"
                style={{ fontWeight: "600", color: "#7a7a7a" }}
              >
                {leader.name}
              </h5>
              <h6 className="fw-bold">{leader.title}</h6>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Locations */}
      <div className="container text-center mb-5">
        <h1
          className="fw-bold"
          style={{
            color: "black",
            marginBottom: "30px",
            borderBottom: "2px solid black",
            display: "inline-block",
          }}
        >
          “Serving Restaurants Across the{" "}
          <span style={{ color: "rgb(243, 156, 18)" }}>United States</span>”
        </h1>

        <div className="row justify-content-center">
          {locations.map((location, index) => (
            <motion.div
              className="col-md- mb-3"
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div style={{ position: "relative" }}>
                <img
                  src={foodImage}
                  alt={location.title}
                  className="img-fluid"
                  style={{
                    borderRadius: "20px",
                    height: "550px",
                    objectFit: "cover",
                    width: "100%",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                    transition: "box-shadow 0.3s ease",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "20px",
                    left: "0",
                    right: "0",
                    textAlign: "center",
                    color: "#fff",
                    fontWeight: "600",
                    textShadow: "0 0 10px rgba(0,0,0,0.5)",
                  }}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
