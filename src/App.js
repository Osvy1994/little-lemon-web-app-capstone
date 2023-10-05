import "./App.css";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Header from "./components/Header";
import BookingPage from "./components/BookingPage";
import Menu from "./components/Menu";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <div className="App">
      <Header>Header</Header>
      <BookingPage />
      <Menu />
      <Testimonials />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
