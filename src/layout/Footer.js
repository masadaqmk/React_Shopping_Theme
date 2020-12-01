import React from 'react'
import ReactDOM from 'react-dom';
import './footer.css';
import payment_logo from '../logo/payment.png';

function Footer() {
    return (
        <>
        <div className="footer">
            <div className="container">
                <div className="row pt-2">
                    <div className="col-md-3 p-3">
                        <div className="">
                                <div className="footer-logo mt-3">
                                    <img src="http://demo.activeitzone.com/ecommerce/public/assets/img/logo.png" className="img-fluid" />
                                </div>

                                <div>
                                    <p className="text-white text-left footer-text-p">Complete system for your eCommerce business system for your eCommerce business system for your eCommerce business </p>
                                </div>

                                <div className="social-div text-left">
                                    <a href="#" class="fa faa fa-facebook"></a>
                                    <a href="#" class="fa faa fa-twitter"></a>
                                    <a href="#" class="fa faa fa-instagram"></a>
                                    <a href="#" class="fa faa fa-skype"></a>
                                </div>
                        </div>
                    </div>
               
                    <div className="col-md-3 p-3">
                        <div className="footer-list">
                            <h2 className="footer-heading">Company</h2>
                            <ul className="footer-links">
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Affilate</a></li>
                                <li><a href="#">Carrer</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                    





                    <div className="col-md-3 p-3">
                        <div className="footer-list">
                            <h2 className="footer-heading">Quick Links</h2>
                            <ul className="footer-links">
                                <li><a href="#">Policy</a></li>
                                <li><a href="#">Term & Conditions</a></li>
                                <li><a href="#">Shipping</a></li>
                                <li><a href="#">Return</a></li>
                                <li><a href="#">FAQs</a></li>
                                <li><a href="#">Refund</a></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div className="footer-bootom">
            <div className="container pt-2 pb-2">
                <div className="row">
                    <div className="col-md-4 left-side">
                        <p className="footer-bottom-text">©2020 Active Ecommerce CMS</p>
                    </div>
                    <div className="col-md-4"></div>
                    <div className="col-md-4 right-side">
                        <img src={payment_logo} className="payment_logo" />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}


export default Footer;
