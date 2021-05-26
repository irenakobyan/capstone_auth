import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';
import logo from '../../../assets/logo.png';
import {  NavLink } from 'react-router-dom';

const navigationItems = () => (
  <div>
    <ul className={classes.NavigationItems}>
    <NavigationItem><NavLink to="/">Home</NavLink></ NavigationItem>
    <NavigationItem><NavLink to="/whoweare"> Who we are </NavLink></ NavigationItem>
    <NavigationItem><NavLink to="/filter"> Restaurants & Cafes </NavLink></ NavigationItem>

    <img src={logo}  alt="Logo" />

    <NavigationItem><NavLink to="/signup"> Sign Up </NavLink> </ NavigationItem>
    <NavigationItem><NavLink to="/login"> Login </NavLink> </ NavigationItem>
    <NavigationItem><NavLink to="/contact"> Contact </NavLink> </ NavigationItem>
    </ul>

  </div>
)

export default navigationItems;
