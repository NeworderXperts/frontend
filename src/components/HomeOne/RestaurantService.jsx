import React, { useEffect, useRef, useState } from 'react';

import image1 from './Image-1.png';
import image2 from './Image-2.png';
import image3 from './Image-3.png';
import image4 from './Image-4.png';
import image5 from './Image-5.png';
import image6 from './Image-6.png';

export default function RestaurantService() {
    const firstSectionTextRef = useRef(null);
    const firstSectionImageRef = useRef(null);
    const secondSectionTextRef = useRef(null);
    const secondSectionImageRef = useRef(null);
    const thirdSectionTextRef = useRef(null);
    const thirdSectionImageRef = useRef(null);
    const fourthSectionTextRef = useRef(null);
    const fourthSectionImageRef = useRef(null);
    const fifthSectionTextRef = useRef(null);
    const fifthSectionImageRef = useRef(null);
    const sixthSectionTextRef = useRef(null);
    const sixthSectionImageRef = useRef(null);

    const [firstSectionImageHeight, setfirstSectionImageHeight] = useState('430px');
    const [webImageHeight, setWebImageHeight] = useState('430px');
    const [thirdSectionImageHeight, setthirdSectionImageHeight] = useState('430px');
    const [fourthSectionImageHeight, setfourthSectionImageHeight] = useState('430px');
    const [fifthSectionImageHeight, setfifthSectionImageHeight] = useState('430px');
    const [sixthSectionImageHeight, setsixthSectionImageHeight] = useState('430px');

    useEffect(() => {
        const handleResize = () => {
            if (firstSectionTextRef.current) setfirstSectionImageHeight(`${firstSectionTextRef.current.clientHeight + 30}px`);
            if (secondSectionTextRef.current) setWebImageHeight(`${secondSectionTextRef.current.clientHeight + 30}px`);
            if (thirdSectionTextRef.current) setthirdSectionImageHeight(`${thirdSectionTextRef.current.clientHeight + 30}px`);
            if (fourthSectionTextRef.current) setfourthSectionImageHeight(`${fourthSectionTextRef.current.clientHeight + 30}px`);
            if (fifthSectionTextRef.current) setfifthSectionImageHeight(`${fifthSectionTextRef.current.clientHeight + 30}px`);
            if (sixthSectionTextRef.current) setsixthSectionImageHeight(`${sixthSectionTextRef.current.clientHeight + 30}px`);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='container'>
            <section style={{ paddingTop: '30px' }}>
                <h1 className='text-center more-weight'>Online Food Ordering and Delivery Website</h1>
                <p className='text-center' style={{ fontSize: '20px' }}>
                    Online Ordering Website For Takeaway, Delivery, Order Ahead & Table Reservations in One Solution
                </p>
                <div className='row imageContainer' style={{ marginTop: '40px' }}>
                    <div className='col-md-6'>
                        <img ref={firstSectionImageRef} style={{ width: '100%', height: firstSectionImageHeight }} src={image1} alt='Online Ordering' />
                    </div>
                    <div className='col-md-4 d-flex align-items-center' style={{ marginTop: '10px' }}>
                        <div ref={firstSectionTextRef}>
                            <h2>Complete Online Food Ordering and Delivery Website. On demand.</h2>
                            <hr />
                            <br />
                            <p>Searching for an online food ordering Website with table reservations, pickup and delivery software?</p>
                            <br />
                            <p>Say no more. We’ve got you covered.</p>
                            <br />
                            <p>Our online food ordering and delivery Website centralizes all pick-up, delivery & dine in orders, so you can easily be in full control of your business.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ paddingTop: '80px' }}>
                <div className='row imageContainer' style={{ marginTop: '40px' }}>
                    <div className='col-md-1 order-2 order-md-1 d-flex align-items-center'></div>
                    <div className='col-md-5 order-2 order-md-1 d-flex align-items-center'>
                        <div ref={secondSectionTextRef}>
                            <h2 className='my-4'>Take unlimited orders from your website, Facebook page or mobile app</h2>
                            <hr />
                            <br />
                            <p>Who said that online ordering has to be complicated?</p>
                            <br />
                            <p>With our best restaurant ordering Website, you can set up an account & start taking online orders within minutes, straight from your:</p>
                            <div className="text-secondary">
                                <div className="d-flex align-items-start mb-2">
                                    <span className="text-primary me-2">✔</span>
                                    <span>website</span>
                                </div>
                                <div className="d-flex align-items-start">
                                    <span className="text-primary me-2">✔</span>
                                    <span>Facebook page</span>
                                </div>
                                <div className="d-flex align-items-start">
                                    <span className="text-primary me-2">✔</span>
                                    <span>and mobile app</span>
                                </div>
                            </div>
                            <br />
                            <p>It’s easy to boost your profits & save on food portal commission fees when you rely on a powerful ordering Website.</p>
                        </div>
                    </div>
                    <div className='col-md-6 order-1 order-md-2'>
                        <img ref={secondSectionImageRef} style={{ width: '100%', height: webImageHeight }} src={image2} alt='Website, App and Facebook Orders' />
                    </div>
                </div>
            </section>

            <section style={{ paddingTop: '110px' }}>
                <div className='row imageContainer' style={{ marginTop: '40px' }}>
                    <div className='col-md-6 my-2'>
                        <img ref={thirdSectionImageRef} style={{ width: '100%', height: thirdSectionImageHeight }} src={image3} alt='Tablet Ordering' />
                    </div>
                    <div className='col-md-4 d-flex align-items-center mt-2'>
                        <div ref={thirdSectionTextRef}>
                            <h2>Accept incoming orders on the tablet. In the Kitchen directly</h2>
                            <hr />
                            <br />
                            <p>Sign-Up and start confirming orders on your tablet in one tap of the screen.</p>
                            <br />
                            <p>Experience how great it is to have order taking at your fingertips.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ paddingTop: '50px' }}>
                <div className='row imageContainer' style={{ marginTop: '40px' }}>
                    <div className='col-md-1 order-2 order-md-1 d-flex align-items-center mt-2'></div>
                    <div className='col-md-5 order-2 order-md-1 d-flex align-items-center mt-2'>
                        <div ref={fourthSectionTextRef}>
                            <h2>Attract more customers with Table reservations & Order Ahead</h2>
                            <hr />
                            <br />
                            <p>With our “Table Reservation” + “Order ahead” features, your hungry customers can easily book a table & pre-order their favorite dishes.</p>
                            <br />
                            <p>Fill in more empty seats with the promise of...</p>
                            <div className="text-secondary">
                                <div className="d-flex align-items-start mb-2">
                                    <span className="text-primary me-2">✔</span>
                                    <span>skipping the waiting times</span>
                                </div>
                                <div className="d-flex align-items-start">
                                    <span className="text-primary me-2">✔</span>
                                    <span>having their favorite foods ready to be served upon arrival</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 order-1 order-md-2'>
                        <img ref={fourthSectionImageRef} style={{ width: '100%', height: fourthSectionImageHeight }} src={image4} alt='Table Reservation' />
                    </div>
                </div>
            </section>

            <section style={{ paddingTop: '110px' }}>
                <div className='row imageContainer' style={{ marginTop: '40px' }}>
                    <div className='col-md-6 my-2'>
                        <img ref={fifthSectionImageRef} style={{ width: '100%', height: fifthSectionImageHeight }} src={image5} alt='Mobile App Order' />
                    </div>
                    <div className='col-md-4 d-flex align-items-center mt-2'>
                        <div ref={fifthSectionTextRef}>
                            <h2>Online food ordering Website with mobile app for your food clients</h2>
                            <hr />
                            <br />
                            <p>More and more customers want to pick up their food & enjoy it in the comfort of their own home.</p>
                            <br />
                            <p>Our Website enables you to create a great customer experience by enabling them to choose the time when they want to pick up their ready-made food.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ paddingTop: '50px' }}>
                <div className='row imageContainer' style={{ marginTop: '40px' }}>
                    <div className='col-md-1 order-2 order-md-1 d-flex align-items-center mt-2'></div>
                    <div className='col-md-5 order-2 order-md-1 d-flex align-items-center mt-2'>
                        <div ref={sixthSectionTextRef}>
                            <h2>Expand your Online Business with a Restaurant Delivery Software</h2>
                            <hr />
                            <br />
                            <p>Follow these 3 simple steps:</p>
                            <br />
                            <p>1. Create an account & fill in your restaurant profile</p>
                            <p>2. Enable delivery & draw your own delivery zones</p>
                            <p>3. Go to “Other” & choose the restaurant delivery integration that best fits your needs.</p>
                        </div>
                    </div>
                    <div className='col-md-6 order-1 order-md-2'>
                        <img ref={sixthSectionImageRef} style={{ width: '100%', height: sixthSectionImageHeight }} src={image6} alt='Restaurant Delivery' />
                    </div>
                </div>
            </section>
        </div>
    );
}
