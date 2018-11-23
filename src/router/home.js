import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Home extends Component {
	render() {
		return (
			<div style={styles.pageContainer}>
				{/* <div style={styles.menuContainer}>
					<h2>Menu</h2>
				</div> */}
				<div style={styles.headerContainer}>
					<h2>Global Information. Highlights.</h2>
				</div>
				<div style={styles.bodyContainer}>
					<div style={styles.subContainer}>
						<h2>My Stuff</h2>
						<div style={styles.optionsContainer}>
							<Link to="/projects">My Projects</Link>
							<Link to="/sessions">My Sessions</Link>
							<Link to="/exercises">Saved Exercises</Link>
							<Link to="/sessions">Invites</Link>
						</div>
					</div>
					<div style={styles.subContainer}>
						<h2>Global</h2>
						<div style={styles.optionsContainer}>
							<Link to="/exercises">Exercises</Link>
							<Link to="/projects">Projects</Link>
							<Link to="/sessions">Sessions</Link>
						</div>
					</div>
					<div style={styles.subContainer}>
						<h2>Other</h2>
						<div style={styles.optionsContainer}>
							<Link to="/exercises">Pairing Requests</Link>
						</div>
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
		background: "gray"
	},
	headerContainer: {
		height: "200px",
		width: "100%",

	},
	bodyContainer: {
		width: "100%",
		flex: "1",
		display: "flex",
		// flexDirection: "column",
		// alignItems: "center",
		justifyContent: "space-around",
		// background: "lightgray"
	},
	subContainer: {
		display: "flex",
		flexFlow: "column",
		alignItems: "center",
		border: "1px solid border"
	},
	optionsContainer: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center"
	}
}