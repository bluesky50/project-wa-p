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

export const SessionQuery = gql`
query session($sessionId: String!) {
	session(id: $sessionId) {
		id
		title
		project {
			title
			description
		}
		description
		participants {
			username
		}
		type
		category
		tags
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

export const ExerciseQuery = gql`
query exercise($exerciseId: String!) {
	exercise(id: $exerciseId) {
		id
		title
		description
	}
}
`;

export const CreateExerciseMutation = gql`
mutation createExercise($title: String!, $description: String!) {
	createExercise(title: $title, description: $description) {
		title
		description
		type
		category
	}
}
`;