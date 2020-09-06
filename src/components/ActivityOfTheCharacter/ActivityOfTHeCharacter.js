import React from 'react';
import { Col } from 'antd';

// Component displays title (comics/events/series/stories) and its content
function ActivityOfTheCharacter(props) {
  let title = props.title ? props.title : '';
  let activitiesList = props.activity.map((activity, i) => {
    return <li key={i}>{activity.name}</li>
  });

  return (
    <Col xs={24} sm={12} md={8} lg={6} xl={6}
      gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
    >
      <h2>{title}</h2>
      <ul>
        {activitiesList}
      </ul>
    </Col>
  )
};

export default ActivityOfTheCharacter;