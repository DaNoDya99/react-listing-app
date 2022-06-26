import React from 'react'
import "./Sidebar.css"

function Sidebar() {
    return (
        <div className='sidebar-section'>
            <div className='sidebar-sub-section'>
                <span className='sidebar-title'>about me</span>
                <img className='sidebar-image' src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci minus consequuntur laudantium pariatur ut, quod ipsa distinctio? Ullam consequuntur, tempora atque fugiat maxime debitis odio voluptate aut? Maxime, totam beatae.</p>
            </div>

            <div className='sidebar-sub-section'>
                <span className='sidebar-title'>categories</span>
                <ul className="sidebar-categories">
                    <li className="sidebar-category">Buy</li>
                    <li className="sidebar-category">Sell</li>
                    <li className="sidebar-category">Rent</li>
                    <li className="sidebar-category">Recidential</li>
                    <li className="sidebar-category">B & B</li>
                    <li className="sidebar-category">Hotel</li>
                </ul>
            </div>

            <div className='sidebar-sub-section'>
                <span className="sidebar-title">follow us</span>
                <div className="sidebar-social-icons">
                    <i className="sidebar-social-icon fab fa-facebook"></i>
                    <i className="sidebar-social-icon fab fa-linkedin"></i>
                    <i className="sidebar-social-icon fab fa-instagram"></i>
                    <i className="sidebar-social-icon fab fa-twitter"></i>
                </div>
            </div>
        </div>
    )
}

export default Sidebar