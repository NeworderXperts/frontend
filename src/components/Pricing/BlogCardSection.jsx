import React from 'react';
import Image1 from './1image.jpg';
import Image2 from './2image.jpg';
import Image3 from './3image.webp';

const blogData = [
  {
    readTime: '8 Min Read',
    categories: ['Catering'],
    date: 'June 12, 2025',
    title: 'How To Make A Catering Menu: A Step-by-Step Guide For Restaurants',
    description:
      'If you’re looking to grow your catering business, your menu is a good place to start. A well-...',
    image: Image1,
  },
  {
    readTime: '9 Min Read',
    categories: ['Local Business Optimization'],
    date: 'June 12, 2025',
    title:
      'Restaurant Online Visibility: 10 Proven Strategies To Boost Your Digital Presence In 2025',
    description:
      'Being listed online isn’t enough. Customers need to find your restaurant easily and have a ...',
    image: Image2,
  },
  {
    readTime: '8 Min Read',
    categories: ['Menu Management'],
    date: 'June 01, 2025',
    title: '5 Best Restaurant Menu Design Software Options To Elevate Your Online Orders',
    description:
      'Your menu is often the first thing customers see, online or in person. Most people will look at yo...',
    image: Image3,
  },
];

function BlogCardSection() {
  return (
    <div
      style={{
        // marginTop: '200px',
        display: 'flex',
        gap: '24px',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: '60px 20px',
        background: '#f0f2f5',
      }}
    >
      {blogData.map((blog, index) => (
        <div
          key={index}
          style={{
            background: '#ffffff',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
            maxWidth: '360px',
            width: '100%',
            transition: 'transform 0.4s ease, box-shadow 0.4s ease',
            animation: 'fadeInUp 0.7s ease forwards',
            opacity: 1,
          }}
        >
          <div style={{ position: 'relative' }}>
            <img
              src={blog.image}
              alt={blog.title}
              style={{
                width: '100%',
                height: '220px',
                objectFit: 'cover',
                borderTopLeftRadius: '20px',
                borderTopRightRadius: '20px',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '10px',
                left: '10px',
                background: 'white',
                color: 'rgb(243, 156, 18)',
                fontWeight: 600,
                padding: '4px 12px',
                borderRadius: '999px',
                fontSize: '0.85rem',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
              }}
            >
              <span role="img" aria-label="clock">
                🕒
              </span>{' '}
              {blog.readTime}
            </div>
          </div>

          <div style={{ padding: '20px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '8px',
                marginBottom: '10px',
              }}
            >
              {blog.categories.map((cat, i) => (
                <span
                  key={i}
                  style={{
                    background: 'linear-gradient(to right, #007bff, rgb(243, 156, 18))',
                    color: 'white',
                    fontWeight: 600,
                    fontSize: '0.75rem',
                    padding: '4px 10px',
                    borderRadius: '999px',
                    transition: 'transform 0.3s ease',
                  }}
                >
                  {cat}
                </span>
              ))}
              <span
                style={{
                  fontSize: '0.85rem',
                  color: '#666',
                  marginLeft: 'auto',
                }}
              >
                {blog.date}
              </span>
            </div>

            <h3
              style={{
                fontSize: '1.25rem',
                fontWeight: 'bold',
                margin: '12px 0',
                color: '#1a1a1a',
              }}
            >
              {blog.title}
            </h3>
            <p
              style={{
                fontSize: '0.95rem',
                color: '#444',
              }}
            >
              {blog.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogCardSection;
