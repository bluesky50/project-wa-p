import gql from 'graphql-tag';

export const ProjectsQuery = gql`
query {
	projects {
		id
		title
		description
	}
}
`;

export const ProjectQuery = gql`
query project($projectId: String!) {
	project(id: $projectId) {
		id
		title
		description
	}
}
`;

export const SessionsQuery = gql`
query {
	sessions {
		id
		title
		description
	}
}
`;

export const ExercisesQuery = gql`
query {
	exercises {
		id
		title
		description
	}
}
`;