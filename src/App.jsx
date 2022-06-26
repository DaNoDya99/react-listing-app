import React from "react";
import Topbar from "./components/topbar/Topbar";
import CreateListing from "./views/createlisting/CreateListing";
import Home from "./views/homepage/Home";
import Details from "./views/listingdetails/Details";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <div>
          <Topbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/detail/:id" element={<Details />} />
            <Route exact path="/create" element={<CreateListing />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
