import React from "react"
import {Link, Outlet} from "react-router-dom";
import { Breadcrumb,  Menu} from 'antd';

export default function Layout() {
  return (
    <div>
        <nav>
        <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item><Link to="/">Homepage </Link></Breadcrumb.Item>
        <Breadcrumb.Item><Link to="/about">About Page </Link></Breadcrumb.Item>
        <Breadcrumb.Item><Link to="/done">Done Page </Link></Breadcrumb.Item>
        </Breadcrumb>
        </nav>
        <div className="content">
            <Outlet/>
        </div>
    </div>
  )
}
