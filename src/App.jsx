import './App.css'
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import Home from './components/Home/Home'
import ComoFunciona from './components/ComoFunciona/ComoFunciona';
import Contacto from './components/Contacto/Contacto';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <div>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/details' element={<ComoFunciona/>}/>
          <Route path='/contact' element={<Contacto/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
