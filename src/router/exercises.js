import React from 'react';
import { Link } from 'react-router-dom';
// import ExercisesListContainer from '../components/ExercisesList/exercisesListContainer';
import { ExercisesListComponent2 } from '../components/ExercisesList/exercisesListContainer';
import { Classes, H3, Button, Intent, FormGroup, InputGroup, Toaster, Position, Toast } from '@blueprintjs/core';
import { CreateExerciseMutation } from '../gql/queries';
import { Mutation } from 'react-apollo';
// import { AppToaster } from '../router/toaster';


export default class Exercises extends React.PureComponent {
	// constructor(props) {
	// 	super(props);

	// 	this.state = {
	// 		createModal: false,
	// 		title: '',
	// 		description: '',
	// 		toasts: [{
	// 			icon: "warning-sign",
	// 			intent: Intent.WARNING,
	// 			message: "Unable to create exercise",
	// 			timeout: 5000,
	// 		}]
	// 	}
	// }
	state = {
		createModal: false,
		title: '',
		description: '',
		toasts: []
	}

	toaster;
    refHandlers = {
        toaster: (ref) => this.toaster = ref
    };

	renderCreateExercise() {
		if (this.state.createModal) {
			return (
				<Mutation mutation={CreateExerciseMutation}>
					{(createExercise, { loading, error, data }) => {
						if (error) {			
							this.addToast();
							this.setState({
								createModal: false
							})
							// return (<CreateWarning message={"The exercise could not be created"} toggleOverlay={this.toggleOverlay}/>)
						};
						return (
							<div style={styles.overlayContainer}>
								<div style={styles.overlay} className={`${Classes.CARD} ${Classes.ELEVATION_4}`}>
									<H3>Create exercise form</H3>
									<FormGroup
										helperText="additional helper info"
										label="exercise information"
										labelFor="text-input"
										labelInfo="(required)"
									>
										<InputGroup id="title-input" placeholder="Exercise title" onChange={(e) => { this.setState({ title: e.target.value }) }} value={this.state.title} style={styles.inputGroup}/>
										<InputGroup id="desc-input" placeholder="Exercise description" onChange={(e) => { this.setState({ description: e.target.value }) }} value={this.state.description} style={styles.inputGroup}/>
									</FormGroup>
									<br />
									<Button intent={Intent.DANGER} onClick={this.toggleOverlay}>
										Close
									</Button>
									<Button intent={Intent.SUCCESS} onClick={() => { if (this.state.title && this.state.description) { createExercise({ variables: { title: this.state.title, description: this.state.description } }) }; this.setState({ title: '', description: ''});}} style={{ float: "right" }}>
										Create Exercise
									</Button>
								</div>
							</div>	
						);
					}}
				</Mutation>
			);
		}
		
		return null;
	}

	toggleOverlay = () => {
		this.setState({
			createModal: !this.state.createModal
		});
	}

	addToast = () => {
		const toast = {
			icon: "warning-sign",
            intent: Intent.WARNING,
			message: "Unable to create exercise",
			timeout: 5000,
		}
        this.toaster.show(toast);
	}
	
	renderToasts() {
		return this.state.toasts.map((toastData) => {
			return (<Toast {...toastData}/>);
		})
	}

	render() {
		console.log(this.state.title, this.state.description);
		return (
			<div style={styles.pageContainer}>
				<Toaster position={Position.TOP_RIGHT} ref={this.refHandlers.toaster}>
					{this.renderToasts()}
				</Toaster>
				{/* {this.toaster} */}
				{this.renderCreateExercise()}
				<div style={styles.menuContainer}>
					<Link to="/home">Home</Link>
					<Button style={{ width: "200px" }} text="Create Exercise" onClick={this.toggleOverlay} />
				</div>
				<div style={styles.bodyContainer}>
					<div style={styles.topBodyContainer}>
						New Exercises + Other Information
					</div>
					<div style={styles.bottomBodyContainer}>
						<ExercisesListComponent2/>
						{/* <ExercisesListContainer/> */}
					</div>
				</div>
			</div>
		);
	}
}

const styles = {
	pageContainer: { 
		// height: "100vh",
		width: "100%",
		display: "flex",
		flexFlow: "column",
	},
	menuContainer: {
		height: "70px",
		width: "100%",
		display: "flex",
		flexFlow: "column",
		alignItems: "center"
		// background: "gray"
	},
	bodyContainer: {
		width: "100%",
		flex: "1",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		// background: "lightgray",
		padding: "10px"
	},
	topBodyContainer: {
		height: "200px",
		width: "100%",
		border: "1px solid black",
		margin: "10px",
	},
	bottomBodyContainer: {
		// height: "400px",
		width: "100%",
		border: "1px solid black",
		// background: "blue",
		margin: "10px"
	},
	overlay: {
		width: "50%",
	},
	overlayContainer: {
		zIndex: 100,
		position: "fixed",
		height: "100vh",
		width: "100%",
		left: 0,
		top: 0,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		border: "1px solid white",
		background: "rgba(30, 30, 30, 0.5)"
	},
	inputGroup: {
		marginBottom: "10px",
	}
}