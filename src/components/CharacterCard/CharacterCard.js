import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

function CharacterCard(props) {
  return (
    <Card
      hoverable
      cover={<img alt={props.character.name}
      src={`${props.character.thumbnail.path}/portrait_medium.${props.character.thumbnail.extension}`} />}
    >
      <Meta title={props.character.name} />
    </Card>
  )
};

export default CharacterCard;