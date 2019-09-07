import React from 'react';
import { Container, Button, TextInput, Icon } from 'nes-react';

import Axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: ''
    };
  }

  handleChange = e => {
    this.setState({
      userName: e.target.value
    });
    console.log(e.target.value);
  };

  fetchUser = e => {
    e.preventDefault();
    Axios.get(`https://api.github.com/users/${this.state.userName}`)
      .then(res => {
        console.log('fetch', this.state.userName);
        console.log('userName', res.data.login);
        this.setState({ userName: res.data.login });
        console.log('fetched', this.state.userName);
      })
      .catch(err => {
        console.log(this.state);
        console.error('Error', err);
      });
  };

  render() {
    return (
      <Container title='Search User'>
        <TextInput
          label='Search'
          placeholder='Search User..(not working yet )'
          onChange={this.handleChange}
        />
        <Button primary onClick={this.fetchUser}>
          Submit
          <Icon icon='github' />
        </Button>
        <h1>{this.props.userName}</h1>
      </Container>
    );
  }
}

export default Search;
