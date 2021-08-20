import React from 'react';
import './about.css';

function About() {
    return (
        
    <section className="about" id="about">

        <h3 className="sub-heading"> about us </h3>
        <h1 className="heading"> why choose us? </h1>

        <div className="row">

        <div className="image">
            <img src="https://cdn.nohat.cc/thumb/f/350/4622670415003648.jpg" alt="" />
        </div>

        <div className="content">
            <h3>best food in the country</h3>
            <p>SPM Project best tries</p>
            <p>Front end design for testing</p>
            <div className="icons-container">
                <div className="icons">
                    <i className="fas fa-shipping-fast"></i>
                    <span>Online Take Away</span>
                </div>
                <div className="icons">
                    <i className="fas fa-dollar-sign"></i>
                    <span>Cash Payments</span>
                </div>
            </div>
        </div>

    </div>

</section>

    )
}

export default About
