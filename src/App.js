import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Searchpage from "./components/Searchpage";
const { default: Header } = require("./components/Header");
const { default: Home } = require("./components/Home");

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/search">
          <Searchpage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
