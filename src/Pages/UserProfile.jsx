import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Avatar from "../images/avatar15.jpg"
import { FaCheck, FaEdit } from 'react-icons/fa'

export const UserProfile = () => {

  const [avatar, setAvatar] = useState('')

  return (
    <section className="profile">
      <div className="container profile__container">
        <Link to={`/myposts/sdfsdf`} className='btn'>My Posts</Link>

        <div className='profile__details'>
          <div className="avatar__wrapper">
            <div className='profile__avatar'>
                <img src={Avatar} alt="" />
            </div>
            {/* From to update avatar */}
            <form className='avatar__form'>
              <input type="file" name='avatar' id='avatar' onChange={e=>{setAvatar(e.target.files[0])}} accept='png, jpg, jpeg'/>
              <label htmlFor="avatar"><FaEdit/></label>
            </form>
            <button className='profile__avatar-btn'><FaCheck/></button>
          </div>
        </div>
      </div>
    </section>
  )
}
