import React from 'react'
import './ListingItem.css'
import { Link } from 'react-router-dom'

function ListingItem() {
  return (
    <div className="listing-item">
        <img className='listing-image' src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <div className='listing-details'>
          <div className="listing-categories">
            <span className="listing-category">Buy</span>
            <span className="listing-category">Sell</span>
          </div>
          <Link to="/detail/1"><span className="listing-title">Awesome Property.</span></Link>
          <hr />
          <span className="listing-time">2 days ago.</span>
        </div>
        <p className='listing-description'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sed ipsum culpa dignissimos sequi quae ex! Consectetur, nemo aliquam delectus fugiat unde fuga alias nihil nesciunt, ab veritatis, sequi ad?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sed ipsum culpa dignissimos sequi quae ex! Consectetur, nemo aliquam delectus fugiat unde fuga alias nihil nesciunt, ab veritatis, sequi ad?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sed ipsum culpa dignissimos sequi quae ex! Consectetur, nemo aliquam delectus fugiat unde fuga alias nihil nesciunt, ab veritatis, sequi ad?
        </p>
    </div>
  )
}

export default ListingItem