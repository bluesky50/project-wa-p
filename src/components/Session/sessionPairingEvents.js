import React, { Component } from 'react';

export default class SessionPairingEvents extends Component {
	constructor(props) {
		super(props);

		this.state = {
			events: []
		}
	}

	renderPairingEvents() {
		return this.state.events.map((e) => {
			return (
				<p></p>
			)
		})
	}

	render() {
		return(
			<div style={styles.container}>

			</div>
		);
	}
}

const styles = {
	container: {
		height: "100%",
		width: "50%",
		padding: "10px"
	}
}