import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Adminheader from './Adminheader'
const Dashboard = () => {
  const [product , updateProduct]= useState([]);
  const [order, updateOrder]= useState([]);
  const getproduct= () =>{
    axios.get("http://localhost:1234/product")
    .then((response)=>{
      updateProduct(response.data)
    })
  }

  const getorder= () =>{
    axios.get("http://localhost:1234/orders")
    .then((response)=>{
      updateOrder(response.data)
    })
  }

  useEffect(()=>{
    getproduct();
    getorder();
  },[true])
  return (
    <>
        <Adminheader/>
        <div className='container mt-5'>
          <div className='row'>
            <div className='col-lg-12 text-center mb-5'>
            <h3 className='text-primary'>Dashboard</h3>
            </div>
            <div className='col-lg-6 text-center text-primary' >
               <h3> Total Products <br/> {product.length}</h3>
            </div>
            <div className='col-lg-6 text-center text-success'>
               <h3> Total orders <br/> {order.length}</h3>
            </div>
          </div>
        </div>
    </>
  )
}

export default Dashboard