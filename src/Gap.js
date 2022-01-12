import React from 'react'
import './Gap.css';
import pics11 from './image/logo.png'
const Gap = () => {
    return (
        <div className='feat'>
            <div className='left'>
                <div className='put'>
                   <img src={pics11} alt="" />
                   <p>Bridging the gap between</p>
                   <p>dreams and reality</p>
                   <i class="fab fa-facebook"></i>
                   <i class="fab fa-instagram"></i>
                   <i class="fab fa-twitter-square"></i>
                   <i class="fab fa-invision"></i>
                </div>
                <div>
                   <h1>Resources</h1>
                   <p>Features</p>
                   <p>Pricing</p>
                   <p>Login</p>
                   <p>Sign up</p>
                </div>
                <div>
                   <h1>Legal</h1>
                   <p>Terms of use</p>
                   <p>Privacy policy</p>
                   <p>Legal notice</p>
                </div>
                <div>
                    <h1>Links</h1>
                    <p>Blogs</p>
                    <p>Tutors</p>
                    <p>Bootcamps</p>
                    <p>Courses</p>
                </div>
                <div>
                    <h2>Subscribe to us</h2>
                    <input class="ni" id="nii" placeholder="Email"></input><button className='send'>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Gap
