import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import Home from "./components/Home";
import AddPolygon from "./components/AddPolygon";
import About from "./components/About";
import NavBar from "./components/NavBar";

function App() {

  return (
      <Router>
        <NavBar>
          <NavLink to="/" className={({ isActive }) => isActive ? "font-bold text-cyan-200" : undefined}>Power Map</NavLink>
          <NavLink to="/AddPolygon" className={({ isActive }) =>isActive ? "font-bold text-cyan-200" : undefined}>Add Area</NavLink>
          <NavLink to="/About" className={({ isActive }) => isActive ? "font-bold text-cyan-200" : undefined}>About</NavLink>
          <div className="flex gap-2">
              <a href='https://github.com/egithinji' target='_blank'><FontAwesomeIcon icon={faGithub} size="lg"/></a>
              <a href='mailto:ericgithinji@gmail.com'><FontAwesomeIcon icon={faEnvelope} size="lg"/></a>
          </div>
        </NavBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/AddPolygon" element={<AddPolygon />} />
        </Routes> 
      </Router>
  )
}

export default App;
