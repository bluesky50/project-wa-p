import React, { Component } from 'react';
import SessionFeature from './sessionFeature';
import { Button } from '@blueprintjs/core';

export default class SessionFeatureList extends Component {
	renderFeatures() {
		return this.props.features.map((feature, index) => {
			if (this.props.selectedFeatureId === feature.id) {
				return (<SessionFeature key={index} feature={feature} selected={true} actions={this.props.actions}/>);
			} else {
				return (<SessionFeature key={index} feature={feature} selected={false} actions={this.props.actions}/>);
			}
		});
	}

	render() {
		// console.log(this.props.actions);
		return (
			<div style={styles.container}>
				{this.renderFeatures()}
				<Button>Create New Feature</Button>	
			</div>
		);
	}
}

const styles = {
	container: {
		height: "100%",
		width: "100%",
		padding: "10px",
		display: "flex",
		flexFlow: "column",
		border: "1px solid black",
		overflow: "auto"
	},
}