import React,{useState, useEffect} from 'react'
import Mainheader from './Mainheader'
import axios from 'axios';
const Home = () => {
    const [productlist, updateProductlist]= useState([]);
    const getProduct =()=>{
        fetch("http://localhost:1234/product")
        .then((response)=>response.json())
        .then(
            productArray=>{
                updateProductlist(productArray)
            }
        )
    }
    useEffect(()=>{
        getProduct();
    },[1])

    const [msg, updateMsg]= useState("");

    const addtocart=(productinfo)=>{
        axios.post("http://localhost:1234/cartitem", productinfo)
        .then((response)=>{
            updateMsg("Item added successfully in cart");
        })
    }
  return (
    <>
    <Mainheader/>
    <div className='container mt-5'>
    <p className='text-center text-info'> {msg} </p>
        <div className='row text-center'>
        {
            productlist.map((product,index)=>{
                return(
                    <div className='col-lg-3 mb-5' key={index}>
            <h4 className='text-primary'> {product.name}</h4>
            <img src= {product.photo} className='img-fluid rounded myphoto' />
            <p> {product.deatils}</p>
            <p className='text-start text-center'>
            <ins className='text-success m-3'> Rs. {product.price} </ins>
            </p>
            <button className='btn btn-danger btn-sm' onClick={addtocart.bind(this,product)}><i className='fa fa-plus'></i> Add to Card</button>
        </div>      
                )
            })
        }
        </div>
    </div>
    </>
  )
}

export default Home