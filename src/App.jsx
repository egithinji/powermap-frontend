import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import AddPolygon from "./components/AddPolygon";
import About from "./components/About";
import NavBar from "./components/NavBar";
import DashBoard from "./components/dashboard/DashBoard";

function App() {

  return (
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Dashboard" element={<DashBoard />} />
          <Route path="/AddPolygon" element={<AddPolygon />} />
        </Routes> 
      </Router>
  )
}

export default App;
