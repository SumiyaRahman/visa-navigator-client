import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import LatestVisas from '../components/LatestVisas';
import PopularDestinations from '../components/PopularDestinations';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const HomeLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <LatestVisas></LatestVisas>
            <PopularDestinations></PopularDestinations>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;