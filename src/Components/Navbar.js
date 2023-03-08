import React, {useState} from 'react';
import logo from '../Images/logo.png';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  return (
    
        <nav className="navbar">
            
                <NavLink to='/' className='navbar-logo'>
                <img src={logo} alt="logo" className="logo"/>
                </NavLink>
                <NavLink to='/'  className='site-title'>
                    Random Team generators
                </NavLink>
                <NavLink to='/pokemon' style={({isActive})=>{return {color:isActive?'black': 'white'};}} className='navbar-content'>
                Pokemon Random Picker
                </NavLink>
                <NavLink to='/digimon' style={({isActive})=>{return {color:isActive?'black': 'white'};}} className='navbar-content'>
                Digimon Random Picker
                </NavLink>
                <NavLink to='/fireemblem' style={({isActive})=>{return {color:isActive?'black': 'white'};}} className='navbar-content'>
                Fire Emblem Random Picker
                </NavLink>
            
        </nav>
    
  )
}

export default Navbar