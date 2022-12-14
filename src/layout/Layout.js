import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

export default function Layout() {
  const navigate = useNavigate();

  return (
    <div>
      <Menu
        mode="horizontal"
        defaultSelectedKeys={["/"]}
        items={[
          { label: "Home Page", key: "/" },
          { label: "About Page", key: "/about" },
          { label: "Done Page", key: "/done" },
          { label: "404 Page", key: "/*" },
        ]}
        onClick={({ key }) => {
          navigate(key);
        }}
      ></Menu>
      <Outlet/>
    </div>
  );
}
