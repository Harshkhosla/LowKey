import React, { useEffect, useRef, useState } from 'react';
import Rellax from 'rellax';
import image1 from '../assets/img/carousel-1.jpg';
import image2 from '../assets/img/carousel-2.jpg';
import { Link, useLocation } from "react-router-dom";
import aboutimg from '../assets/img/about.jpg'
import CountUp from 'react-countup';
import service1 from '../assets/img/service-1.jpg';
import service2 from '../assets/img/service-2.jpg';
import service3 from '../assets/img/service-3.jpg';
import service4 from '../assets/img/service-4.jpg';
import onlineShop from '../assets/img/online-shop.png';
import dm from '../assets/img/dm.png';
import android from '../assets/img/android.png';
import code from '../assets/img/code.png';
import ios from '../assets/img/ios.png';
import software from '../assets/img/software.png';
import ReactOwlCarousel from 'react-owl-carousel';
import t1 from '../assets/img/testimonial-1.jpg';
import t2 from '../assets/img/testimonial-2.jpg';
import t3 from '../assets/img/testimonial-3.jpg';
import t4 from '../assets/img/testimonial-4.jpg';
import s1 from '../assets/img/service-1.jpg';
import s2 from '../assets/img/service-2.jpg';
import s3 from '../assets/img/service-3.jpg';
import s4 from '../assets/img/service-1.png';
import s5 from '../assets/img/atms.png';
import s6 from '../assets/img/stulyfe.png';
import s7 from '../assets/img/genie.png';
import Carousel from 'react-grid-carousel'

const FaqItem = ({ num, question, answer, isOpen, toggleFaq }) => {
    return (
        <div className={`faq-item ${isOpen ? 'faq-active' : ''}`}>
            <h3 onClick={toggleFaq}>
                <span className="num">{num}</span> <span>{question}</span>
            </h3>
            <div className={`faq-content ${isOpen ? 'open' : ''}`}>
                <p>{answer}</p>
            </div>
            <i className={`faq-toggle bi ${isOpen ? 'bi-chevron-up' : 'bi-chevron-down'}`} onClick={toggleFaq}></i>
        </div>
    );
};

function Home() {
    const rellaxRef = useRef(null);
    const options = {
        0: {
            items: 1
        },
        576: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        }
    };
    const [activeFaq, setActiveFaq] = useState(null);
    const faqData = [
        {
            num: "1.",
            question: "How experienced is your team?",
            answer: "Our team consists of highly skilled professionals with diverse expertise in various technological domains. We have seasoned developers, engineers, designers, and consultants with a proven track record of delivering exceptional results for our clients.",
        },
        {
            num: "3.",
            question: "Do you work with startups as well as established businesses?",
            answer: "Yes, we cater to the needs of both startups and established businesses. We understand the unique challenges that each type of business faces, and our services are tailored to accommodate the specific requirements of organizations at any stage of their development.",
        },
        {
            num: "4.",
            question: "Can you handle both small and large-scale projects?",
            answer: "Absolutely. Our company has the capacity and flexibility to undertake projects of varying sizes and complexities. We are equipped to manage small, agile projects as well as large-scale, enterprise-level initiatives with equal dedication and proficiency.",
        },
        {
            num: "5.",
            question: "What is your approach to customer support?",
            answer: "We prioritize providing exceptional customer support to our clients. Our team is readily available to address any concerns, offer technical assistance, and provide timely solutions to ensure a seamless and hassle-free experience for our customers.",
        },
        {
            num: "6.",
            question: "How do you stay updated with the latest technological advancements?",
            answer: "We are committed to staying at the forefront of technological advancements. Our team regularly undergoes training and participates in industry conferences and workshops to stay updated with the latest trends, tools, and technologies, ensuring that our clients benefit from the most cutting-edge solutions available.",
        },
    ];
    const handleFaqClick = (index) => {
        if (activeFaq === index) {
            setActiveFaq(null); // Close the FAQ if it's already open
        } else {
            setActiveFaq(index); // Open the clicked FAQ
        }
    };
    useEffect(() => {
        rellaxRef.current = new Rellax('.rellax', {
            // You can configure Rellax options here
            speed: 2,
            center: false,
            wrapper: null,
            round: true,
            vertical: true,
            horizontal: false,
        });
        // Clean up Rellax when the component unmounts
        return () => {
            if (rellaxRef.current) {
                rellaxRef.current.destroy();
            }
        };
    }, []);

    const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0); // Scroll to top if no hash present
    }
  }, [location]);
  const items = [
    {
      id: 0,
      link: '/gingko_project',
      imgSrc: s4, // Replace 'URL_TO_IMAGE' with the actual image URL
      title: 'Gingko',
    },
    {
        id: 1,
        link: '/gingko_project',
        imgSrc: s2, // Replace 'URL_TO_IMAGE' with the actual image URL
        title: 'Gingko 1',
      },
      {
        id: 2,
        link: '/gingko_project',
        imgSrc: s3, // Replace 'URL_TO_IMAGE' with the actual image URL
        title: 'Gingko 2',
      },
      {
        id: 3,
        link: '/gingko_project',
        imgSrc: s1, // Replace 'URL_TO_IMAGE' with the actual image URL
        title: 'Gingko 3',
      },
    // Add more items as needed
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const shiftLeft = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    } else {
      setActiveIndex(items.length - 4);
    }
  };

  const shiftRight = () => {
    if (activeIndex < items.length - 4) {
      setActiveIndex(activeIndex + 1);
    } else {
      setActiveIndex(0);
    }
  };

    return (
        <div >
            {/* Carousel Start */}
            <div className="container-fluid p-0 mb-5 fadeIn">
                <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="w-100 vh-100 object-fit-cover" src={image1} alt="Low key It solutions Website development" />
                            <div className="carousel-caption">
                                <div className="container">
                                    <div className="row justify-content-start">
                                        <div className="col-lg-8">
                                            <h1 className="display-2 mb-4 animated slideInDown">ONE STOP FOR ALL
                                                YOUR IT SOLUTIONS
                                            </h1>
                                            <p className='fs-3 text-light'>We specialize in crafting cutting-edge software that transforms
                                                ideas into reality. Together, we
                                                shape the digital landscape of
                                                tomorrow.</p>
                                            <Link to="/#business-solution" className="qoutebtn activet">Explore More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="w-100 vh-100 object-fit-cover" src={image1} alt="Low key It solutions Website development" />
                            <div className="carousel-caption">
                                <div className="container">
                                    <div className="row justify-content-start">
                                        <div className="col-lg-8">
                                            <h1 className="display-2 mb-4 animated slideInDown">Find all your IT solutions in one convenient place.</h1>
                                            <p className='fs-3 text-light'>We specialize in crafting cutting-edge software that transforms
                                                ideas into reality. Together, we
                                                shape the digital landscape of
                                                tomorrow.</p>
                                            <Link to="/#business-solution" className="qoutebtn activet">Explore More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="d-none d-sm-block carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="d-none d-sm-block carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            {/* Carousel End */}

            {/* About Start */}
            <div className="container-xxl py-5" id="about">
                <div className="container">
                    <div className="row g-4 align-items-end mb-4">
                        <div className="col-lg-6  " >
                            <img className="img-fluid rounded" src={aboutimg} alt='Low key It solutions Website development'/>
                        </div>
                        <div className="col-lg-6  " data-aos="fade-up"  >
                            <h2 className=" ">We Help Our Clients To Grow Their Business</h2>
                            <p className="">With years of experience in IT consulting
                                and providing bespoke solutions. Our
                                mission is to transform innovative ideas
                                into reality through the leverage of cutting-edge technology,</p>
                            <h1 className=" ">What We Do</h1>
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
                            <div className="border rounded-0 p-4 bg-theme-light">
                                <nav>
                                    <div className="nav nav-tabs mb-3" id="nav-tab" role="tablist">
                                        <button className="nav-link px-4 fw-semi-bold active" id="nav-mission-tab" data-bs-toggle="tab"
                                            data-bs-target="#nav-mission" type="button" role="tab" aria-controls="nav-mission"
                                            aria-selected="false">Mission</button>
                                        <button className="nav-link px-4 fw-semi-bold" id="nav-vision-tab" data-bs-toggle="tab"
                                            data-bs-target="#nav-vision" type="button" role="tab" aria-controls="nav-vision"
                                            aria-selected="false">Vision</button>
                                    </div>
                                </nav>
                                <div className="tab-content" id="nav-tabContent">
                                    <div className="tab-pane fade show active" id="nav-mission" role="tabpanel"
                                        aria-labelledby="nav-mission-tab">
                                        <p>We are a technology-driven company that excels in
                                            creating custom, boundary-pushing solutions. Our
                                            commitment to quality and excellence has established
                                            us as a trusted partner for numerous businesses. We are
                                            dedicated to empowering individuals and companies
                                            through cutting-edge, user-friendly software that leads
                                            in technological innovation, striving to drive positive
                                            change and bolster client and partner success.</p>

                                    </div>
                                    <div className="tab-pane fade" id="nav-vision" role="tabpanel" aria-labelledby="nav-vision-tab">
                                        <p>Empowering tomorrow through innovative tech solutions, we envision a world where every business thrives on cutting-edge technology. Our mission is to redefine possibilities, catalyze digital transformation, and inspire a global community through seamless integration of creativity and technology.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border rounded p-4 ">
                        <div className="row g-4">
                            <div className="col-lg-4 " data-aos="fade-left" data-aos-duration="500">
                                <div className="h-100">
                                    <div className="d-flex">
                                        <div className="flex-shrink-0 btn-lg-square rounded-circle bg-theme">
                                            <i className="fa fa-times text-white"></i>
                                        </div>
                                        <div className="ps-3">
                                            <h4>No Hidden Cost</h4>
                                            {/* <span>Clita erat ipsum lorem sit sed stet duo justo</span> */}
                                        </div>
                                        <div className="border-end d-none d-lg-block"></div>
                                    </div>
                                    <div className="border-bottom mt-4 d-block d-lg-none"></div>
                                </div>
                            </div>
                            <div className="col-lg-4 " data-aos="fade-left" >
                                <div className="h-100">
                                    <div className="d-flex">
                                        <div className="flex-shrink-0 btn-lg-square rounded-circle bg-theme">
                                            <i className="fa fa-users text-white"></i>
                                        </div>
                                        <div className="ps-3">
                                            <h4>Dedicated Team</h4>
                                            {/* <span>Clita erat ipsum lorem sit sed stet duo justo</span> */}
                                        </div>
                                        <div className="border-end d-none d-lg-block"></div>
                                    </div>
                                    <div className="border-bottom mt-4 d-block d-lg-none"></div>
                                </div>
                            </div>
                            <div className="col-lg-4 " data-aos="fade-left" data-aos-duration="1500">
                                <div className="h-100">
                                    <div className="d-flex">
                                        <div className="flex-shrink-0 btn-lg-square rounded-circle bg-theme">
                                            <i className="fa fa-phone text-white"></i>
                                        </div>
                                        <div className="ps-3">
                                            <h4>24/7 Available</h4>
                                            {/* <span>Clita erat ipsum lorem sit sed stet duo justo</span> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* About End */}

            {/* Service Start */}
            <div className="container-xxl service py-5" id='service'>
                <div className="container">
                    <div className="text-center mx-auto " data-aos="fade-up" data-aos-delay="1000" style={{ maxWidth: '600px' }}>
                        <h1 className="display-5 mb-5">Our Technical Services For Business</h1>
                    </div>
                    <div className="row g-4 align-items-center" data-aos="fade-up" data-aos-delay="1000" >
                        <div className="col-lg-4">
                            <div className="nav nav-pills d-flex flex-row flex-md-column justify-content-between w-100 h-100 me-4">
                                <button className="nav-link w-100 d-flex align-items-center text-start border p-4 py-3 mb-2 active"
                                    data-bs-toggle="pill" data-bs-target="#tab-pane-1" type="button">
                                    <h5 className="m-0"><i className="fa fa-bars text-theme me-3"></i>UI/UX Designing</h5>
                                </button>
                                <button className="nav-link w-100 d-flex align-items-center text-start border p-4 py-3 mb-2"
                                    data-bs-toggle="pill" data-bs-target="#tab-pane-2" type="button">
                                    <h5 className="m-0"><i className="fa fa-bars text-theme me-3"></i>Website development
                                    </h5>
                                </button>
                                <button className="nav-link w-100 d-flex align-items-center text-start border p-4 py-3 mb-2"
                                    data-bs-toggle="pill" data-bs-target="#tab-pane-3" type="button">
                                    <h5 className="m-0"><i className="fa fa-bars text-theme me-3"></i>App Development
                                    </h5>
                                </button>
                                <button className="nav-link w-100 d-flex align-items-center text-start border p-4 py-3 mb-2"
                                    data-bs-toggle="pill" data-bs-target="#tab-pane-4" type="button">
                                    <h5 className="m-0"><i className="fa fa-bars text-theme me-3"></i>Custom Web App
                                    </h5>
                                </button>
                                <button className="nav-link w-100 d-flex align-items-center text-start border p-4 py-3 mb-2"
                                    data-bs-toggle="pill" data-bs-target="#tab-pane-5" type="button">
                                    <h5 className="m-0"><i className="fa fa-bars text-theme me-3"></i>Automation
                                    </h5>
                                </button>
                                <button className="nav-link w-100 d-flex align-items-center text-start border p-4 py-3 mb-2"
                                    data-bs-toggle="pill" data-bs-target="#tab-pane-6" type="button">
                                    <h5 className="m-0"><i className="fa fa-bars text-theme me-3"></i>Cloud Computing

                                    </h5>
                                </button>
                                <button className="nav-link w-100 d-flex align-items-center text-start border p-4 py-3 mb-0"
                                    data-bs-toggle="pill" data-bs-target="#tab-pane-7" type="button">
                                    <h5 className="m-0"><i className="fa fa-bars text-theme me-3"></i>IT Consulting
                                    </h5>
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="tab-content w-100">
                                <div className="tab-pane fade show active" id="tab-pane-1">
                                    <div className="row g-4">
                                        <div className="col-md-6" style={{ minHeight: '350px' }}>
                                            <div className="position-relative h-100">
                                                <img className="position-absolute rounded w-100 h-100" src={service1}
                                                    style={{ objectFit: 'cover' }} alt="Low key It solutions Website development" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <h3 className="mb-4">UI/UX Design Services</h3>
                                            <p className="mb-4">


                                                Crafting intuitive and visually appealing digital experiences, our UI/UX design team combines user-centric design with elegant visuals to create seamless and engaging interfaces. We specialize in wireframing, user research, interaction design, and responsive UI, ensuring that your digital platform reflects your brand's identity while offering a user-friendly experience. With our expertise and collaborative approach, we bring innovation and creativity to every project, guaranteeing a compelling and effective user journey for your audience.
                                            </p>

                                            <a href="" className="btn btn-theme py-3 px-5 mt-3">Read More</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="tab-pane-2">
                                    <div className="row g-4">
                                        <div className="col-md-6" style={{ minHeight: '350px' }}>
                                            <div className="position-relative h-100">
                                                <img className="position-absolute rounded w-100 h-100" src={service2}
                                                    style={{ objectFit: 'cover' }} alt="Low key It solutions Website development" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <h3 className="mb-4">  Web Development Services</h3>
                                            <p className="mb-4">


                                                Our web development services encompass the creation of dynamic and responsive websites that reflect your brand's essence and meet the needs of your target audience. With a focus on cutting-edge technologies and industry best practices, our expert team ensures that your website is not only visually appealing but also user-friendly and fully functional across all devices. From front-end development to back-end integration, we deliver customized solutions that align with your business goals and enhance your online presence. Collaborate with us to build a powerful digital platform that drives engagement, fosters growth, and maximizes your online impact.
                                            </p>
                                           
                                            {/* <a href="" className="btn btn-theme py-3 px-5 mt-3">Read More</a> */}
                                            <Link to='/webdev' className="btn btn-theme py-3 px-5 mt-3">Read More</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="tab-pane-3">
                                    <div className="row g-4">
                                        <div className="col-md-6" style={{ minHeight: '350px' }}>
                                            <div className="position-relative h-100">
                                                <img className="position-absolute rounded w-100 h-100" src={service3}
                                                    style={{ objectFit: 'cover' }} alt="Low key It solutions Website development" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <h3 className="mb-4">  App Development Services</h3>
                                            <p className="mb-4">


                                                Our app development services revolve around crafting innovative and user-friendly mobile applications that cater to the evolving needs of your target audience. With a focus on seamless user experience and optimal performance, our team of experienced developers specializes in creating robust and scalable apps for various platforms. From conceptualization to deployment, we ensure that your app embodies your brand's vision while offering a smooth and engaging interface for users. Collaborate with us to bring your app idea to life and establish a strong presence in the ever-expanding mobile landscape.
                                            </p>
                                          
                                          <button  className="btn btn-theme py-3 px-5 mt-3">Read More</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="tab-pane-4">
                                    <div className="row g-4">
                                        <div className="col-md-6" style={{ minHeight: '350px' }}>
                                            <div className="position-relative h-100">
                                                <img className="position-absolute rounded w-100 h-100" src={service4}
                                                    style={{ objectFit: 'cover' }} alt="Low key It solutions Website development" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <h3 className="mb-4"> Custom Web Application Development</h3>
                                            <p className="mb-4">

                                                Our custom web application development services focus on creating tailored solutions that align precisely with your business requirements and objectives. Leveraging the latest technologies and industry best practices, our expert team ensures the development of scalable and secure web applications that streamline your business processes and enhance user engagement. From comprehensive planning to seamless integration, we prioritize functionality, user experience, and performance, delivering intuitive and feature-rich web applications that empower your business to achieve its full potential. Partner with us to transform your unique vision into a powerful and efficient digital solution.


                                            </p>

                                            <a href="" className="btn btn-theme py-3 px-5 mt-3">Read More</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="tab-pane-5">
                                    <div className="row g-4">
                                        <div className="col-md-6" style={{ minHeight: '350px' }}>
                                            <div className="position-relative h-100">
                                                <img className="position-absolute rounded w-100 h-100" src={service2}
                                                    style={{ objectFit: 'cover' }} alt="Low key It solutions Website development" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <h3 className="mb-4">   Automation Services</h3>
                                            <p className="mb-4">


                                                Our automation services streamline and optimize your business processes, allowing you to focus on critical tasks and maximize productivity. Through the implementation of advanced automation tools and technologies, our team customizes solutions that enhance operational efficiency and reduce manual effort. From workflow automation to robotic process automation (RPA), we aim to simplify complex tasks and accelerate your business's growth. By integrating intelligent automation into your operations, we help you achieve cost savings, minimize errors, and unlock new opportunities for business expansion. Collaborate with us to revolutionize your workflow and unleash the full potential of automation in your business.


                                            </p>

                                            <a href="" className="btn btn-theme py-3 px-5 mt-3">Read More</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="tab-pane-6">
                                    <div className="row g-4">
                                        <div className="col-md-6" style={{ minHeight: '350px' }}>
                                            <div className="position-relative h-100">
                                                <img className="position-absolute rounded w-100 h-100" src={service3}
                                                    style={{ objectFit: 'cover' }} alt="Low key It solutions Website development" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <h3 className="mb-4"> Cloud Computing Services</h3>
                                            <p className="mb-4">

                                                Our cloud computing services provide secure and scalable solutions to optimize your business operations and drive digital transformation. Leveraging the power of cloud technology, our expert team helps you seamlessly migrate your infrastructure, applications, and data to the cloud, ensuring enhanced flexibility, accessibility, and cost-efficiency. Whether you require cloud storage, computing power, or software solutions, we offer tailored strategies that align with your business goals and foster agility and innovation. Partner with us to leverage the full potential of the cloud and unlock new opportunities for growth and expansion.

                                                {/* Our app development services revolve around crafting innovative and user-friendly mobile applications that cater to the evolving needs of your target audience. With a focus on seamless user experience and optimal performance, our team of experienced developers specializes in creating robust and scalable apps for various platforms. From conceptualization to deployment, we ensure that your app embodies your brand's vision while offering a smooth and engaging interface for users. Collaborate with us to bring your app idea to life and establish a strong presence in the ever-expanding mobile landscape. */}
                                            </p>

                                            <a href="" className="btn btn-theme py-3 px-5 mt-3">Read More</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="tab-pane-7">
                                    <div className="row g-4">
                                        <div className="col-md-6" style={{ minHeight: '350px' }}>
                                            <div className="position-relative h-100">
                                                <img className="position-absolute rounded w-100 h-100" src={service1}
                                                    style={{ objectFit: 'cover' }} alt="Low key It solutions Website development" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <h3 className="mb-4">  IT Consulting Services</h3>
                                            <p className="mb-4">


                                                Our IT consulting services offer strategic guidance and technical expertise to help your business navigate the complexities of the digital landscape. With a focus on aligning technology with your business goals, our experienced consultants provide insights and solutions that optimize your IT infrastructure, enhance security, and maximize operational efficiency. Whether you need assistance with IT strategy, cybersecurity, or digital transformation, our team offers comprehensive support and customized recommendations to ensure that your technology investments yield measurable results and drive sustainable business growth.


                                                {/* Crafting intuitive and visually appealing digital experiences, our UI/UX design team combines user-centric design with elegant visuals to create seamless and engaging interfaces. We specialize in wireframing, user research, interaction design, and responsive UI, ensuring that your digital platform reflects your brand's identity while offering a user-friendly experience. With our expertise and collaborative approach, we bring innovation and creativity to every project, guaranteeing a compelling and effective user journey for your audience. */}
                                            </p>

                                            <a href="" className="btn btn-theme py-3 px-5 mt-3">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Service End */}

            {/* Facts Start */}
            <div className="container-fluid facts py-5">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.1s">
                            <i className="fa fa-users fa-3x text-white mb-3"></i>
                            <h1 className="display-4 text-white" data-toggle="counter-up">
                                <CountUp
                                    end={25}
                                    enableScrollSpy
                                    duration={1} />
                            </h1>
                            <span className="fs-5 text-white">Happy Clients</span>
                            <hr className="bg-white w-25 mx-auto mb-0" />
                        </div>
                        <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.3s">
                            <i className="fa fa-check fa-3x text-white mb-3"></i>
                            <h1 className="display-4 text-white" data-toggle="counter-up">
                                <CountUp
                                    end={350}
                                    enableScrollSpy
                                    duration={1} />
                            </h1>
                            <span className="fs-5 text-white">Projects Completed</span>
                            <hr className="bg-white w-25 mx-auto mb-0" />
                        </div>
                        <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.5s">
                            <i className="fa fa-users-cog fa-3x text-white mb-3"></i>
                            <h1 className="display-4 text-white" data-toggle="counter-up">
                                <CountUp
                                    end={15}
                                    enableScrollSpy
                                    duration={1} />
                            </h1>
                            <span className="fs-5 text-white">Dedicated Staff</span>
                            <hr className="bg-white w-25 mx-auto mb-0" />
                        </div>
                        <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.7s">
                            <i className="fa fa-award fa-3x text-white mb-3"></i>
                            <h1 className="display-4 text-white" data-toggle="counter-up">
                                <CountUp
                                    end={3600}
                                    enableScrollSpy
                                    duration={1} />
                            </h1>
                            <span className="fs-5 text-white">Hours of Support</span>
                            <hr className="bg-white w-25 mx-auto mb-0" />
                        </div>
                    </div>
                </div>
            </div>
            {/* Facts End */}

            {/*  Features Start */}
            <div className=" text-bg-dark feature py-5" id='it-support'>
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6" data-aos="fade-up" >
                            {/* <p className="d-inline-block border rounded text-theme fw-semi-bold py-1 px-3">IT Support</p> */}
                            <h1 className="display-5 mb-4">Few Reasons Why People Choosing Us!</h1>
                            <p className="mb-4">We are a technology-driven company that excels in
                                creating custom, boundary-pushing solutions. Our
                                commitment to quality and excellence has established
                                us as a trusted partner for numerous businesses. We are
                                dedicated to empowering individuals and companies
                                through cutting-edge, user-friendly software that leads
                                in technological innovation, striving to drive positive
                                change and bolster client and partner success.
                            </p>
                            <Link className="btn btn-theme py-3 px-5 text-decoration-none" to="/#testimonial">Explore More</Link>
                        </div>
                        <div className="col-lg-6">
                            <div className="row g-4 align-items-center ">
                                <div className="col-md-6">
                                    <div className="row g-4">
                                        <div className="col-12 " data-aos="fade-up" >
                                            <div className="feature-box border rounded p-4">
                                                <i className="fa fa-check fa-3x text-theme mb-3"></i>
                                                <h4 className="mb-3">Fast Executions</h4>
                                                <p className="mb-3 ">READY TO ELEVATE YOUR BUSINESS ? LET'S DISCUSS YOUR NEEDS TODAY.</p>
                                                <Link className="fw-semi-bold text-decoration-none text-theme" to="/">Read More <i
                                                    className="fa fa-arrow-right ms-1"></i></Link>
                                            </div>
                                        </div>
                                        <div className="col-12 " data-aos="fade-up" >
                                            <div className="feature-box border rounded p-4">
                                                <i className="fa fa-check fa-3x text-theme mb-3"></i>
                                                <h4 className="mb-3">Guide & Support</h4>
                                                <p className="mb-3 ">Let'
                                                    s connect and explore the
                                                    perfect solutions for your
                                                    buisness needs together!</p>
                                                <Link className="fw-semi-bold text-decoration-none text-theme" to="/">Read More <i
                                                    className="fa fa-arrow-right ms-1"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 " data-aos="fade-up" >
                                    <div className="feature-box border rounded p-4">
                                        <i className="fa fa-check fa-3x text-theme mb-3"></i>
                                        <h4 className="mb-3">Accurecy</h4>
                                        <p className="mb-3 ">ONE VISION!
                                            YOUR SUCCESS,
                                            OUR COMMITMENT </p>
                                        <Link className="fw-semi-bold text-decoration-none text-theme" to="/">Read More <i className="fa fa-arrow-right ms-1"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*  Features End */}

            {/* bussines start */}
            <section id="business-solution" className="py-5 servicesection overflow-hidden bg-theme-extradark">
                <div className="position-relative py-5">
                    <div className='text-white text-center fs-1 z-10 position-relative' data-aos="fade-up">Our Business Solutions</div>
                    <div className="position-absolute bottom-0 h-100 w-100 d-flex align-items-end rellax"
                        data-rellax-speed="7" data-rellax-percentage="0.5">
                        <div className="service-bg-circle1 "></div>
                        <div className="service-bg-circle2 "></div>
                        <div className="service-bg-circle3"></div>
                        <div className="service-bg-circle4"></div>
                        <div className="service-bg-circle5"></div>
                    </div>
                    <div className="container">
                        <div className="row text-white">
                            <div className="col-md-6 col-xl-4 p-xxl-5 p-3" data-aos-offset="100" data-aos="fade-up"
                            >
                                <div className="p-4 h-100 servicebox rounded-5">
                                    <div className="serviceicon p-2">
                                        <img src={code} className="img-fluid" alt="Low key It solutions Website development" />
                                    </div>
                                    <h4 className="text-end p-2">Custom Solutions</h4>
                                    {/* <p >Our custom solutions are tailored to meet your unique business needs, providing specialized and scalable answers to your specific challenges.</p> */}
                                    <div className="serviceboxbtn">
                                        <button className="cta1">
                                            <span>Know More</span>
                                            <i className="fa fa-arrow-right text-white"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-4 p-xxl-5 p-3" data-aos-offset="200" data-aos="fade-up"
                            >
                                <div className="p-4 h-100 servicebox rounded-5">
                                    <div className="serviceicon p-2">
                                        <img src="https://cdn-icons-png.flaticon.com/512/5129/5129557.png" className="img-fluid" alt="Low key It solutions Website development" />
                                    </div>
                                    <h4 className="text-end p-2">ERP</h4>
                                    {/* <p >Our ERP solutions streamline and integrate your business processes, enabling you to manage resources efficiently and make data-driven decisions.</p> */}
                                    <div className="serviceboxbtn">
                                        <button className="cta1">
                                            <span>Know More</span>
                                            <i className="fa fa-arrow-right text-white"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-4 p-xxl-5 p-3" data-aos-offset="300" data-aos="fade-up"
                            >
                                <div className="p-4 h-100 servicebox rounded-5">
                                    <div className="serviceicon p-2">
                                        <img src="https://e7.pngegg.com/pngimages/714/635/png-clipart-logo-internet-brand-organization-graphics-crm-icon-blue-text.png" className="img-fluid" alt="Low key It solutions Website development" />
                                    </div>
                                    <h4 className="text-end p-2">CRM</h4>
                                    {/* <p >Our CRM solutions empower your business to build and maintain strong, lasting relationships with your customers. </p> */}
                                    <div className="serviceboxbtn">
                                        <button className="cta1">
                                            <Link to='/crm' className='text-decoration-none'>
                                            <span>Know More
                                                <i className="fa fa-arrow-right text-white"></i>
                                            </span>
                                            </Link>
                                           
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-4 p-xxl-5 p-3" data-aos-offset="100" data-aos="fade-up"
                            >
                                <div className="p-4 h-100 servicebox rounded-5">
                                    <div className="serviceicon p-2">
                                        <img src="https://cdn-icons-png.flaticon.com/512/2867/2867263.png" className="img-fluid" alt="Low key It solutions Website development" />
                                    </div>
                                    <h4 className="text-end p-2">CMS</h4>
                                    {/* <p >Our CMS solutions provide a user-friendly and efficient platform for managing and delivering digital content across your organization. With a focus on simplicity and customization</p> */}
                                    <div className="serviceboxbtn">
                                        <button className="cta1">
                                            <span>Know More</span>
                                            <i className="fa fa-arrow-right text-white"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-4 p-xxl-5 p-3" data-aos-offset="200" data-aos="fade-up"
                            >
                                <div className="p-4 h-100 servicebox rounded-5">
                                    <div className="serviceicon p-3">
                                        <img src="https://cdn-icons-png.flaticon.com/512/2103/2103800.png" className="img-fluid" alt="Low key It solutions Website development" />
                                    </div>
                                    <h4 className="text-end p-2">Automation</h4>
                                    {/* <p >Our automation solutions empower your business to optimize processes, reduce manual effort, and enhance overall efficiency.</p> */}
                                    <div className="serviceboxbtn">
                                        <button className="cta1">
                                            <span>Know More</span>
                                            <i className="fa fa-arrow-right text-white"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-4 p-xxl-5 p-3" data-aos-offset="300" data-aos="fade-up"
                            >
                                <div className="p-4 h-100 servicebox rounded-5">
                                    <div className="serviceicon p-2">
                                        <img src="https://cdn-icons-png.flaticon.com/512/252/252035.png" className="img-fluid" alt="Low key It solutions Website development" />
                                    </div>
                                    <h4 className="text-end p-2">Cloud Hosting</h4>
                                    {/* <p >Our cloud hosting solutions provide secure and scalable hosting options that enable your business to leverage the power of the cloud. </p> */}
                                    <div className="serviceboxbtn">
                                        <button className="cta1">
                                            <span>Know More</span>
                                            <i className="fa fa-arrow-right text-white"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-4 p-xxl-5 p-3" data-aos-offset="100" data-aos="fade-up"
                            >
                                <div className="p-4 h-100 servicebox rounded-5">
                                    <div className="serviceicon p-2">
                                        <img src={code} className="img-fluid" alt="Low key It solutions Website development" />
                                    </div>
                                    <h4 className="text-end p-2">Web Development</h4>
                                    {/* <p >Our web development solutions offer tailored and dynamic websites that represent your brand and engage your audience effectively. With a focus on user experience and performance</p> */}
                                    <div className="serviceboxbtn">
                                        <button className="cta1">
                                            <span>Know More</span>
                                            <i className="fa fa-arrow-right text-white"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-4 p-xxl-5 p-3" data-aos-offset="200" data-aos="fade-up"
                            >
                                <div className="p-4 h-100 servicebox rounded-5">
                                    <div className="serviceicon p-2">
                                        <img src="https://cdn-icons-png.flaticon.com/512/7858/7858975.png" className="img-fluid" alt="Low key It solutions Website development" />
                                    </div>
                                    <h4 className="text-end p-2">UI UX Design</h4>
                                    {/* <p >Our UI/UX design solutions focus on creating intuitive and visually appealing digital experiences that resonate with your target audience.</p> */}
                                    <div className="serviceboxbtn">
                                        <button className="cta1">
                                            <span>Know More</span>
                                            <i className="fa fa-arrow-right text-white"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-4 p-xxl-5 p-3" data-aos-offset="300" data-aos="fade-up"
                            >
                                <div className="p-4 h-100 servicebox rounded-5">
                                    <div className="serviceicon p-2">
                                        <img src={dm} className="img-fluid" alt="Low key It solutions Website development" />
                                    </div>
                                    <h4 className="text-end p-2">Digital Marketing</h4>
                                    {/* <p >Our digital marketing solutions empower your business to build a strong online presence and reach your target audience effectively.</p> */}
                                    <div className="serviceboxbtn">
                                        <button className="cta1">
                                            <span>Know More
                                                <i className="fa fa-arrow-right text-white"></i>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-4 p-xxl-5 p-3" data-aos-offset="100" data-aos="fade-up"
                            >
                                <div className="p-4 h-100 servicebox rounded-5">
                                    <div className="serviceicon p-2">
                                        <img src="https://cdn-icons-png.flaticon.com/512/6119/6119533.png" className="img-fluid" alt="Low key It solutions Website development" />
                                    </div>
                                    <h4 className="text-end p-2">IOT</h4>
                                    {/* <p >Our IoT solutions enable businesses to harness the power of interconnected devices and data for enhanced operational efficiency and innovation.</p> */}
                                    <div className="serviceboxbtn">
                                        <button className="cta1">
                                            <span>Know More</span>
                                            <i className="fa fa-arrow-right text-white"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-4 p-xxl-5 p-3" data-aos-offset="200" data-aos="fade-up"
                            >
                                <div className="p-4 h-100 servicebox rounded-5">
                                    <div className="serviceicon p-3">
                                        <img src="https://cdn-icons-png.flaticon.com/512/7078/7078214.png" className="img-fluid" alt="Low key It solutions Website development" />
                                    </div>
                                    <h4 className="text-end p-2">Inventory Management</h4>
                                    {/* <p >Our inventory management solutions streamline and optimize your inventory control processes, ensuring efficient management and tracking of your stock. With a focus on minimizing costs and maximizing efficiency</p> */}
                                    <div className="serviceboxbtn">
                                        <button className="cta1">
                                            <span>Know More</span>
                                            <i className="fa fa-arrow-right text-white"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* bussines end */}

            {/* Testimonial End */}
            <section className='tech py-5' id='technologies'>
                <div className="text-center mx-auto " data-aos="fade-up" style={{ maxWidth: '600px' }}>
                    {/* <p className="d-inline-block border rounded text-theme fw-semi-bold py-1 px-3">Tech We Use</p> */}
                    <h1 className="display-5 mb-5">Technologies We Use</h1>
                </div>

                <div className="container  p-4" data-aos="fade-up" style={{ maxWidth: '80%' }}>

                    <div className="row my-3">
                        <h2 className='text-dark text-md-start'>Web</h2>
                        <h4 className='text-black text-md-start'>Back End</h4>
                        <div className="col border p-2  bg-white text-center"><img src='data:image/jpeg;base64,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' width={120} height={90} /> </div>
                        <div className="col border p-2  bg-white text-center"><img src='https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.png' width={120} height={90} /></div>
                        <div className="col border p-2  bg-white text-center"><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ2t7fdi6j6G8Z1WWrLj05XumwjIWzE23HJwaI2eTc&s' width={100} height={90} /></div>
                        <div className="col border p-2  bg-white text-center"><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png' width={100} height={90} /></div>
                        {/* <div className="col border p-2  bg-white text-center"><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/1280px-Go_Logo_Blue.svg.png' width={100} height={90} /></div> */}
                        <div className="col border p-2  bg-white text-center"><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png' width={100} height={90} /></div>
                        <div className="col border p-2  bg-white text-center"><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/800px-ISO_C%2B%2B_Logo.svg.png' width={100} height={90} /></div>
                    </div>
                    <div className="row my-3">

                        <h4 className='text-black text-md-start'>Front End</h4>

                        <div className="col border p-2  bg-white text-center"><img src='https://cdn3d.iconscout.com/3d/free/thumb/free-html-5728485-4781249.png?f=webp' width={120} height={90} /></div>
                        <div className="col border p-2  bg-white text-center"><img src='https://cdn-icons-png.flaticon.com/512/919/919826.png' width={100} height={90} /></div>
                        <div className="col border p-2  bg-white text-center"><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/640px-JavaScript-logo.png' width={100} height={90} /></div>
                        <div className="col border p-2  bg-white text-center"><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png' width={100} height={90} /></div>
                        <div className="col border p-2  bg-white text-center"><img src='https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png?f=webp' width={100} height={90} /></div>
                        {/* <div className="col border p-2  bg-white text-center"><img src='https://i.pinimg.com/originals/fd/d6/d3/fdd6d3974ac00bcc3133b627e309586f.jpg' width={100} height={90} /></div> */}
                    </div>
                    <div className="row my-3">
                        <h2 className='text-dark text-md-start'>Mobile</h2>

                        <div className="col border p-2  bg-white text-center"><img src='https://download.logo.wine/logo/IOS/IOS-Logo.wine.png' width={120} height={90} /> </div>
                        <div className="col border p-2  bg-white text-center"><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Android_logo_2019_%28stacked%29.svg/2346px-Android_logo_2019_%28stacked%29.svg.png' width={120} height={90} /></div>
                        {/* <div className="col border p-2  bg-white text-center"><img src='https://w7.pngwing.com/pngs/754/913/png-transparent-xamarin-full-logo-tech-companies-thumbnail.png' width={100} height={90} /></div> */}
                        {/* <div className="col border p-2  bg-white text-center"><img src='https://cordova.apache.org/static/img/artwork/cordova_logo_dark_gray_large.png' width={100} height={90} /></div> */}
                        <div className="col border p-2  bg-white text-center"><img src='https://assets.browserlondon.com/wp-content/uploads/2019/03/pwa-banner.png' width={100} height={90} /></div>
                        <div className="col border p-2  bg-white text-center"><img src='https://raw.githubusercontent.com/kristerkari/react-native-svg-transformer/HEAD/images/react-native-logo.png' width={100} height={90} /></div>
                        <div className="col border p-2  bg-white text-center"><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdy0a9dAcfXGFsn0OtbqwZSaCWjFKtl2xWmGFde_U6&s' width={100} height={90} /></div>
                    </div>

                    <div className="row my-3">
                        <h2 className='text-dark text-md-start'>Platforms</h2>


                        <div className="col border p-2  bg-white text-center"><img src='https://1000logos.net/wp-content/uploads/2021/12/Dynamics-365-logo.png' width={60} height={90} /></div>
                        <div className="col border p-2  bg-white text-center"><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/2560px-Salesforce.com_logo.svg.png' width={60} height={90} /></div>
                        <div className="col border p-2  bg-white text-center"><img src='https://www.magnolia-cms.com/dam/jcr:e962434c-777a-465c-a5dd-07b2ff97df70/Adobe_Commerce_Cloud_logo.png' width={60} height={90} /></div>
                        <div className="col border p-2  bg-white text-center"><img src='https://5.imimg.com/data5/SELLER/Default/2023/8/339657239/UE/YQ/WV/11874969/microsoft-sharepoint-software.png' width={70} height={90} /></div>
                        <div className="col border p-2  bg-white text-center"><img src='https://1000logos.net/wp-content/uploads/2021/09/ServiceNow-Logo.png' width={60} height={90} /></div>
                        <div className="col border p-2  bg-white text-center"><img src='https://logohistory.net/wp-content/uploads/2023/05/Power-BI-Symbol.png' width={60} height={90} /></div>
                        {/* <div className="col border p-2  bg-white text-center"><img src='https://www.shutterstock.com/image-vector/sap-logo-vector-editorial-transparent-260nw-2336062241.jpg' width={60} height={90} /></div> */}
                        {/* <div className="col border p-2  bg-white text-center"><img src='https://logoisus.com/wp-content/uploads/2019/06/radar_ib1il.jpg' width={60} height={70} /></div> */}
                    </div>
                    <div className="row my-3">
                        <h2 className='text-dark text-md-start'>Clouds</h2>


                        <div className="col border p-2  bg-white text-center"><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png' width={100} height={90} /></div>
                        <div className="col border p-2  bg-white text-center"><img src='https://download.logo.wine/logo/Microsoft_Azure/Microsoft_Azure-Logo.wine.png' width={100} height={90} /></div>
                        <div className="col border p-2  bg-white text-center"><img src='https://cdn.icon-icons.com/icons2/2699/PNG/512/google_cloud_logo_icon_170066.png' width={100} height={90} /></div>
                        <div className="col border p-2  bg-white text-center"><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/DigitalOcean_logo.svg/1024px-DigitalOcean_logo.svg.png' width={100} height={90} /></div>
                        <div className="col border p-2  bg-white text-center"><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPXrAK9QzJvI4z1UbLmGB1J_-W-zyws39L4cQc1ZH&s' width={100} height={90} /></div>
                    </div>

                </div>
            </section>
            {/* Technology End */}

            {/*  Projects Start */}
            <div className="container-xxl py-5" id='portfolio'>
                <div className="container">
                    <div className="text-center mx-auto " data-aos="fade-up" style={{ maxWidth: '600px' }}>
                        {/* <p className="d-inline-block border rounded text-theme fw-semi-bold py-1 px-3">Our Projects</p> */}
                        <h1 className="display-5 mb-5">Recent Project Highlights</h1>
                    </div>
                    <div className="row gy-5" data-aos="fade-up">
                        
                        
<Carousel cols={3} rows={1} gap={20} loop>
      <Carousel.Item>
      <Link to='/genie_project' className='col-md-6 col-xl-4 text-black'>
                            <div className="project-item pe-5 pb-5">
                                <div className="project-img mb-3">
                                    <img className="img-fluid rounded"  src={s7} alt="Low key It solutions Website development" />
                                    <a href=""><i className="fa fa-link fa-3x text-theme"></i></a>
                                </div>
                                <div className="project-title">
                                    <h4 className="mb-0">Genie Workflow Automation</h4>
                                </div>
                            </div>
                        </Link>
      </Carousel.Item>
      <Carousel.Item>
      <Link to='/stulyfe_project' className='col-md-6 col-xl-4 text-black'>
                            <div className="project-item pe-5 pb-5">
                                <div className="project-img mb-3">
                                    <img className="img-fluid rounded"   src={s6} alt="Low key It solutions Website development" />
                                    <a href=""><i className="fa fa-link fa-3x text-theme"></i></a>
                                </div>
                                <div className="project-title">
                                    <h4 className="mb-0">Stulyfe</h4>
                                </div>
                            </div>
                        </Link>
      </Carousel.Item>
      <Carousel.Item>
      <Link to='/atms_project' className='col-md-6 col-xl-4 text-black'>
                            <div className="project-item pe-5 pb-5">
                                <div className="project-img mb-3">
                                    <img className="img-fluid rounded"  src={s5} alt="Low key It solutions Website development" />
                                    <a href=""><i className="fa fa-link fa-3x text-theme"></i></a>
                                </div>
                                <div className="project-title">
                                    <h4 className="mb-0">ATMS</h4>
                                </div>
                            </div>
                        </Link>
      </Carousel.Item>
      <Carousel.Item>
      <Link to='/gingko_project' className='col-md-6 col-xl-4 text-black'>
                            <div className="project-item pe-5 pb-5">
                                <div className="project-img mb-3">
                                    <img className="img-fluid rounded"  src={s4} alt="Low key It solutions Website development" />
                                    <a href=""><i className="fa fa-link fa-3x text-theme"></i></a>
                                </div>
                                <div className="project-title">
                                    <h4 className="mb-0">Gingko</h4>
                                </div>
                            </div>
                        </Link>
      </Carousel.Item>
      {/* ... */}
    </Carousel>
                       
                    </div>
                </div>
            </div>
            {/*  Projects End */}

            {/* Testimonial Start */}
            <div className="container-xxl py-5" id="testimonial">
                <div className="container">
                    <div className="text-center mx-auto " data-aos-duration="2000" data-aos="fade-up" style={{ maxWidth: '600px' }}>
                        {/* <p className="d-inline-block border rounded text-theme fw-semi-bold py-1 px-3">Testimonial</p> */}
                        <h1 className="display-5 mb-5">What Our Clients Say!</h1>
                    </div>
                    <div data-aos-delay="1000" data-aos="fade-up">
                        <ReactOwlCarousel className="owl-carousel testimonial-carousel "
                            autoplay={true}
                            responsive={options}
                            smartSpeed={500}
                            center={true}
                            margin={24}
                            dots={true}
                            loop={true}
                            nav={false}
                        >
                            <div className="testimonial-item">
                                <div className="testimonial-text border rounded p-4 pt-5 mb-5">
                                    <div className="btn-square bg-white border rounded-circle">
                                        <i className="fa fa-quote-right fa-2x text-theme"></i>
                                    </div>
                                    LowKey transformed our organization with innovative, seamlessly integrated software. The user-friendly interface and impressive feature set redefine daily operations. From project management to data analytics, they're the backbone of our digital infrastructure.


                                </div>
                                {/* <img className="rounded-circle mb-3" src={t1} alt="" /> */}
                                <h4>Ray foo </h4>
                                <span>Founder,Avereps</span>
                            </div>
                            <div className="testimonial-item">
                                <div className="testimonial-text border rounded p-4 pt-5 mb-5">
                                    <div className="btn-square bg-white border rounded-circle">
                                        <i className="fa fa-quote-right fa-2x text-theme"></i>
                                    </div>
                                    LowKey impresses with a refreshing, user-friendly interface, turning intricate processes into a breeze. Continuous updates reflect their commitment to innovation. The responsive support team turns challenges into opportunities.


                                </div>
                                {/* <img className="rounded-circle mb-3" src={t2} alt="" /> */}
                                <h4>Rahul Pawar</h4>
                                <span>Founder, Stulyfe</span>
                            </div>
                            <div className="testimonial-item">
                                <div className="testimonial-text border rounded p-4 pt-5 mb-5">
                                    <div className="btn-square bg-white border rounded-circle">
                                        <i className="fa fa-quote-right fa-2x text-theme"></i>
                                    </div>
                                    "I stumbled upon lowkey while searching for a solution to streamline our business processes, and boy, am I glad I did! This platform has been an absolute game-changer for our company.


                                </div>
                                {/* <img className="rounded-circle mb-3" src={t3} alt="" /> */}
                                <h4>Kamal Chopra 
</h4>
                                <span>Founder,TSS</span>
                            </div>
                           
                        </ReactOwlCarousel>
                    </div>
                </div>
            </div>
            {/* Testimonial End */}

            {/* FAQ Start */}
            <section id="faq" className="faq py-5">

                <div className="container pt-5">

                    <div className="row gy-4">

                        <div className="col-lg-4 " data-aos="fade-left" data-aos-delay="1000" >
                            <div className="content px-xl-5">
                                <h3><span>Frequently Asked </span><strong>Questions</strong></h3>
                                <img src={aboutimg} className='w-100 h-100 rounded-4 mt-3 object-fit-cover' />
                            </div>
                        </div>

                        <div className="col-lg-8 " data-aos="fade-right" data-aos-delay="1000" data-aos-duration="2000">

                            <div className="faq-container bg-white p-md-3 rounded-5">
                                {faqData.map((faq, index) => (
                                    <FaqItem
                                        key={index}
                                        num={faq.num}
                                        question={faq.question}
                                        answer={faq.answer}
                                        isOpen={activeFaq === index}
                                        toggleFaq={() => handleFaqClick(index)}
                                    />
                                ))}
                            </div>

                        </div>
                    </div>

                </div>

            </section>
            {/* FAQ End */}

            <div className='bg-dark' id='contact'>
                {/* Callback Start */}
                <div className="container-fluid callback py-5">
                    <div className="container pt-5">
                        <div className="row justify-content-center">
                            <div className="col-lg-7">
                                <div className="bg-white border rounded p-4 p-sm-5 " data-aos="fade-up">
                                    <div className="text-center mx-auto " data-aos="fade-up" style={{ maxWidth: '600px' }}>
                                        {/* <p className="d-inline-block border rounded text-theme fw-semi-bold py-1 px-3">Get In Touch
                                        </p> */}
                                        <h1 className="display-5 mb-5">Need a consultation</h1>
                                    </div>
                                    <div className="row g-3">
                                        <div className="col-sm-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                                <label htmlFor="name">Your Name</label>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-floating">
                                                <input type="email" className="form-control" id="mail" placeholder="Your Email" />
                                                <label htmlFor="mail">Your Email</label>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="mobile" placeholder="Your Mobile" />
                                                <label htmlFor="mobile">Your Mobile</label>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="subject" placeholder="Subject" />
                                                <label htmlFor="subject">Subject</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea className="form-control" placeholder="Leave a message here" id="message"
                                                    style={{ height: '100px' }}></textarea>
                                                <label htmlFor="message">Message</label>
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
                {/* Callback End */}
            </div>
        </div>
    )
}
export default Home;