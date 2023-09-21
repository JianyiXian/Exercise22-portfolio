
import './App.css';
import Navbar from './components/Navbar';
import Avatar from './components/Avatar';
import About from './components/About';
import Maincontent from './components/Maincontent';
import Footer from './components/Footer'

function App() {
  return (
    <div >
      <Navbar />
      <div className="container-fluid">
        <Avatar />
        <About />
        <Maincontent />

      </div>
      <Footer />
    </div>
  );
}

export default App;
