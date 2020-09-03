import React from 'react';
import './App.css';
import "antd/dist/antd.css";
import { Layout, Row, Col } from 'antd';



import CharactersContainer from './containers/CharactersContainer';
import Search from './components/Search';

function App() {
  const { Header, Content, Footer } = Layout;
  return (
    // <div className="App">
    //   <Search />
    //   {/* <CharactersContainer /> */}
    // </div>

    <Layout className="layout">
      <Header />
      <Content style={{ padding: '0 50px'}}>
        <Row justify="center">
          <Col span={12} offset={6}>
            <Search />
          </Col>
          <Col span={24}>
            <CharactersContainer />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default App;
