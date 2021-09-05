import React, { useEffect, useState } from "react";
import "./table.css";
import Popup from "../../components/popup/Popup";
import axios from "axios";
import TableItem from "../../components/tableItem/TableItem";
import PopupWindow from "../../components/popupWindow/PopupWindow";
import BookTableForm from "../../components/bookTableForm/BookTableForm";

function Table() {
  const [selectedCategory, setSelectedCategory] = useState({
    tables: [],
    name: "",
    description: "",
  });
  useEffect(() => {
    //get all table categories

    getAllCategories();
  }, []);
  const getAllCategories = async () => {
    await axios
      .get(`http://localhost:8000/api/tableCategory/`)
      .then((response) => {
        setCategory(response.data);
        setSelectedCategory(response.data[0]);
        console.log("hello");
      });
  };
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [searchTerm, setSearchTerm] = useState("");

  const [category, setCategory] = useState([]);

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
  ]);

  const [formOpen, setFormOpen] = useState(true);

  const onClickFormOpen = () => {
    setFormOpen(true);
  };
  return (
    <div>
      <PopupWindow openPopup={formOpen} title ="Book Table" form={<BookTableForm/>} />

      <div className="table-container">
        <h3 className="tableheading"> our tables </h3>

        <div className="table-center">
          <div className="table-category-div">
            {category.map((c) => (
              <button
                className="table-category-button"
                onClick={() => onClickFormOpen(c)}
              >
                {c.name}
              </button>
            ))}
          </div>
        </div>

        <div className="table" id="table">
          {selectedCategory.tables.map((item, index) => (
            <div>
              <TableItem item={item} index={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Table;
