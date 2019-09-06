import React from 'react';
import { Arwes, Image, Words, Heading } from 'arwes';
import Followers from './Followers.component';
const Cards = props => (
  <Arwes>
    <div>
      <h1>
        <Heading node='h1'>
          <Words animate>GitHub User Card Project</Words>
        </Heading>
      </h1>
      <Image
        style={{ margin: '0 auto', padding: 20, maxWidth: 400 }}
        animate
        resources={props.userInfo.avatar_url}
      >
        Name: {props.userInfo.name}
        <br />
        Location: {props.userInfo.location}
        <br />
        {props.userInfo.bio}
      </Image>
      <p>
        <Words animate>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Words>
      </p>
      <Followers followers={props.followers} />
    </div>
  </Arwes>
);

export default Cards;

//note to self use props.userInfo
