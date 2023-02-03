import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import AddPolygon from "./components/AddPolygon";

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/AddPolygon">
          <AddPolygon />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch> 
    </Router>
  )
}

export default App;
