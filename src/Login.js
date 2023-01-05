import React,{useState} from 'react'
import axios from 'axios'
import Mainheader from './Mainheader'

const Login = () => {

    const [username, pickEmail]= useState('');
    const [pass, pickPassword]= useState('');
    const [msg , updateMsg] = useState('Please enter login details');
    const loginChek =()=>{
        if(username === "" || pass === ""){
            updateMsg("Enter your Email & Password")
        }else{
            updateMsg("Please wait vailidating...")
            var userStatus = false;
            axios.get("http://localhost:1234/vendor")
            .then((response)=>{
                for(var i=0; i< response.data.length; i++){
                var semail= response.data[i].email;
                var spass= response.data[i].password;
                if(username === semail && pass === spass){
                    userStatus= true;
                    updateMsg("Success : Please wait redirecting...")
                    localStorage.setItem("vendorid", response.data[i].id );
                    localStorage.setItem("vendorname", response.data[i].name );
                    window.location.href="http://localhost:3000/#/Dashboard";
                    window.location.reload();
                    break;
                }
                }
                if (userStatus === false){
                    updateMsg("Fail: Account Invalid or Not Exist")
                }
            })
        }
    }

  return (
    <>
        <Mainheader/>
        <div className='container mt-4'>
        <div className='row'>
            <div className='col-lg-4 offset-4'>
                <h3 className='text-center text-primary'> Login</h3>
               <p className='text-center'> {msg} </p>
                <div className='mb-3'>
                    <label> e-Mail Id</label>
                    <input type="email" className="form-control" onChange={e=>pickEmail(e.target.value)}/>
                </div>
                <div className='mb-3'>
                    <label> Password</label>
                    <input type="password" className="form-control" onChange={e=>pickPassword(e.target.value)} />
                </div>
                <div className='text-center'>
                    <button className='btn btn-primary'
                    onClick={loginChek} > Login</button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Login