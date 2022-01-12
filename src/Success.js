import React from 'react'
import './Success.css';
import pic1 from './image/Ellipse 666.png'
import pic2 from './image/Ellipse 667.png'
import pic3 from './image/Path 70355.png'
import pic4 from './image/Path 70356.png'
import pic5 from './image/Path 70354.png'
import pic6 from './image/Path 70357.png'
const Success = () => {
    return (
        <div className='next'>
            <h1>Be Our Next Success Story</h1>
            <div className='fle'>
                <div>
                    <img className='pic3' src={pic3} alt="" />
                    <img className='pic5' src={pic5} alt="" />
                </div>
                <div >
                    <img className='pic1' src={pic1} alt="" />
                    <div className='has'>
                      <p>Rugwarts has really helped me achieve</p>
                      <p>my long time dream of becoming a</p>
                      <p>product designer</p>
                      <h5>Esther Aderemi</h5>
                      <p>Graduate</p>
                    </div>
                </div>
                <div className='pic2'>
                    <img className='pic2' src={pic2} alt="" />
                    <div className='the'>
                           <p>The tutors are understanding and I don’t feel</p>
                           <p>pressured because I study at my pace.</p>
                           <h5>Jim Shawn</h5>
                           <p>Undergraduate</p>
                    </div>
                </div>
                <div>
                    <img className='pic4' src={pic4} alt="" />
                    <img className='pic6' src={pic6} alt="" />
                </div>
            </div>
            <div className='mo'>
                   <h5 className='no'></h5>
                   <h5 className='in'></h5>
                   <h5 className='no'></h5>
            </div>
        </div>
    )
}

export default Success
