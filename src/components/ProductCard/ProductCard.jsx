import React from 'react'
import '../../style/product-card.css'

const ProductCard = (props) => {
  const {title,price,imgUrl} = props.item;
  return (
    <div className="single__product">
       <div className="product__img">
         <img src={imgUrl} alt="" className='w-100' />
      </div>                  
         <div className="single__content">
            <div className="rating text-center">
               <span><i class="ri-star-fill"></i></span>           
               <span><i class="ri-star-fill"></i></span>           
               <span><i class="ri-star-fill"></i></span>           
               <span><i class="ri-star-fill"></i></span>           
               <span><i class="ri-star-fill"></i></span>           
           </div>

           <h6>{title}</h6>
           <div className="d-flex align-items-center justify-content-between single__price">
              <span className='price d-flex align-items-center'>Price: $<span>{price}</span></span>           
              <span className='shopping__icon'><i class="ri-shopping-cart-line"></i></span>
           </div>             
        </div>                
    </div>                     
  )
}

export default ProductCard