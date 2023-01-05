import React,{useState, useEffect} from 'react'
import Mainheader from './Mainheader'
import axios from 'axios';
const Cart = () => {
    const [productlist, updateProductlist]= useState([]);
    const getProduct =()=>{
        fetch("http://localhost:1234/cartitem")
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
    const  deleteitem=(pid)=>{
        var url = "http://localhost:1234/cartitem/"+pid
        axios.delete(url)
        .then((response)=>{
            updateMsg("Item deleted successfully from cart");
         getProduct();
        })
    }
    
    const [name, updateName]= useState('');
    const [email, updateEmail]= useState('');
    const [mobile, updateMobile]= useState('');
    const [address, updateAddress]= useState('');

    const submitt =(e)=>{
        e.preventDefault();
        if(name && email && mobile && address){
        axios.post("http://localhost:1234/orders", {name, email, mobile, address,productlist})
        .then((response)=>{
        })
    .catch(error=>
        console.log(error.response))
        updateName("");
        updateEmail("");
        updateMobile("");
        updateAddress('');
        updateProductlist([]);
        updateMsg("Order Placed Successfully")
    }else{
            alert ("Please Fill the All Details")
        }
    }
   
  return (
    <>
    <Mainheader/>
    <div className='container mt-4'>
        <div className='row'>
            <div className='col-lg-5'>
                <div className='p-4 rounded shadow'>
                    <h4 className='text-center text-primary'> Customer Details</h4>
                    <form className='form' onSubmit={submitt}>
                    <div className='mb-3'>
                        <label> Customer Name</label>
                        <input type="text" className="form-control" id='name' value={name} onChange={(e)=>updateName(e.target.value)}/>
                    </div>
                    <div className='mb-3'>
                        <label> Customer Mobile Number</label>
                        <input type="number" className="form-control" id='number' value={mobile} onChange={(e)=>updateMobile(e.target.value)}/>
                    </div>
                    <div className='mb-3'>
                        <label> Customer e-Mail Id</label>
                        <input type="email" className="form-control" id='email' value={email} onChange={(e)=>updateEmail(e.target.value)}/>
                    </div>
                    <div className='mb-3'>
                        <label> Custome Delivery Address</label>
                        <textarea className="form-control" id='address' value={address} onChange={(e)=>updateAddress(e.target.value)}/>
                    </div>
                    <div className='text-center'>
                    <button className='btn btn-primary btn-lg'> Place My Order </button>
                    </div>
                    </form>
                </div>
            </div>
            <div className='col-lg-7'>
                <div className='p-4 rounded shadow'>
                    <h4 className='text-center text-primary'> Available Items in the Cart</h4>
                    <p className='text-center text-danger'> {msg} </p>
                    <table className='table shadow table-hover rounded mt-4'>
                        <thead className='text-center'>
                            <tr className='bg-light text-primary'>
                                <th> SI no.</th>
                                <th> Product Name</th>
                                <th> Price</th>
                                <th> Photo</th>
                                <th> Action</th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>
                       {
                        productlist.map((product,index)=>{
                            return(
                                <tr key={index}>
                            <td> {index+1}</td>
                            <td> {product.name}</td>
                            <td> Rs. {product.price}</td>
                            <td> <img src={product.photo} height="50" width="50"/></td>
                            <td> 
                            <button className='btn btn-danger btn-sm' onClick={deleteitem.bind(this, product.id)}>
                                <i className='fa fa-trash'></i>
                            </button>
                            </td>
                        </tr>
                            )
                        })
                       }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Cart