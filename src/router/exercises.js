import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import ExercisesListContainer from '../components/ExercisesList/exercisesListContainer';
import { ExercisesListComponent2 } from '../components/ExercisesList/exercisesListContainer';

export default class Exercises extends Component {
	render() {
		return (
			<div style={styles.pageContainer}>
				<div style={styles.menuContainer}>
					<Link to="/home">Home</Link>
				</div>
				<div style={styles.bodyContainer}>
					<div style={styles.topBodyContainer}>
						New Exercises + Other Information
					</div>
					<div style={styles.bottomBodyContainer}>
						<ExercisesListComponent2/>
						{/* <ExercisesListContainer/> */}
					</div>
				</div>
			</div>
		);
	}
}

const styles = {
	pageContainer: { 
		// height: "100vh",
		width: "100%",
		display: "flex",
		flexFlow: "column",
	},
	menuContainer: {
		height: "70px",
		width: "100%",
		// background: "gray"
	},
	bodyContainer: {
		width: "100%",
		flex: "1",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		// background: "lightgray",
		padding: "10px"
	},
	topBodyContainer: {
		height: "200px",
		width: "100%",
		border: "1px solid black",
		margin: "10px",
	},
	bottomBodyContainer: {
		// height: "400px",
		width: "100%",
		border: "1px solid black",
		// background: "blue",
		margin: "10px"
	}
}