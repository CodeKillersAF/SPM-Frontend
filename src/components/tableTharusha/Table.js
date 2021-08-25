import React, { useState } from 'react';
import './table.css';
import Popup from '../popup/Popup';

function Table() {

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
    
    const handleClose = () => {
      setOpen(false);
    };

    const [searchTerm, setSearchTerm] = useState('');

    const [category, setCategory] = useState([
        {
            Cname: "Couple"
        },
        {
            Cname: "Group"
        },
        {
            Cname: "Romantic"
        }
    ]);

    const [table, setTable] = useState([
        {
            name: "Table one",
            chairs: "5",
            description: "hello there in here we display table one details for you",
            width: "10",
            height: "20",
            url: "https://www.ulcdn.net/images/products/121923/slide/666x363/Danton_Folding_Dining_Table_Set_Capra_Chairs_Mahogany_Finish_01_IMG_0052-M.jpg?1477555973",
        },
        {
            name: "Table two",
            chairs: "5",
            description: "hello there in here we display table two details for you",
            width: "10",
            height: "20",
            url: "https://www.ulcdn.net/images/products/121923/slide/666x363/Danton_Folding_Dining_Table_Set_Capra_Chairs_Mahogany_Finish_01_IMG_0052-M.jpg?1477555973",
        },
        {
            name: "Table three",
            chairs: "5",
            description: "hello there in here we display table three details for you",
            width: "10",
            height: "20",
            url: "https://www.ulcdn.net/images/products/121923/slide/666x363/Danton_Folding_Dining_Table_Set_Capra_Chairs_Mahogany_Finish_01_IMG_0052-M.jpg?1477555973",
        },
        {
            name: "Table four",
            chairs: "5",
            description: "hello there in here we display table four details for you",
            width: "10",
            height: "20",
            url: "https://www.ulcdn.net/images/products/121923/slide/666x363/Danton_Folding_Dining_Table_Set_Capra_Chairs_Mahogany_Finish_01_IMG_0052-M.jpg?1477555973",
        },
        
    ])

    return (

        <div>
            <Popup open={open} onClose={handleClose} />

            <div className="table-container">
                    <h3 className="tableheading"> our tables </h3>
            
            <input type="search" 
                placeholder="Search Table Here" 
                className="search-table" 
                onChange={(e) => setSearchTerm(e.target.value) }
            />

                <div className="table-center">
                    <div className="table-category-div">
                        {category.map((c) => (
                        <button className="table-category-button">
                            {c.Cname}
                        </button>
                        ))}
                    </div>
                </div>
                
                <div className="table" id="table">

                        {table.filter( val => {
                            if(searchTerm === ''){
                                return val;
                            }
                            else if(
                                val.name.toLowerCase().includes(searchTerm.toLowerCase())
                            ){
                                return val;
                            }
                            else{
                                console.log("No value found");
                            }
                        }
                        ).map((t) => (
                        <div className="tableCard">
                            <div className="table-image">
                                <img className="table-image" src={t.url} alt="ImageView" />
                            </div>
                            <div className="table-text">
                                <h2>{t.name}</h2>
                                <p>{t.description}</p>
                                <button onClick={handleOpen} className="table-button">
                                    Book Now 
                                </button>
                            </div>

                            <div className="table-attribute">
                                <div className="table-SWH">
                                    <div className="table-value">{t.chairs}</div>
                                    <div className="table-name">Chairs</div>
                                </div>

                                <div className="table-SWH border">
                                    <div className="table-value">Rs. {t.width}</div>
                                    <div className="table-name">Extra Price</div>
                                </div>
                                
                            </div>
                        </div>
                        ))}

                </div>   
            </div>
    </div>
    )
}

export default Table
