import React from 'react';
import './homeBody.css';

function HomeBody() {
    return (
        
            <section class="home" id="home">
                <div class="home-slider">
                    <div class="wrapper">
                        <div class="slide">
                            <div class="content">
                                <span>Welcome....~!</span>
                                <h3>SPM Project</h3>
                                <p>Frontend design for spm project side</p>
                                <a href="#" class="btn">order now</a>
                            </div>
                            <div class="image">
                                <img
                                src="https://www.pngall.com/wp-content/uploads/5/Home-Interior-Design-PNG-Image.png" alt="" />
                            </div>
                        </div>

                    </div>

                    <div class="swiper-pagination"></div>

                </div>

    </section>
    )
}

export default HomeBody
