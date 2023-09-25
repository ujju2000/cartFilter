
import './App.css';
import Header from './components/Header';
import {BrowserRouter , Route , Routes} from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
 
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path  = '/cartFilter/' exact element = {<Home />} />
        <Route path = '/cartFilter/cart' element = {<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
