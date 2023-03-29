import React, {useState, useEffect} from 'react'
import {Container,Row,Col} from 'reactstrap'
import '../../style/menu-pack.css'
import ProductCard from '../ProductCard/ProductCard'
import {fastFoodProducts, riceMenuProducts, dessertProducts, pizzaProducts,  coffeeProducts } from '../../assets/fake-data/product'

const MenuPack = () => {
   
  const [filter,setFilter] = useState('RICE-MENU')
  const [products,setProducts] = useState(fastFoodProducts);

  useEffect(()=>{
    if(filter === 'RICE-MENU'){
       setProducts(riceMenuProducts)
    }
    if(filter === 'FASH-FOOD'){
      setProducts(fastFoodProducts)                   
    }
    if(filter === 'PIZZA'){
      setProducts(pizzaProducts)                   
    }
    if(filter === 'DESSERTS'){
      setProducts(dessertProducts)                   
    }
    if(filter === 'COFFEE'){
      setProducts(coffeeProducts)                   
    }                         
  },[filter])


  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="text-center mb-5">
            <h3 className="menu__title">Our Menu Pack</h3>
          </Col>
          <Col lg="12" className="text-center mb-4">
            <button
              className={`filter__btn ${filter === "FASH-FOOD" ? 'active__btn' : ''}`}
              onClick={() => setFilter("FASH-FOOD")}
            >
              Fash Food
            </button>
            <button
              className={`filter__btn ${filter === "RICE-MENU" ? 'active__btn' : ''}`}
              onClick={() => setFilter("RICE-MENU")}
            >
              Rice Menu
            </button>
            <button className={`filter__btn ${filter === "PIZZA" ? 'active__btn' : ''}`} onClick={() => setFilter("PIZZA")}>
              Pizza
            </button>
            <button
              className={`filter__btn ${filter === "DESSERTS" ? 'active__btn' : ''}`}
              onClick={() => setFilter("DESSERTS")}
            >
              Desserts
            </button>
            <button className={`filter__btn ${filter === "COFFEE" ? 'active__btn' : ''}`} onClick={() => setFilter("COFFEE")}>
              Coffee
            </button>
          </Col>
          {products.map((item) => (
            <Col lg="3" md = '4' sm = '6' xs = '6' key={item.id} className="mb-4">
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default MenuPack