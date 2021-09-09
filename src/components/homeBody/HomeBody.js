import React from 'react';
import './homeBody.css';

function HomeBody() {

    return (
            <section className="home" id="home">
                <div className="home-slider">
                    <div className="wrapper">
                        <div className="slide">
                            <div className="content">
                                <span>Welcome....~!</span>
                                <h3>SPM Project</h3>
                                <p>Frontend design for spm project side</p>
                                <a href="#" className="btn">order now</a>
                            </div>
                            <div className="image">
                                <img
                                src="https://www.pngall.com/wp-content/uploads/5/Home-Interior-Design-PNG-Image.png" alt="" />
                            </div>
                        </div>

                    </div>

                    <div className="swiper-pagination"></div>

                </div>
    </section>

    )
}

export default HomeBody
