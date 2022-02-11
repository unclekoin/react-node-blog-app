import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <div className="logo">
    <Link to="/" className="logo-link">
      <i className="bi bi-emoji-wink-fill logo-icon"></i>
    </Link>
  </div>
  )
}

export default Logo;