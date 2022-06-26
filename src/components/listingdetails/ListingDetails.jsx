import React from 'react'
import './ListingDetails.css'

function ListingDetails() {
  return (
    <div className='listing-detail'>
        <div className="listing-detail-content">
          <img className='listing-detail-image' src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <h1 className='listing-detail-title'>
            Awesome Property
            <div className="listing-detail-action">
              <i className='listing-detail-action-icon fas fa-edit'></i>
              <i className='listing-detail-action-icon fas fa-trash-alt'></i>
            </div>
          </h1>
          <div className="listing-datail-meta-info">
            <span className='listing-detail-author'>Author - <strong>John Doe</strong></span>
            <span className='listing-detail-time'>1 day ago</span>
          </div>
          <p className='listing-detail-description'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non praesentium obcaecati repellendus aliquid, inventore voluptates delectus recusandae deserunt exercitationem mollitia cupiditate ipsum ipsa deleniti iure minus ex? Impedit, labore earum?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non praesentium obcaecati repellendus aliquid, inventore voluptates delectus recusandae deserunt exercitationem mollitia cupiditate ipsum ipsa deleniti iure minus ex? Impedit, labore earum?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non praesentium obcaecati repellendus aliquid, inventore voluptates delectus recusandae deserunt exercitationem mollitia cupiditate ipsum ipsa deleniti iure minus ex? Impedit, labore earum?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non praesentium obcaecati repellendus aliquid, inventore voluptates delectus recusandae deserunt exercitationem mollitia cupiditate ipsum ipsa deleniti iure minus ex? Impedit, labore earum?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non praesentium obcaecati repellendus aliquid, inventore voluptates delectus recusandae deserunt exercitationem mollitia cupiditate ipsum ipsa deleniti iure minus ex? Impedit, labore earum?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non praesentium obcaecati repellendus aliquid, inventore voluptates delectus recusandae deserunt exercitationem mollitia cupiditate ipsum ipsa deleniti iure minus ex? Impedit, labore earum?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non praesentium obcaecati repellendus aliquid, inventore voluptates delectus recusandae deserunt exercitationem mollitia cupiditate ipsum ipsa deleniti iure minus ex? Impedit, labore earum?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non praesentium obcaecati repellendus aliquid, inventore voluptates delectus recusandae deserunt exercitationem mollitia cupiditate ipsum ipsa deleniti iure minus ex? Impedit, labore earum?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non praesentium obcaecati repellendus aliquid, inventore voluptates delectus recusandae deserunt exercitationem mollitia cupiditate ipsum ipsa deleniti iure minus ex? Impedit, labore earum?
          </p>
        </div>
    </div>
  )
}

export default ListingDetails