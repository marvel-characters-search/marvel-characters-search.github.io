import React from 'react';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import { Col, Row, PageHeader } from 'antd';
import './CharactersDetailContainer.css';
import ActivityOfTheCharacter from '../../components/ActivityOfTheCharacter/ActivityOfTHeCharacter';

let style = { padding: '10px' }

function CharacterDetailContainer(props) {
  if (props.character) {
    let character = props.character;

    return (
      <>
        <PageHeader
          className="site-page-header"
          onBack={props.renderPaginatedCharacters}
          subTitle="Main page"
        />
        <Row gutter={16}>
          <Col xs={24} sm={8} md={6} lg={6} xl={6} style={style}>
            <CharacterCard key={character.id} character={character}/>
          </Col>
          <Col xs={24} sm={8} md={8} lg={12} xl={12} style={style}>
            <p>{character.description ? character.description : "No description for this character :("}</p>
          </Col>
        </Row>

        <Row type="flex" style={style}>
          <ActivityOfTheCharacter title={'Comics'} activity={character.comics.items} />
          <ActivityOfTheCharacter title={'Events'} activity={character.events.items} />
          <ActivityOfTheCharacter title={'Series'} activity={character.series.items} />
          <ActivityOfTheCharacter title={'Stories'} activity={character.stories.items} />
        </Row>
      </>
    )
  } else {
    return <Row />
  }
};

export default CharacterDetailContainer;