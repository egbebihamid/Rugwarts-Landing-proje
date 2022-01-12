import React from 'react'
import './Navbar.css';
import pics9 from './image/logo.png'
import pics10 from './image/Image 52.png'
import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
        <div>
            <div className='overall'>
                <div className='logo'>
                   <Link to={'/'}><img src={pics9} alt="" /></Link>
                </div>
                <div className='flex'>
                    <a href="#"><p>Features</p></a>
                    <a href="#"><p>Customers</p></a>
                    <a href="#"> <p>Pricing</p></a>
                    <a href="#"><p>About Us</p></a>
                    <a href="#"><p>Plus</p></a>
                </div>
                <Link to='/Login' className='log'>Login</Link>
                <Link to='/Getstarted'><button className='get'>Get Stared</button></Link>
            </div>
            <div className='new'>
                <div className='things'>
                  <h2>Discover new things</h2>
                  <h2>to enrich your skill</h2>
                  <h2>anytime anywhere.</h2>
                  <p>Education makes you discover a mirror</p>
                  <p>purpose and achieve window result.</p>
                  <input class="ni" id="nii" placeholder="you@example.com"></input><button className='start'>Get Started</button>
                </div>
                <img src={pics10} alt="" />
            </div>
        </div>
    )
}

export default Navbar
