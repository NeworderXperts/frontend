import React from 'react';
import Image1 from './1image.jpg';
import Image2 from './2image.jpg';
import Image3 from './3image.webp';

const blogData = [
  {
    readTime: "8 Min Read",
    categories: ["Catering" ],
    date: "June 12, 2025",
    title: "How To Make A Catering Menu: A Step-by-Step Guide For Restaurants",
    description:
      "If you’re looking to grow your catering business, your menu is a good place to start. A well-...",
    image: Image1,
  },
  {
    readTime: "9 Min Read",
    categories: ["Local Business Optimization"],
    date: "June 12, 2025",
    title: "Restaurant Online Visibility: 10 Proven Strategies To Boost Your Digital Presence In 2025",
    description:
      "Being listed online isn’t enough. Customers need to find your restaurant easily and have a ...",
    image: Image2,
  },
  {
    readTime: "8 Min Read",
    categories: ["Menu Management"],
    date: "June 01, 2025",
    title: "5 Best Restaurant Menu Design Software Options To Elevate Your Online Orders",
    description:
      "Your menu is often the first thing customers see, online or in person. Most people will look at yo...",
    image: Image3,
  },
];

function BlogCardSection() {
  return (
    <div className="blog-card-section">
      {blogData.map((blog, index) => (
        <div className="blog-card" key={index}>
          <div className="image-container">
            <img src={blog.image} alt={blog.title} className="card-image" />
            <div className="read-time">
              <span role="img" aria-label="clock">🕒</span> {blog.readTime}
            </div>
          </div>

          <div className="card-content">
            <div className="meta">
              {blog.categories.map((cat, i) => (
                <span className="badge" key={i}>{cat}</span>
              ))}
              <span className="date">{blog.date}</span>
            </div>
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>
          </div>
        </div>
      ))}

      <style>{`
        .blog-card-section {
          display: flex;
          gap: 24px;
          flex-wrap: wrap;
          justify-content: center;
          padding: 60px 20px;
          background: #f0f2f5;
        }

        .blog-card {
          background: #ffffff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
          max-width: 360px;
          width: 100%;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          animation: fadeInUp 0.7s ease forwards;
          opacity: 0;
        }

        .blog-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 30px rgba(0, 123, 255, 0.2);
        }

        .image-container {
          position: relative;
        }

        .card-image {
          width: 100%;
          height: 220px;
          object-fit: cover;
          border-top-left-radius: 20px;
          border-top-right-radius: 20px;
        }

        .read-time {
          position: absolute;
          bottom: 10px;
          left: 10px;
          background: white;
          color: #007bff;
          font-weight: 600;
          padding: 4px 12px;
          border-radius: 999px;
          font-size: 0.85rem;
          display: flex;
          align-items: center;
          gap: 5px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
        }

        .card-content {
          padding: 20px;
        }

        .meta {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 10px;
        }

        .badge {
          background: linear-gradient(to right, #007bff, #0056b3);
          color: white;
          font-weight: 600;
          font-size: 0.75rem;
          padding: 4px 10px;
          border-radius: 999px;
          transition: transform 0.3s ease;
        }

        .badge:hover {
          transform: scale(1.1);
        }

        .date {
          font-size: 0.85rem;
          color: #666;
          margin-left: auto;
        }

        h3 {
          font-size: 1.25rem;
          font-weight: bold;
          margin: 12px 0;
          color: #1a1a1a;
        }

        p {
          font-size: 0.95rem;
          color: #444;
        }

        @media (max-width: 768px) {
          .blog-card-section {
            flex-direction: column;
            align-items: center;
          }
        }

        @keyframes fadeInUp {
          0% {
            transform: translateY(30px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

export default BlogCardSection;
