import React from 'react';
import { signUrl } from '../urlSigner';
import CharacterCard from '../components/CharacterCard';
import { Row, Col } from 'antd';
const style = { background: '#0092ff', padding: '0 0' };

class CharactersContainer extends React.Component {
  state = {
    characters: [],
  }

  componentDidMount() {
    let url = signUrl(`http://gateway.marvel.com/v1/public/characters?limit=18`);
    fetch(url)
      .then(res => res.json())
      .then(res => this.setState({
        characters: res.data.results,
      }))
      .catch(err => console.log(err))
  }

  render() {
    let characters = this.state ? this.state.characters.map((character) => {
      return <Col style={style} span={4}><CharacterCard character={character} /></Col>
    }) : [];
      
    return (
      <>
        <h1>Container</h1>
        <div style={{ overflow: "hidden" }}> {/* https://github.com/ant-design/ant-design/issues/10144 */}
          <Row gutter={16}>
            { characters }
          </Row>
        </div>
      </>
    )
  }
}

export default CharactersContainer;
