import React from "react";
import "./contact.css";

export default function ContactUs() {
  return (
    <div className="main-contact">
      <div className="contactContainer">
        <h1>Contact Us</h1>
        <h3>Our contact us page. You can connect with us...!</h3>
        <h3>Our details are in here</h3>
      </div>

      {/* <i className="fa fa-map-marker" aria-hidden="false"></i> */}

      <div className="contactDetails">
        <button>
          <i class="fas fa-map-marker-alt"></i>
          <h4>Address</h4>
          <h5>No.43 Padukka Road,</h5>
          <h5>Ingiriya</h5>
        </button>

        <button>
          <i class="fas fa-mobile-alt"></i>
          <h4>Phone Number</h4>
          <h5>077-3111099</h5>
        </button>

        <button>
          <i class="fas fa-envelope"></i>
          <h4>Email</h4>
          <h5>spmassignment@gmail.com</h5>
        </button>
      </div>
    </div>
  );
}
