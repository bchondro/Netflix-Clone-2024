import './App.css';

import Footer from './components/Footer/Footer.js';
import Header from './components/Header/Header.js';
import Home from './pages/Home/Home.js';

// import Heaimder from './components/Header/Header.js';


function App() {
  return (
    <div className="App">
      <Home/>
      <Header /> 
      <Footer/>
    </div>
  );
}

export default App;
