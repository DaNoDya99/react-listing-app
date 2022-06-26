import React from 'react'
import './Topbar.css'
import { NavLink } from 'react-router-dom'

function Topbar() {
  return (
    <div className='topbar'>
        <div className='topbar-left'>
            <i className = "topbar-social fab fa-instagram"></i>
            <i className = "topbar-social fab fa-facebook"></i>
            <i className = "topbar-social fab fa-linkedin"></i>
            <i className = "topbar-social fab fa-twitter"></i>
        </div>
        <div className='topbar-center'>
            <ul className='topbar-list'>
                <li className='topbar-list-item'>
                    <NavLink to = "/">HOME</NavLink> 
                </li>
                <li className='topbar-list-item'>
                    ABOUT
                </li>
                <li className='topbar-list-item'>
                    CONTACT
                </li>
                <li className='topbar-list-item'>
                <NavLink to = "/create">CREATE PROPERTY</NavLink> 
                </li>
                <li className='topbar-list-item'>
                    LOGOUT
                </li>
            </ul>
        </div>
        <div className='topbar-right'>
            <img className='topbar-profile' src='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
            <i className='topbar-search fas fa-search'></i>
        </div>
    </div>
  )
}

export default Topbar