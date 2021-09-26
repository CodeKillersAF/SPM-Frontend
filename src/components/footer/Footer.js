import React from 'react';
import './footer.css';

function Footer() {
    return (
        <section className="footer">

     <div className="box-container">

        <div className="box">
            <h3>locations</h3>
            <a href="#">sri lanka</a>
            <a href="#">japan</a>
            <a href="#">russia</a>
            <a href="#">USA</a>
            <a href="#">france</a>
        </div>

        <div className="box">
            <h3>quick links</h3>
            <a href="#">home</a>
            <a href="#">table</a>
            <a href="#">about</a>
            <a href="#">menu</a>
            <a href="#">reivew</a>
            <a href="#">order</a>
        </div>

        <div className="box">
            <h3>contact info</h3>
            <a href="#">+123-456-7890</a>
            <a href="#">+111-222-3333</a>
            <a href="#">didula@gmail.com</a>
            <a href="#">tharusha@gmail.com</a>
            <a href="#">Sri lanka - ingiriya - 12440</a>
        </div>

        <div className="box">
            <h3>follow us</h3>
            <a href="#">facebook</a>
            <a href="#">twitter</a>
            <a href="#">instagram</a>
            <a href="#">linkedin</a>
        </div>

    </div>

    <div className="credit"> copyright @ 2021 by <span>SPM Web Project</span> </div>

</section>

    )
}

export default Footer
