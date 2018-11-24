import React, { Component } from 'react';
import SessionsList from './sessionsList';
// import { sessions } from '../../constants/sessions';
import { SessionsQuery } from '../../gql/queries';
import { Query } from 'react-apollo';
import { Callout, Text } from '@blueprintjs/core';

class SessionsWarning extends Component {
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

export const SessionsListComponent2 = () => (
	// eslint-disable-next-line no-unused-expressions
	<Query query={SessionsQuery}>
		{({loading, error, data}) => {
			if (loading) return ("Loading...");
			if (error) {
				console.log(error.message);
				return (<SessionsWarning message={`Error! ${error.message}`}/>);
			}
			return (<SessionsListComponent sessions={data.sessions}/>
			);
		}}
	</Query>
)

export default class SessionsListComponent extends Component {
	renderSessions(sessions) {
		if (sessions) {
			return (
				<div style={styles.container}>
					<SessionsList sessions={sessions}/>
				</div>
			);
		}

		return (
			<SessionsWarning message={"Unable to fetch sessions"}/>
		)
	}

	render() {
		const { sessions } = this.props;
		return this.renderSessions(sessions);
	}
}

const styles = {
	container: {
		height: "100%",
		width: "100%",
		display: "flex",
		flexFlow: "column"
	},
}