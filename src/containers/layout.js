import * as React from 'react'
import About from '../containers/About/About'
import Companies from '../containers/Companies/Companies'
import Contact from '../containers/Contact/Contact'
import Feature from '../containers/Feature/Feature'
import Footer from '../containers/Footer/Footer'
import Header from '../containers/Header/Header'
import Stats from '../containers/Stats/Stats'
import Subscription from '../containers/Subscription/Subscription'
import '../components/Styles/style.scss'
import Navbar from '../components/Navbar/Navbar'

import './layout.scss'


const Layout = () => {

  return (
    <>
      <Navbar />
      <Header />
      <Stats />
      <Feature />
      <About />
      <Companies />
      <Subscription />
      <Contact />
      <Footer />
    </>
  )
}

export default Layout

