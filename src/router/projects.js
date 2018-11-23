import React, { Component } from 'react';
import { Link } from 'react-router-dom'
// import ProjectsListContainer from '../components/ProjectsList/projectsListContainer';
import { ProjectsListComponent2 } from '../components/ProjectsList/projectsListContainer';


export default class Projects extends Component {
	render() {
		return (
			<div style={styles.pageContainer}>
				<div style={styles.menuContainer}>
					<Link to="/home">Home</Link>
				</div>
				<div style={styles.bodyContainer}>
					<div style={styles.topBodyContainer}>
						Projects Information
					</div>
					<div style={styles.bottomBodyContainer}>
						<ProjectsListComponent2/>
						{/* <ProjectsListContainer/> */}
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
		padding: "10px",
		// background: "lightgray"
	},
	topBodyContainer: {
		width: "100%",
		height: "200px",
		border: "1px solid black",
		margin: "10px",
	},
	bottomBodyContainer: {
		// height: "100%",
		margin: "10px",
		width: "100%",
		border: "1px solid black"
	}
}