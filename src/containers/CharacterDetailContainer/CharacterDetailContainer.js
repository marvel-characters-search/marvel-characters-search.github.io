import React from 'react';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import { Col, Row, PageHeader } from 'antd';
import './CharactersDetailContainer.css';
import ActivityOfTheCharacter from '../../components/ActivityOfTheCharacter/ActivityOfTHeCharacter';


function CharacterDetailContainer(props) {
  const style = { padding: '40px' };

  if (props.character) {
    let character = props.character;
    let description = character.description ? character.description : "No description for this character :("

    return (
      <>
        <PageHeader
          className="site-page-header"
          onBack={props.renderPaginatedCharacters}
          // title="Back"
          subTitle="Main page"
        />
        {/* Photo and description of the character */}
        <Row style={style} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={4} >
            <CharacterCard key={character.id} character={character}/>
          </Col>
          <Col span={12} >
            <p>{description}</p>
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