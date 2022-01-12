import React from 'react'
import './Tip.css';
import pics2 from './image/Group 12606.png'
import pics3 from './image/Group 12555.png'
const Tip = () => {
    return (
        <div className='color'>
            <div className='best'>
               <h1>Tips to get started</h1>
               <p>We now offer best-in-class apps in the Rugwarts App Store for course creators.</p>
               <p>Easily customize your course experience—no matter your expertise—so you can</p>
               <p>build exactly what you want. No coding required.</p>
            </div>
            <div>
                <div className='power'>                   
                    <div className='pics1'>
                        <img src={pics2} alt="" />
                        <h3>Powerful customization with the click of a button</h3>
                        <p>We now offer best-in-class apps in the</p>
                        <p>Rugwarts App Store for course creators.</p>
                        <p>Easily customize your course experience,</p>
                        <p>no matter your expertise so you can build</p>
                        <p>exactly what you want. No coding required.</p>
                    </div>
                    <div className='pics2'>
                        <img src={pics3} alt="" />
                        <h3>Total control over your content, pricing, and data</h3>
                        <p>You have the freedom and flexibility to run ypur course business however you choose. Take full control
                            over site design, cntent, coyrse pricing, student information, and more. You get paid instantly and own 100% of ypur data.
                        </p>
                        {/* <p>You have the freedom and flexibility to</p>
                        <p>run your course business however you</p>
                        <p>choose. Take full control over site</p>
                        <p>design, content, course pricing, student</p>
                        <p>information, and more. You get paid</p>
                        <p>instantly and own 100% of your data.</p> */}
                    </div>
                    <div className='pics3'>
                        <img src={pics3} alt="" />
                        <h3>Seamless automation lets you work without worry</h3>
                        <p>Automatic onboarding, student</p>
                        <p>messaging, completion certificates, and</p>
                        <p>more. Ensure your students get a world-</p>
                        <p>class education every time so you’re free</p>
                        <p>to tackle your big picture goals.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tip