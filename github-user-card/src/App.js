import React from 'react';
import './App.css';
import { ThemeProvider, createTheme, Arwes } from 'arwes';

import Axios from 'axios';

import Cards from './components/Cards.component';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userInfo: {},
      followers: [],
      repos: []
    };
  }

  componentDidMount() {
    console.log('CDU');
    Axios.get('https://api.github.com/users/carlpadilla')
      .then(res => {
        console.log('userinfo', res.data);
        this.setState({ userInfo: res.data });
      })
      .catch(err => console.error(err));

    Axios.get('https://api.github.com/users/carlpadilla/followers')
      .then(res => {
        console.log('followers', res.data);
        this.setState({ followers: res.data });
      })
      .catch(err => console.error(err));

    Axios.get('https://api.github.com/users/carlpadilla/repos')
      .then(res => {
        console.log('repos', res.data);
        this.setState({ repos: res.data });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <ThemeProvider theme={createTheme()}>
        <Arwes>
          <Cards
            userInfo={this.state.userInfo}
            repos={this.state.repos}
            followers={this.state.followers}
          />
        </Arwes>
      </ThemeProvider>
    );
  }
}

export default App;
