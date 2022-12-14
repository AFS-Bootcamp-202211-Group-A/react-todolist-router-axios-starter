import React from 'react'
import {Link, Outlet} from 'react-router-dom'

function Layout() {
  return (
    <div>
        <nav>
            <Link to="/">Homepage</Link>
            <Link to="/about">About Page</Link>
            <Link to="/done">Done Page</Link>
        </nav>
        <Outlet />
    </div>
  )
}

export default Layout