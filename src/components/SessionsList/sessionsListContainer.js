import React, { Component } from 'react';
import SessionsList from './sessionsList';
import { sessions } from '../../constants/sessions';
import { SessionsQuery } from '../../gql/queries';
import { Query } from 'react-apollo';

export const SessionsListComponent2 = () => (
	// eslint-disable-next-line no-unused-expressions
	<Query query={SessionsQuery}>
		{({loading, error, data}) => {
			if (loading) return ("Loading...");
			if (error) {
				console.log(error.message);
				return (<p>{`Error! ${error.message}`}</p>);
			}
			return (
				<div style={styles.container}>
					<SessionsList sessions={data.sessions}/>
				</div>
			);
		}}
	</Query>
)


export default class SessionsListComponent extends Component {
	constructor(props) {
		super(props)
		
		this.state = {
			sessions: []
		}
		
		this.getSessions = this.getSessions.bind(this)
	}

	componentDidMount() {
		this.getSessions();
	}

	getSessions() {
		this.setState({
			sessions: sessions
		});
	}

	render() {
		console.log(this.state.sessions)
		return(
			<div style={styles.container}>
				<SessionsList sessions={this.state.sessions}/>
			</div>
		);
	}
}

const styles = {
	container: {
		height: "100%",
		width: "100%"
	},
}