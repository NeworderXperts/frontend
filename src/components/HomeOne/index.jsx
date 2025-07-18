import React from 'react';
import useToggle from '../../Hooks/useToggle.js';
import BackToTop from '../BackToTop.jsx';
import Drawer from '../Mobile/Drawer.jsx';
import FooterHomeOne from './FooterHomeOne.jsx';
import HeroHomeOne from './HeroHomeOne.jsx';
import HomeOneHeader from './HomeOneHeader.jsx';
import LandingPage from './LandingPage.jsx';
import RestaurantService from './RestaurantService.jsx';
import ReviewSection from './ReviewSection.jsx';
function HomeOne() {
    const [drawer, drawerAction] = useToggle(false);

    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HomeOneHeader action={drawerAction.toggle} />
            <HeroHomeOne />
            <LandingPage />
            <RestaurantService />
            {/* <ReviewSection /> */}
            <FooterHomeOne />
            <BackToTop />
        </>
    );
}

export default HomeOne;
