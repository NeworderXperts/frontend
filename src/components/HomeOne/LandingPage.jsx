import React, { useEffect, useRef, useState } from 'react';
import sellFoodOnlineImg from './sell_food_online.png';
import receiveMoreOrderImg from './receive_more_order.png';
import buildOnlinePresenceImg from './build_strong_online_presence.png';
import accelerateYourSuccessImg from './Accelerate_your_success.png';
import enjoyUseImg from './Enjoy_use.png';

export default function LandingPage() {
    const sellFoodOnlineTextRef = useRef(null);
    const sellFoodOnlineImageRef = useRef(null);
    const ReceiveMoreOrderTextRef = useRef(null);
    const ReceiveMoreOrderImageRef = useRef(null);
    const buildOnlinePresenceTextRef = useRef(null);
    const buildOnlinePresenceImageRef = useRef(null);
    const accelerateYourSuccessTextRef = useRef(null);
    const accelerateYourSuccessImageRef = useRef(null);
    const enjoyUseTextRef = useRef(null);
    const enjoyUseImageRef = useRef(null);

    const [sellFoodOnlineImageHeight, setsellFoodOnlineImageHeight] = useState('430px');
    const [ReceiveMoreOrderImageHeight, setReceiveMoreOrderImageHeight] = useState('430px');
    const [buildOnlinePresenceImageHeight, setbuildOnlinePresenceImageHeight] = useState('430px');
    const [accelerateYourSuccessImageHeight, setaccelerateYourSuccessImageHeight] = useState('430px');
    const [enjoyUseImageHeight, setenjoyUseImageHeight] = useState('430px');

    useEffect(() => {
        const handleResize = () => {
            if (sellFoodOnlineTextRef.current && sellFoodOnlineImageRef.current) {
                const textHeight = sellFoodOnlineTextRef.current.clientHeight;
                setsellFoodOnlineImageHeight(`${textHeight + 30}px`);
            }

            if (ReceiveMoreOrderTextRef.current && ReceiveMoreOrderImageRef.current) {
                const textHeight = ReceiveMoreOrderTextRef.current.clientHeight;
                setReceiveMoreOrderImageHeight(`${textHeight + 30}px`);
            }

            if (buildOnlinePresenceTextRef.current && buildOnlinePresenceImageRef.current) {
                const textHeight = buildOnlinePresenceTextRef.current.clientHeight;
                setbuildOnlinePresenceImageHeight(`${textHeight + 30}px`);
            }

            if (accelerateYourSuccessTextRef.current && accelerateYourSuccessImageRef.current) {
                const textHeight = accelerateYourSuccessTextRef.current.clientHeight;
                setaccelerateYourSuccessImageHeight(`${textHeight + 30}px`);
            }

            if (enjoyUseTextRef.current && enjoyUseImageRef.current) {
                const textHeight = enjoyUseTextRef.current.clientHeight;
                setenjoyUseImageHeight(`${textHeight + 30}px`);
            }
        };

        handleResize(); // Set initial height
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='container' style={{ zIndex: '-100' }}>
            <section id='sellFoodOnline' style={{ paddingTop: '10px' }}>
                <div className='row imageContainer'>
                    <div className='col-md-6'>
                        <img
                            ref={sellFoodOnlineImageRef}
                            style={{ width: '100%', height: sellFoodOnlineImageHeight }}
                            src={sellFoodOnlineImg}
                            alt='Sell Food Online'
                        />
                    </div>
                    <div className='col-md-4 d-flex align-items-center' style={{ marginTop: '10px' }}>
                        <div ref={sellFoodOnlineTextRef}>
                            <p style={{ color: "orange" }}><b>SELL FOOD ONLINE</b></p>
                            <h4>Turn people visiting your website into regular food clients</h4>
                            <hr />
                            <p>Our online ordering Website will help you transform your website into a money-making machine.</p>
                            <br />
                            <p>No matter how much your business grows, you will always be able to take free unlimited orders with <b>zero costs.</b></p>
                            <br />
                            <p>Power your business with our best online ordering Website & you’ll never have to worry about fees or commissions.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id='ReceiveMoreOrder' style={{ paddingTop: '80px' }}>
                <div className='row imageContainer' style={{ marginTop: '40px' }}>
                    <div className='col-md-1 order-2 order-md-1 d-flex align-items-center'></div>
                    <div className='col-md-5 order-2 order-md-1 d-flex align-items-center'>
                        <div ref={ReceiveMoreOrderTextRef}>
                            <p style={{ color: "orange" }}><b>RECEIVE MORE ORDERS</b></p>
                            <h4>Get more clients to buy from you. Use easy-to-spot restaurant widgets.</h4>
                            <hr />
                            <p>The harder it is for your hungry customers to find the ordering buttons on your website, the more customers you will lose.</p>
                            <br />
                            <p>Increase customer retention by adding the "See MENU & Order" & "Table reservation" restaurant widgets to your sales optimized website to make the online ordering process fast & easy.</p>
                        </div>
                    </div>
                    <div className='col-md-6 order-1 order-md-2'>
                        <img
                            ref={ReceiveMoreOrderImageRef}
                            style={{ width: '100%', height: ReceiveMoreOrderImageHeight }}
                            src={receiveMoreOrderImg}
                            alt='Receive More Orders'
                        />
                    </div>
                </div>
            </section>

            <section id='buildOnlinePresenceDevelopment' style={{ paddingTop: '110px' }}>
                <div className='row imageContainer' style={{ marginTop: '40px' }}>
                    <div className='col-md-6 my-2'>
                        <img
                            ref={buildOnlinePresenceImageRef}
                            style={{ width: '100%', height: buildOnlinePresenceImageHeight }}
                            src={buildOnlinePresenceImg}
                            alt='Build Online Presence'
                        />
                    </div>
                    <div className='col-md-4 d-flex align-items-center mt-2'>
                        <div ref={buildOnlinePresenceTextRef}>
                            <p style={{ color: "orange" }}><b>BUILD A STRONG ONLINE PRESENCE</b></p>
                            <h4>No money-making website? Get a website that sells plus an online ordering Website</h4>
                            <hr />
                            <p>Your curry is hot, but your business is not?! We’ll help generate your own fully functional restaurant website with online ordering, within seconds. No coding skills involved :)</p>
                            <br />
                            <p>People who use our sales optimized website have increased their online sales by up 162%.*</p>
                            <br />
                            <p>Try it & see for yourself.</p>
                            <p>*Statistics drawn from monitoring our clients’ performance indicators.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id='DigitalaccelerateYourSuccessing' style={{ paddingTop: '50px' }}>
                <div className='row imageContainer' style={{ marginTop: '40px' }}>
                    <div className='col-md-1 order-2 order-md-1 d-flex align-items-center mt-2'></div>
                    <div className='col-md-5 order-2 order-md-1 d-flex align-items-center mt-2'>
                        <div ref={accelerateYourSuccessTextRef}>
                            <p style={{ color: "orange" }}><b>ACCELERATE YOUR SUCCESS</b></p>
                            <h4>No time to waste: Take your first online order within minutes</h4>
                            <hr />
                            <p><b>How to get started:</b></p>
                            <p>1. Simply sign-Up</p>
                            <p>2. We will integrate your Menu and Website while you sit and relax.</p>
                            <p>3. Use our tablet to confirm orders placed on your website, Facebook page & restaurant app</p>
                            <br />
                            <p>It’s that simple to have your own online food ordering website by tonight.</p>
                        </div>
                    </div>
                    <div className='col-md-6 order-1 order-md-2'>
                        <img
                            ref={accelerateYourSuccessImageRef}
                            style={{ width: '100%', height: accelerateYourSuccessImageHeight }}
                            src={accelerateYourSuccessImg}
                            alt='Accelerate Your Success'
                        />
                    </div>
                </div>
            </section>

            <section id='enjoyUse' style={{ paddingTop: '50px' }}>
                <div className='row imageContainer' style={{ marginTop: '40px' }}>
                    <div className='col-md-6 my-2'>
                        <img
                            ref={enjoyUseImageRef}
                            style={{ width: '100%', height: enjoyUseImageHeight }}
                            src={enjoyUseImg}
                            alt='Enjoy Use'
                        />
                    </div>
                    <div className='col-md-6 d-flex align-items-center mt-2'>
                        <div ref={enjoyUseTextRef}>
                            <p style={{ color: "orange" }}><b>ENJOY ITS SIMPLICITY OF USE</b></p>
                            <h4>No special device required: accept incoming orders from your smartphone</h4>
                            <hr />
                            <p>Your curry is hot, but your business is not?! We’ll help generate your own fully functional restaurant website with online ordering, within seconds. No coding skills involved :)</p>
                            <br />
                            <p>With the Order Xperts app, you can now accept online food orders from your own device... with just one tap of the screen.</p>
                            <br />
                            <p>Simply Sign-Up Now to get started and our techs will reach out to you for complete menu setup.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
