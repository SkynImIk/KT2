import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Head() {
  return (
    <div>
      <div id="overlayer"></div>
      <div class="loader">
        <div class="spinner-border text-primary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
      <div class="site-wrap">
        <div class="site-mobile-menu site-navbar-target">
          <div class="site-mobile-menu-header">
            <div class="site-mobile-menu-close mt-3">
              <span class="icon-close2 js-menu-toggle"></span>
            </div>
          </div>
          <div class="site-mobile-menu-body"></div>
        </div>
        <header class="site-navbar py-4 js-sticky-header site-navbar-target" role="banner">
          <div class="container-fluid">
            <div class="d-flex align-items-center">
              <div class="site-logo"><a href="index.html" class="text-uppercase">Expert</a></div>
              <div>
                <nav class="site-navigation position-relative text-right" role="navigation">
                  <ul class="site-menu main-menu js-clone-nav mr-auto d-none d-xl-block">
                    <li><a href="#home-section" class="nav-link">Home</a></li>
                    <li><a href="#work-section" class="nav-link">Projects</a></li>
                    <li><a href="#process-section" class="nav-link">Process</a></li>
                    <li><a href="#testimonials-section" class="nav-link">Testimonials</a></li>
                    <li><a href="#services-section" class="nav-link">Services</a></li>
                  </ul>
                </nav>
              </div>
              <div class="ml-auto">
                <nav class="site-navigation position-relative text-right" role="navigation">
                  <ul class="site-menu main-menu site-menu-dark js-clone-nav mr-auto d-none d-xl-block">
                    <li><a href="#pricing-section" class="nav-link">Pricing</a></li>
                    <li class="cta"><a href="#contact-section" class="nav-link"><span class="border bg-danger rounded text-white border-danger">Contact</span></a></li>
                  </ul>
                </nav>
                <a href="#" class="d-inline-block d-xl-none site-menu-toggle js-menu-toggle float-right"><span class="icon-menu h3"></span></a>
              </div>
            </div>
          </div>
        </header>
        <div class="intro-section custom-owl-carousel" id="home-section">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-5 mr-auto" data-aos="fade-up">
                <div class="owl-carousel slide-one-item-alt-text">
                  <div class="slide-text">
                    <h1>We Do Awesome Things</h1>
                    <p class="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsa nulla sed quis rerum amet natus quas necessitatibus.</p>
                    <p><a href="#" target="_blank" class="btn btn-outline-light py-3 px-5">Get Started</a></p>
                  </div>
                  <div class="slide-text">
                    <h1>Welcome</h1>
                    <p class="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsa nulla sed quis rerum amet natus quas necessitatibus.</p>
                    <p><a href="#" target="_blank" class="btn btn-outline-light py-3 px-5">Get Started</a></p>
                  </div>
                  <div class="slide-text">
                    <h1>High Quality Templates</h1>
                    <p class="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsa nulla sed quis rerum amet natus quas necessitatibus.</p>
                    <p><a href="#" target="_blank" class="btn btn-outline-light py-3 px-5">Get Started</a></p>
                  </div>
                  <div class="slide-text">
                    <h1>We do things right.</h1>
                    <p class="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsa nulla sed quis rerum amet natus quas necessitatibus.</p>
                    <p><a href="#" target="_blank" class="btn btn-outline-light py-3 px-5">Get Started</a></p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 ml-auto" data-aos="fade-up" data-aos-delay="100">
                <div class="owl-carousel slide-one-item-alt">
                  <img src="./images/images-img_1.jpg" alt="Image" class="img-fluid"></img>
                  <img src="./images/images-img_2.jpg" alt="Image" class="img-fluid"></img>
                  <img src="./images/images-img_3.jpg" alt="Image" class="img-fluid"></img>
                  <img src="./images/images-img_4.jpg" alt="Image" class="img-fluid"></img>
                </div>
                <div class="owl-custom-direction">
                  <a href="#" class="custom-prev"><span class="icon-keyboard_arrow_left"></span></a>
                  <a href="#" class="custom-next"><span class="icon-keyboard_arrow_right"></span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="site-section section-1">
          <div class="container">
            <div class="row">
              <div class="col-lg-5 mr-auto mb-5" data-aos="fade-up">
                <div class="mb-5">
                  <h2 class="section-title">Love Our Works</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus distinctio ex. Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p>
                  <p class="mb-5">Aperiam neque id, illum laudantium autem vero quae debitis tempora modi. Ipsa molestias enim in rem et incidunt beatae fugit, ab quam optio atque maiores facere est quidem, veritatis commodi.</p>
                  <ul class="ul-check list-unstyled success">
                    <li>Aperiam neque id illum laudantium</li>
                    <li>Maiores facere est quidem</li>
                    <li>Laudantium autem vero</li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <div class="image-absolute-box">
                  <div class="box">
                    <div class="icon-wrap"><span class="flaticon-vector"></span></div>
                    <h3>PIXEL PERFECT TEMPLATES</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati commodi aspernatur eum eius inventore facilis.</p>
                    <p class="mb-0">Visit <a href="#" class="text-danger">Colorlib</a></p>
                  </div>
                  <img src="./images/images-img_1.jpg" alt="Image" class="img-fluid"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container section-counter">
          <div class="row">
            <div class="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="">
              <div class="counter d-flex align-items-start mb-5">
                <div class="icon-wrap"><span class="flaticon-reload text-primary"></span></div>
                <div class="counter-text">
                  <strong class="number" data-number="360">0</strong>
                  <span>Creativity</span>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="100">
              <div class="counter d-flex align-items-start">
                <div class="icon-wrap"><span class="flaticon-download text-primary"></span></div>
                <div class="counter-text">
                  <strong class="number" data-number="4500">0</strong>
                  <span>WordPress Themes</span>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="200">
              <div class="counter d-flex align-items-start mb-5">
                <div class="icon-wrap"><span class="flaticon-monitor text-primary"></span></div>
                <div class="counter-text">
                  <strong class="number" data-number="120">0</strong>
                  <span>HTML5 / CSS3</span>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="300">
              <div class="counter d-flex align-items-start">
                <div class="icon-wrap"><span class="flaticon-chat text-primary"></span></div>
                <div class="counter-text">
                  <strong class="number" data-number="3913">0</strong>
                  <span>Bootstrap</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="site-section section-2" id="work-section" data-aos="fade">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 mb-5">
                <h2 class="section-title">OUR PROJECTS</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus distinctio ex. Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p>
              </div>
            </div>
          </div>
          <div class="owl-carousel nonloop-block-13">
            <a class="work-thumb" href="images/img_1.jpg" data-fancybox="gallery">
              <div class="work-text">
                <h3>PROJECT NAME HERE</h3>
                <span class="category">Web Developer</span>
              </div>
              <img src="./images/images-img_1.jpg" alt="Image" class="img-fluid"></img>
            </a>
            <a class="work-thumb" href="images/img_2.jpg" data-fancybox="gallery">
              <div class="work-text">
                <h3>PROJECT NAME HERE</h3>
                <span class="category">Branding</span>
              </div>
              <img src="./images/images-img_2.jpg" alt="Image" class="img-fluid"></img>
            </a>
            <a class="work-thumb" href="images/img_3.jpg" data-fancybox="gallery">
              <div class="work-text">
                <h3>PROJECT NAME HERE</h3>
                <span class="category">Illustration</span>
              </div>
              <img src="./images/images-img_3.jpg" alt="Image" class="img-fluid"></img>
            </a>
            <a class="work-thumb" href="images/img_4.jpg" data-fancybox="gallery">
              <div class="work-text">
                <h3>PROJECT NAME HERE</h3>
                <span class="category">Web Development</span>
              </div>
              <img src="./images/images-img_4.jpg" alt="Image" class="img-fluid"></img>
            </a>
            <a class="work-thumb" href="images/img_1.jpg" data-fancybox="gallery">
              <div class="work-text">
                <h3>PROJECT NAME HERE</h3>
                <span class="category">Design</span>
              </div>
              <img src="./images/images-img_1.jpg" alt="Image" class="img-fluid"></img>
            </a>
          </div>
        </div>

      </div>

    </div>


  );
}



export default Head;