import React from 'react';

function Forms() {
    return (
        <>
            <section className="contact-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="contact--info-area">
                                <h3>Get in <span style={{ color: '#2c67f2' }}>touch</span>
</h3>
                                <p>Looking for help? Fill the form and start a new adventure.</p>
                                <div className="single-info">
                                    <h5>Headquaters</h5>
                                    <p>
                                        <i className="fal fa-home"></i>
                                        3055 NW YEON AVE UNTT#271


                                        <br /> Portland, OR 97210
                                    </p>
                                </div>
                                <div className="single-info">
                                    <h5>Phone</h5>
                                    <p>
                                        <i className="fal fa-phone"></i>
                                        Call - (206)571-7659
                                        <br />
                                        
                                    </p>
                                </div>
                                <div className="single-info">
                                    <h5>Support</h5>
                                    <p>
                                        <i className="fal fa-envelope"></i>
                                        Info@order-xperts.com
                                        
                                    </p>
                                </div>
                                <div className="ab-social">
                                    <h5>Follow Us</h5>
                                    <a className="fac" href="#">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a className="twi" href="#">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a className="you" href="#">
                                        <i className="fab fa-youtube"></i>
                                    </a>
                                    <a className="lin" href="#">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="contact-form">
                                <h4>Let’s <span style={{ color: '#2c67f2' }}>touch</span>
</h4>
                                <p>Integer at lorem eget diam facilisis lacinia ac id massa.</p>
                                <form action="#" method="post" className="row">
                                    <div className="col-md-6">
                                        <input type="text" name="f-name" placeholder="First Name" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" name="l-name" placeholder="Last Name" />
                                    </div>
                                    <div className="col-md-6">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email Address"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <input
                                            type="number"
                                            name="phone"
                                            placeholder="Phone Number"
                                        />
                                    </div>
                                    <div className="col-md-12">
                                        <input type="text" name="suject" placeholder="Subject" />
                                    </div>
                                    <div className="col-md-12">
                                        <textarea
                                            name="message"
                                            placeholder="How can we help?"
                                        ></textarea>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="condition-check">
                                            <input id="terms-conditions" type="checkbox" />
                                            <label htmlFor="terms-conditions">
                                                I agree to the <a href="#">Terms & Conditions</a>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-6 text-right">
                                        <input type="submit" name="submit" value="Send Message" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            
        </>
    );
}

export default Forms;
