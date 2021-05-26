import React, {Component} from 'react';
import NavigationItems from '../../components/Navigation/NavigationItems/NavigationItems';
import PartnerItems from '../../components/Partners/PartnerItems';
import MissionItems from '../../components/Mission/MissionItems';
import About from '../../components/About/About';
import MainItems from './MainItems/MainItems';
import Cafes from '../../components/Cafes/Cafes';
import Footer from '../../components/Footer/Footer.js';
import Text from '../../components/Text/Text.js';
import Register from '../../components/Register/Register.js';
import Login from '../../components/Login/Login.js';
import ContactPage from '../../components/Contact/ContactPage.js';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import backImg from '../../assets/backImg.jpeg';
import classes from './Main.module.css';

class Main extends Component {
  render() {
    return(
      <div>
        <NavigationItems />
        <Switch>
          <Route path="/" exact component={MainItems} />
          <Route path="/whoweare" component={About} />
          <Route path="/filter" component={Cafes} />
          <Route path="/signup" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/contact" component={ContactPage} />
        </Switch>
        <Footer />
      </div>
  );
  }
}

export default Main;
