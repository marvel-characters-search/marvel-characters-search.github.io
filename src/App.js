import React from 'react';
import { signUrl } from './urlSigner';
import './App.css';
import "antd/dist/antd.css";
import { Layout, Row, Col } from 'antd';
import CharactersContainer from './containers/CharactersContainer';
import Search from './components/Search';

class App extends React.Component {
  state = {
    characters: [],
  };

  componentDidMount() {
    let url = signUrl(`http://gateway.marvel.com/v1/public/characters?limit=18`);
    fetch(url)
      .then(res => res.json())
      .then(res => this.setState({
        characters: res.data.results,
      }))
      .catch(err => console.log(err))
  };

  render() {
    const { Header, Content } = Layout;
    return (
      <Layout className="layout">
        <Header />
        <Content style={{ padding: '0 50px' }}>
          <Row justify="center">
            <Col span={12}>
              <Search />
            </Col>
            <Col span={24}>
              <CharactersContainer characters={this.state.characters}/>
            </Col>
          </Row>
        </Content>
      </Layout>
    );
  };
};

export default App;
