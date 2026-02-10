import React from 'react'
import { NavLink } from 'react-router'
const Navbar = () => {
    return (
        <div className='h-fit py-5 px-10 flex justify-between bg-gray-100'>
            {/* Left Side */}
            <div className='flex items-center gap-5'>
                <NavLink to={'/'}><p>Home</p></NavLink>
                <NavLink to={'/add-crop'}><p>Add New Crop</p></NavLink>
            </div>
            {/* Right Side */}
            <div className='flex items-center gap-5'>
                <NavLink to={"/login"}><p>Signup</p></NavLink>
                <NavLink to={"/login"}><p>Login</p></NavLink>
            </div>
        </div>
    )
}

export default Navbar