import Footer from "./components/Footer";
const { default: Header } = require("./components/Header");
const { default: Home } = require("./components/Home");


function App() {
  return (
    <div className="App">
    <Header />
    <Home />
    <Footer />
    </div>
  );
}

export default App;
