import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import s1 from '../assets/img/service-1.jpg';
import s2 from '../assets/img/service-2.jpg';
import s3 from '../assets/img/service-3.jpg';

function Services() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when the Portfolio component mounts
      }, []);
  return (
    <>
    <div className="container-fluid p-0 mb-5 fadeIn" >
                <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="w-100 vh-100 object-fit-cover" src="https://www.scnsoft.com/boss/images/4145fd5f-303e-407c-9753-25b18026689fbi-for-200-healthcare-centers-large.jpg" alt="Low key It solutions Website development" />
                            <div className="carousel-caption" style={{backgroundColor:"#212529" }}>
                                <div className="container">
                                    <div className="row justify-content-start">
                                        <div className="col-lg-8">
                                            <h2 className="display-2 mb-4 animated slideInDown">Web Development Services
                                            </h2>
                                            <div style={{
    height: "34%" , padding:"6px 10px"}}>
                                                <div style={{color: "#fff",
    fontSize: "18px",
    lineHeight: "normal",
    marginBottom: "10px"}}><p>With the expertise built on 1,900+ web projects, ScienceSoft professionally designs, redesigns and continuously supports customer-facing and enterprise web apps and achieves high conversion and adoption rates.</p></div>
                                                {/* <div class="intro-column-content">Healthcare, Software products</div> */}
                                                <button className="btn btn-theme w-50 py-3 mt-3" type="submit">Request Development Services</button>
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
    <div className=" py-5  mt-3" >
    <div className="container">
        <div className="row g-4 align-items-end mb-4 ">
            
            <div className="col-lg-12  " data-aos="fade-up"  >
                {/* <h1 className=" ">Customer</h1> */}
                <div className='mt-5'>
               <h1 className=" mt-1"><span style={{backgroundColor :"rgba(255, 136, 107, 0.95)"}}>Wha</span>t Web Solution Do You Need? </h1>
                <p>Our software company offers a wide range of
                    services designed to meet your digital needs. From
                    custom software development to web and mobile
                    application design, we create tailored solutions that
                    align with your unique objectives. We specialize in
                    automation, cloud development, and web application
                    development. Our team provides ongoing
                    maintenance and support, guaranteeing your
                    systems run smoothly. We excel in optimizing
                    performance, enhancing user experiences, and
                    delivering scalable solutions that adapt to your
                    growing requirements.</p>
                   
                   
               </div>
               <div className='text-bg-dark feature'>
                    <div className="container">
      <div className="row">
        <div className="col-md-6" style={{paddingRight :"0rem" , paddingLeft:"0rem"}}>
          {/* <div className="p-3 border">Content 1</div> */}
          <div className="col-12 " data-aos="fade-up" >
                                            <div className="feature-box border rounded p-4">
                                                <i className="fa fa-check fa-3x text-theme mb-3"></i>
                                                <h4 className="mb-3">Web Portals</h4>
                                                <p className="mb-3 ">Let'
                                                    s connect and explore the
                                                    perfect solutions for your
                                                    buisness needs together!</p>
                                                <Link className="fw-semi-bold text-decoration-none text-theme" to="/">Request Help <i
                                                    className="fa fa-arrow-right ms-1"></i></Link>
                                            </div>
                                        </div>
        </div>
        <div className="col-md-6" style={{paddingRight :"0rem" , paddingLeft:"0rem"}}>
          {/* <div className="p-3 border">Content 2</div> */}
          <div className="col-12 " data-aos="fade-up" >
                                            <div className="feature-box border rounded p-4">
                                                <i className="fa fa-check fa-3x text-theme mb-3"></i>
                                                <h4 className="mb-3">Websites</h4>
                                                <p className="mb-3 ">Let'
                                                    s connect and explore the
                                                    perfect solutions for your
                                                    buisness needs together!</p>
                                                <Link className="fw-semi-bold text-decoration-none text-theme" to="/">Request Help <i
                                                    className="fa fa-arrow-right ms-1"></i></Link>
                                            </div>
                                        </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6" style={{paddingRight :"0rem" , paddingLeft:"0rem"}}>
          {/* <div className="p-3 border">Content 3</div> */}
          <div className="col-12 " data-aos="fade-up" >
                                            <div className="feature-box border rounded p-4">
                                                <i className="fa fa-check fa-3x text-theme mb-3"></i>
                                                <h4 className="mb-3">Ecommerce</h4>
                                                <p className="mb-3 ">Let'
                                                    s connect and explore the
                                                    perfect solutions for your
                                                    buisness needs together!</p>
                                                <Link className="fw-semi-bold text-decoration-none text-theme" to="/">Request Help <i
                                                    className="fa fa-arrow-right ms-1"></i></Link>
                                            </div>
                                        </div>
        </div>
        <div className="col-md-6" style={{paddingRight :"0rem" , paddingLeft:"0rem"}}>
          {/* <div className="p-3 border">Content 4</div> */}
           <div className="col-12 " data-aos="fade-up" >
                                            <div className="feature-box border rounded p-4">
                                                <i className="fa fa-check fa-3x text-theme mb-3"></i>
                                                <h4 className="mb-3">Web</h4>
                                                <p className="mb-3 ">Let'
                                                    s connect and explore the
                                                    perfect solutions for your
                                                    buisness needs together!</p>
                                                <Link className="fw-semi-bold text-decoration-none text-theme" to="/">Request Help <i
                                                    className="fa fa-arrow-right ms-1"></i></Link>
                                            </div>
                                        </div>
        </div>
      </div>
    </div>
                    </div>
               
               <div className='mt-5'>
               <h1 className=" mt-1"><span style={{backgroundColor :"rgba(255, 136, 107, 0.95)"}}>Our</span> Web-Related Projects:</h1>
               <div className="container-xxl py-5" id='portfolio'>
                <div className="container">
                    
                    <div className="row gy-5" data-aos="fade-up">
                        <div className='col-md-6 col-xl-4'>
                            <div className="project-item pe-5 pb-5">
                                <div className="project-img mb-3">
                                    <img className="img-fluid rounded" src={s1} alt="Low key It solutions Website development" />
                                    <a href=""><i className="fa fa-link fa-3x text-theme"></i></a>
                                </div>
                                <div className="project-title">
                                    <h4 className="mb-0">Financial Planning</h4>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 col-xl-4'>
                            <div className="project-item pe-5 pb-5">
                                <div className="project-img mb-3">
                                    <img className="img-fluid rounded" src={s2} alt="Low key It solutions Website development" />
                                    <a href=""><i className="fa fa-link fa-3x text-theme"></i></a>
                                </div>
                                <div className="project-title">
                                    <h4 className="mb-0">Cash Investment</h4>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 col-xl-4'>
                            <div className="project-item pe-5 pb-5">
                                <div className="project-img mb-3">
                                    <img className="img-fluid rounded" src={s3} alt="Low key It solutions Website development" />
                                    <a href=""><i className="fa fa-link fa-3x text-theme"></i></a>
                                </div>
                                <div className="project-title">
                                    <h4 className="mb-0">Financial Consultancy</h4>
                                </div>
                            </div>
                        </div>
                      
                    </div>
                </div>
            </div>
               </div>
               <div className='mt-5'>
               <h1 className=" mt-1"><span style={{backgroundColor :"rgba(255, 136, 107, 0.95)"}}>Ave</span>rage Cost of Web Development</h1>
               <div className='text-bg-dark feature'>
                    <div className="container">
      <div className="row">
        <div className="col-md-6" style={{paddingRight :"0rem" , paddingLeft:"0rem"}}>
          {/* <div className="p-3 border">Content 1</div> */}
          <div className="col-12 " data-aos="fade-up" >
                                            <div className="feature-box border rounded p-4">
                                                <i className="fa-solid fa-credit-card fa-3x text-theme mb-3"></i>
                                                <h4 className="mb-3">From $20,000</h4>
                                                <p className="mb-3 ">Let'
                                                    s connect and explore the
                                                    perfect solutions for your
                                                    buisness needs together!</p>
                                             
                                            </div>
                                        </div>
        </div>
        
        <div className="col-md-6" style={{paddingRight :"0rem" , paddingLeft:"0rem"}}>
          {/* <div className="p-3 border">Content 2</div> */}
          <div className="col-12 " data-aos="fade-up" >
                                            <div className="feature-box border rounded p-4">
                                                <i className="fa-solid fa-money-bill fa-3x text-theme mb-3"></i>
                                                <h4 className="mb-3">From $70,000</h4>
                                                <p className="mb-3 ">Let'
                                                    s connect and explore the
                                                    perfect solutions for your
                                                    buisness needs together!</p>
                                                
                                            </div>
                                        </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6" style={{paddingRight :"0rem" , paddingLeft:"0rem"}}>
          {/* <div className="p-3 border">Content 3</div> */}
          <div className="col-12 " data-aos="fade-up" >
                                            <div className="feature-box border rounded p-4">
                                                <i className="fas fa-shopping-cart fa-3x text-theme mb-3"></i>
                                                <h4 className="mb-3">From $200,000</h4>
                                                <p className="mb-3 ">Let'
                                                    s connect and explore the
                                                    perfect solutions for your
                                                    buisness needs together!</p>
                                               
                                            </div>
                                        </div>
        </div>
        <div className="col-md-6" style={{paddingRight :"0rem" , paddingLeft:"0rem"}}>
          {/* <div className="p-3 border">Content 4</div> */}
           <div className="col-12 " data-aos="fade-up" >
                                            <div className="feature-box border rounded p-4">
                                                <i className="fa-solid fa-city fa-3x text-theme mb-3"></i>
                                                <h4 className="mb-3">From $400,000</h4>
                                                <p className="mb-3 ">Let'
                                                    s connect and explore the
                                                    perfect solutions for your
                                                    buisness needs together!</p>
                                                
                                            </div>
                                        </div>
        </div>
      </div>
    </div>
                    </div>
               </div>
               <div className='mt-5'>
               <h1 className=" mt-1"><span style={{backgroundColor :"rgba(255, 136, 107, 0.95)"}}>How</span> We Ensure Quality in Web Development Projects</h1>
                <p>Our software company offers a wide range of
                    services designed to meet your digital needs. From
                    custom software development to web and mobile
                    application design, we create tailored solutions that
                    align with your unique objectives. We specialize in
                    automation, cloud development, and web application
                    development. Our team provides ongoing
                    maintenance and support, guaranteeing your
                    systems run smoothly. We excel in optimizing
                    performance, enhancing user experiences, and
                    delivering scalable solutions that adapt to your
                    growing requirements.</p>
               </div>
               
              
            </div>
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
                                        <h1 className="display-5 mb-5">Interested in our Web Development Services ?</h1>
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

export default Services;