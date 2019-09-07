import React from 'react';
import './App.css';
import { Container } from 'nes-react';

import Axios from 'axios';

import Cards from './components/Cards.component';
import Followers from './components/Followers.component';
import Search from './components/Search.component';
import Repos from './components/Repos.component';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userInfo: {},
      followers: [],
      repos: [],
      userName: ''
    };
  }

  componentDidMount() {
    Axios.get('https://api.github.com/users/carlpadilla')
      .then(res => {
        // console.log('userinfo', res.data);
        this.setState({ userInfo: res.data });
      })
      .catch(err => console.error(err));

    Axios.get('https://api.github.com/users/carlpadilla/followers')
      .then(res => {
        // console.log('followers', res.data);
        this.setState({ followers: res.data });
      })
      .catch(err => console.error(err));

    Axios.get('https://api.github.com/users/carlpadilla/repos')
      .then(res => {
        // console.log('repos', res.data);
        this.setState({ repos: res.data });
      })
      .catch(err => console.error(err));
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('CDU');
    if (this.state.userInfo !== prevState.userInfo) {
      if (this.state.userName === 'carlpadilla') {
        Axios.get(`https://api.github.com/users/${this.state.userName}`)
          .then(res => this.setState({ userInfo: res.data }))
          .catch(err => console.log('error'));
      }
    }
  }

  fetchUser = e => {
    e.preventDefault();
    Axios.get(`https://api.github.com/users/${this.state.userName}`)
      .then(res => {
        console.log('userName', res.data.login);
        this.setState({ userName: res.data.login });
      })
      .catch(err => {
        console.log(this.state);
        console.error('Error', err);
      });
  };

  render() {
    console.log('fetch', this.state);
    return (
      <div>
        <h1 className='main-title'>
          <span className='main-title-span'>Github</span> Card Project
        </h1>
        <Container className='container'>
          <Cards userInfo={this.state.userInfo} />
        </Container>
        <Search fetchUser={this.fetchUser} />
        <Container title='Followers'>
          <Followers followers={this.state.followers} />
        </Container>
        <Repos repos={this.state.repos} />
      </div>
    );
  }
}

export default App;
