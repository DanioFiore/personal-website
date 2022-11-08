import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="p-10 mt-10">
        <Header />
        <Skills />
      </div>
    </div>
  );
}

export default App;
