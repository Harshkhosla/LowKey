import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import s4 from '../assets/img/service-1.png';

function Gingko() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when the Portfolio component mounts
      }, []);
    return (
        <>
            <div className="container-fluid p-0 mb-5 fadeIn" >
                <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="w-100 vh-100 object-fit-cover" src={s4} alt="Low key It solutions Website development" />
                            <div className="carousel-caption" style={{ backgroundColor: "rgba(0,0,0,.9)" }}>
                                <div className="container">
                                    <div className="row justify-content-start">
                                        <div className="col-lg-8">
                                            <h1 className="display-2 mb-4 animated slideInDown">Gingko
                                            </h1>
                                            <div style={{
                                                borderLeft: "2px solid #e1e1e1",
                                                height: "34%", padding: "6px 10px"
                                            }}>
                                                <div style={{
                                                    color: "#fff",
                                                    fontSize: "18px",
                                                    lineHeight: "normal",
                                                    marginBottom: "10px"
                                                }}>Industry</div>
                                                <div class="intro-column-content">E-Commerce</div>
                                            </div>
                                            {/* <Link to="/" className="qoutebtn activet">Explore More</Link> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* <button className="d-none d-sm-block carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="d-none d-sm-block carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button> */}
                </div>
            </div>
            <div className="pb-5 mt-3 ps-xl-5" id="about" >
                <div className="container ps-xl-5">
                    <div data-aos="fade-up" className='mt-5'>
                        <h1 className=" mt-1"><span style={{ backgroundColor: "rgba(255, 136, 107, 0.95)" }}>Cus</span>tomer</h1>
                        <p>Ginkgo is in the e-commerce landscape, setting the standard for a new era of mindful and sophisticated living. Their vision extends beyond products; who aspire to become a lifestyle companion, guiding our customers towards a more enriched and fulfilling way of life.
 As an innovative e-commerce platform, they specialize in providing a seamless shopping experience where you can discover, indulge, and transform your living spaces. They blend style, functionality, and sustainability to elevate your lifestyle allowing their member to also become sellers to list their products or services and get a platform to create a living and bring their crafts to the world or seekers.
</p>
                    </div>
                    <div data-aos="fade-up" className='mt-5'>
                        <h1 className=" mt-1"><span style={{ backgroundColor: "rgba(255, 136, 107, 0.95)" }}>Cas</span>e Study</h1>
                        <p>The client was starting a new business and wanted a software that could scale with growth, capture audience interest and track analytics for constant improvement, also ensure the website had methodologies implemented for digtial marketing success like schema and seo for which we kept the structure of the website completely dynamic ensuring the seo tags along with website content on each page could be managed through the control panel.
Also it was expected to ensure a CRM with internal notes to track user activities and provide them updated with latest actions taken for which we included a view count algorithm that tracked the views on each page and gave a real time count to admin on portal of the same also integration with firebase analytics made it more better to understand engagement time and user response rate.
We also had to build a Peer-to-Peer marketplace where we had a challenge to ensure right users are allowed to make sell services and products also the listing are legal and within policy for which we had introduced a video KYC solution to verify member and then allow to purchase and sell.
Real time chat for member and support team to allow proper communication at both end.
Payment gateway integration was also a big challenge as we had to look at all the issues that we may counter where payment from user end may occur but not reflect on system due to slow internet or url expire for which we created a secure system to ensure transactions are recorded at server level and refected at user end and for support team to help customers in case of any issues.

</p>
                    </div>
                  
                    
                    <div data-aos="fade-up" className='mt-5'>
                        <h1 className=" mt-1"><span style={{ backgroundColor: "rgba(255, 136, 107, 0.95)" }}>Use</span> Case</h1>
                        <p>Renovation, fashion, furniture , medicines, lifestyle 
</p>
                    </div>
                </div>
            </div>

            <div className="container-fluid callback py-5 bg-dark">
                <div className="container pt-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="bg-white border rounded p-4 p-sm-5 " data-aos="fade-up">
                                <div className="text-center mx-auto " data-aos="fade-up" style={{ maxWidth: '600px' }}>
                                    {/* <p className="d-inline-block border rounded text-theme fw-semi-bold py-1 px-3">Get In Touch
                                        </p> */}
                                    <h1 className="display-5 mb-5">Need help with a similar project?</h1>
                                </div>
                                <div className="row g-3">
                                    <div className="col-sm-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                            <label htmlFor="name">Full Name</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="mail" placeholder="Your Email" />
                                            <label htmlFor="mail">Work Email</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="mobile" placeholder="Your Mobile" />
                                            <label htmlFor="mobile">Work Phone</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="subject" placeholder="Subject" />
                                            <label htmlFor="subject">Company</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea className="form-control" placeholder="Leave a message here" id="message"
                                                style={{ height: '100px' }}></textarea>
                                            <label htmlFor="message">How Can We Help You ?</label>
                                        </div>
                                    </div>
                                    <div className="col-12 text-center">
                                        <button className="btn btn-theme w-100 py-3" type="submit">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Gingko;