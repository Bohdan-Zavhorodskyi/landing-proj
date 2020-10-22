import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Layout } from 'antd';

import OurProduct from "./Components/OurProduct";
import AboutUs from "./Components/AboutUs";
import FeedbackForm from "./Components/FeedbackForm";
import Portfolio from './Components/Portfolio';
import HeaderNav from './Components/Header';

import 'antd/dist/antd.css';
import "./App.css";

const { Header, Footer, Content } = Layout;

const App = () => {
  return (
    <Router>
      <Layout>
        <Header>
          <HeaderNav />
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
}

export default App;
