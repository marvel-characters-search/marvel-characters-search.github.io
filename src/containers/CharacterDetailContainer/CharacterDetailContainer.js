import React from 'react';
import CharacterPreviewCard from '../../components/CharacterPreviewCard/CharacterPreviewCard';
import { Col, Row, PageHeader } from 'antd';
import './CharactersDetailContainer.css';
import CharacterDetail from '../../components/CharacterDetail/CharacterDetail';

function CharacterDetailContainer(props) {
  let style = { padding: '10px' };
  if (props.character) {
    let character = props.character;

    return (
      <>
        <PageHeader
          className='site-page-header'
          onBack={props.renderInitialCharacterSelection}
          subTitle='Main page'
        />
        <Row gutter={16}>
          {/* Row for image and description */}
          <Col xs={24} sm={8} md={6} lg={4} xl={4}
            style={style}
          >
            <CharacterPreviewCard key={character.id} character={character} />
          </Col>
          <Col xs={24} sm={8} md={8} lg={12} xl={12}
            style={style}
          >
            <p>{character.description || 'No description for this character :('}</p>
          </Col>
        </Row>

        <Row type='flex' style={style}>
          {/* Row with info about comics/series/events/strories with this character */}
          <CharacterDetail title={'Comics'} activity={character.comics.items} />
          <CharacterDetail title={'Events'} activity={character.events.items} />
          <CharacterDetail title={'Series'} activity={character.series.items} />
          <CharacterDetail title={'Stories'} activity={character.stories.items} />
        </Row>
      </>
    )
  } else {
    // If character was not passed to the page
    return <Row />
  }
};

export default CharacterDetailContainer;