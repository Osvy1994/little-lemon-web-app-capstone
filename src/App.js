import "./App.css";
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"
import Header from "./components/Header"
import LandingPage from "./components/LandingPage"
import Menu from "./components/Menu"
import AboutUs from "./components/AboutUs"

function App() {
  return (
    <div className="App">
      <Header />
      <LandingPage />
      <Menu />
      <Testimonials />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
