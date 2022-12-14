import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
        <nav>
            <Link to="/">Homepage </Link>
            <Link to="/about">Aboutpage </Link>
            <Link to="/donelist">Donepage </Link>
        </nav>
        <div className='content'> 
            <Outlet/>
        </div>
    </div>
  )
}
