import React from 'react';
import HomeBody from '../../components/homeBody/HomeBody';
import FoodMenu from '../../components/foodMenu/FoodMenu';
import About from '../../components/aboutUs/About';

function Home() {
    return (
        <div>
            <HomeBody />
            <About />
            <FoodMenu />
        </div>
    )
}

export default Home
