import React, { useState } from 'react';
import shopImage from './1.avif'; // Ensure this path is correct

const BootstrapStyleCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      title: 'First slide label',
      description: 'Some representative placeholder content for the first slide.'
    },
    {
      title: 'Second slide label',
      description: 'Some representative placeholder content for the second slide.'
    },
    {
      title: 'Third slide label',
      description: 'Some representative placeholder content for the third slide.'
    }
  ];

  const goToPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      {/* Carousel Section */}
      <div
        id="carouselExampleCaptions"
        className="custom-carousel"
        style={{
          width: '1200px',
          margin: '0 auto',
          overflow: 'hidden',
          borderRadius: '20px',
          position: 'relative',
        }}
      >
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
              style={{ display: index === activeIndex ? 'block' : 'none' }}
            >
              <img src={shopImage} alt={slide.title} style={{ width: '100%', display: 'block' }} />
              <div
                className="carousel-caption"
                style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '30px',
                  color: 'white',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  padding: '15px',
                  borderRadius: '12px'
                }}
              >
                <h5>{slide.title}</h5>
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={goToPrev}
          style={{
            position: 'absolute',
            top: '50%',
            left: '10px',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(0,0,0,0.4)',
            color: 'white',
            border: 'none',
            padding: '12px',
            borderRadius: '50%',
            cursor: 'pointer',
            fontSize: '1.5rem'
          }}
        >
          ‹
        </button>

        <button
          onClick={goToNext}
          style={{
            position: 'absolute',
            top: '50%',
            right: '10px',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(0,0,0,0.4)',
            color: 'white',
            border: 'none',
            padding: '12px',
            borderRadius: '50%',
            cursor: 'pointer',
            fontSize: '1.5rem'
          }}
        >
          ›
        </button>
      </div>

      {/* Special Offer Section */}
      <section
        style={{
          padding: '50px 100px',
          maxWidth: '1300px',
          margin: '0 auto',
          fontFamily: 'Arial, sans-serif',
          border: '2px solid black',
          marginTop: '60px',
          marginBottom: '40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '40px'
          }}
        >
          {/* Left Side */}
          <div style={{ flex: 1, minWidth: '300px' }}>
            <h2
              style={{
                fontSize: '2.5rem',
                fontWeight: '800',
                marginBottom: '30px',
                lineHeight: '1.3'
              }}
            >
              <span style={{ color: 'orange' }}>Special Offer</span>{' '}
              For Restaurants With Fewer Than 2,500 Online Orders Annually
            </h2>

            <div
              style={{
                fontSize: '0.9rem',
                color: 'green',
                fontWeight: '600',
                marginBottom: '8px'
              }}
            >
              (billed annually)
            </div>

            <div
              style={{
                fontSize: '3rem',
                fontWeight: '800',
                color: 'orange',
                marginBottom: '20px'
              }}
            >
              $99 Monthly
            </div>

            <p
              style={{
                fontSize: '1.1rem',
                color: '#333',
                maxWidth: '500px',
                marginBottom: '30px'
              }}
            >
              No matter if you're new to delivery or already active on the top platforms, this package fits your needs. We’ll assist with connecting to any missing services and provide data-backed pricing recommendations.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', alignItems: 'center' }}>
              <button
                style={{
                  backgroundColor: '#000',
                  color: '#fff',
                  padding: '14px 24px',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer'
                }}
              >
                SCHEDULE A DEMO
              </button>

              <button
                style={{
                  backgroundColor: 'orange',
                  color: '#fff',
                  padding: '14px 24px',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                }}
              >
                TRY NOW ON WEB
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div style={{ flex: 1, minWidth: '300px', textAlign: 'center' }}>
            <img
              src={shopImage}
              alt="QR and Mobile Ordering"
              style={{
                maxWidth: '100%',
                height: 'auto',
                borderRadius: '20px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default BootstrapStyleCarousel;