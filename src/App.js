import React from 'react';
import CharactersModel from './model/CharactersModel';
import 'antd/dist/antd.css';
import './App.css';
import { Layout, Row, Col, Typography } from 'antd';
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
    this.renderInitialCharacterSelection()
  };

  showCharacterSelection = (characters) => {
    this.setState({
      selectedCharacter: '',
      characters: characters
    })
  };

  showSingleCharacter = (characterName) => {
    CharactersModel.getCharacterByName(characterName)
      .then(res => {
        this.setState({
          selectedCharacter: res.data.results[0]
        })
      })
  };

  // Render first N (currently: 18) characters
  renderInitialCharacterSelection = () => {
    CharactersModel.getInitalCharacterSet()
      .then(res => {
        this.showCharacterSelection(res.data.results)
      })
      .catch(err => console.log(err))
  };

  render() {
    const { Header, Content } = Layout;
    const { Title } = Typography;
    let displayedContainer;

    if (this.state.selectedCharacter !== '') {
      displayedContainer =
        <CharacterDetailContainer
          renderInitialCharacterSelection={this.renderInitialCharacterSelection}
          character={this.state.selectedCharacter}
        />
    } else {
      displayedContainer =
        <CharactersContainer
          characters={this.state.characters}
          showSingleCharacter={this.showSingleCharacter}
        />
    }

    return (
      <Layout className='layout'>
        <Header>
          <div className='logo'>
            <h1 style={{ color: 'white' }}>Marvel Characters</h1>
          </div>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Row span={24} align='center' style={{ padding: '20px 0' }}>
            <Title>Find your favorite Marvel Character</Title>
          </Row>
          <Row justify='center'>
            <Col span={24}>
              <Search
                showSingleCharacter={this.showSingleCharacter}
                showCharacterSelection={this.showCharacterSelection}
                renderInitialCharacterSelection={this.renderInitialCharacterSelection}
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