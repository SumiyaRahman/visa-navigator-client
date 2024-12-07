import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import LatestVisas from '../components/LatestVisas';
import PopularDestinations from '../components/PopularDestinations';
import Footer from '../components/Footer';
import VisaTypesSection from '../components/VisaTypesSection';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomeLayout = () => {
    return (
        <div>
             <ToastContainer position="top-right" autoClose={3000} />
            <Navbar></Navbar>
            <Banner></Banner>
            <LatestVisas></LatestVisas>
            <VisaTypesSection></VisaTypesSection>
            <PopularDestinations></PopularDestinations>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;