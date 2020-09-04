import React from 'react';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import { Col, Row } from 'antd';
import './CharactersDetailContainer.css';
import ActivityOfTheCharacter from '../../components/ActivityOfTheCharacter/ActivityOfTHeCharacter';


function CharacterDetailContainer(props) {
  const style = { padding: '40px' };

  if (props.character) {
    let character = props.character;
    let description = character.description ? character.description : "No description for this character :("

    return (
      <>
        {/* Photo and description of the character */}
        <Row style={style} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={4} >
            <CharacterCard key={character.id} character={character}/>
          </Col>
          <Col span={12} >
            <p>{description}</p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </Col>
        </Row>

        {/* Displaying detailed info where we can see this character */}
        <Row>
          <ActivityOfTheCharacter title={'Comics'} activity={character.comics.items} />
          <ActivityOfTheCharacter title={'Events'} activity={character.events.items} />
          <ActivityOfTheCharacter title={'Series'} activity={character.series.items} />
          <ActivityOfTheCharacter title={'Comics'} activity={character.stories.items} />
        </Row>
      </>
    )
  } else {
    return <Row />
  }
};

export default CharacterDetailContainer;