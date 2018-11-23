import React, {Component} from 'react';
import { Card, Elevation } from '@blueprintjs/core';

export default class SessionEvent extends Component {
	render() {
		return(
			<Card style={{...styles.container, border: this.props.border}} interactive={true} elevation={Elevation.TWO}>
				<p>{this.props.event.title}</p>
				<p>{this.props.event.details}</p>
			</Card>
			// <div style={styles.container}>
			// 	<p>{this.props.event.title}</p>
			// 	<p>{this.props.event.details}</p>
			// </div>
		);
	}
}

const styles = {
	container: {
		margin: "10px",
		padding: "10px",
		display: "flex",
		flexFlow: "column"
	}
}