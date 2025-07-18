import React, { useState } from 'react';

const faqs = [
  "How does Orders.co integrate with different delivery apps?",
  "Can Orders.co help reduce menu-related errors?",
  "How does Orders.co handle menu syncing?",
  "What kind of support does Orders.co offer?",
  "Does Orders.co support real-time menu updates?",
  "Is the Orders.co system user-friendly?",
  "Can Orders.co handle multiple restaurant locations?",
  "How does Orders.co improve kitchen workflow?",
  "What are the costs associated with Orders.co?"
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={{
      backgroundColor: '#f4f4f4',
      borderRadius: '30px',
      padding: '60px 30px',
      maxWidth: '1000px',
      margin: '100px auto'
    }}>
      <h2 style={{
        textAlign: 'center',
        fontSize: '2.5rem',
        fontWeight: '800',
        marginBottom: '40px'
      }}>
        Frequently Asked <span style={{ color: 'orange' }}>Questions</span>
      </h2>

      {faqs.map((question, index) => (
        <div key={index} style={{
          backgroundColor: 'white',
          borderRadius: '30px',
          marginBottom: '16px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
          overflow: 'hidden'
        }}>
          <button onClick={() => toggle(index)} style={{
            width: '100%',
            textAlign: 'left',
            padding: '20px 24px',
            fontSize: '1rem',
            fontWeight: '600',
            border: 'none',
            background: 'white',
            cursor: 'pointer'
          }}>
            {index + 1}. {question}
            <span style={{ float: 'right', transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }}>▾</span>
          </button>
          {openIndex === index && (
            <div style={{ padding: '0 24px 20px', fontSize: '0.95rem', color: '#555' }}>
              {/* Placeholder answer — replace with real content as needed */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non justo ut sapien tempor consequat.
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
