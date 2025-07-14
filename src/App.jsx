import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './pages/aboutus/AboutUs';
import Layout from './pages/Layout';
import Contactus from './pages/contactus/Contactus';
import Home from './pages/home/Home';
import Footer from './component/Footer/Footer';
import WebAppDevelopment from './pages/WebApp/WebAppDevelopment';
import { CustomerService } from './pages/CustomerService/CustomerService';
import { DigitalMedia } from './pages/DigitalMedia/DigitalMedia';
import { FinancialServices } from './pages/FinancialServices/FinancialServices';
import { UiUxDesign } from './pages/UiUxDesign/UiUxDesign';
import { HrManagement } from './pages/HrManagement/HrManagement';
import { BrandingSalesMarket } from './pages/BrandingSales&Market/BrandingSalesMarket';
import { Ecommerces } from './pages/Ecommerces/Ecommerces';
import { EmailChatSupport } from './pages/Email&ChatSupport/EmailChatSupport';
import { FullStackDev } from './pages/FullStackDev/FullStackDev';
import ScrollToTop from './component/ScrollToTop/ScrollToTop';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <BrowserRouter>
      <Layout/>
      <ScrollToTop/>
      <Routes> 
        <Route exact path="/" element={<Home />} />
        <Route exact path="/FullStackDev" element={<FullStackDev />} />
        <Route exact path="/MobileAppDevelopment" element={<WebAppDevelopment />} />
        <Route exact path="/CustomerService" element={<CustomerService />} />
        <Route exact path="/DigitalMedia" element={<DigitalMedia />} />
        <Route exact path="/FinancialServices" element={<FinancialServices />} />
        <Route exact path="/UiUxDesign" element={<UiUxDesign />} />
        <Route exact path="/HrManagement" element={<HrManagement/>} />
        <Route exact path="/BrandingSalesMarket" element={<BrandingSalesMarket/>} />
        <Route exact path="/Ecommerces" element={<Ecommerces/>} />
        <Route exact path="/EmailChatSupport" element={<EmailChatSupport/>} />
        <Route exact path="/aboutus" element={<AboutUs />} />
        <Route exact path="/contactus" element={<Contactus />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
