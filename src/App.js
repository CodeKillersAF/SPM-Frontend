import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import FoodMenu from "./components/foodMenu/FoodMenu";

import TestCart from "./components/testCart/TestCart";

// import Table from "./components/tableTharusha/Table";
 

import Home from "./pages/home/Home";
import Table from "./pages/table/Table";
import Promotion from "./pages/promotion/Promotion";
import ContactUs from "./components/contactUs/ContactUs";

function App() {
  return (
   
    <div>
      <Router>
          <Navbar />
          <section>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/menu" component={FoodMenu} />

                <Route path="/test" component={TestCart} />

                {/* <Route path="/table" component={Table} /> */}
                <Route path="/table" component={Table} />
                <Route path="/offer" component={Promotion} />

                <Route path="/contact" component={ContactUs} />

            </Switch>
          </section>

          <Footer />
      </Router>
    </div>

  );
}

export default App;
