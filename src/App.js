
import './App.css';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Ringcard from './shopcards/Ringcard';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/ring-card' element={<Ringcard/>}/>

    </Routes>
    </div>
  );
}

export default App;
