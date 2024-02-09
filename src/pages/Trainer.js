import React, { Fragment } from 'react';
import Footer from './Footer';
import Menu from './Menu';
function Trainer() {
    return (
        <Fragment>
            <div className='sub_page'>
            <Menu />
            
                <section class="trainer_section layout_padding">
                    <div class="container">
                        <div class="heading_container">
                            <h2>
                                Our Gym Trainers
                            </h2>
                        </div>
                        <div class="row">
                            <div class="col-lg-4 col-md-6 mx-auto">
                                <div class="box">
                                    <div class="name">
                                        <h5>
                                            Smirth Jon
                                        </h5>
                                    </div>
                                    <div class="img-box">
                                        <img src="assests/images/t1.jpg" alt="" />
                                    </div>
                                    <div class="social_box">
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
                            <div class="col-lg-4 col-md-6 mx-auto">
                                <div class="box">
                                    <div class="name">
                                        <h5>
                                            Jean Doe
                                        </h5>
                                    </div>
                                    <div class="img-box">
                                        <img src="assests/images/t2.jpg" alt="" />
                                    </div>
                                    <div class="social_box">
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
                            <div class="col-lg-4 col-md-6 mx-auto">
                                <div class="box">
                                    <div class="name">
                                        <h5>
                                            Alex Den
                                        </h5>
                                    </div>
                                    <div class="img-box">
                                        <img src="assests/images/t3.jpg" alt="" />
                                    </div>
                                    <div class="social_box">
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
            </div>
            <Footer />
        </Fragment>
    )
}

export default Trainer;