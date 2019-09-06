import React from 'react';

const Cards = props => {
  console.log('test', props);
  return (
    <div>
      <h1>{props.userInfo.name}</h1>
      <h1>{props.userInfo.bio}</h1>
    </div>
  );
};

export default Cards;
