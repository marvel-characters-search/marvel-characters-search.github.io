import React from 'react';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import { Row, Col } from 'antd';

function CharactersContainer(props) {
  let characters = (props.characters || []).map((character) => {
    return (
      <Col
        xs={24} sm={12} md={8} lg={6} xl={4}
        key={character.id}
        style={{ padding: '8px 5px' }}
        >
          <CharacterCard key={character.id} character={character} />
      </Col>
  )});
    
  return (
    <div style={{ overflow: "hidden" }}> {/* https://github.com/ant-design/ant-design/issues/10144 */}
        <Row gutter={16} type="flex">
          { characters }
        </Row>
    </div>
  )
}

export default CharactersContainer;
