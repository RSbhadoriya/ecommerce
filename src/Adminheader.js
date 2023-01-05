import React, { useState } from "react";
import { Link } from "react-router-dom";

const Adminheader = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand text-warning" ><i className="fa fa-shopping-bag"></i> React Shopping </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="mynavbar">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/"><i className="fa fa-home"></i> Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/Manageproduct'><i className="fa fa-shopping-cart"></i> Managae Product</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/Manageorder'><i className="fa fa-cart-plus"></i> Manage Order</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link"><i className="fa fa-user m-2"></i> Welcome - { localStorage.getItem("vendorname") } - <i className="fa fa-power-off text-danger m-2 logout" onClick={logout}> Logout</i></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<br/>
    </>
  );
};

export default Adminheader;

const logout = ()=>{
  localStorage.clear();
  window.location.href="http://localhost:3000/#/Login";
  window.location.reload();
}