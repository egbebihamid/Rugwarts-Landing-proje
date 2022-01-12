import React from 'react'
import './Online.css';
import pics7 from './image/Image 56.png'
const Online = () => {
    return (
        <div className='Online'>
            <h1>Online Courses</h1>
            <div className='our'>
                <div className='usin'>
                    <h5>30,000+</h5>
                    <p>Course Creators</p>
                    <h5>80 million+</h5>
                    <p>Courses taken</p>
                    <h5>130+</h5>
                    <p>Countries using Rugwarts</p>
                    <h5>$600 million+</h5>
                    <p>Earned by our course creators</p>
                </div>
                <img src={pics7} alt="" />
            </div>
        </div>
    )
}

export default Online
