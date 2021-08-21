import React, { useState } from 'react';
import './table.css';

function Table() {

    const [tableCategory, setTableCategory] = useState([
        {
            name: "Couple"
        },
        {
            name: "Group"
        }
]);

    return (

<>
    <div className="foodItemCenter">
        {tableCategory.map((ac) => (
           <div className="foodItemDiv">
                <button className="foodItemCategory" >
                      {ac.name}
                </button>
           </div>
        ))}
        </div>

        <section class="table-section">

    <h3 class="sub-heading"> our dishes </h3>
    <h1 class="heading"> popular dishes </h1>

    <div class="table-box-container">

        <div class="table-box">
            <a href="#" class="fas fa-eye"></a>
            <img src="https://images.unsplash.com/photo-1564383424695-05a0668266ec?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a2l0Y2hlbiUyMHRhYmxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" />
            <h3>tasty food</h3>
            <div class="table-description">
               <h2>Hello</h2>
            </div>
            <span>$15.99</span>
            <a href="#" class="btn">View Table</a>
        </div>

        <div class="table-box">
            <a href="#" class="fas fa-eye"></a>
            <img src="https://images.unsplash.com/photo-1564383424695-05a0668266ec?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a2l0Y2hlbiUyMHRhYmxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" />
            <h3>tasty food</h3>
            <div class="table-description">
               <h2>Hello</h2>
            </div>
            <span>$15.99</span>
            <a href="#" class="btn">View Table</a>
        </div>


    </div>


</section>
</>
    )
}

export default Table
