import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from "./components/Header"
import Home from "./components/Home"
import Cart from './components/Cart';
import "./components/styles.css"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element = { <Home />} exact />
          <Route path="/cart" element = { <Cart />} exact />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
