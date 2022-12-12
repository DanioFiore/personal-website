import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MiddleSection from "./components/MiddleSection/MiddleSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="p-10 mt-10">
        <Header />
        <MiddleSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
