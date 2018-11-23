import React, { Component } from 'react';
import { FormGroup, Checkbox } from '@blueprintjs/core';

export default class TestingChecklist extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isEnabled1: false,
		}

		this.handleEnabledChange = this.handleEnabledChange.bind(this);
	}

	onClick = () => {
		this.props.actions.completeFeature()
	}

	handleEnabledChange() {
		this.setState({
			isEnabled1: !this.state.isEnabled1
		})
	}

	render() {
		return (
			<div style={styles.container}>
				<FormGroup
					helperText="Mark each step in the TDD cycle to complete the feature..."
					label="TDD Checklist"
					labelFor="text-input"
					labelInfo="(required)"
				>
					<Checkbox checked={this.state.isEnabled1} label="1. Step #1" onChange={this.handleEnabledChange} />
					<Checkbox checked={this.state.isEnabled1} label="2. Step #2" onChange={this.handleEnabledChange} />
					<Checkbox checked={this.state.isEnabled1} label="3. Step #3" onChange={this.handleEnabledChange} />
					<Checkbox checked={this.state.isEnabled1} label="4. Step #4" onChange={this.handleEnabledChange} />
				</FormGroup>
			</div>
		);
	}
}

const styles = {
	container: {
		height: "100%",
		width: "100%",
	}
}