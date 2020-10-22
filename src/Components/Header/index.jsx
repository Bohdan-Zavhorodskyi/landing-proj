import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Select, Menu } from "antd";
import { useTranslation } from "react-i18next";

import useStyles from "./styles";

const { Option } = Select;

const HeaderNav = ({ changeLanguage }) => {
  const { t } = useTranslation();
  const classes = useStyles();
  const [optionValue, setOptionValue] = useState("uk");

  const setNewValue = (value) => {
    setOptionValue(value);
    changeLanguage(value);
  };

  return (
    <div className={classes.root}>
      <Menu mode="horizontal">
        <Menu.Item key="index">
          <Link to="/">{t("navigation.main")}</Link>
        </Menu.Item>
        <Menu.Item key="portfolio">
          <Link to="/portfolio">{t("navigation.portfolio")}</Link>
        </Menu.Item>
        <Menu.Item>
          <Select
            value={optionValue}
            style={{ width: 120 }}
            onChange={setNewValue}
          >
            <Option value="uk">Українська</Option>
            <Option value="ru">Русский</Option>
            <Option value="en">English</Option>
          </Select>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default HeaderNav;
