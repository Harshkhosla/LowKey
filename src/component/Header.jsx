import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { scroller } from "react-scroll";
import logo from "../assets/img/DevCorpsLogo.jpg";
function Header() {
    useEffect(() => {
        window.addEventListener("scroll", function () {
            if (window.innerWidth < 992) {
                if (window.scrollY > 45) {
                    document.querySelector(".fixed-top").classList.add("text-bg-dark", "shadow");
                } else {
                    document.querySelector(".fixed-top").classList.remove("text-bg-dark", "shadow");
                }
            } else {
                if (window.scrollY > 45) {
                    const fixedTop = document.querySelector(".fixed-top");
                    fixedTop.classList.add("text-bg-dark", "shadow");
                    fixedTop.style.top = "-45px";
                } else {
                    const fixedTop = document.querySelector(".fixed-top");
                    fixedTop.classList.remove("text-bg-dark", "shadow");
                    fixedTop.style.top = "0";
                }
            }
        });
    }, [])

    const scrollToSection = (sectionId) => {
        scroller.scrollTo(sectionId, {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuart",
        });
      };
    return (
        <>
            {/* <!-- Navbar Start --> */}
            <div className="container-fluid fixed-top px-0 fadeIn text-white">
                <div className="top-bar row gx-0 align-items-center d-none d-lg-flex">
                    <div className="col-lg-6 px-5 text-start">
                        {/* <small><i className="fa fa-map-marker-alt text-theme me-2"></i>123 Street, New York, USA</small> */}
                        <small className="ms-4"><i className="fa fa-clock text-theme me-2"></i>9.00 am - 9.00 pm</small>
                    </div>
                    <div className="col-lg-6 px-5 text-end">
                        <small><i className="fa fa-envelope text-theme me-2"></i>muskankewlani123@gmail.com</small>
                        <small className="ms-4"><i className="fa fa-phone-alt text-theme me-2"></i>+91- 7849890124</small>
                    </div>
                </div>

                <nav className="navbar navbar-expand-lg navbar-dark py-lg-0 px-lg-5 fadeIn">
                    <Link to="/" className="navbar-brand ms-4 ms-lg-0">
                        <img src={logo} className="img-fluid" width={100} alt="Low key It solutions Website development" />
                    </Link>
                    <button type="button" className="navbar-toggler me-4" data-bs-toggle="offcanvas"
                        data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-start" id="navbarCollapse">
                        <div className="offcanvas-header">
                            <div>

                            </div>
                            <div>
                                <button className="btn-close btn-close-white" data-bs-dismiss="offcanvas"></button>
                            </div>
                        </div>
                        <div className="offcanvas-body offcanvas-glass">
                            <div className="navbar-collapse">
                                <div className="navbar-nav ms-auto p-4 p-lg-0 ">
                                    <Link to="/" className="nav-item nav-link">Home</Link>
                                    <Link to="/#about" className="nav-item nav-link">About</Link>
                                    <Link to="/#service" className="nav-item nav-link ">Services</Link>
                                    {/* <div className="nav-item dropdown">
                                        <Link to="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                                        <div className="dropdown-menu border-light m-0">
                                           
                                        </div>
                                    </div> */}
                                     <Link to="http://139.59.236.50/Portfolio/Devcorps%20Company%20Profile.pdf" className="nav-item nav-link">Portfolio</Link>
                                    <Link to="/#business-solution" className="nav-item nav-link">Business Solutions</Link>
                                    <Link to="/#technologies" className="nav-item nav-link">Technlogies</Link>
                                    <Link to="/#contact" className="nav-item nav-link">Lets Talk!</Link>
                                </div>
                                <div className="d-none d-lg-flex ms-2">
                                    {/* <a className="btn btn-light btn-sm-square rounded-circle ms-3" href="">
                                        <small className="fab fa-facebook-f text-theme"></small>
                                    </a>
                                    <a className="btn btn-light btn-sm-square rounded-circle ms-3" href="">
                                        <small className="fab fa-twitter text-theme"></small>
                                    </a> */}
                                    <a className="btn btn-light btn-sm-square rounded-circle ms-3" href="">
                                        <small className="fab fa-linkedin-in text-theme"></small>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            {/* <!-- Navbar End --> */}
        </>
    )
}
export default Header;