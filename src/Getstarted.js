import React from 'react'
import './Getstarted.css'
import image from './image/logo.png'
import apple from './image/apple.png'
import search from './image/search.png'
import { Link } from 'react-router-dom'
const Getstarted = () => {
    return (
        <div className='tex'>
            <Link to='/'><img src={image} alt="" /></Link>
            <div className='div'>
                <h3>Let’s get Started</h3>
                <p>Create your Rugwarts account. Have an account?<a href="#">Login</a></p>
                <div className='nam'>
                   <div>
                       <div className='mai'>
                           <p>First Name</p>
                           <input class="ni" id="nii" placeholder="Enter your first name"></input>
                           <p>Last Name</p>
                           <input class="ni" id="nii" placeholder="Enter your last name"></input>
                           {/* <p className='num'>Phone Num or Email address</p>
                           <input class="ni" id="nii" placeholder="Enter mobile number or email address"></input> */}
                           <p>Username</p>
                           <input class="ni" id="nii"></input>
                           <p>Password</p>
                           <input class="ni" id="nii"></input>
                       </div>
                       <div className='agree'>
                          <button className='acc'>Create my account</button>
                          <p>By clicking the “Create My Account” button, you agree to</p>
                          <p>Rugwarts <a href="#">Terms of acceptable use</a> and <a href="#">Privacy Policy</a>.</p>
                       </div>
                   </div>
                   <div className='li'>
                       <p></p>
                   </div>
                   <p className='or'>OR</p>
                   <div className='lin'>
                       <p></p>
                   </div>
                   <div className='pu'>
                        <div className='so'>
                           <button><img src={search} alt="" />Continue with google</button>
                        </div>
                        <div className='pa'>
                            <button><img src={apple} alt="" />Continue with apple</button>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Getstarted
