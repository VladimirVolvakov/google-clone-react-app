import React from "react";
// Pages:
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
// Routing:
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
    </Router>
  );
}

export default App;
