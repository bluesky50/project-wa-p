import React, { Component } from 'react';
import SessionItem from './sessionItem';

export default class SessionsList extends Component {

	renderSessions() {
		// console.log(this.props.sessions);

		return this.props.sessions.map((session, index) => {
			return (<SessionItem key={index} session={session}/>);
		});
	}

	render() {
		return(
			<div style={styles.container}>
				{this.renderSessions()}
			</div>
		);
	}
}

const styles = {
	container: {
		height: "100%",
		width: "100%",
		padding: "10px"
	}
}