import React from "react";
import { Layout } from "antd";

import OurProduct from "./Components/OurProduct";
import AboutUs from "./Components/AboutUs";
import FeedbackForm from "./Components/FeedbackForm";

import "./App.css";

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header>Header</Header>
      <Content>
        <OurProduct />
        <AboutUs />
        <FeedbackForm />
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
