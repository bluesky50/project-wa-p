import React, {Component} from 'react';

export default class Clock extends Component {
	renderTimeLeft() {
		if (this.props.remainingTime > 0) {
			const minutes = Math.floor(this.props.remainingTime / 1000 / 60);
			const seconds = Math.floor((this.props.remainingTime - (minutes * 60000)) / 1000);
			return (
				<p>{minutes}:{seconds}</p>
			);
		}
		return <p>0:00</p>
	}

	render() {
		return (
			<div>
				{this.renderTimeLeft()}
			</div>
		);
	}
}