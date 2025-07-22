import React from 'react';
import { motion } from 'framer-motion';
// import emmaImg from './emma.jpg';
// import davidImg from './david.jpg';
// import priyaImg from './priya.jpg';

const testimonials = [
  {
    name: 'Dominic E.',
    company: 'Fiddlers Elbow Fish & Chips',
    quote:
      'Fantastic app This is a great app of this online takeaway ordering Website. The service has been superb and great customer service. With all the new updates and features, it gives us and more importantly our customers an app thats easy to use. Thanks Order Xperts.',
    // image: emmaImg,
  },
  {
    name: 'Julie P.',
    company: 'Sandwich Pizza House',
    quote:
      'Your customer service has been stellar via chat/email despite no phone option. I was initially concerned your international location could be an issue but you have delivered excellent, prompt and understandable customer service via chat every time.',
    // image: davidImg,
  },
  {
    name: 'Jeff S.',
    company: 'Killer’s Tacos',
    quote:
      'Sales results are picking up now. I think the Website is superb. Best I have ever found.',
    // image: priyaImg,
  },
];

const ClientExperience = () => {
  return (
    <section
      style={{
        padding: '80px 20px',
        backgroundColor: 'white',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h2
        style={{
          fontSize: '3rem',
          fontWeight: 800,
          marginBottom: '60px',
          borderBottom: '2px solid #F39C12',
        }}
      >
        What Our <span style={{ color: '#F39C12' }}>Clients</span> Say
      </h2>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '30px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            whileHover={{ scale: 1.03, y: -8 }}
            style={{
              backgroundColor: 'rgb(244, 96, 54)',
              padding: '30px',
              borderRadius: '16px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
              width: '360px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              transition: 'transform 0.3s ease',
            }}
          >
            <img
              src={
                t.image ||
                'https://via.placeholder.com/80?text=User' // fallback placeholder
              }
              alt={t.name}
              style={{
                width: '80px',
                height: '80px',
                objectFit: 'cover',
                borderRadius: '50%',
                marginBottom: '20px',
              }}
            />
            <p
              style={{
                fontStyle: 'italic',
                fontSize: '1rem',
                color: 'black',
                marginBottom: '20px',
              }}
            >
              “{t.quote}”
            </p>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'black' }}>
              {t.name}
            </h4>
            <p style={{ fontSize: '0.9rem', color: '#000' }}>{t.company}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ClientExperience;
