import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../style/testimonials.css";
import testImg from "../../assets/images/review1.png";
import Slider from "react-slick";

const Testimonials = () => {
  const setting = {
    infinity: true,
    speed: 500,
    slidesToShow:1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:3000

  }
  return (

    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="slider__wrapper d-flex align-items-center gap-5">
              <div className="slider__content w-50">
                <h2 className="test__title mb-4">What our customers are saying</h2>
                <Slider {...setting}>
                  <div className="test__single">
                    <p className="review__content">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Et, porro molestiae? Aperiam deserunt possimus nulla quas,
                      aut consequuntur ratione maiores tenetur. Saepe amet
                      veniam repellendus fuga commodi ipsam laudantium aut!
                    </p>

                    <h6>John Doe</h6>
                    <p>Web Developer</p>
                  </div>

                  <div className="test__single">
                    <p className="review__content">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Et, porro molestiae? Aperiam deserunt possimus nulla quas,
                      aut consequuntur ratione maiores tenetur. Saepe amet
                      veniam repellendus fuga commodi ipsam laudantium aut!
                    </p>

                    <h6>John Doe</h6>
                    <p>Web Developer</p>
                  </div>
                </Slider>
              </div>
              <div className="slider__img w-50">
                <img src={testImg} alt="" className="w-100" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
