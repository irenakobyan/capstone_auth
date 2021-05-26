import React, {Component} from 'react';
import Box from '../About/Box/Box';
import Filter from './Filter/Filter.js';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import classes from './Cafes.module.css';
import { cafe } from "../../data.json";

class Cafes extends Component {
  state = {
    search: ""
  };

  renderCafe = cafe => {
    return(
      <div>
        <img src={cafe.logo} style={{width: '50%'}}/>
        <p>{cafe.name} <br />
           Review: <b>{cafe.review}</b> <br />
           Address: {cafe.address} <br />
           Contact: {cafe.phone} <br />
        </p>
      </div>
    )
  }

  handleChange = (e) => {
    this.setState({
      search: e.target.value
    })
  }

  render() {
    const filteredCafes = cafe.filter(cafe => {
         return cafe.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
       });

  return(
  <div>
    <div className={classes.grow}>
        <div className={classes.search}>
          <SearchIcon />
            <InputBase
              placeholder="Search"
              classes={ classes.inputRoot}
              inputProps={{ 'aria-label': 'search' }}
              onChange={this.handleChange}
            />
        </div>
    </div>

    <div className={classes.filter}>
      <Filter />
        <div className={classes.cafeItems}>
                {filteredCafes.map(cafe => {
                      return this.renderCafe(cafe);
                })}
        </div>
   </div>
</div>
    )
  }
}

 export default Cafes;
