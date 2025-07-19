import React, { useEffect, useState } from 'react';
import useToggle from '../../Hooks/useToggle.js';
import BackToTop from '../BackToTop.jsx';
import FooterHomeOne from '../HomeOne/FooterHomeOne.jsx';
import Drawer from '../Mobile/Drawer.jsx';
import HeaderNews from '../WhoWeAre/HeaderNews.jsx';
import HeroNews from '../WhoWeAre/HeroNews.jsx';
import QRMenuSection from './QRMenuSection.jsx';
import BootstrapStyleCarousel from './BootstrapStyleCarousel.jsx';
import Navigation from '../Navigation.jsx';


function Shops() {
    const [drawer, drawerAction] = useToggle(false);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => {
                console.error(err);
            });
    }, []);

    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            {/* <HeaderNews action={drawerAction.toggle} /> */}
            <Navigation action={drawerAction.toggle} />
            <HeroNews
                title="Shop Products"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { link: '/shops', title: 'Shop Products' },
                ]}
            />
            <QRMenuSection  />
            <BootstrapStyleCarousel />
            <FooterHomeOne />
            <BackToTop />
        </>
    );
}

export default Shops;
