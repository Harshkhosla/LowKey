import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../assets/img/DevCorpsLogo.jpg";

function Footer() {
    return (
        <>
            <div className="container-fluid bg-dark text-light footer pt-5 pb-3 wow fadeIn" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <div className='' data-aos="zoom-out" data-aos-delay="500" data-aos-duration="1000">
                                <img src={logo} className="img-fluid" width={250} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-duration="1000">
                            <h4 className="text-white mb-4" >Services</h4>
                            <Link className="btn btn-link text-decoration-none" to="/">Web Development</Link>
                            <Link className="btn btn-link text-decoration-none" to="/">UI UX Designing</Link>
                            <Link className="btn btn-link text-decoration-none" to="/">Automation</Link>
                            <Link className="btn btn-link text-decoration-none" to="/">Cloud Computing</Link>
                            <Link className="btn btn-link text-decoration-none" to="/">IT Consulting</Link>
                        </div>
                        <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-duration="1000">
                            <h4 className="text-white mb-4">Quick Links</h4>
                            <Link className="btn btn-link text-decoration-none" to="/">About Us</Link>
                            <Link className="btn btn-link text-decoration-none" to="/">Contact Us</Link>
                            <Link className="btn btn-link text-decoration-none" to="/">Our Services</Link>
                            <Link className="btn btn-link text-decoration-none" to="/">Terms & Condition</Link>
                            <Link className="btn btn-link text-decoration-none" to="/">Support</Link>
                        </div>
                        <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-duration="1000">
                            {/* <h4 className="text-white mb-4">Our Office</h4>
                            <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p> */}
                            <a target="_blank" href='https://wa.me/+917849890124' className="pb-1 text-white text-decoration-none"><p className='mb-0'>
                                <i className="fa fa-phone-alt me-3"></i>+91- 7849890124</p></a>
                            <a target="_blank" href="mailto:harshkhosla9945@gmail.com" className="mb-2 text-white text-decoration-none"><p className='pt-2'>
                                <i className="fa fa-envelope me-3"></i>harshkhosla9945@gmail.com</p></a>
                            <div className="d-flex pt-2">
                                <a className="btn btn-square btn-outline-light rounded-circle me-2" href=""><i
                                    className="fab fa-twitter"></i></a>
                                <a className="btn btn-square btn-outline-light rounded-circle me-2" href=""><i
                                    className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square btn-outline-light rounded-circle me-2" target="_blank" href="https://github.com/Harshkhosla"><i
                                    className="fab fa-github"></i></a>
                                <a className="btn btn-square btn-outline-light rounded-circle me-2" href=""><i
                                    className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Copyright Start */}
            <div className="container-fluid copyright py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center  mb-3 mb-md-0">
                            &copy; <a className=" text-decoration-none border-bottom" href="#">DevCorps</a>, All Right Reserved.
                        </div>
                        {/* <div className="col-md-6 text-center text-md-end">
                            Designed By <a className=" text-decoration-none border-bottom" href="https://htmlcodex.com">HTML Codex</a> Distributed By <a
                                href="https://themewagon.com">ThemeWagon</a>
                        </div> */}
                    </div>
                </div>
            </div>
            {/* Copyright End */}
        </>
    )
}

export default Footer;