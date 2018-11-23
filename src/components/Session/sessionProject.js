import React, {Component} from 'react';
import SessionFeatureList from './sessionFeatureList';
import TddChecklist from './tddChecklist';

export default class SessionProject extends Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedFeatureId: '',
			completedFeatures: []
		}
		this.selectFeature = this.selectFeature.bind(this);
		this.completeFeature = this.completeFeature.bind(this);
	}

	completeFeature() {
		if (!this.state.completedFeatures.includes(this.state.selectedFeatureId) && this.state.completedFeatureId !== '') {
			this.setState({
				selectedFeatureId: '',
				completedFeatures: [...this.state.completedFeatures, this.state.selectedFeatureId]
			})
		}
	}

	selectFeature(id) {
		this.setState({
			selectedFeatureId: id
		})
	}

	render() {
		// console.log(this.props.project.features.join(', '));
		// console.log(this.props.project);

		const actions = {
			completeFeature: this.completeFeature,
			selectFeature: this.selectFeature
		}
		// console.log(actions);

		const ftrs = this.props.project.features.filter((f) => {
			return !this.state.completedFeatures.includes(f.id)
		})

		const activeBoolean = (this.state.selectedFeatureId !== '');

		return (
			<div style={styles.container}>
				<div style={styles.header}>
					<h5>Total Features: 5</h5>
					<h5>Project Information: Title - github.repo</h5>
					<h5>Completed Features: 1</h5>
				</div>
				<div style={styles.body}>
					<div style={styles.bodyLeft}>
						<SessionFeatureList features={ftrs} actions={actions} completedFeatures={this.state.completedFeatures} selectedFeatureId={this.state.selectedFeatureId}/>
					</div>
					<div style={styles.bodyRight}>
						<TddChecklist actions={actions} active={activeBoolean}/>
					</div>
				</div>
			</div>
		);
	}
}

const styles = {
	container: {
		// height: "100%",
		width: "100%",
		display: "flex",
		flexFlow: "column",
		flexGrow: 1,
		// background: "green"
	},
	header: {
		// height: "50px",
		padding: "10px",
		width: "100%",
		border: "1px solid black",
		display: "flex",
		justifyContent: "space-between"
	},
	body: {
		height: "100%",
		width: "100%",
		border: "1px solid black",
		display: "flex",
	},
	bodyLeft: {
		height: "100%",
		width: "50%",
		display: "flex",
	},
	bodyRight: {
		display: "flex",
		width: "50%",
		height: "100%"
	}
}