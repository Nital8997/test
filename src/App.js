import "./App.css";
import Blogpage from "./Components/Blogpage";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Pagess from "./Components/Pagess";
import { Route, Routes } from "react-router-dom";
import Shop_product from '../src/pages/shop/Shop_product'
import Ringcard from '../src/pages/shop/shopcards/Ringcard'
import Home from '../src/Components/Home'
import Carts from "./pages/Pages/carts/Carts";
import Teamwork from "./pages/Pages/team/Teamwork";


function App() {
  return (
    <div>
      <>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />}></Route>
          <Route path="/shop" element={<Shop_product />} />
          <Route path="/Blog" element={<Blogpage />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/pagess" element={<Pagess />}></Route>
          <Route path="/ring-card" element={<Ringcard />} />
          <Route path="/team" element={<Teamwork/>}/>
          <Route path="/cart" element={<Carts/>}/>
        </Routes>
      </>
    </div>
  
  );
}

export default App;
