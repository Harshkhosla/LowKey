import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import s4 from '../assets/img/stulyfe.png';

function Stulyfe() {
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
                                            <h1 className="display-2 mb-4 animated slideInDown">Stulyfe
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
                                                <div class="intro-column-content">Ed-tech</div>
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
                        <p>Stulyfe Education, an e-learning platform designed with the modern ways of education. Every student has his/her own pace, we understand this and want to give every student a platform to access according to his/her speed. Real education lies in its applications, and hence we have built special lessons to let students understand the practical knowledge.

</p>
                    </div>
                   
                    <div data-aos="fade-up" className='mt-5'>
                        <h1 className=" mt-1"><span style={{ backgroundColor: "rgba(255, 136, 107, 0.95)" }}>Cas</span>e Study</h1>
                        <p>The Client requested for a portal to start a ed-tech business so that they can bring a innovation to the industry and bring revolution the way kids learn and are taught. They wanted a portal through which they can upload lectures manage classes, schools, monitor student performance track progress and alow parents to monitor their wards activity.

We created a landing page for them to give students and parents a brief about their work also implemented CTA for them to record interests and did SEO for marketing.
We alse provided them a school management software so they can manage teachers, school, students with a LMS platform that helps the students and teachers to stay on same page and use standard content that supports their learning journey enabling teachers to conduct test provide notes.

Main Challenge was to build a secure system that could scale with user growth also keep the platform dynamic and ensure that proper data security was taken onto count, for which we created a encryption software for the company using which they could encrypt videos and upload to cloud storage for distribution.
We also provided content-mangement system to keep website dynamic and allow them to change their content at evey step as per trend and keep data updated. Did a blue-green deployment to ensure continuous availability and release latest updates for beta users

</p>
                    </div>
                 
                    <div data-aos="fade-up" className='mt-5'>
                        <h1 className=" mt-1"><span style={{ backgroundColor: "rgba(255, 136, 107, 0.95)" }}>Use</span> Case</h1>
                        <p>Ed-Tech, Media streaming, School, Corporate LMS, Coaching.


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

export default Stulyfe;