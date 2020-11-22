import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout, Spin, Space } from "antd";
import { useTranslation } from "react-i18next";

import OurProduct from "./Components/OurProduct";
import AboutUs from "./Components/AboutUs";
import FeedbackForm from "./Components/FeedbackForm";
import Portfolio from "./Components/Portfolio";
import HeaderNav from "./Components/Header";

import "antd/dist/antd.css";
import "./App.scss";

const { Header, Footer, Content } = Layout;

const App = () => {
  const { i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  i18n.on("initialized", () => {
    setIsLoading(false);
  });

  if (isLoading) {
    return (
      <Space>
        <Spin size="large" />
      </Space>
    );
  }

  return (
    <Router>
      <Layout>
        <Header>
          <HeaderNav changeLanguage={changeLanguage} />
        </Header>
        <Content>
          <Switch>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/">
              <OurProduct />
              <AboutUs />
              <FeedbackForm />
            </Route>
          </Switch>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Router>
  );
};

export default App;
