import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import FoodMenu from "./components/foodMenu/FoodMenu";

import Home from "./pages/home/Home";
import Table from "./pages/table/Table";
import ContactUs from "./components/contactUs/ContactUs";
import LoadingScreen from '.././src/components/loadingScreen/LoadingScreen';

function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 4000)
  }, [])

  return (
   
    <>
    {loading === false ? (
    <div>
      <Router>
          <Navbar />
          <section>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/menu" component={FoodMenu} />
                <Route path="/table" component={Table} />
                <Route path="/contact" component={ContactUs} />

            </Switch>
          </section>

          <Footer />
      </Router>
    </div>
    ) : (
        <LoadingScreen />
    )}
    </>
  );
}

export default App;
