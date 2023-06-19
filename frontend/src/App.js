
import 'tailwindcss/tailwind.css';

import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';      
import Market from './components/Market';
import OemSpecs from './components/OemSpecs';
import MyInventory from './components/MyInventory';
import OemEdit from './components/OemEdit';
import {BrowserRouter ,Routes,Route} from "react-router-dom";


 


function App() {
  return (
    <div className="App">
 <BrowserRouter>

    <Routes>
     <Route path='/' element={<Signup />} />
     <Route path='/login' element={<Login />} />
     <Route path='/Home' element={<Home/>} />
     <Route path='/Market' element={<Market/>} />
     <Route path='/OemSpecs' element={<OemSpecs/>} />
     <Route path='/MyInventory' element={<MyInventory/>} />
     <Route path='/OemEdit' element={<OemEdit/>} />
     </Routes>

  </BrowserRouter>
    </div>
  );
}

export default App;
