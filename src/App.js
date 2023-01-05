import React from "react";
import { HashRouter, Routes, Route} from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import Login from "./Login";
import Register from "./Register"
import Dashboard from "./Dashboard";
import ManageProduct from "./ManageProduct";
import ManageOrder from "./ManageOrder";

const App = () => {
  if(localStorage.getItem("vendorid") != null){
    return(
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Dashboard />}/>
        <Route exact path="/Dashboard" element={<Dashboard />}/>
        <Route exact path="/Manageproduct" element={<ManageProduct />}/>
        <Route exact path="/Manageorder" element={<ManageOrder />}/>
      </Routes>
    </HashRouter>)
  }else{
  return (
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Cart" element={<Cart />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Register" element={<Register />} />
        </Routes>
      </HashRouter>
  );
}};

export default App;
