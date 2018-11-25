import React, { Component } from 'react';
import { Text, Card, Elevation, H3 } from '@blueprintjs/core';

export default class ProfilePage extends Component {
	render() {
		return (
			<div style={styles.pageContainer}>
				<div style={styles.menuContainer}>
					<H3>User Profile</H3>
					{/* <Divider/> */}
					<H3>Follow</H3>
					{/* <Divider/> */}
					<H3>Invites</H3>
					{/* <Divider/> */}
					<H3>Direct Messages</H3>
				</div>
				<div style={styles.bodyContainer}>
					<div style={styles.leftBodyContainer}>
						<Card style={styles.box} elevation={Elevation.TWO}>
							<H3>Username</H3>
							<Text>Alias</Text>
							<Text>Status</Text>
							<Text>Pairing Status</Text>
						</Card>
						<Card style={styles.box} elevation={Elevation.TWO}>
							<H3>About</H3>
						</Card>
						<Card style={styles.box} elevation={Elevation.TWO}>
							<H3>Additional</H3>
						</Card>
						<Card style={styles.box} elevation={Elevation.TWO}>
							<H3>Tweets</H3>
						</Card>
					</div>
					<div style={styles.rightBodyContainer}>
						<div style={styles.column}>
							<Card style={styles.box} elevation={Elevation.TWO}>
								<H3>Projects</H3>
							</Card>
							<Card style={styles.box} elevation={Elevation.TWO}>
								<H3>Skills</H3>
							</Card>
							<Card style={styles.box} elevation={Elevation.TWO}>
								<H3>Session History</H3>
							</Card>
						</div>
						<div style={styles.column}>
							<Card style={styles.box} elevation={Elevation.TWO}>
								<H3>Sessions</H3>
							</Card>
							<Card style={styles.box} elevation={Elevation.TWO}>
								<H3>Interests</H3>
							</Card>
							<Card style={styles.box} elevation={Elevation.TWO}>
								<H3>Other</H3>
							</Card>
						</div>
						<div style={styles.column}>
							<Card style={styles.box} elevation={Elevation.TWO}>
								<H3>Exercises</H3>
							</Card>
							<Card style={styles.box} elevation={Elevation.TWO}>
								<H3>Awards/Badges</H3>
							</Card>
							<Card style={styles.box} elevation={Elevation.TWO}>
								<H3>Rank/Experience/Contributions</H3>
							</Card>
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
		display: "flex",
		justifyContent: "space-around"
		// background: "gray"
	},
	bodyContainer: {
		width: "100%",
		// flex: "1",
		display: "flex",
		// flexDirection: "column",
		// alignItems: "center",
		padding: "10px",
		// background: "lightgray"
	},
	leftBodyContainer: {
		display: "flex",
		flexFlow: "column",
		padding: "10px",
		width: "320px",
		border: "1px solid black"
	},
	rightBodyContainer: {
		display: "flex",
		padding: "10px",
		border: "1px solid black",
		flex: 1
	},
	column: {
		display: "flex",
		flexFlow: "column",
		flex: 1,
		border: "1px solid black"
	},
	box: {
		margin: "6px",
	}
}