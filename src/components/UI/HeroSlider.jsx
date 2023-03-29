import React from 'react'
import Slider from "react-slick";
import {Container} from 'reactstrap'
import dataSlider from '../../assets/fake-data/slider.js'
import '../../style/slider.css'
import { Link } from 'react-router-dom';

const HeroSlider = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:3000
  };


  return (
    <section>
      <Container>
        <Slider {...settings}>
          {
           dataSlider.map(item =>(
               <div className="slider__wrapper d-flex algin-items-center justify-content-between pt-5" key={item.id}>
                 <div className="slider__content w-50 ps-2">
                  
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <button className='slider__btn'><Link to ='/menu'>Explore Food</Link></button>  
                 </div>
                 <div className="slider__img w-50">
                    <img src={item.imgUrl} alt="" className='w-100' />     
                 </div>        
               </div>          
            ))             
          }               
        </Slider>                 
      </Container>                   
    </section>
  )
}

export default HeroSlider