import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer>
      <ul className='footer__catergories'>
        <li><Link to="/">Agriculture</Link></li>
        <li><Link to="/">Business</Link></li>
        <li><Link to="/">Education</Link></li>
        <li><Link to="/">Entertainment</Link></li>
        <li><Link to="/">Art</Link></li>
        <li><Link to="/">Investment</Link></li>
        <li><Link to="/">Uncatergorized</Link></li>
        <li><Link to="/">Weather</Link></li>
      </ul>
      <div className='footer__copyright'>
        <small>All right Reserved &copy; Copyright, Rishi</small>
      </div>
    </footer>
  )
}
