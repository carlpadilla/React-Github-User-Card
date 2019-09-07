import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import { Container, Icon, Sprite, ControllerIcon } from 'nes-react';
import GitHubButton from 'react-github-btn';

const Cards = ({ userInfo }) => (
  <div>
    <Grid>
      <Grid.Column width={6}>
        <Image className='profile-img' src={userInfo.avatar_url} />
        <a href={userInfo.html_url}>
          <Icon className='icons' icon='github' style={{ margin: '5px' }} />
        </a>
        <a href='https://www.linkedin.com/in/carl-padilla-2a85b294/'>
          <Icon className='icons' icon='linkedin' style={{ margin: '5px' }} />
        </a>
        <a href='https://www.twitter.com/developer_carl'>
          <Icon className='icons' icon='twitter' style={{ margin: '5px' }} />
        </a>
        <a href='https://www.psnprofiles.com/NISMO240'>
          <ControllerIcon style={{ margin: '5px' }} controller='nes' />
        </a>
        <GitHubButton
          href='https://github.com/carlpadilla'
          data-show-count='true'
          aria-label='Follow @carlpadilla on GitHub'
        >
          Follow @carlpadilla
        </GitHubButton>
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
