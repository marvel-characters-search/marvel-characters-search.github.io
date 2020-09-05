import React from 'react';
import CharactersModel from './model/CharactersModel';
import "antd/dist/antd.css";
import './App.css';
import { Layout, Row, Col } from 'antd';
import CharactersContainer from './containers/CharactersContainer/CharactersContainer';
import Search from './components/Search/Search';
import CharacterDetailContainer from './containers/CharacterDetailContainer/CharacterDetailContainer';

class App extends React.Component {
  state = {
    selectedCharacter: '',
    characters: [],
    options: [],
  };

  componentDidMount() {
    this.renderPaginatedCharacters()
  };

  setMultipleOptions = (characters) => {
    this.setState({
      selectedCharacter: '',
      characters: characters
    })
  };

  renderSelectedCharacter = (characterName) => {
    CharactersModel.getSelectedCharacter(characterName)
      .then(res => {
        this.setState({
          selectedCharacter: res.data.results[0]
        })
      })
  };

  renderPaginatedCharacters = () => {
    CharactersModel.getPaginatedCharacters()
      .then(res => {
        this.setMultipleOptions(res.data.results)
      })
      .catch(err => console.log(err))
  };

  render() {
    const { Header, Content } = Layout;
    let displayedContainer;

    if (this.state.selectedCharacter !== '') {
      displayedContainer =
        <CharacterDetailContainer
          renderPaginatedCharacters={this.renderPaginatedCharacters}
          character={this.state.selectedCharacter}
        />
    } else {
      displayedContainer =
        <CharactersContainer
          characters={this.state.characters}
          renderSelectedCharacter={this.renderSelectedCharacter}
        />
    }

    return (
      <Layout className="layout">
        <Header>
          <div className="logo">
            <h1 style={{ color: 'white' }}>Marvel Characters</h1>
          </div>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Row justify="center">
            <Col span={24}>
              <Search
                renderSelectedCharacter={this.renderSelectedCharacter}
                setMultipleOptions={this.setMultipleOptions}
                renderPaginatedCharacters={this.renderPaginatedCharacters}
              />
            </Col>
            <Col span={24}>
              {displayedContainer}
            </Col>
          </Row>
        </Content>
      </Layout>
    );
  };
};

export default App;