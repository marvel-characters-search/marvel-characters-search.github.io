import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;

function CharacterCard(props) {
  console.log(props.character)
  return (
    <Card
      hoverable
      cover={<img alt="example"
      src={`${props.character.thumbnail.path}/portrait_medium.${props.character.thumbnail.extension}`} />}
    >
      <Meta title={props.character.name} />
    </Card>
  )
}

export default CharacterCard;