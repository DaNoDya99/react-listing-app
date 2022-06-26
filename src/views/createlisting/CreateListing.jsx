import React from 'react'
import './CreateListing.css'

function CreateListing() {
    return (
        <div className='create-listing'>
            <form action="" className="create-listing-form" method='post'>
                <div className="create-listing-form-group">
                    <input className='create-listing-text' type="text" placeholder='Property Title' autoFocus={true} />
                    <label className='create-listing-image-upload' htmlFor="listing-image">
                        <i className='fas fa-upload upload-icon'></i>
                    </label>
                    <input type="file" id='listing-image' style={{ display: "none" }} />
                </div>
                <div className="create-listing-form-group">
                    <textarea placeholder='Property Description' className='create-listing-text create-listing-description'></textarea>
                </div>
            </form>
            <button className='create-listing-button'>Submit</button>
        </div>
    )
}

export default CreateListing