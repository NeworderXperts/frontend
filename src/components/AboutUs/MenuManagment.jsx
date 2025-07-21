import React, { useState, useEffect } from 'react';
import menuImage from './1.avif'; // Replace with actual image path
import shopImage from './1.avif'; // Use same or different image
import menu from './1image.webp'; // Replace with actual image path


const MenuManagement = () => {
  const slides = [
    {
      title: 'Fast Menu Sync',
      description: 'Easily update your restaurant menu across all platforms in real-time.',
    },
    {
      title: 'Smart Dashboard',
      description: 'Get a bird’s eye view of performance and operations in one place.',
    },
    {
      title: 'Multi-Device Support',
      description: 'Manage your menu from any device, anywhere.',
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section style={{
      marginTop: '100px',
      padding: '80px 20px',
      maxWidth: '1400px',
      margin: '0 auto',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Main Heading */}
      <h2 style={{
  fontSize: '3rem',
  fontWeight: '800',
  lineHeight: '1.3',
  color: '#111',
  marginBottom: '60px',
  borderBottom: '2px solid #F39C12',
}}>
  Restaurant 
  <span style={{ color: '#F39C12' }}>
    Menu Management
  </span><br />
  Everywhere You Need It
</h2>

      {/* Image Section */}
      <div style={{
        width: '100%',
        maxWidth: '1400px',
        maxHeight: '600px',
        borderRadius: '30px',
        overflow: 'hidden',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)'
      }}>
        <img
          src={menu}
          alt="Menu Management System"
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </div>

      {/* Why Choose OrdersXperts */}
      <div style={{ marginTop: '100px' }}>
        <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '60px' ,borderBottom: '2px solid #F39C12', paddingBottom: '10px'}}>
          Why Choose <span style={{ color: '#F39C12' }}>Orders-Xperts.</span>
        </h2>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '30px',
          marginBottom: '30px',
          
        }}>
          {[
            { icon: '💰', text: '100% Free For All' },
            { icon: '📱', text: 'For Both iOS And Android OS' },
            { icon: '🌍', text: 'Eco-Friendly' }
            
          ].map((item, idx) => (
            <div key={idx} style={{
              backgroundColor: '#F46036',
              color: 'white',
              padding: '40px',
              borderRadius: '16px',
              width: '300px',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '10px' }}>{item.icon}</div>
              {item.text}
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{
            backgroundColor: '#F46036',
            color: 'white',
            padding: '40px',
            borderRadius: '16px',
            width: '300px',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
           
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>⏰</div>
            24/7 Customer Support
          </div>
        </div>
      </div>

      {/* Proven Results */}
      <div style={{
        marginTop: '100px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '40px',
        textAlign: 'left',
        border: '2px solid #F39C12', 
        padding: '40px',
      }}>
        <div style={{ flex: '1 1 400px' }}>
          <h2 style={{
            fontSize: '2.8rem',
            fontWeight: '800',
            lineHeight: '1.3'
            
          }}>
            Proven Results With <br />
            Orders.Co’s <span style={{ color: '#F39C12' }}>Master Menu</span>{' '}
            <span style={{ color: '#F39C12' }}>Management</span> System
          </h2>
        </div>

        <div style={{
          flex: '1 1 500px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '40px',
          textAlign: 'center'
        }}>
          {[
            { value: '65%', desc: 'faster menu updates' },
            { value: '45%', desc: '#F46036uction in menu-related order errors' },
            { value: '25%', desc: 'increase in operational efficiency' },
            { value: '20%', desc: 'growth in online order revenue' }
          ].map((stat, idx) => (
            <div key={idx}>
              <div style={{ fontSize: '2.5rem', fontWeight: '700', color: '#F39C12' }}>{stat.value}</div>
              <div style={{ fontSize: '1rem', marginTop: '10px' }}>{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Key Features Heading */}
      <h2 style={{
        fontSize: '2.8rem',
        fontWeight: '800',
        marginTop: '100px',
        marginBottom: '40px',
        textAlign: 'center',
        borderBottom: '2px solid #F46036', paddingBottom: '10px',
        backgroundColor: '#F9FAFB',
      }}>
        <span style={{ color: '#F39C12' }}>Key</span>{' '}
        <span style={{ color: '#F39C12' }}>Features</span>{' '}
        Of Orders.Co's Restaurant Menu Management System
      </h2>

      {/* Carousel */}
      <div
        className="custom-carousel"
        style={{
          width: '100%',
          margin: '0 auto',
          overflow: 'hidden',
          borderRadius: '20px',
          position: 'relative',
          maxHeight: '600px',
          
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
              <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '30px',
                color: 'white',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                padding: '15px',
                borderRadius: '12px'
              }}>
                <h5>{slide.title}</h5>
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button onClick={goToPrev} style={carouselButtonStyle('left')}>‹</button>
        <button onClick={goToNext} style={carouselButtonStyle('right')}>›</button>
      </div>

      {/* Special Offer */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '40px',
        marginTop: '100px',
        padding: '60px 0'
      }}>
        <div style={{ flex: '1 1 450px', textAlign: 'left', border: '2px solid #F39C12', padding: '40px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '30px' }}>
            <span style={{ color: '#F39C12' }}>Special</span>{' '}
            <span style={{ color: '#F39C12' }}>Offer</span>{' '}
            For Restaurants With Fewer Than 2,500 Online Orders Annually
          </h2>

          <p style={{ color: 'green', fontWeight: 'bold', marginBottom: '10px' }}>
            (billed annually)
          </p>

          <h3 style={{ fontSize: '3rem', color: '#F39C12', fontWeight: '800', marginBottom: '20px' }}>
            $29 Monthly
          </h3>

          <p style={{
            fontSize: '1.1rem',
            color: '#222',
            fontWeight: '500',
            marginBottom: '30px',
            maxWidth: '500px'
          }}>
            Whether you’re just getting started or already established, this package includes everything you need to manage and sync your menu across all major platforms.
          </p>

          <button style={{
            backgroundColor: 'black',
            color: 'white',
            padding: '15px 30px',
            fontSize: '1rem',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}>
            SCHEDULE A DEMO
          </button>
        </div>

        <div style={{ flex: '1 1 500px', textAlign: 'center' }}>
          <img
            src={menuImage}
            alt="Menu Sync Graphic"
            style={{ width: '100%', maxWidth: '500px' }}
          />
        </div>
      </div>

      {/* 2,500+ Orders CTA */}
      <div style={{
        backgroundColor: '#1a1a1a',
        padding: '100px 20px',
        marginTop: '80px',
        width: '100%',
        maxWidth: '1700px',
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '3rem',
            fontWeight: '800',
            color: '#F39C12 ',
            marginBottom: '20px'
          }}>
            Have More Than 2,500 Orders <br /> Annually?
          </h2>

          <button style={{
            backgroundColor: '#F46036',
            color: '#fff',
            padding: '15px 30px',
            fontWeight: 'bold',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1rem',
            marginTop: '30px',
            cursor: 'pointer'
          }}>
            EXPLORE OUR REGULAR PACKAGES
          </button>
        </div>
      </div>
    </section>
  );
};

const carouselButtonStyle = (position) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  [position]: '2%',
  backgroundColor: 'rgba(0,0,0,0.5)',
  color: '#fff',
  border: 'none',
  padding: '12px 18px',
  borderRadius: '50%',
  cursor: 'pointer',
  fontSize: '2rem',
  zIndex: 2
});

export default MenuManagement;
