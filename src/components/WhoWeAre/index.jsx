import React from 'react';
import useToggle from '../../Hooks/useToggle.js';
import BackToTop from '../BackToTop.jsx';
import FooterHomeOne from '../HomeOne/FooterHomeOne.jsx';
import Drawer from '../Mobile/Drawer.jsx';
import TeamSection from './TeamSection.jsx';
import HeaderNews from './HeaderNews.jsx';
import HeroNews from './HeroNews.jsx';
import Forms from './Forms.jsx';
import Navigation from '../Navigation.jsx';

function News() {
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <Navigation action={drawerAction.toggle} />
            <TeamSection />
            <FooterHomeOne />
            <BackToTop />
        </>
    );
}

export default News;
