
import './App.css';
import Blogpage from './Components/Blogpage';
import Contact from './Components/Contact';
import About from './Components/About';
import Pagess from './Components/Pagess';
import { Route, Routes } from 'react-router-dom';




function App() {
  return (
    <div >
   <>
   <Routes>
    <Route path="/" element ={<About/>}></Route>
    <Route path="contact" element ={<Contact/>}></Route>
    <Route path="Blog" element ={<Blogpage/>}></Route>
    <Route path="pagess" element ={<Pagess/>}></Route>
   </Routes>
   </>
    </div>
    //  <About/>
    //  <Pagess/>
    //  <Contact/>
    //  <Blogpage/>
    
  );
}

export default App;
