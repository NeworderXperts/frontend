import React from 'react';
import useToggle from '../../Hooks/useToggle.js';
import BackToTop from '../BackToTop.jsx';
import FooterHomeOne from '../HomeOne/FooterHomeOne.jsx';
import HeroAbout from './HeroAbout.jsx';
import Drawer from '../Mobile/Drawer.jsx';
import Navigation from '../Navigation.jsx';
import FAQSection from './FAQSection.jsx';
import ClientExperience from './ClientExperience.jsx';

function AboutUsTwo() {
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <Navigation action={drawerAction.toggle} /> 
            <HeroAbout />
            <ClientExperience />
            <FAQSection />
            <FooterHomeOne className="appie-footer-about-area" />
           
            <BackToTop />
        </>
    );
}

export default AboutUsTwo;
