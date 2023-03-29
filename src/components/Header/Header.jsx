import React, {useRef,useEffect} from 'react'
import {Container} from 'reactstrap'
import { NavLink } from 'react-router-dom'
import '../../style/header.css'

const navLinks = [
  {
    path: '/home',
    display: 'Home',
  },
  {
    path: '/about',
    display: 'About',
  },
  {
    path: '/menu',
    display: 'Menu',
  },
  {
    path: '/recipes',
    display: 'Recipes',
  },
  {
    path: '/contact',
    display: 'Contact',
  },
]


const Header = () => {

  const menuRef = useRef();
  const toggleMenu = () => menuRef.current.classList.toggle('active__menu');
  const headerRef = useRef();
  const headerSticky = () =>{
    window.addEventListener("scroll", () =>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add("sticky__header")
      }
      else{
        headerRef.current.classList.remove("sticky__header")
      }
    });
  };

  useEffect(() =>{
    headerSticky();
    return window.removeEventListener("scroll", headerSticky)
  })

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            <h2><span><i class="ri-restaurant-2-line"></i></span>Chef Food</h2>
          </div>
          <div className="navigation" ref={menuRef} onClick = {toggleMenu}>
                <ul className='nav__menu d-flex align-items-center justify-content-center gap-4'>
                  {
                    navLinks.map((item,index)=>(
                      <li className='nav__item' key={index}>
                        <NavLink to = {item.path} className = {navClass => navClass.isActive ? 'active__click' : ''}>{item.display}</NavLink>
                      </li>
                    ))
                  }
                </ul>
              </div>
 
            <div className="menu__right">
              <div className="custom__search">
                <input type="text" placeholder='search....' />
                <span><i class="ri-search-line"></i></span>
              </div>
            </div>

            <div>
              <span className="cart__icon">
                <i class="ri-shopping-cart-line"></i>
                <span className='badge'>2</span>
              </span>
            </div>

           <div className="mobile__menu" onClick={toggleMenu}>
            <span><i class="ri-menu-line"></i></span>
            </div>       
        </div>
      </Container>
    </header>
  )
}

export default Header