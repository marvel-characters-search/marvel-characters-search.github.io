import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

function CharacterCard(props) {
  let imgPath = props.character ? props.character.thumbnail.path : "";
  let imgExtension = props.character ? props.character.thumbnail.extension : "";
  let name = props.character ? props.character.name : "";

  return (
    <Card
      hoverable
      cover={<img alt={name}
        src={`${imgPath}/portrait_medium.${imgExtension}`} />}
    >
      <Meta title={name} />
    </Card>
  )
};

export default CharacterCard;