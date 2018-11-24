import React, { Component } from 'react';
import { ProjectQuery } from '../gql/queries';
import { Text, Callout } from '@blueprintjs/core';
import { Query } from 'react-apollo';


class ProjectWarning extends Component {
	render() {
		return (
			<div style={styles.pageContainer}>
				<Callout intent="warning">
					<Text>{this.props.message}</Text>
				</Callout>
			</div>
		);
	}
}

export const ProjectDetails2 = ({ match }) => (
	// eslint-disable-next-line no-unused-expressions
	<Query query={ProjectQuery} variables={{ projectId: match.params.projectId }}>
		{({loading, error, data}) => {
			if (loading) return (<p>Loading...</p>);
			if (error) return (<ProjectWarning message={`Error! ${error.message}`}/>);
			return (
				<Project project={data.project}/>
			);
		}}
	</Query>
)

export default class Project extends Component {
	renderProject(project) {
		if (project) {
			return (
				<div style={styles.pageContainer}>
					<div style={styles.menuContainer}>
						<Text>Menu</Text>
					</div>
					<div style={styles.bodyContainer}>
						<Callout title={project.title} style={styles.callout}>
							<Text>Creator: Some user</Text>
							<Text>Project tags, category, type</Text>
						</Callout>
						<Callout style={styles.callout}>
							<Text>{project.description}</Text>
						</Callout>
						<Callout style={styles.callout}>
							<Text>Project Features</Text>
							<Text>Completed</Text>
						</Callout>
						<Callout style={styles.callout}>
							<Text>Project Notes</Text>
						</Callout>
						<Callout style={styles.callout}>
							<Text>Project History</Text>
						</Callout>
					</div>
				</div>
			);
		} else {
			return (
				<ProjectWarning mesage={"Unable to find project"}/>
			);
		}
	}

	render() {
		const { project } = this.props;
		return this.renderProject(project);
	}
}

const styles = {
	pageContainer: { 
		height: "100vh",
		width: "100%",
		display: "flex",
		flexFlow: "column"
	},
	menuContainer: {
		height: "70px",
		width: "100%",
		// background: "#30404D",
	},
	bodyContainer: {
		width: "100%",
		flexGrow: "1",
		display: "flex",
		flexFlow: "column",
		// background: "#30404D",
		padding: "10px"
	},
	projectDetails: {
		width: "100%",
		padding: "10px",
		background: "#30404D",
		borderRadius: "6px",
		marginBottom: "10px"
	},
	callout: {
		marginBottom: "10px"
	}
}