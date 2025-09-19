



import './App.css';
import Navbar from '../components/layout/navbar';
import Home from '../pages/home';
import Footer from '../components/layout/footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;