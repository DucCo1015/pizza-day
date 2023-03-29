import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Routers from '../Router/Routers.js'

const Layout = () => {
  return (
    <div>
       <Header />
       <div>
         <Routers/>                
       </div>
       <Footer />
    </div>
  )
}

export default Layout