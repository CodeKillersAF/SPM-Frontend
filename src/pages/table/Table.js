import React, { useEffect, useState } from "react";
import "./table.css";
import Popup from "../../components/popup/Popup";
import axios from "axios";
import TableItem from "../../components/tableItem/TableItem";
import PopupWindow from "../../components/popupWindow/PopupWindow";
import BookTableForm from "../../components/bookTableForm/BookTableForm";
import AlertCart from "../../components/alertCart/AlertCart";

function Table() {
  const [alertOpen, setAlertOpen] = React.useState(false);
  const [booking, setBooking] = useState({
    tableId: "",
    tableName: "",
    date: new Date(),
    time : new Date().getHours() + ":" + new Date().getMinutes(),
    numberOfPeople: "",
    customerName: "",
    email: "",
    phone: "",
  });

  const submitTableBooking = (e) => {
    e.preventDefault();
    axios
      .post("https://kasuki-backend.herokuapp.com/api/tableBook", booking)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setFormOpen(false);
        setAlertOpen(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  const [selectedCategory, setSelectedCategory] = useState({
    tables: [],
    name: "",
    description: "",
  });
  useEffect(() => {
    //get all table categories
    getAllCategories();
    
  },[]);
 
  const getAllCategories = async () => {
    await axios
      .get(`https://kasuki-backend.herokuapp.com/api/tableCategory/`)
      .then((response) => {
        setCategory(response.data);
        setSelectedCategory(response.data[0]);
      });
  };
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const getSelectedCategory = async(category) => {
    await axios
      .get(`https://kasuki-backend.herokuapp.com/api/tableCategory/${category}`)
      .then((response) => {
        setSelectedCategory(response.data);
        console.log(response.data);
      });
  };


  const handleClose = () => {
    setOpen(false);
  };

  const [searchTerm, setSearchTerm] = useState("");

  const [category, setCategory] = useState([]);

  const onClickOpenBookForm = (selectedTable) => {
    console.log(selectedTable);
    setBooking({tableName: selectedTable.name, tableId: selectedTable._id});
    setFormOpen(true);
  };
  const onClickCloseBookForm = () => {
    setFormOpen(false);
  };

  const onBookingChange = (e) => {
    setBooking({  ...booking, [e.target.name]: e.target.value });
  };


  const [formOpen, setFormOpen] = useState(false);

  const onClickFormOpen = () => {
    setFormOpen(true);
  };
  return (
    <div>
      <AlertCart
        open={alertOpen}
        message="Table Booked Successfully!"
        onClose={()=>setAlertOpen(false)}
      />
      <PopupWindow
        openPopup={formOpen}
        title="Book Table"
        form={<BookTableForm onClickCloseBookForm={onClickCloseBookForm} booking={booking} onBookingChange={onBookingChange} submitTableBooking={submitTableBooking}/>}
      />

      <div className="table-container">
        <h3 className="tableheading"> our tables </h3>

        <div className="table-center">
          <div className="table-category-div">
            {category.map((c) => (
              <button className="table-category-button" onClick={()=>getSelectedCategory(c._id)}>{c.name}</button>
            ))}
          </div>
        </div>

        <div className="table" id="table">
          {selectedCategory &&
            selectedCategory.tables.map((item, index) => (
              <div>
                <TableItem
                  item={item}
                  index={index}
                  onClickOpenBookForm={onClickOpenBookForm}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Table;
