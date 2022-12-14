import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/done">Done</Link>
      </nav>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}
