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

const Cards = props => (
  <div>
    <Grid>
      <Grid.Column width={6}>
        <Image className='profile-img' src={props.userInfo.avatar_url} />
      </Grid.Column>
      <Grid.Column width={8}>
        <Container className='bio' title='Github Bio'>
          Name: {props.userInfo.name}
          <br />
          Location:{props.userInfo.location}
          <br />
          Bio: {props.userInfo.bio}
          <div style={{ display: 'flex' }}>
            <Sprite sprite='squirtle' />
          </div>
        </Container>
      </Grid.Column>
    </Grid>
  </div>
);

export default Cards;
