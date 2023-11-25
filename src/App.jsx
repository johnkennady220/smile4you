// import './App.css'
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Members from "./components/Members";
import Footer from "./components/Footer";
import Donation from "./components/Donation";

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div id="home">
          <Home />
        </div>
        <div id="about" className="container">
          <About />
        </div>
        <div id="members" className="container">
          <Members />
        </div>
        <div id="donation" className="container">
          <Donation/>
          </div>
        
      </main>
      <Footer />
    </div>
  );
};
export default App;