import React, {Component} from 'react';
import Clock from './clock';
import { Button } from '@blueprintjs/core';

export default class Countdown extends Component {
	constructor(props) {
		super(props)

		this.state = {
			startedTime: null,
			remainingTime: 0
		}

		this.setStartedTime = this.setStartedTime.bind(this);
		this.onClick = this.onClick.bind(this);
	}

	componentWillUnmount() {
		clearInterval(this.intervalId);
	}

	getRemainingTime() {
		if (this.state.startedTime !== null) {
			const endTime = new Date(this.state.startedTime.getTime() + this.props.timeLimit*60000)
			const elapsedTime = endTime - new Date();
			return elapsedTime;
		}
		return 0;
	}

	onClick() {
		if (this.state.startedTime === null) {
			this.setStartedTime();
			this.startInterval();
		} else {
			this.stopInterval();
		}
	}

	setStartedTime() {
		this.setState({
			startedTime: new Date()
		})
	}

	startInterval() {
		this.intervalId = setInterval(
			() => {
				this.setState({
					remainingTime: this.getRemainingTime()
				});
			},
			1000
		);
	}

	stopInterval() {
		clearInterval(this.intervalId);
	}

	render() {
		// console.log(this.state.remainingTime);
		return(
			<div style={styles.container}>
				<Clock remainingTime={this.state.remainingTime}/>
				<Button className="bp3-minimal" text="Start" onClick={() => this.onClick()} />
			</div>
		);
	}
}

const styles = {
	container: {
		padding: "10px",
		display: "flex",
		alignItems: "center",
		justifyContent: "center"
	}
}