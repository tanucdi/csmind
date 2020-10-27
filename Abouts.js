import React from 'react'
import './abouts.css';

const Abouts = () => {
    return (
        <>
        <section id="about" class="about">
      <div class="container">

        <div class="row">
          <div class="col-lg-6 order-1 order-lg-2" data-aos="zoom-in" data-aos-delay="150">
              <div class="video-container">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/gXuPXqNdCLw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  </div>
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right">
            <h3>What is CS MIND ?</h3>
            <b>You are known by what you create</b>
             <ul class="font-Poppins">
                 <br/>
              <li><i class="icofont-check-circled"></i> CS MIND   is the epitome of creation of new vision , ideas, , products, services  in various fields using state-of-the art information technology, AI, IoT  through innovations in   products/services  to enrich the society in all respects . We work with talented youth in collaboration, harness their energies for self-creation   and creation of  the  systems of tomorrow.   We extend our years long experience of research  and  management acumen at CS MIND    for the benefit of all our collaborators and society .  We exist to realize the dreams of “ Make in India”   through  the  act of positive  disruption ,  and value oriented MIND set.</li>
              <li><i class="icofont-check-circled"></i> We invite the teens, the youth  the universities and the  industry to engage with us to create   a rewarding  future for all of us.</li>
            </ul>
            <a href="#contact" class="read-more">Read More <i class="icofont-long-arrow-right"></i></a>
          </div>
        </div>

      </div>
    </section>
        </>
    )
}

export default Abouts
