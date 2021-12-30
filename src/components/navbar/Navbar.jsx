import React from 'react'
import logo from "../../assets/images/Logo.png";

const Navbar = () => {
    return (
        <div className='group flex mx-24 mt-5 items-center'>
            <div className=''>
                <img src={logo} alt="Nadet Logo" />
            </div>
            <div className='flex space-x-10 px-28 '>
                <p>How it works</p>
                <p>Products</p>
                <p>Marketplace</p>
                <p>FAQs</p>
                <p>Pricing</p>
            </div>
            <div className='flex flex-row space-x-5'>
                <p>Log In</p>
                <button className='box-border h-8 w-32 rounded-md bg-bcolor'>Get Started</button>
            </div>
        </div>
    )
}

export default Navbar
