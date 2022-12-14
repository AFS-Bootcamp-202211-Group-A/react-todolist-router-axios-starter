import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "antd/es/layout/layout";
import Menu from "antd/es/menu";
import { useNavigate } from "react-router-dom";

function Layout() {
  const navigate = useNavigate();
  return (
    <div>
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal"
          items={[
            { label: "Home Page", key: "/"},

            { label: "About Page", key: "/about" },

            { label: "Done Page", key: "/done" }
          ]}
          onClick={({ key }) => {
            navigate(key);
          }}
        ></Menu>
      </Header>
      <Outlet />
    </div>
  );
}

export default Layout;
