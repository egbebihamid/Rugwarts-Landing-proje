import React from 'react'
import './Login.css'
import image from './image/logo.png'
import apple from './image/apple.png'
import search from './image/search.png'
import { Link } from 'react-router-dom'
const Login = () => {
    return (
        <div className='text'>
            <Link to={'/'}><img src={image} alt="" /></Link>
            
            <div className='div1'>
                <h3>Login Into Your Account</h3>
                <p>New Rugwarts account. Have an account?<a href="#">Sign up</a></p>
                <div className='name'>
                   <div>
                       <div className='mail'>
                           <p>Email Address or Username</p>
                           <input class="ni" id="nii" placeholder="you@example.com"></input>
                           <p>Password</p>
                           <input class="ni" id="nii"></input>
                       </div>
                       <div className='box'>
                          <input type="Checkbox" name="" id="" />Remember me
                           <a href="#">Forgot Password?</a>
                       </div>
                       <button className='btn'>Login to your account</button>
                   </div>
                   <div className='pop'>
                       <p></p>
                   </div>
                   <h5 className='line'>OR</h5>
                   <div className='ok'>
                       <p></p>
                   </div>
                   <div className='pup'>
                        <div className='sop'>
                           <button><img src={search} alt="" />Continue with google</button>
                        </div>
                        <div className='pap'>
                            <button><img src={apple} alt="" />Continue with apple</button>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Login