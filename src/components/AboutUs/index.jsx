import React from 'react';
import useToggle from '../../Hooks/useToggle.js';
import BackToTop from '../BackToTop.jsx';
import FooterHomeOne from '../HomeOne/FooterHomeOne.jsx';
import Drawer from '../Mobile/Drawer.jsx';
import HeaderAbout from './HeaderAbout.jsx';
import MenuManagement from './MenuManagment.jsx';
import FAQSection from './FAQSection';
import Navigation from '../Navigation.jsx';

function AboutUs() {
    const [drawer, drawerAction] = useToggle(false);

    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            {/* <HeaderAbout drawer={drawer} action={drawerAction.toggle} /> */}
            <Navigation action={drawerAction.toggle} />
            <MenuManagement />
           < FAQSection />
            <FooterHomeOne className="appie-footer-about-area" />
            <BackToTop />
        </>
    );
}

export default AboutUs;
