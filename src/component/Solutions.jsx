import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import s1 from '../assets/img/service-1.jpg';
import s2 from '../assets/img/service-2.jpg';
import s3 from '../assets/img/service-3.jpg';

function Solutions() {
    const dotStyle = {
        display: 'inline-block',
        width: '18px',
        height: '18px',
        backgroundColor: '#f05f40',
        borderRadius: '50%',
        marginRight : "8px",
      };
    
      const listItemStyle = {
        marginBottom: '10px', // Adjust spacing between list items
        display: 'flex',
        alignItems: 'center',
      };

      useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when the Portfolio component mounts
      }, []);
  return (
    <>
    <div className="container-fluid p-0 mb-5 fadeIn" >
                <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="w-100 vh-100 object-fit-cover" src="https://visme.co/blog/wp-content/uploads/2021/05/how-to-make-a-banner-header-wide.png" alt="Low key It solutions Website development" style={{visibility:"hidden"}} />
                            <div className="carousel-caption" style={{backgroundColor:"#212529" , height:"80%" }}>
                                <div className="container">
                                    <div className="row justify-content-start">
                                        <div className="col-lg-8">
                                            <h2 className="display-2 mb-4 animated slideInDown">CRM Services
                                            </h2>
                                            <div style={{
    height: "34%" , padding:"6px 10px"}}>
                                                <div style={{color: "#fff",
    fontSize: "18px",
    lineHeight: "normal",
    marginBottom: "10px"}}><p>Get All the Help to Serve Your Customers in the Best Way</p></div>
                                                {/* <div class="intro-column-content">Healthcare, Software products</div> */}
                                                <button className="btn btn-theme w-50 py-3 mt-3" type="submit">Request Services</button>
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
    <div className=" py-5  mt-3">
    <div className="container">
        <div className="row g-4 align-items-end mb-4 ">
            
            <div className="col-lg-12 " data-aos="fade-up"  >
                {/* <h1 className=" ">Customer</h1> */}
                <div className='mt-5'>
               <h1 className=" mt-1"><span style={{backgroundColor :"rgba(255, 136, 107, 0.95)"}}>All</span>-Round Assistance for Your CRM Goals</h1>
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
                                                <h4 className="mb-3">CRM consulting</h4>
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
                                                <h4 className="mb-3">CRM implementation</h4>
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
                                                <h4 className="mb-3">Custom CRM development</h4>
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
          {/* <div className="p-3 border">Content 3</div> */}
          <div className="col-12 " data-aos="fade-up" >
                                            <div className="feature-box border rounded p-4">
                                                <i className="fa fa-check fa-3x text-theme mb-3"></i>
                                                <h4 className="mb-3">Custom CRM development</h4>
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
          {/* <div className="p-3 border">Content 1</div> */}
          <div className="col-12 " data-aos="fade-up" >
                                            <div className="feature-box border rounded p-4">
                                                <i className="fa fa-check fa-3x text-theme mb-3"></i>
                                                <h4 className="mb-3">CRM consulting</h4>
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
                                                <h4 className="mb-3">CRM implementation</h4>
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
               <h1 className=" mt-1"><span style={{backgroundColor :"rgba(255, 136, 107, 0.95)"}}>Div</span>erse CRM Services We Rendered to Our Clients</h1>
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
               <h1 className=" mt-1"><span style={{backgroundColor :"rgba(255, 136, 107, 0.95)"}}>Imp</span>ressive Results of Companies Working with a Professional CRM</h1>
               <div className="container-xxl py-5" id='portfolio'>
                <div className="container">
                    
                    <div className="row gy-5" data-aos="fade-up">
                        <div className='col-md-6 col-xl-4'>
                        <div style={{borderLeft: "2px solid #f05f40",
    height: "63%" , padding:"6px 10px"}}>
                                                <div style={{
    fontSize: "18px",
    lineHeight: "normal",
    marginBottom: "10px" , color:"#f05f40"}}>-70%</div>
                                                <div class="intro-column-content">Healthcare, Software products</div>
                                                </div>
                        </div>
                        <div className='col-md-6 col-xl-4'>
                        <div style={{borderLeft: "2px solid #f05f40",
    height: "63%" , padding:"6px 10px"}}>
                                                <div style={{
    fontSize: "18px",
    lineHeight: "normal",
    marginBottom: "10px" , color:"#f05f40"}}>+30%</div>
                                                <div class="intro-column-content">Healthcare, Software products</div>
                                                </div>
                        </div>
                        <div className='col-md-6 col-xl-4'>
                        <div style={{borderLeft: "2px solid #f05f40",
    height: "63%" , padding:"6px 10px"}}>
                                                <div style={{
    fontSize: "18px",
    lineHeight: "normal",
    marginBottom: "10px" , color:"#f05f40"}}>-25%</div>
                                                <div class="intro-column-content">Healthcare, Software products</div>
                                                </div>
                        </div>
                      
                    </div>
                    <div className="row gy-5" data-aos="fade-up">
                        <div className='col-md-6 col-xl-4'>
                        <div style={{borderLeft: "2px solid #f05f40",
    height: "63%" , padding:"6px 10px"}}>
                                                <div style={{
    fontSize: "18px",
    lineHeight: "normal",
    marginBottom: "10px" , color:"#f05f40"}}>+30%</div>
                                                <div class="intro-column-content">Healthcare, Software products</div>
                                                </div>
                        </div>
                        <div className='col-md-6 col-xl-4'>
                        <div style={{borderLeft: "2px solid #f05f40",
    height: "63%" , padding:"6px 10px"}}>
                                                <div style={{
    fontSize: "18px",
    lineHeight: "normal",
    marginBottom: "10px" , color:"#f05f40"}}>+60%</div>
                                                <div class="intro-column-content">Healthcare, Software products</div>
                                                </div>
                        </div>
                        <div className='col-md-6 col-xl-4'>
                        <div style={{borderLeft: "2px solid #f05f40",
    height: "63%" , padding:"6px 10px"}}>
                                                <div style={{
    fontSize: "18px",
    lineHeight: "normal",
    marginBottom: "10px"  , color:"#f05f40"}}>+20%</div>
                                                <div class="intro-column-content">Healthcare, Software products</div>
                                                </div>
                        </div>
                      
                    </div>
                    
                </div>
            </div>
               </div>
              
    
    <div className='mt-5'>
               <h1 className=" mt-1"><span style={{backgroundColor :"rgba(255, 136, 107, 0.95)"}}>Tak</span>e a Moment to Know Lowkey Better</h1>
               <ul style={{ listStyle: 'none', padding: '0' }}>
      <li style={listItemStyle}>
        <span style={dotStyle}></span>
        Our company was founded in 1989 by a group of visionaries and has grown to a team of 750+ intelligent, hardworking and ambitious IT experts
      </li>
      <li style={listItemStyle}>
        <span style={dotStyle}></span>
        n 2008, we successfully completed our first CRM project and got really captured by the width of functional capabilities that CRM systems may offer and business impact they may have.
      </li>
      <li style={listItemStyle}>
        <span style={dotStyle}></span>
        To date, our CRM team has helped 40+ companies from diverse business verticals set up effective software for customer relationship management. Among business spheres, we have clients from banking, healthcare, media, logistics, and retail.
      </li>
      {/* Add more list items as needed */}
    </ul>

               </div>
               <div className='mt-5'>
               <h1 className=" mt-1"><span style={{backgroundColor :"rgba(255, 136, 107, 0.95)"}}>How</span> We Ensure Quality in Web Development Projects</h1>
               <div className="container  p-4" data-aos="fade-up" style={{ maxWidth: '80%' }}>

<div className="row my-3">
    {/* <h2 className='text-dark text-md-start'>Web</h2> */}
    <h4 className='text-black text-md-start'>Back End</h4>
    <div className="col border p-2  bg-white text-center"><img src='data:image/jpeg;base64,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' width={120} height={90} /> </div>
    <div className="col border p-2  bg-white text-center"><img src='https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.png' alt='Low key It solutions Website development' width={120} height={90} /></div>
    <div className="col border p-2  bg-white text-center"><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ2t7fdi6j6G8Z1WWrLj05XumwjIWzE23HJwaI2eTc&s' alt='Low key It solutions Website development' width={100} height={90} /></div>
    <div className="col border p-2  bg-white text-center"><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png' alt="Low key It solutions Website development" width={100} height={90} /></div>
    {/* <div className="col border p-2  bg-white text-center"><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/1280px-Go_Logo_Blue.svg.png' width={100} height={90} /></div> */}
    {/* <div className="col border p-2  bg-white text-center"><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png' width={100} height={90} /></div>
    <div className="col border p-2  bg-white text-center"><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/800px-ISO_C%2B%2B_Logo.svg.png' width={100} height={90} /></div> */}
</div>
<div className="row my-3">

    <h4 className='text-black text-md-start'>Front End</h4>

    <div className="col border p-2  bg-white text-center"><img src='https://cdn3d.iconscout.com/3d/free/thumb/free-html-5728485-4781249.png?f=webp' alt ="Low key It solutions Website development "width={120} height={90} /></div>
    <div className="col border p-2  bg-white text-center"><img src='https://cdn-icons-png.flaticon.com/512/919/919826.png' alt='Low key It solutions Website development' width={100} height={90} /></div>
    <div className="col border p-2  bg-white text-center"><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/640px-JavaScript-logo.png' alt="Low key It solutions Website development" width={100} height={90} /></div>
    <div className="col border p-2  bg-white text-center"><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png'alt='Low key It solutions Website development' width={100} height={90} /></div>
    <div className="col border p-2  bg-white text-center"><img src='https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png?f=webp'alt="Low key It solutions Website development" width={100} height={90} /></div>
    {/* <div className="col border p-2  bg-white text-center"><img src='https://i.pinimg.com/originals/fd/d6/d3/fdd6d3974ac00bcc3133b627e309586f.jpg' width={100} height={90} /></div> */}
</div>


<div className="row my-3">
    <h2 className='text-dark text-md-start'>Platforms</h2>


    <div className="col border p-2  bg-white text-center"><img src='https://1000logos.net/wp-content/uploads/2021/12/Dynamics-365-logo.png' width={60} height={90} /></div>
    <div className="col border p-2  bg-white text-center"><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/2560px-Salesforce.com_logo.svg.png' width={60} height={90} /></div>
    {/* <div className="col border p-2  bg-white text-center"><img src='https://www.magnolia-cms.com/dam/jcr:e962434c-777a-465c-a5dd-07b2ff97df70/Adobe_Commerce_Cloud_logo.png' width={60} height={90} /></div>
    <div className="col border p-2  bg-white text-center"><img src='https://5.imimg.com/data5/SELLER/Default/2023/8/339657239/UE/YQ/WV/11874969/microsoft-sharepoint-software.png' width={70} height={90} /></div>
    <div className="col border p-2  bg-white text-center"><img src='https://1000logos.net/wp-content/uploads/2021/09/ServiceNow-Logo.png' width={60} height={90} /></div>
    <div className="col border p-2  bg-white text-center"><img src='https://logohistory.net/wp-content/uploads/2023/05/Power-BI-Symbol.png' width={60} height={90} /></div> */}
    {/* <div className="col border p-2  bg-white text-center"><img src='https://www.shutterstock.com/image-vector/sap-logo-vector-editorial-transparent-260nw-2336062241.jpg' width={60} height={90} /></div> */}
    {/* <div className="col border p-2  bg-white text-center"><img src='https://logoisus.com/wp-content/uploads/2019/06/radar_ib1il.jpg' width={60} height={70} /></div> */}
</div>

</div>
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
                                        <h1 className="display-5 mb-5">Interested in CRM Services?</h1>
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

export default Solutions;