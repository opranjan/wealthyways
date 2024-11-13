import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CustomNavbar from './CustomNavbar/CustomNavbar';
import Footer from './Footer/Footer';
import HeaderImage from './HeaderImage/HeaderImage';
import LiveDemoCard from './LiveDemo/LiveDemo';
import HomePage from './Pages/HomePage';
import ScrollingText from './ScrollingText/ScrollingText';
import TopBar from './TopBar/TopBar';
import PackagesPage from './Pages/PackagesPage';
import AboutPage from './Pages/AboutPage';
import UserConsentPage from './Pages/UserConsentPage';
import ContactUsPage from './Pages/ContactUsPage';
import PageTransition from './PageTransition/PageTransition'; // Import the PageTransition component
import FloatingWhatsapp from './FloatingWhatsapp/FloatingWhatsapp';

function App() {
    const [selectedNav, setSelectedNav] = useState('Home');

    const handleNavSelect = (navItem) => {
        setSelectedNav(navItem);
    };

    return (
        <BrowserRouter className="App">
            <TopBar />
            <CustomNavbar onSelect={handleNavSelect} />
            <ScrollingText />
            <HeaderImage title={selectedNav} />

            <Routes>
                <Route 
                    path='/' 
                    element={
                        <PageTransition>
                            <HomePage />
                        </PageTransition>
                    } 
                />
                <Route 
                    path='/aboutus' 
                    element={
                        <PageTransition>
                            <AboutPage />
                        </PageTransition>
                    } 
                />
                <Route 
                    path='/packages' 
                    element={
                        <PageTransition>
                            <PackagesPage />
                        </PageTransition>
                    } 
                />
                <Route 
                    path='/user-consent' 
                    element={
                        <PageTransition>
                            <UserConsentPage />
                        </PageTransition>
                    } 
                />
                <Route 
                    path='/contact-us' 
                    element={
                        <PageTransition>
                            <ContactUsPage />
                        </PageTransition>
                    } 
                />
            </Routes>

            <LiveDemoCard />
            <Footer />
            <FloatingWhatsapp/>
        </BrowserRouter>
    );
}

export default App;
