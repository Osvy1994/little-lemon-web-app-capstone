import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import BookingPage from "./components/BookingPage";
import Gallery from "./components/Gallery";
import AboutUs from "./components/AboutUs";
import LandingPage from "./components/LandingPage";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
      <Header />
      <LandingPage />
      <Gallery />
      <Menu />
      <BookingPage />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
