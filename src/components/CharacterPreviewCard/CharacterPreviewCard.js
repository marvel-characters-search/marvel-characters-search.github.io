import React from 'react';
import { Card } from 'antd';

function CharacterPreviewCard(props) {
  const { Meta } = Card;
  let imgPath = props.character ? props.character.thumbnail.path : '';
  let imgExtension = props.character ? props.character.thumbnail.extension : '';
  let name = props.character ? props.character.name : '';

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

export default CharacterPreviewCard;