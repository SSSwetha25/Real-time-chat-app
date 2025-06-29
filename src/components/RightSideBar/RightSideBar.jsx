import React from 'react'
import './RightSideBar.css'
import assets from '../../assets/assets'
const RightSideBar = () => {
  return (
    <div className='rs'>
      <div className="rs-profile">
        <img src={assets.profile_img} width="100px" alt="" />
        <h3>Alison Swift<img src={assets.green_dot} className='dot' alt="" /></h3>
        <p>Hey there I'm Alison swift </p>
        </div>
        <hr/>
        <div className="rs-media">
          <p>Media</p>
          <div>
            <img src={assets.pic} alt="" />
            <img src={assets.pic} alt="" />
            <img src={assets.pic} alt="" />
            <img src={assets.pic} alt="" />
            <img src={assets.pic} alt="" />
            <img src={assets.pic} alt="" />
          </div>
        </div>
        <button>Logout</button>
        RightSideBar</div>
  )
}

export default RightSideBar