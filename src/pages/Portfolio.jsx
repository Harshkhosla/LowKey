import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import s1 from '../assets/img/service-1.jpg';
import s2 from '../assets/img/service-2.jpg';
import s3 from '../assets/img/service-3.jpg';

function Portfolio() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the Portfolio component mounts
  }, []);
  return (
    <>
    <div className="container-fluid p-0  fadeIn" >
                <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="w-100 vh-100 object-fit-cover" src="https://www.scnsoft.com/boss/images/4145fd5f-303e-407c-9753-25b18026689fbi-for-200-healthcare-centers-large.jpg" alt="Devcorps" />
                            <div className="carousel-caption" style={{backgroundColor:"#212529" }}>
                                <div className="container">
                                    <div className="row justify-content-start">
                                        <div className="col-lg-8">
                                            <h2 className="display-2 mb-4 animated slideInDown">Selected Success Stories from Our 3,600-Project Portfolio
                                            </h2>
                                            <div style={{
    height: "34%" , padding:"6px 10px"}}>
                                                <div style={{color: "#fff",
    fontSize: "18px",
    lineHeight: "normal",
    marginBottom: "10px"}}><p>With the expertise built on 1,900+ web projects, ScienceSoft professionally designs, redesigns and continuously supports customer-facing and enterprise web apps and achieves high conversion and adoption rates.</p></div>
                                                {/* <div class="intro-column-content">Healthcare, Software products</div> */}
                                                {/* <button className="btn btn-theme w-50 py-3 mt-3" type="submit">Request Development Services</button> */}
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
            <div className="border rounded-0 pt-4 px-4 bg-theme-light" style={{backgroundColor:"rgba(255, 136, 107, 0.95)"}}>
            <nav>
                                    <div className="nav nav-tabs mb-3" id="nav-tab" role="tablist">
                                        <button className="nav-link px-4 fw-semi-bold active text-dark" id="nav-first-tab" data-bs-toggle="tab"
                                            data-bs-target="#nav-first" type="button" role="tab" aria-controls="nav-first"
                                            aria-selected="false">BY INDUSTRY
                                            </button>
                                        <button className="nav-link px-4 fw-semi-bold  text-dark" id="nav-second-tab" data-bs-toggle="tab"
                                            data-bs-target="#nav-second" type="button" role="tab" aria-controls="nav-second"
                                            aria-selected="false">BY SERVICE
                                            </button>
                                             <button className="nav-link px-4 fw-semi-bold  text-dark" id="nav-third-tab" data-bs-toggle="tab"
                                            data-bs-target="#nav-third" type="button" role="tab" aria-controls="nav-third"
                                            aria-selected="false">
                                            BY SOLUTION</button>
                                             <button className="nav-link px-4 fw-semi-bold text-dark " id="nav-fourth-tab" data-bs-toggle="tab"
                                            data-bs-target="#nav-fourth" type="button" role="tab" aria-controls="nav-fourth"
                                            aria-selected="false">BY TECHNOLOGY
                                            </button>
                                              <button className="nav-link px-4 fw-semi-bold text-dark " id="nav-five-tab" data-bs-toggle="tab"
                                            data-bs-target="#nav-five" type="button" role="tab" aria-controls="nav-five"
                                            aria-selected="false">BY REGION
                                            </button>
                                       
                                            
                                            
                                    </div>
                                </nav>
                </div>
   
                <div className="container my-3">
      
        <div className="col-md-4">
          <div className="card mb-3 py-5 "style={{width:"320%" , color:"white" , backgroundColor:"rgb(33, 37, 41)"}}>
            <div className="card-body row">
                <div className='col-md-4' style={{width:"fit-content"}}>
                <div className="project-img mb-3 ">
                                    <img className="img-fluid rounded" src={s3} alt=""  height={150} width={150}/>
                                    {/* <a href=""><i className="fa fa-link fa-3x text-theme"></i></a> */}
                
                                </div>
                </div>
           
                                <div className='col-md-4'>
                                <h5 className="card-title">Project 1</h5>
              <p className="card-text">
                This is a rectangular card example using Bootstrap 5.
              </p>
                                </div>
            
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card mb-3 py-5 "style={{width:"320%" , color:"white" , backgroundColor:"rgb(33, 37, 41)"}}>
            <div className="card-body row">
                <div className='col-md-4' style={{width:"fit-content"}}>
                <div className="project-img mb-3 ">
                                    <img className="img-fluid rounded" src={s2} alt=""  height={150} width={150}/>
                                    {/* <a href=""><i className="fa fa-link fa-3x text-theme"></i></a> */}
                
                                </div>
                </div>
           
                                <div className='col-md-4'>
                                <h5 className="card-title">Project 2</h5>
              <p className="card-text">
                This is a rectangular card example using Bootstrap 5.
              </p>
                                </div>
            
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-3 py-5 "style={{width:"320%" , color:"white" , backgroundColor:"rgb(33, 37, 41)"}}>
            <div className="card-body row">
                <div className='col-md-4' style={{width:"fit-content"}}>
                <div className="project-img mb-3 ">
                                    <img className="img-fluid rounded" src={s1} alt=""  height={150} width={150}/>
                                    {/* <a href=""><i className="fa fa-link fa-3x text-theme"></i></a> */}
                
                                </div>
                </div>
           
                                <div className='col-md-4'>
                                <h5 className="card-title">Project 3</h5>
              <p className="card-text">
                This is a rectangular card example using Bootstrap 5.
              </p>
                                </div>
            
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-3 py-5 "style={{width:"320%" , color:"white" , backgroundColor:"rgb(33, 37, 41)"}}>
            <div className="card-body row">
                <div className='col-md-4' style={{width:"fit-content"}}>
                <div className="project-img mb-3 ">
                                    <img className="img-fluid rounded" src={s2} alt=""  height={150} width={150}/>
                                    {/* <a href=""><i className="fa fa-link fa-3x text-theme"></i></a> */}
                
                                </div>
                </div>
           
                                <div className='col-md-4'>
                                <h5 className="card-title">Project 4</h5>
              <p className="card-text">
                This is a rectangular card example using Bootstrap 5.
              </p>
                                </div>
            
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-3 py-5 "style={{width:"320%" , color:"white" , backgroundColor:"rgb(33, 37, 41)"}}>
            <div className="card-body row">
                <div className='col-md-4' style={{width:"fit-content"}}>
                <div className="project-img mb-3 ">
                                    <img className="img-fluid rounded" src={s3} alt=""  height={150} width={150}/>
                                    {/* <a href=""><i className="fa fa-link fa-3x text-theme"></i></a> */}
                
                                </div>
                </div>
           
                                <div className='col-md-4'>
                                <h5 className="card-title">Project 5</h5>
              <p className="card-text">
                This is a rectangular card example using Bootstrap 5.
              </p>
                                </div>
            
            </div>
          </div>
        </div>

       

        
      
    </div>
</>
  )
}

export default Portfolio;