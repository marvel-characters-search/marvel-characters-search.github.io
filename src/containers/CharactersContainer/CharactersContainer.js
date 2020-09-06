import React from 'react';
import CharacterPreviewCard from '../../components/CharacterPreviewCard/CharacterPreviewCard';
import { Row, Col } from 'antd';

// Component displays multiple cards on the page
function CharacterGridContainer(props) {
  let style = { overflow: 'hidden' };
  let characters = (props.characters || []).map((character) => {
    return (
      <Col
        onClick={() => props.showSingleCharacter(character.name)}
        xs={24} sm={12} md={8} lg={6} xl={4}
        key={character.id}
        style={{ padding: '8px 5px' }}
      >
        <CharacterPreviewCard key={character.id} character={character} />
      </Col>
    )
  });

  return (
    <div style={style}> {/* https://github.com/ant-design/ant-design/issues/10144 */}
      <Row gutter={16} type='flex'>
        {characters}
      </Row>
    </div>
  )
};

export default CharacterGridContainer;
