import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import AddPolygon from "./components/AddPolygon";
import About from "./components/About";
import NavBar from "./components/NavBar";

function App() {

  return (
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/AddPolygon" element={<AddPolygon />} />
        </Routes> 
      </Router>
  )
}

export default App;
