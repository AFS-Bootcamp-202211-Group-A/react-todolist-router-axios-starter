import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  AppstoreOutlined,
  CheckSquareOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";

export default function Layout() {
  const items = [
    {
      label: <Link to="/">Home</Link>,
      key: "home",
      icon: <AppstoreOutlined />,
    },
    {
      label: <Link to="/done">Done</Link>,
      key: "done",
      icon: <CheckSquareOutlined />,
    },
    {
      label: <Link to="/about">About</Link>,
      key: "about",
      icon: <QuestionCircleOutlined />,
    },
  ];
  const [current, setCurrent] = useState("home");
  const onClick = (event) => {
    setCurrent(event.key);
  };
  return (
    <div>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}
