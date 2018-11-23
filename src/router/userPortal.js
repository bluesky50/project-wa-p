import React, { Component } from 'react';
import LoginForm from '../components/Login/login';
import RegisterForm from '../components/Register/register';
import {Button} from '@blueprintjs/core';

export default class UserPortal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			login: true
		}
	}

	onClick = () => {
		this.props.history.push('/home');
	}

	onToggle = () => {
		this.setState({
			login: !this.state.login
		});
	}

	conditionalRender() {
		if (this.state.login) {
			return (<LoginForm onClick={this.onClick}/>);
		} else {
			return (<RegisterForm/>);
		}
	}

	render() {
		return (
			<div style={styles.container}>
				<Button onClick={this.onToggle}>Toggle</Button>
				{this.conditionalRender()}
			</div>
		);
	}
}

const styles = {
	container: {
		height: "100vh",
		width: "100%",
		display: "flex",
		flexFlow: 'column',
		alignItems: "center",
	}
}