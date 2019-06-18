import React from "react";
import { Menu } from "antd";

const Nav = () => {
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={["2"]}
      style={{ lineHeight: "64px" }}
    >
      <Menu.Item key="1">nav 1</Menu.Item>
      <Menu.Item key="2">nav 2</Menu.Item>
      {/* <Menu.Item key="3">
        <Cart />
      </Menu.Item> */}
    </Menu>
  );
};

export default Nav;
