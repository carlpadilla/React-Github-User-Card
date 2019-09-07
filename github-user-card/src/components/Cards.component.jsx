import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import { Container, Icon, Sprite, ControllerIcon } from 'nes-react';

const Cards = ({ userInfo }) => (
  <div>
    <Grid>
      <Grid.Column width={6}>
        <Image className='profile-img' src={userInfo.avatar_url} />
        <a href={userInfo.html_url}>
          <Icon icon='github' />
        </a>
        <a href='https://www.linkedin.com/in/carl-padilla-2a85b294/'>
          <Icon icon='linkedin' />
        </a>
        <a href='https://www.twitter.com/developer_carl'>
          <Icon icon='twitter' />
        </a>
        <a href='https://www.psnprofiles.com/NISMO240'>
          <ControllerIcon controller='nes' />
        </a>
      </Grid.Column>
      <Grid.Column width={8}>
        <Container className='bio' title='Github Bio'>
          Name: {userInfo.name}
          <br />
          Location:{userInfo.location}
          <br />
          Bio: {userInfo.bio}
          <div style={{ display: 'flex' }}>
            <Sprite sprite='squirtle' />
          </div>
        </Container>
      </Grid.Column>
    </Grid>
  </div>
);

export default Cards;
