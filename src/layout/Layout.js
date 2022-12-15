import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Menu } from "antd";

const items = [
  {
    label: "Homepage",
    key: "Homepage",
    label: <Link to="/">Homepage</Link>,
  },
  {
    label: "About Page",
    key: "About Page",
    label: <Link to="/about">About Page</Link>,
  },
  {
    label: "Done Page",
    key: "Done Page",
    label: <Link to="/done">Done Page</Link>,
  },
];

export default function Layout() {
  const [current, setCurrent] = useState("Homepage");
  const onClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <div>
      <nav>
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
      </nav>

      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}
