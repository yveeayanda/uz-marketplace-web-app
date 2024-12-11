import React from 'react'
import "./Navbar.css"
import UZ_logo from "../../assets/UZ_logo.jpg"
import navProfile from "../../assets/nav-profile.svg"

const Navbar = () => {
  return (
    <div className="navbar">
        <div className='logo'>
        <img src={UZ_logo} alt="" className="nav-logo" />
        <h1>Marketplace</h1>

        </div>
        <img src={navProfile} alt="" className="nav-profile"/>
    </div>
  )
}

export default Navbar