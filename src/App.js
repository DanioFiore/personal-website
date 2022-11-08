import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Skills from "./components/Skills/Skills";
import ThisWebsite from "./components/ThisWebsite/ThisWebsite";
import ReachMe from "./components/ReachMe/ReachMe";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="p-10 mt-10">
        <Header />
        <Skills />
        <ThisWebsite />
        <ReachMe />
        <Footer />
      </div>
    </div>
  );
}

export default App;
