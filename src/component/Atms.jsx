import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import s4 from '../assets/img/atms.png';

function Atms() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when the Portfolio component mounts
      }, []);
    return (
        <>
            <div className="container-fluid p-0 mb-5 fadeIn" >
                <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="w-100 vh-100 object-fit-cover" src={s4} alt="Devcorps" />
                            <div className="carousel-caption" style={{ backgroundColor: "rgba(0,0,0,.9)" }}>
                                <div className="container">
                                    <div className="row justify-content-start">
                                        <div className="col-lg-8">
                                            <h1 className="display-2 mb-4 animated slideInDown">ATMS
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
                                                <div class="intro-column-content"> Project managment </div>
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
                        <p>
                        Wisescan Engineering Services Pte Ltd is a registered surveying firm which is incorporated in April 1992. We provide land surveying services to a wide range of clients, including multinational corporations and government bodies.Wisescan has stayed abreast in technology by making hefty investments in robotic high-precision total stations with reflectorless capabilities, GPS receivers, high-end 3D laser scanners and state of the art Gyroscope equipment. Such investment has enabled Wisescan to take on complex and challenging projects to accommodate the varied surveying needs of our clients. Currently one of the leading land surveying firms, we hold an impressive track record in the provision of tunnelling survey in Singapore.
</p>
                    </div>
                    <div data-aos="fade-up" className='mt-5'>
                        <h1 className=" mt-1"><span style={{ backgroundColor: "rgba(255, 136, 107, 0.95)" }}>Cas</span>e Study</h1>
                        <p>This is a Project management software which involved real time mail detection and file management to keep track on updates of progress.
The admin can create project and assign consultant who will send progress updates through files on the smtp and once files are received they have to be stored on the particular project directory for later viewing and logging.
In this project we had several challenges to ensure that the mails are detected at real time base and whatever mail is received much be scanned for the project code and name through which the files can be stored in right project directory, here many times when the format was wrong or if the mail was getting read we werent able to track the latest updates also we had to ensure the monitoring module stays live constantly to detect mails. For which we created microservices to ensure de-coupling in services and ensuring the monitoring service reads all the unread mails and detects them instantly to process and store the files to directory.


</p>
                    </div>
                    <div data-aos="fade-up" className='mt-5'>
                        <h1 className=" mt-1"><span style={{ backgroundColor: "rgba(255, 136, 107, 0.95)" }}>Tec</span> hnology</h1>
                        <p> React Js, Tailwind Js, python, mongoDb, Digital ocean


</p>
                    </div>
                    <div data-aos="fade-up" className='mt-5'>
                        <h1 className=" mt-1"><span style={{ backgroundColor: "rgba(255, 136, 107, 0.95)" }}>Use</span> Case</h1>
                        <p>Real estate, Government , bidding ,Projects with large duration and constant updates.

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

export default Atms;