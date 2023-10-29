import Nav from "./components/Nav";
import Homepage from "./components/Homepage";
import Destination from "./components/Destination";
import Crew from "./components/Crew";
import Technology from "./components/Technology";
import "./style/common.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route exact path="/space-tourism" element={<Homepage />} />
          {/* <Route exact path="/" element={<Homepage />} /> */}
          <Route exact path="/destination" element={<Destination />} />
          <Route exact path="/Crew" element={<Crew />} />
          <Route exact path="/technology" element={<Technology />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
