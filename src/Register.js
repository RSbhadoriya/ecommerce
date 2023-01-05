import axios from 'axios';
import React,{useState} from 'react'
import Mainheader from './Mainheader'

const Register = () => {
    const [name, updateName]= useState('');
    const [email, updateEmail]= useState('');
    const [password, updatePassword]= useState('');
    const [mobile, updateMobile]= useState('');
    const [address, updateAddress]= useState('');

    const submitt =(e)=>{
        e.preventDefault();
        if(name && email && password && mobile && address){
        axios.post("http://localhost:1234/vendor", {name, email, password, mobile, address})
        .then((response)=>{
           
        })
    .catch(error=>
        console.log(error.response))
        updateName("");
        updatePassword("");
        updateEmail("");
        updateMobile("");
        updateAddress('');
    }else{
            alert ("Please Fill the All Details")
        }
    }
  return (
    <>
        <Mainheader/>
        <div className='container mt-4'>
        <div className='row'>
            <div className='col-lg-4 offset-4'>
                <h3 className='text-center text-primary'> vendor Register</h3>
                <form className='form' onSubmit={submitt}>
                <div className='mb-3'>
                    <label> Vendor Name</label>
                    <input type="text" className="form-control" id='name' value={name} onChange={(e)=>updateName(e.target.value)}/>
                </div>
                <div className='mb-3'>
                    <label> e-mail id</label>
                    <input type="email" className="form-control"  id='email' value={email} onChange={(e)=>updateEmail(e.target.value)}/>
                </div>
                <div className='mb-3'>
                    <label> create New Password</label>
                    <input type="password" className="form-control"  id='password' value={password} onChange={(e)=>updatePassword(e.target.value)}/>
                </div>
                <div className='mb-3'>
                    <label> Mobile Number</label>
                    <input type="number" className="form-control"  id='number' value={mobile} onChange={(e)=>updateMobile(e.target.value)}/>
                </div>
                <div className='mb-3'>
                    <label> Address</label>
                    <textarea className="form-control"  id='address' value={address} onChange={(e)=>updateAddress(e.target.value)}/>
                </div>
                <div className='text-centre'>
                    <button className='btn btn-primary' type='submit'> Register Now</button>
                </div>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Register