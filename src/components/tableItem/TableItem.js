import axios from "axios";
import React, { useEffect, useState } from "react";
import "./tableItem.css";

export default function TableItem({ item ,onClickOpenBookForm}) {

  const [table, settable] = useState({});
  useEffect(() => {
    getTable();
  }, [item]);
  const getTable = async () => {
    await axios
      .get(`https://kasuki-backend.herokuapp.com/api/table/allTable/${item}`)
      .then((res) => {
        settable(res.data);
        console.log(res);
      });
  };

  return (
    <div>
      {table && (
        <div className="tableCard">
          <div className="table-image">
            <img className="table-image" src={table.image} alt="ImageView" />
          </div>
          <div className="table-text">
            <h2>{table.name}</h2>
            <p>{table.description}</p>
            <button className="table-button" onClick={e=>onClickOpenBookForm(table)} >Book Now</button>
          </div>

          <div className="table-attribute">
            <div className="table-SWH">
              <div className="table-value">{table.chairs}</div>
              <div className="table-name">Chairs</div>
            </div>

            <div className="table-SWH border">
              <div className="table-value">Rs. {table.width}</div>
              <div className="table-name">Extra Price</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
