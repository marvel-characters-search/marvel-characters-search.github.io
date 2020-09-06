import React from 'react';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import { Col, Row, PageHeader } from 'antd';
import './CharactersDetailContainer.css';
import ActivityOfTheCharacter from '../../components/ActivityOfTheCharacter/ActivityOfTHeCharacter';

function CharacterDetailContainer(props) {
  let style = { padding: '10px' };
  if (props.character) {
    let character = props.character;

    return (
      <>
        <PageHeader
          className='site-page-header'
          onBack={props.renderPaginatedCharacters}
          subTitle='Main page'
        />
        <Row gutter={16}>
          {/* Row for image and description */}
          <Col xs={24} sm={8} md={6} lg={4} xl={4}
            style={style}
          >
            <CharacterCard key={character.id} character={character}/>
          </Col>
          <Col xs={24} sm={8} md={8} lg={12} xl={12}
            style={style}
          >
            <p>{character.description || 'No description for this character :('}</p>
          </Col>
        </Row>

        <Row type='flex' style={style}>
          {/* Row with info about comics/series/events/strories with this character */}
          <ActivityOfTheCharacter title={'Comics'} activity={character.comics.items} />
          <ActivityOfTheCharacter title={'Events'} activity={character.events.items} />
          <ActivityOfTheCharacter title={'Series'} activity={character.series.items} />
          <ActivityOfTheCharacter title={'Stories'} activity={character.stories.items} />
        </Row>
      </>
    )
  } else {
    // If character was not passed to the page
    return <Row />
  }
};

export default CharacterDetailContainer;