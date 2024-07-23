
import './App.css';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Ringcard from './shopcards/Ringcard';
import Shop_product from './pages/shop/Shop_product';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/ring-card' element={<Ringcard/>}/>
      <Route path='/shop' element={<Shop_product/>}/>
    </Routes>
    </div>
  );
}

export default App;
