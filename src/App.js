import './App.css'
import Navigation from './components/Navigation';
import Landing from './components/Landing';
import Info from './components/Info';
import MenWomen from './components/MenWomen';
import Prints from './components/Prints';
import Exclusives from './components/Exclusive';
import Cart from './components/Cart';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
     <Navigation />
     <Landing />
     <Info />
     <MenWomen />
     <Prints />
     <Exclusives />
     <Cart />
     <Footer />
    </div>
  );
}

export default App;
