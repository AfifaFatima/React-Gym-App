import React, { Fragment } from 'react';
import Footer from './Footer';
import Menu from './Menu';
import { Link } from 'react-router-dom';
function Index() {
    return (
        <Fragment>
            <Menu />
            <section className=" slider_section position-relative">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="container">
                                <div className="col-lg-10 col-md-11 mx-auto">
                                    <div className="detail-box">
                                        <div>
                                            <h3>
                                                Fitness
                                            </h3>
                                            <h2>
                                                Training
                                            </h2>
                                            <h1>
                                                Neogym
                                            </h1>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse .
                                            </p>
                                            <div className="">
                                                <Link to="/contact">Contact Us</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="container">
                                <div className="col-lg-10 col-md-11 mx-auto">
                                    <div className="detail-box">
                                        <div>
                                            <h3>
                                                Fitness
                                            </h3>
                                            <h2>
                                                Training
                                            </h2>
                                            <h1>
                                                Neogym
                                            </h1>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse .
                                            </p>
                                            <div className="">
                                                <a href="">
                                                    Contact Us
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="container">
                                <div className="col-lg-10 col-md-11 mx-auto">
                                    <div className="detail-box">
                                        <div>
                                            <h3>
                                                Fitness
                                            </h3>
                                            <h2>
                                                Training
                                            </h2>
                                            <h1>
                                                Neogym
                                            </h1>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse .
                                            </p>
                                            <div className="">
                                                <a href="">
                                                    Contact Us
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="container">
                                <div className="col-lg-10 col-md-11 mx-auto">
                                    <div className="detail-box">
                                        <div>
                                            <h3>
                                                Fitness
                                            </h3>
                                            <h2>
                                                Training
                                            </h2>
                                            <h1>
                                                Neogym
                                            </h1>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse .
                                            </p>
                                            <div className="">
                                                <a href="">
                                                    Contact Us
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="container">
                                <div className="col-lg-10 col-md-11 mx-auto">
                                    <div className="detail-box">
                                        <div>
                                            <h3>
                                                Fitness
                                            </h3>
                                            <h2>
                                                Training
                                            </h2>
                                            <h1>
                                                Neogym
                                            </h1>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse .
                                            </p>
                                            <div className="">
                                                <a href="">
                                                    Contact Us
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" />
                        <li data-target="#carouselExampleIndicators" data-slide-to="1" />
                        <li data-target="#carouselExampleIndicators" data-slide-to="2" />
                        <li data-target="#carouselExampleIndicators" data-slide-to="3" />
                        <li data-target="#carouselExampleIndicators" data-slide-to="4" />
                    </ol>
                </div>
            </section>
            <section className="us_section layout_padding">
                <div className="container">
                    <div className="heading_container">
                        <h2>
                            Why Choose Us
                        </h2>
                    </div>

                    <div className="us_container ">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="box">
                                    <div className="img-box">
                                        <img src="assests/images/u-1.png" alt="" />
                                    </div>
                                    <div className="detail-box">
                                        <h5>
                                            QUALITY EQUIPMENT
                                        </h5>
                                        <p>
                                            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="box">
                                    <div className="img-box">
                                        <img src="assests/images/u-4.png" alt="" />
                                    </div>
                                    <div className="detail-box">
                                        <h5>
                                            NUTRITION
                                        </h5>
                                        <p>
                                            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="box">
                                    <div className="img-box">
                                        <img src="assests/images/u-2.png" alt="" />
                                    </div>
                                    <div className="detail-box">
                                        <h5>
                                            HEALTHY DIET PLAN
                                        </h5>
                                        <p>
                                            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="box">
                                    <div className="img-box">
                                        <img src="assests/images/u-3.png" alt="" />
                                    </div>
                                    <div className="detail-box">
                                        <h5>
                                            SPORT TRAINING
                                        </h5>
                                        <p>
                                            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="heathy_section layout_padding">
                <div className="container">

                    <div className="row">
                        <div className="col-md-12 mx-auto">
                            <div className="detail-box">
                                <h2>
                                    HEALTHY MIND, HEALTHY BODY
                                </h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                </p>
                                <div className="btn-box">
                                    <a href="">
                                        READ MORE
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="trainer_section layout_padding">
                <div className="container">
                    <div className="heading_container">
                        <h2>
                            Our Gym Trainers
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mx-auto">
                            <div className="box">
                                <div className="name">
                                    <h5>
                                        Smirth Jon
                                    </h5>
                                </div>
                                <div className="img-box">
                                    <img src="assests/images/t1.jpg" alt="" />
                                </div>
                                <div className="social_box">
                                    <a href="">
                                        <img src="assests/images/facebook-logo.png" alt="" />
                                    </a>
                                    <a href="">
                                        <img src="assests/images/twitter.png" alt="" />
                                    </a>
                                    <a href="">
                                        <img src="assests/images/instagram-logo.png" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mx-auto">
                            <div className="box">
                                <div className="name">
                                    <h5>
                                        Jean Doe
                                    </h5>
                                </div>
                                <div className="img-box">
                                    <img src="assests/images/t2.jpg" alt="" />
                                </div>
                                <div className="social_box">
                                    <a href="">
                                        <img src="assests/images/facebook-logo.png" alt="" />
                                    </a>
                                    <a href="">
                                        <img src="assests/images/twitter.png" alt="" />
                                    </a>
                                    <a href="">
                                        <img src="assests/images/instagram-logo.png" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mx-auto">
                            <div className="box">
                                <div className="name">
                                    <h5>
                                        Alex Den
                                    </h5>
                                </div>
                                <div className="img-box">
                                    <img src="assests/images/t3.jpg" alt="" />
                                </div>
                                <div className="social_box">
                                    <a href="">
                                        <img src="assests/images/facebook-logo.png" alt="" />
                                    </a>
                                    <a href="">
                                        <img src="assests/images/twitter.png" alt="" />
                                    </a>
                                    <a href="">
                                        <img src="assests/images/instagram-logo.png" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact_section ">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 px-0">
                            <div className="img-box">
                                <img src="assests/images/contact-img.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6">
                            <div className="form_container pr-0 pr-lg-5 mr-0 mr-lg-2">
                                <div className="heading_container">
                                    <h2>
                                        Contact Us
                                    </h2>
                                </div>
                                <form action="">
                                    <div>
                                        <input type="text" placeholder="Name" />
                                    </div>
                                    <div>
                                        <input type="email" placeholder="Email" />
                                    </div>
                                    <div>
                                        <input type="text" placeholder="Phone Number" />
                                    </div>
                                    <div>
                                        <input type="text" className="message-box" placeholder="Message" />
                                    </div>
                                    <div className="d-flex ">
                                        <button>
                                            Send
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <Footer />
        </Fragment >
    )
}

export default Index;