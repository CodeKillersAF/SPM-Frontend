import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from "./components/navbar/Navbar";
import HomeBody from './components/homeBody/HomeBody';
import Footer from "./components/footer/Footer";



function App() {
  return (
   
    <div>
      <Router>
          <Navbar />
          <HomeBody />
          <section>
            <Switch>
                {/* <Route path="/" component={HomeBody} exact /> */}
            </Switch>
          </section>

          <Footer />
      </Router>
    </div>

  );
}

export default App;
