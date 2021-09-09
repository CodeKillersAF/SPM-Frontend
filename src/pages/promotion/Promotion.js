import React from "react";
import { useState,useEffect } from 'react';
import axios from "axios";

export default function Promotion() {

    const [showAllOffers, setShowAllOffers] = useState([]);

    const getAllOffers = () => {
        axios.get("http://localhost:8000/api/offer")
            .then((response) => {
                console.log(response.data.data);
                setShowAllOffers(response.data.data);
            })
    }

    useEffect(() => {
        getAllOffers();
    }, []);



    return (
        <div>

        <h1>H</h1>
        <h1>H</h1>
        <h1>H</h1>

        <h1>H</h1>
        <h1>H</h1>
        <h1>H</h1>


            {/* <div className="foodItemCenter">
                {getAllCategories.map((ac) => (
                    <div className="foodItemDiv">
                        <button className="foodItemCategory" onClick={() => getCategoryFoods(ac._id)}>
                            {ac.categoryName}
                        </button>
                    </div>
                ))}
            </div> */}
            {showAllOffers && showAllOffers.map(showAllOffer => {
                return (
                    <div key={showAllOffer.id} style={{ alignItems: 'center', margin: '20px 60px' }}>
                        <h4>{showAllOffer.offerName}</h4>
                        <p>{showAllOffer.offerDescription}</p>
                    </div>
                )
            })}


        </div>
    )



}