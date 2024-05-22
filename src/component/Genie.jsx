import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import s4 from '../assets/img/genie.png';

function Genie() {
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
                                            <h1 className="display-2 mb-4 animated slideInDown">Genie Workflow Automation
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
                                                <div class="intro-column-content">Manufacturing</div>
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
                        <p>Terex is a global manufacturer of materials processing machinery and aerial work platforms. We design, build and support products used in construction, maintenance, manufacturing, energy, recycling, minerals and materials management applications. Certain Terex products and solutions enable customers to reduce their environmental impact including electric and hybrid offerings that deliver quiet and emission-free performance, products that support renewable energy, and products that aid in the recovery of useful materials from various types of waste

</p>
                    </div>
                    
                    <div data-aos="fade-up" className='mt-5'>
                        <h1 className=" mt-1"><span style={{ backgroundColor: "rgba(255, 136, 107, 0.95)" }}>Cas</span>e Study</h1>
                        <p>This is a serial label print application in which the customer had data of machines along with parts that were identified through unique serial numbers, we had different template of prints identified as labels in which we had to display the data update as per user requirements and sync the data with warehouse database.
The challenge here was that we had a large dataset for machines available for which we were provided csv files and were expected to provide a console for user to perform CRUD over it.
For this we created a system where we used S3 buckets for users to place the files which once detected by SNS would trigger a function to load data to database from which another function would get data for specific machine and display on web based console.
This made viewing data and updating easy for end users and made it possible to update data and print through custom templates. 

</p>
                    </div>
                    <div data-aos="fade-up" className='mt-5'>
                        <h1 className=" mt-1"><span style={{ backgroundColor: "rgba(255, 136, 107, 0.95)" }}>Tec</span>hnology Used</h1>
                        <p>Aws lambda, Api Gateway, Dynamo db, Redshift, S3, Asp .net, JSON, Oracle cloud. 



</p>
                    </div>
                    <div data-aos="fade-up" className='mt-5'>
                        <h1 className=" mt-1"><span style={{ backgroundColor: "rgba(255, 136, 107, 0.95)" }}>Use</span> Case</h1>
                        <p>Data pipeline, Workflow automation, Business Process Automation, big data, ETL.



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

export default Genie;