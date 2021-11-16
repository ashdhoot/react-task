import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/series">
          <Series />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
