import React, { Component } from 'react';
// import SessionsListContainer from '../components/SessionsList/sessionsListContainer';
import { SessionsListComponent2 } from '../components/SessionsList/sessionsListContainer';
import { Link } from 'react-router-dom';

export default class Sessions extends Component {
	render() {
		return (
			<div style={styles.pageContainer}>
				<div style={styles.menuContainer}>
					<Link to="/home">Home</Link>
				</div>
				<div style={styles.bodyContainer}>
					<div style={styles.topBodyContainer}>
						Session Information
					</div>
					<div style={styles.bottomBodyContainer}>
						<SessionsListComponent2/>
						{/* <SessionsListContainer/> */}
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
		width: "100%",
		height: "200px",
		border: "1px solid black",
		margin: "10px"
	},
	bottomBodyContainer: {
		height: "100%",
		width: "100%",
		border: "1px solid black",
		margin: "10px"
	}
}