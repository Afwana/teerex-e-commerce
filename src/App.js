import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={ <Home/> }></Route>
        <Route path='/wishlist' element={ <Wishlist/> }></Route>
        <Route path='/cart' element={ <Cart/> }></Route>
      </Routes>
    </>
  );
}

export default App;
