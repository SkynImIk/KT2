import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Bot() {
    return (
      <div>
       <div class="pricing-wrap bg-primary pricing-counter" id="pricing-section" data-aos="fade">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-7 text-center">
                <h2 class="section-title mb-3 text-center text-white mx-auto">CHOOSE YOUR PLAN</h2>
                <p class="mb-5 section-desc">Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row no-gutters">
            <div class="col-lg-4">
              <div class="pricing">
                <h3>Starters</h3>
                <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div class="price">
                  <span>STARTING AT</span>
                  <strong>$<em class="number" data-number="7">0</em></strong>
                  <span>PER MONTH</span>
                </div>
                <p class="description-2 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum enim nobis aspernatur saepe dolores?</p>
                <p><a href="#" target="_blank" class="btn btn-outline-primary py-3 px-5">Get Started</a></p>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="pricing pricing-popular">
                <h3>Premium</h3>
                <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div class="price">
                  <span>STARTING AT</span>
                  <strong>$<em class="number" data-number="10">0</em></strong>
                  <span>PER MONTH</span>
                </div>
                <p class="description-2 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum enim nobis aspernatur saepe dolores?</p>
                <p><a href="#" target="_blank" class="btn  btn-outline-danger py-3 px-5">Get Started</a></p>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="pricing">
                <h3>Enterprise</h3>
                <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div class="price">
                  <span>STARTING AT</span>
                  <strong>$<em class="number" data-number="15">0</em></strong>
                  <span>PER MONTH</span>
                </div>
                <p class="description-2 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum enim nobis aspernatur saepe dolores?</p>
                <p><a href="#" target="_blank" class="btn btn-outline-primary py-3 px-5">Get Started</a></p>
              </div>
            </div>
          </div>
        </div>
        <div class="site-section" data-aos="fade">
          <div class="container">
            <a href="https://www.youtube.com/watch?v=ZxIeqo6e0ZM" class="video-img-bg" data-fancybox data-ratio="2">
              <span class="play-button">
                <span class="icon-play"></span>
              </span>
              <img src="./images/images-video_bg.jpg" alt="Image" class="img-fluid"></img>
            </a>
          </div>
        </div>
        <div class="site-section" id="contact-section" data-aos="fade">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-md-5 order-1 order-md-2 mb-5 mb-md-0">
                <img src="./images/images-about_1.jpg" alt="Image" class="img-fluid"></img>
              </div>
              <div class="col-md-6 mr-auto order-2 order-md-1">
                <h2 class="section-title mb-3">CONTACT US</h2>
                <p class="mb-5">Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p>
                <form method="post">
                  <div class="form-group row">
                    <div class="col-md-6 mb-4">
                      <input type="text" class="form-control" placeholder="First name"></input>
                    </div>
                    <div class="col-md-6">
                      <input type="text" class="form-control" placeholder="Last name"></input>
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-md-12">
                      <input type="text" class="form-control" placeholder="Subject"></input>
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-md-12">
                      <input type="email" class="form-control" placeholder="Email"></input>
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-md-12">
                      <textarea class="form-control" id="" cols="30" rows="10" placeholder="Write your message here."></textarea>
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-md-6">
                      <input type="submit" class="btn btn-primary py-3 px-5 btn-block" value="Send Message"></input>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <footer class="footer-section bg-light">
          <div class="container">
            <div class="row">
              <div class="col-md-4">
                <h3>About Us</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro consectetur ut hic ipsum et veritatis corrupti. Itaque eius soluta optio dolorum temporibus in, atque, quos fugit sunt sit quaerat dicta.</p>
              </div>
              <div class="col-md-3 ml-auto">
                <h3>Links</h3>
                <ul class="list-unstyled footer-links">
                  <li><a href="#home-section" class="smoothscroll">Home</a></li>
                  <li><a href="#work-section" class="smoothscroll">Projects</a></li>
                  <li><a href="#process-section" class="smoothscroll">Process</a></li>
                  <li><a href="#testimonials-section" class="smoothscroll">Testimonials</a></li>
                  <li><a href="#services-section" class="smoothscroll">Services</a></li>
                </ul>
              </div>
              <div class="col-md-4">
                <h3>Subscribe</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt incidunt iure iusto architecto? Numquam, natus?</p>
                <form action="#">
                  <div class="d-flex mb-5">
                    <input type="text" class="form-control rounded-0" placeholder="Email"></input>
                    <input type="submit" class="btn btn-primary rounded-0" value="Subscribe"></input>
                  </div>
                </form>
              </div>
            </div>
            <div class="row pt-5 mt-5 text-center">
              <div class="col-md-12">
                <div class="border-top pt-5">
                  <p>

                    Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="icon-heart text-danger" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>

                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      
    );
  }
  
  export default Bot;
  