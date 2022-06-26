import React from 'react'
import ListingDetails from '../../components/listingdetails/ListingDetails'
import Sidebar from '../../components/sidebar/Sidebar'
import './Details.css'

function Details() {
  return (
    <div className='detail-page'>
        <ListingDetails />
        <Sidebar />
    </div>
  )
}

export default Details