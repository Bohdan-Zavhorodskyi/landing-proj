import React from "react";
import {
  Link
} from "react-router-dom";
import { Select, Menu } from 'antd';

const { Option } = Select;

const Header = () => {


  return (
    <div className='nav-wrapper'>
      <Menu mode="horizontal">
        <Menu.Item key="index">
          <Link to="/">На главную</Link>
        </Menu.Item>
        <Menu.Item key="portfolio">
          <Link to="/portfolio">Портфолио</Link>
        </Menu.Item>
        <Menu.Item>
          <Select defaultValue="uk" style={{ width: 120 }}>
            <Option value="uk">Українська</Option>
            <Option value="rus">Русский</Option>
            <Option value="en">English</Option>
          </Select>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Header;
