import React, {Component} from 'react';
import classes from './Filter.module.css';
import { cafe } from "../../../data.json";

class Filter extends React.Component {

	handleClick = () => {


	 }

render(){

	const cuisine = [
		"Dessert",
		 "Fresh, Ice Cream",
		 "Coffee and Tea",
		  "Burger & Sandwich",
			 "Pizza",
			 "BBQ, Kebab",
			  "Sushi",
				"Chicken Grill",
				"Khash",
				"Lahmajo",
				"Breakfast",
				"Lunch",
				"Dinner" ,
				"Asian"
			];

	const location = [
				"Ajapnyak",
				"Arabkir",
				"Avan",
				"Davtashen",
				"Erebuni",
				"Kanaker-Zeytun",
				"Kentron",
				"Malatia-Sebastia",
				"Nork-Marash",
				"Nor Nork",
				"Nubarashen",
				"Shengavit"
	];

	const activity = [
				"Work & Study",
				"Friends Time",
				"Music and Concerts",
				"Hookah & Cigars",
				"Friday Night",
				"Wine & Cheese",
				"Beer House & Pub",
				"For Kids"
	];

  return(
		<div>
		<h1>Sort by</h1>

		<div className={classes.sort}>
		<h3>Cuisine</h3>
			{cuisine.map((name) => (
				<li className={classes.list} onClick={this.handleClick}>
					<a className={classes.link}>{name}</a>
				</li>
			))}
			</div>

			<div className={classes.sort}>
			<h3>Location</h3>
				{location.map((name) => (
					<li className={classes.list}>
						<a className={classes.link}>{name}</a>
					</li>
				))}
				</div>

				<div className={classes.sort}>
				<h3>Activity</h3>
					{activity.map((name) => (
						<li className={classes.list}>
							<a className={classes.link}>{name}</a>
						</li>
					))}
					</div>

		</div>
  )
}
}

export default Filter;
