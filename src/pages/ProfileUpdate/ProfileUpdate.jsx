import React from 'react'
import './ProfileUpdate.css'
import assets from '../../assets/assets'
const ProfileUpdate = () => {
  return (
    <div className='profile'>
      <div className="profile-container">
        <form>
          <h3>Profile details</h3>
          <label htmlFor='avatar'>
            <input type="file" id="avatar" accept='.png, .jpg, .jpeg' hidden/>
            <img src={assets.avatar_icon} alt="" />
            upload profile image

          </label>
          <input type="text" placeholder='Your Name' required />
          <textarea placeholder='Add profile bio' required ></textarea>
          <button type="submit">Save</button>
        </form>
        <img className='profile-pic' src={assets.logo} alt="" />
      </div>
    </div>
  )
}

export default ProfileUpdate