import React from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";

import Grid from "./components/grid";
import Nav from "./components/navbar";

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header>
          <Nav />
        </Header>
        <Content>
          <Grid />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
