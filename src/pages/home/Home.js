import React from 'react';
import HomeBody from '../../components/homeBody/HomeBody';
import Review from '../../components/review/Review';
import About from '../../components/aboutUs/About';

function Home() {
    return (
        <div>
            <HomeBody />
            <About />
            <Review />
        </div>
    )
}

export default Home
