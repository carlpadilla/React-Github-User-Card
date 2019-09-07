import React from 'react';

import { Container } from 'nes-react';

const Repos = ({ repos }) => {
  return (
    <Container title='Repos'>
      {repos.map(repo => (
        <a href={repo.html_url}>
          <p key={repo.id}>{repo.full_name}</p>
        </a>
      ))}
    </Container>
  );
};
export default Repos;
