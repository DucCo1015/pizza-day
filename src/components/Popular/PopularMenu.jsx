import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import {popularMenuFood} from '../../assets/fake-data/product'
import ProductCard from '../ProductCard/ProductCard'

const PopularMenu = () => {
  return (
    <section className='pt-0'>
      <Container>
        <Row>
          <Col lg = '12'>
           <h2>Popular Food menu</h2>        
          </Col>
          {
            popularMenuFood.map(item => (
              <Col lg = '3' md = '4' sm = '6' xs = '6' className='mb-4' key ={item.id}>
                <ProductCard item = {item}/>
              </Col>           
            ))             
          }               
        </Row>
      </Container>                   
    </section>
  )
}

export default PopularMenu