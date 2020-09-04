import React from 'react';
// import { signUrl } from '../urlSigner';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import { Row, Col } from 'antd';
const style = { padding: '8px 5px' };

function CharactersContainer(props) {
  let characters = props.characters ? props.characters.map((character) => {
    return (<Col key={character.id} style={style} span={4}>
      <CharacterCard key={character.id} character={character} />
    </Col>
  )}) : [];
    
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

export default CharactersContainer;
