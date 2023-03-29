import React from 'react'
import { Container,Row,Col } from 'reactstrap'
import downloadImg from '../../assets/images/app.png'
import '../../style/download-section.css'
import { Link } from 'react-router-dom'


const DownloadSection = () => {
  return (
    <section>
      <Container className='app__content'>
        <Row>
          <Col lg = '6' md = '6'>
            <div className="app__img">
              <img src={downloadImg} alt="" />
            </div>
          </Col>
          <Col lg = '6' md = '6'>
            <div className="app__content">
              <h5>Download our app</h5>
              <h2 className='mb-4'>Never feel Hungry: DownLoad Our Mobile App Order Delicious Food</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium animi quisquam doloremque magni labore, at corporis deleniti dicta molestias iusto. Aliquam ipsa exercitationem et rerum laboriosam eveniet ex nemo omnis</p>

              <div className="app__btn d-flex align-items-center gap-5 mt-4">
                <button className='btn__apple d-flex align-items-center gap-3'>
                   <Link to = '#'><i class="ri-app-store-line"></i>Apple Store</Link>
                </button>
                <button className='btn__android d-flex align-items-center gap-3'>
                   <Link to = '#'><i class="ri-google-play-line"></i>Google Play</Link>
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default DownloadSection