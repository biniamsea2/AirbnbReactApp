import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Search from "./Search";
import CovidResponse from "./CovidResponse";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    // BEM
    <div className="app">
      <Router>
        {/* no switch here so the app will always render covidResponse and Header */}
        <CovidResponse />
        <Header />
        {/* once we hit path "/" then it will render the home page*/}
        <Switch>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
