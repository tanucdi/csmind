import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './hero.css';

const Hero = () => {
    return (
        
            
      <section id="hero" class="d-flex align-items-center">

      <div class="container">
        <div class="row">

        <div class="col-lg-6 order-1 order-lg-2 hero-img" data-aos="fade-left" data-aos-delay="200">
            <img src="/images/2062051.png" class="img-fluid animated" alt=""/>
          </div>

          <div class="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h1 data-aos="fade-up">Grow your business with Vesperr</h1>
            <h2 data-aos="fade-up" data-aos-delay="400">We are team of talanted designers making websites with Bootstrap</h2>
            <div data-aos="fade-up" data-aos-delay="800">
              <a href="#about" class="btn-get-started scrollto">Get Started</a>
            </div>
          </div>
          
        </div>
      </div>
  
    </section>
       
    )
}

export default Hero