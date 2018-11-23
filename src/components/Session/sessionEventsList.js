import React, {Component} from 'react';

import SessionEvent from './sessionEvent';

export default class SessionEventsList extends Component {
	renderEvents() {
		return this.props.events.map((e, index) => {
			let border = "";
			if (index % 2 === 0) {
				border = `2px solid ${this.props.color1}`;	
			} else {
				border = `2px solid ${this.props.color2}`;
			}

			return (
				<SessionEvent border={border} key={index} event={e}/>
			);
		});
	}

	render() {
		return (
			<div style={styles.container}>
				<h3>{this.props.title}</h3>
				{this.renderEvents()}
			</div>
		);
	}
}

const styles = {
	container: {
		padding: "10px",
		display: "flex",
		flexFlow: "column",
		border: "1px solid black" 
	}
}