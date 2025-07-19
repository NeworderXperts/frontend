import React from 'react';
import qrImage from './1.avif'; // Ensure path is correct

const QRMenuSection = () => {
    return (
        <section style={{
            width: '100%',
            backgroundColor: '#ffffff',
            padding: '100px 60px',
            boxSizing: 'border-box',
            fontFamily: 'Arial, sans-serif'
        }}>
            <div>
                {/* Top Heading */}
                <h2 style={{
                    fontSize: '4rem',
                    fontWeight: '800',
                    lineHeight: '1.2',
                    marginBottom: '60px',
                    textAlign: 'left'
                }}>
                    Simplify Your Menu Updates With Real-Time <br />
                    <span style={{ color: 'blue' }}>Restaurant QR Code Generation App</span>
                </h2>

                {/* QR Image */}
                <div style={{ marginTop: '60px', width: '100%' }}>
                    <img
                        src={qrImage}
                        alt="Restaurant QR Code App"
                        style={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: '30px',
                            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.2)'
                        }}
                    />
                </div>

                {/* Description */}
                <p style={{
                    marginTop: '60px',
                    fontSize: '1.75rem',
                    color: '#444',
                    lineHeight: '1.6',
                    width: '100%'
                }}>
                    Make dining easy and flexible for your customers. QR menus let them explore and
                    choose their meals in advance, avoid delays, and see vibrant photos of
                    dishes—all while helping your restaurant save on printing costs.
                </p>

                {/* Why Do QR Menus Matter Section */}
                <div style={{ marginTop: '100px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h2 style={{
                        fontSize: '3rem',
                        fontWeight: '800',
                        marginBottom: '60px',
                        textAlign: 'center'
                    }}>
                        Why Do <span style={{ color: 'orange' }}>QR Menus</span> Matter?
                    </h2>

                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '80px',
                        maxWidth: '1200px',
                        textAlign: 'center'
                    }}>
                        <div>
                            <div style={{ fontSize: '3rem', fontWeight: 'bold', color: 'orange' }}>30%</div>
                            <p style={{ fontSize: '1.2rem', maxWidth: '250px' }}>
                                reduction in menu printing costs by using QR Menus.
                            </p>
                        </div>

                        <div>
                            <div style={{ fontSize: '3rem', fontWeight: 'bold', color: 'orange' }}>78%</div>
                            <p style={{ fontSize: '1.2rem', maxWidth: '250px' }}>
                                of customers enjoy QR code menu ordering.
                            </p>
                        </div>

                        <div>
                            <div style={{ fontSize: '3rem', fontWeight: 'bold', color: 'orange' }}>75%</div>
                            <p style={{ fontSize: '1.2rem', maxWidth: '250px' }}>
                                of restaurants use QR codes, increasing engagement by 40%.
                            </p>
                        </div>

                        <div>
                            <div style={{ fontSize: '3rem', fontWeight: 'bold', color: 'orange' }}>51%</div>
                            <p style={{ fontSize: '1.2rem', maxWidth: '250px' }}>
                                of 2,500 US consumers say QR code menus improve satisfaction.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Why Choose Orders.Co Section */}
                <div style={{ marginTop: '100px', textAlign: 'center' }}>
                    <h2 style={{
                        fontSize: '3rem',
                        fontWeight: '800',
                        marginBottom: '60px'
                    }}>
                        Why Choose <span style={{ color: '#32F1FF' }}>OrdersXperts</span>
                    </h2>

                    {/* Top 3 Cards */}
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '30px',
                        marginBottom: '30px'
                    }}>
                        <div style={{
                            backgroundColor: '#87ceeb',
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
                            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>💰</div>
                            100% Free For All
                        </div>

                        <div style={{
                            backgroundColor: '#87ceeb',
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
                            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>📱</div>
                            For Both iOS And Android OS
                        </div>

                        <div style={{
                            backgroundColor: '#87ceeb',
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
                            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🌍</div>
                            Eco-Friendly
                        </div>
                    </div>

                    {/* Bottom Single Card */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <div style={{
                            backgroundColor: '#87ceeb',
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
                            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>⏰</div>
                            24/7 Customer Support
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QRMenuSection;
