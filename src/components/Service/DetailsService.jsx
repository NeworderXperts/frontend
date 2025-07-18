import React, { useRef, useEffect } from 'react';

function StripePricingTable() {
  const stripeTableRef = useRef(null);

  useEffect(() => {
    if (stripeTableRef.current) {
      stripeTableRef.current.innerHTML = '';
    }

    const existingScript = document.querySelector(
      'script[src="https://js.stripe.com/v3/pricing-table.js"]'
    );

    const loadStripePricingTable = () => {
      if (stripeTableRef.current) {
        stripeTableRef.current.innerHTML = `
          <stripe-pricing-table
            pricing-table-id="prctbl_1R0XOkF1XubL36JhxZ8HOt8d"
            publishable-key="pk_live_51R0WXtF1XubL36JhFQE9Tz19XEZA38LRfgp4CvZXB8xRqDogZ1e2tp4jFmFZ8cVBlnlMPfyDHvDuHJ7nrFQrIGus00a5oB0CLi"
          ></stripe-pricing-table>
        `;
      }
    };

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://js.stripe.com/v3/pricing-table.js';
      script.async = true;
      script.onload = loadStripePricingTable;
      document.body.appendChild(script);
    } else {
      loadStripePricingTable();
    }
  }, []);

  return <div ref={stripeTableRef}></div>;
}

function DetailsService() {
  const faqItems = [
    {
      question: 'How long does it take to set up Orders-Xpert?',
      answer: 'Usually within 24–48 hours.',
    },
    {
      question: 'Which delivery platforms are supported by Orders-Xpert?',
      answer: 'We support Uber Eats, DoorDash, Grubhub, and more.',
    },
    {
      question: 'How much does Orders-Xpert setup cost?',
      answer: 'Setup is completely free.',
    },
    {
      question: 'How will orders from multiple virtual stores be displayed in Orders-Xpert?',
      answer: 'They are consolidated into a single dashboard.',
    },
    {
      question: 'How can we integrate an Orders-Xpert ordering site into our existing website?',
      answer: 'You can embed via iframe or custom domain.',
    },
  ];

  return (
    <>
      {/* Pricing Section */}
      <div
        style={{
          padding: '40px 20px',
          backgroundColor: '#fff',
          borderRadius: '16px',
          margin: '0',
          textAlign: 'center',
          boxShadow: '0 4px 12px rgba(223, 207, 207, 0.05)',
        }}
      >
        <h2
          style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '32px',
            color: '#1a1a1a',
          }}
        >
          Our Pricing <span style={{ color: '#007bff' }}>Plans</span>
        </h2>
        <StripePricingTable />
      </div>

      {/* FAQ Section */}
      <div
        style={{
          backgroundColor: '#f0f2f5',
          borderRadius: '20px',
          padding: '40px 20px',
          margin: '0',
        }}
      >
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              marginBottom: '32px',
              textAlign: 'center',
              color: '#1a1a1a',
            }}
          >
            Frequently Asked <span style={{ color: '#007bff' }}>Questions</span>
          </h2>

          <div className="accordion" id="faqAccordion">
            {faqItems.map((item, index) => (
              <div
                className="accordion-item"
                key={index}
                style={{
                  borderRadius: '20px',
                  marginBottom: '16px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)',
                  backgroundColor: '#ffffff',
                  border: 'none',
                }}
              >
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#faq${index}`}
                    aria-expanded={index === 0 ? 'true' : 'false'}
                    aria-controls={`faq${index}`}
                    style={{
                      borderRadius: '20px',
                      fontWeight: 600,
                      padding: '16px 24px',
                      backgroundColor: '#fff',
                    }}
                  >
                    {item.question}
                  </button>
                </h2>
                <div
                  id={`faq${index}`}
                  className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                  data-bs-parent="#faqAccordion"
                >
                  <div
                    className="accordion-body"
                    style={{
                      fontSize: '1rem',
                      color: '#333',
                      padding: '16px 24px',
                    }}
                  >
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailsService;
