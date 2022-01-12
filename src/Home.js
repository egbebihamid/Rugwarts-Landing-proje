import React from 'react'
import Tip from './Tip'
import Need from './Need'
import Online from './Online'
import Student from './Student'
import Success from './Success'
import Gap from './Gap'
import Navbar from './Navbar'


const Home = () => {
    return (
        <div>
            <Navbar/>
            <Tip/>
            <Need/>
            <Online/>
            <Student/>
            <Success/>
            <Gap/>
        </div>
    )
}

export default Home