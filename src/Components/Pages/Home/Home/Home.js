
import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUS/ContactUs';
import Tickets from '../Tickets/Tickets';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tickets></Tickets>
            <AboutUs></AboutUs>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;