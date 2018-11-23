import React, { Component } from 'react';
import ProjectItem from './projectItem';

export default class ExercisesList extends Component {
	renderProjects() {
		return this.props.projects.map((project, index) => {
			return (<ProjectItem key={index} project={project}/>);
		});
	}

	render() {
		return(
			<div style={styles.container}>
				{this.renderProjects()}
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