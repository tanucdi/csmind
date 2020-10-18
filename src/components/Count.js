import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import "./count.css";
const Count = () => {
  return (
    <div>
      <section id="counts" class="counts">
        <div class="container">
          <div class="row">
            <div
              class="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-xl-start"
              data-aos="fade-right"
              data-aos-delay="150"
            >
              <img src="/images/counts-img.svg" alt="" class="img-fluid" />
            </div>

            <div
              class="col-xl-7 d-flex align-items-stretch pt-4 pt-xl-0"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <div class="content d-flex flex-column justify-content-center">
                <div class="row">
                  <div class="col-md-6 d-md-flex align-items-md-stretch">
                    <div class="count-box">
                      <i class="icofont-simple-smile"></i>
                      <CountUp end={65}>
                        {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start} delayedCall>
                            <span ref={countUpRef} />
                          </VisibilitySensor>
                        )}
                      </CountUp>
                      <p>
                        <strong>Happy Clients</strong> consequuntur voluptas
                        nostrum aliquid ipsam architecto ut.
                      </p>
                    </div>
                  </div>

                  <div class="col-md-6 d-md-flex align-items-md-stretch">
                    <div class="count-box">
                      <i class="icofont-document-folder"></i>
                      <CountUp end={85}>
                        {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start} delayedCall>
                            <span ref={countUpRef} />
                          </VisibilitySensor>
                        )}
                      </CountUp>
                      <p>
                        <strong>Projects</strong> adipisci atque cum quia
                        aspernatur totam laudantium et quia dere tan
                      </p>
                    </div>
                  </div>

                  <div class="col-md-6 d-md-flex align-items-md-stretch">
                    <div class="count-box">
                      <i class="icofont-clock-time"></i>
                      <CountUp end={40}>
                        {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start} delayedCall>
                            <span ref={countUpRef} />
                          </VisibilitySensor>
                        )}
                      </CountUp>
                      <p>
                        <strong>Years of experience</strong> aut commodi quaerat
                        modi aliquam nam ducimus aut voluptate non vel
                      </p>
                    </div>
                  </div>

                  <div class="col-md-6 d-md-flex align-items-md-stretch">
                    <div class="count-box">
                      <i class="icofont-award"></i>
                      <CountUp end={165}>
                        {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start} delayedCall>
                            <span ref={countUpRef} />
                          </VisibilitySensor>
                        )}
                      </CountUp>
                      <p>
                        <strong>Awards</strong> rerum asperiores dolor alias quo
                        reprehenderit eum et nemo pad der
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Count;
