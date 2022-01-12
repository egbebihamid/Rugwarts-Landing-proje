import React from 'react'
import './Need.css';
import pics8 from './image/Image 57.png'
const Need = () => {
    return (
        <div className='run'>
            <div>
              <h1>Everything you need to run your education business under one roof</h1>
              <h4>Build your course</h4>
              <p>Easily upload videos, build quizzes, and organize all your learning content with our drag and drop builder. Set pricing, schedule lessons, and automate your content to curate a learning experience your students will love.</p>
              <ul>
                  <li>Design your course site. </li>
                  <li> Market and sell.</li>  
                  <li>Support your students.</li>
                  <li>Explore our features.</li>     
              </ul>
            </div>
            <img src={pics8} alt="" />
        </div>
    )
}

export default Need
