import React from 'react';
import { Container, Button, TextInput, TextArea, Icon } from 'nes-react';

const Search = props => {
  return (
    <Container title='Search User'>
      <TextInput
        label='Search'
        placeholder='Search User..'
        value={TextArea}
        onChange={e => this.props.setState({ textInput: e.target.value })}
      />
      <Button primary>Submit{Icon.github}</Button>
    </Container>
  );
};

export default Search;
