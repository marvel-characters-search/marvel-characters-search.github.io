import React from 'react';
import { Col } from 'antd';

function ActivityOfTheCharacter(props) {
  let title = props.title ? props.title : '';
  let activitiesList = props.activity.map((activity, i) => <li key={i}>{activity.name}</li>);

  return (
    <Col span={6}>
      <h2>{title}</h2>
      <ul>
        {activitiesList}
      </ul>
    </Col>
  )
};

export default ActivityOfTheCharacter;