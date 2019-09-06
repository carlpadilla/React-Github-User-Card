import React from 'react';
import './App.css';

import Axios from 'axios';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      userInfo: {},
      followers: {},
      repos: {}
    };
  }

  componentDidMount() {
    console.log('CDU');
    Axios.get('https://api.github.com/users/carlpadilla')
      .then(res => {
        console.log('userinfo', res);
        this.setState({ userInfo: res.data });
      })
      .catch(err => console.error(err));

    Axios.get('https://api.github.com/users/carlpadilla/followers')
      .then(res => {
        console.log('followers', res);
        this.setState({ followers: res });
      })
      .catch(err => console.error(err));

    Axios.get('https://api.github.com/users/carlpadilla/repos')
      .then(res => {
        console.log('repos', res);
        this.setState({ repos: res });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className='App'>
        <h1>Github Cards</h1>
        <h2>{this.state.userInfo.login}</h2>
      </div>
    );
  }
}

export default App;
