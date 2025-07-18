import React, { useState } from "react";

function NewsletterSignup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contentType: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Subscribed!");
  };

  return (
    <div className="newsletter-container text-dark p-4 rounded-4 shadow" style={{ margin: 0 }}>

      <div className="row align-items-center">
        {/* Left text section */}
        <div className="col-md-6 mb-4 mb-md-0">
          <h2 className="fw-bold display-5 mb-3">
            Your Inbox, <br /> <span className="text-blue">Your Rules!</span>
          </h2>
          <p className="fs-5">
            Tailor your newsletter with the topics you're most interested in.
          </p>
        </div>

        {/* Right form section */}
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="form-control form-control-lg rounded-pill"
                  required
                />
              </div>
              <div className="col">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="form-control form-control-lg rounded-pill"
                  required
                />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control form-control-lg rounded-pill"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Preferred Content Type</label>
              <select
                name="contentType"
                value={formData.contentType}
                onChange={handleChange}
                className="form-select form-select-lg rounded-pill"
                required
              >
                <option value="">Select an option</option>
                <option value="blog">Blog Articles</option>
                <option value="news">Industry News</option>
                <option value="offers">Exclusive Offers</option>
              </select>
            </div>
            <button
              type="submit"
              className="btn btn-blue-gradient px-5 py-2 rounded-pill fw-bold mt-2"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      {/* Inline styles for component */}
      <style>{`
        .newsletter-container {
          background-color: #ffffff;
          color: #1a1a1a;
        }
        .text-blue {
          color: #007bff;
        }
        .btn-blue-gradient {
          background: linear-gradient(to right, #007bff, #0056b3);
          color: #fff;
          border: none;
        }
        .btn-blue-gradient:hover {
          background: linear-gradient(to right, #0056b3, #003a80);
        }
      `}</style>
    </div>
  );
}

export default NewsletterSignup;
