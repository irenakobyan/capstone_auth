import './App.css';
import React, {Component} from 'react';
import Main from './container/Main/Main';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';

axios.defaults.withCredentials = true;

class App extends Component {
  render() {
    return(
  <BrowserRouter>
    <div>
      <Main />
    </div>
  </BrowserRouter>
  );
  }
}

export default App;
