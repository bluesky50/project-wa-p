import React, {Component} from 'react';
import { Card, Button, Elevation } from '@blueprintjs/core';

export default class SessionFeature extends Component {
	// constructor(props) {
	// 	super(props);

	// 	this.state = {
	// 		selected: false
	// 	}

	// 	this.onClick = this.onClick.bind(this);
	// }

	// componentDidMount() {
	// 	this.setState({
	// 		selected: this.props.selected
	// 	});
	// }

	onClick = () => {
		this.props.actions.selectFeature(this.props.feature.id)
	}

	renderFeature() {
		if (this.props.selected) {
			return (
				<Card style={styles.selected} interactive={true} elevation={Elevation.FOUR}>
					{/* <div style={{display: "flex", alignItems: "center", flexFlow: "column"}}> */}
						<div style={{display: "flex", justifyContent: "space-between", width: "100%"}}>
							<p>creator</p>
							<p>#tag1 #tag2</p>
						</div>
						<h4>{this.props.feature.title}</h4>
						<p>{this.props.feature.description}</p>
					{/* </div> */}
					{/* <Button onClick={() => this.onClick()} text=">>selected"/> */}
				</Card>
				// <div style={styles.selected}>
					
				// </div>
			);
		}
		return (<Card style={styles.container} interactive={true} elevation={Elevation.ZERO}><p>{this.props.feature.title}, creator: User1, priority</p><Button onClick={() => this.onClick()}>select</Button></Card>);
	}

	render() {
		// console.log(this.props);
		return (this.renderFeature());
	}
}

const styles = {
	container: {
		margin: "10px",
		padding: "10px",
		// border: "1px solid black",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center"
		// flexFlow: "column"
	},
	selected: {
		margin: "10px",
		padding: "10px",
		border: "2px solid #0E5A8A",
		// color: "#0E5A8A",
		display: "flex",
		alignItems: "center",
		// justifyContent: "space-between"
		flexFlow: "column",
	}
}