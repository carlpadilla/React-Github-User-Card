import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import {
  Container,
  Button,
  Radios,
  Checkbox,
  TextInput,
  TextArea,
  Avatar,
  Balloon,
  List,
  Table,
  Progress,
  Icon,
  Sprite,
  ControllerIcon
} from 'nes-react';

import { Row, Col } from 'react-simple-flex-grid';
import 'react-simple-flex-grid/lib/main.css';

const Followers = props => (
  <div>
    <Grid>
      <Grid.Column width={16}>
        <Row gutter={40}>
          {props.followers.map(follower => (
            <Col
              key={follower.id}
              xs={{ span: 6 }}
              sm={{ span: 4 }}
              md={{ span: 3 }}
              lg={{ span: 2 }}
              xl={{ span: 1 }}
            >
              <Image
                key={follower.id}
                src={`${follower.avatar_url}.jpg`}
                width='100%'
              />
              <p>{follower.login}</p>
            </Col>
          ))}
        </Row>
      </Grid.Column>
    </Grid>
  </div>
);

export default Followers;
