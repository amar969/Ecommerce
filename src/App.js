import './App.css';
import { Home } from './Components/Home';
import {Register} from "./Components/Register"
import { Login } from './Components/Login';
import { Products } from './Components/Products';
import { Routes, Route } from "react-router-dom"
import { Navbar } from './Navbar';


function App() {
  return (
    <div className="App">
    <Navbar />
    <Routes>
      <Route path={"/"} element={<Home />}></Route>
      <Route path={"/Register"} element={<Register />}></Route>
      <Route path={"/Login"} element={<Login />}></Route>
      <Route path={"/Products/:id"} element={<Products/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
