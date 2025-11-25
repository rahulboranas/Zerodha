import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter , Routes ,Route } from "react-router-dom"

import './index.css'
import Navbar from './landing_page/Navbar.jsx'
import HomePage from './landing_page/home/HomePage.jsx'
import SupportPage from './landing_page/supports/SupportPage.jsx'

import PricingPage from './landing_page/pricing/PricingPage.jsx'
import ProductPage from './landing_page/products/ProductPage.jsx'
import Footer from './landing_page/Footer.jsx'
import AboutPage from './landing_page/about/AboutPage.jsx'
import NotFound from './landing_page/NotFound.jsx'

createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
       
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Pricing" element={<PricingPage />} />
        <Route path="/Products" element={<ProductPage />} />
        <Route path="/Supports" element={<SupportPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>

)
