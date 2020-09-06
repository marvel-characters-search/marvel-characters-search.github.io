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
    this.renderPaginatedCharacters()
  };

  // If needed to render multiple characters, sets these character to state and trigers render
  setMultipleOptions = (characters) => {
    this.setState({
      selectedCharacter: '',
      characters: characters
    })
  };

  // Sets a selected character to state and trigers render for displaying character's details 
  renderSelectedCharacter = (characterName) => {
    CharactersModel.getSelectedCharacter(characterName)
      .then(res => {
        this.setState({
          selectedCharacter: res.data.results[0]
        })
      })
  };

  // Gets first N (currently: limit=18)characters from database and passes to a function to triger render
  renderPaginatedCharacters = () => {
    CharactersModel.getPaginatedCharacters()
      .then(res => {
        this.setMultipleOptions(res.data.results)
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