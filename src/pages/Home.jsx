import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Countries from '../components/Countries';
import WhyChooseUs from '../components/WhyChooseUs';
import Cta from '../components/Cta';
import AwardProcess from '../components/AwardProcess';
import { useLocation } from 'react-router-dom';

const Home = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <main className="overflow-hidden">
            <Hero />
            <Features />
            <Countries />
            <WhyChooseUs />
            <AwardProcess />
            <Cta />
        </main>
    );
};

export default Home;
