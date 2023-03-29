import React from 'react'
import { Link } from 'react-router-dom'
import {Container, Row, Col,ListGroup,ListGroupItem} from 'reactstrap'
import '../../style/footer.css'


const footerQuickLink = [
  {
    path: '#',
    display: "Terms & Conditions",
  },
  {
    path: '#',
    display: "Privacy Policy",
  },
  {
    path: '#',
    display: "Return & Refund",
  },
  {
    path: '#',
    display: "Payment Method",
  },
];

const footerLink = [
  {
    path: '/about',
    display: "About",
  },
  {
    path: '/menu',
    display: "Menu",
  },
  {
    path: '/recipes',
    display: "Recipes",
  },
  {
    path: '/contact',
    display: "Contact",
  },
]

const Footer = () => {
  const years = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__top">
        <Container>
          <Row>
            <Col lg="4" md="6" sm="4">
              <div className="logo">
                <h2 className="d-flex align-items-centers gap-1 mb-4">
                  <span>
                    <i class="ri-restaurant-2-line"></i>Chef Food
                  </span>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem aspernatur consequuntur maiores inventore,
                  labore ea.
                </p>
              </div>
            </Col>
            <Col lg="3" md="4" sm="6">
              <h5 className="footer__link-title">Quick Links</h5>
              <ListGroup>
                {footerQuickLink.map((item, index) => (
                  <ListGroupItem className="link__item" key={index}>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Col>
            <Col lg="2" md="4" sm="6">
              <h5 className="footer__link-title">Quick Links</h5>
              <ListGroup>
                {footerLink.map((item, index) => (
                  <ListGroupItem className="link__item" key={index}>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Col>
            <Col lg="3" md="4" sm="6">
              <h5 className="footer__link-title">Contact</h5>
              <ListGroup>
                <ListGroupItem className="d-flex align-items-center gap-3 link__item">
                  <i class="ri-map-pin-line"></i>Binh Duong, Viet Nam
                </ListGroupItem>
                <ListGroupItem className="d-flex align-items-center gap-3 link__item">
                  <i class="ri-mail-line"></i>Email123@gmail.com
                </ListGroupItem>
                <ListGroupItem className="d-flex align-items-center gap-3 link__item">
                  <i class="ri-mail-line"></i>(+84) 123456789
                </ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer__bottom">
        <Container>
          <Row>
            <Col lg = '12' className='text-center'><p>Copyright {years}, developer by code Website</p> </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
}

export default Footer