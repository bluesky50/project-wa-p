import React, {Component} from 'react';
import { Tab, Tabs  } from '@blueprintjs/core';
import GitChecklist from './tddGitChecklist';
import TestingChecklist from './tddTestingChecklist';
import CompleteFeature from './tddCompleteFeature';


export default class TddChecklist extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedTabId: "gc"
		}
		this.handleTabChange = this.handleTabChange.bind(this);
	}

	handleTabChange(tabId) {
		this.setState({
			selectedTabId: tabId
		})
	}

	renderOtherStuff() {
		return(

			{/* <p>1. Step #1</p>
				<p>2. Step #2</p>
				<p>3. Step #3</p>
				<p>4. Step #4</p>
				<button onClick={() => this.onClick()}>Confirm Completed</button>
			</div> */}
		) 
	}

	conditionalRender() {
		if (this.props.active) {
			return (
				<div style={styles.container}>
					<h3>Checklists</h3>
					<Tabs id="TabsExample" key={"vertical"} onChange={this.handleTabChange} animate={true} vertical={true} selectedTabId={this.state.selectedTabId}>
						<Tab id="gc" title="Git Check" panel={<GitChecklist />} />
						<Tab id="tc" title="Testing Check" panel={<TestingChecklist />} />
						<Tab id="cc" title="Finish Check" panel={<CompleteFeature actions={this.props.actions} style={{width:"100%"}}/>} />
						{/* <Tab id="rx" title="React" panel={<ReactPanel />} />
						<Tab id="bb" disabled title="Backbone" panel={<BackbonePanel />} /> */}
						{/* <Tabs.Expander /> */}
						{/* <input className="bp3-input" type="text" placeholder="Search..." /> */}
					</Tabs>
				</div>
			);
		} else {
			return (
				<div style={styles.container}>
					Select a feature to start...
				</div>
			);
		}
	}

	render() {
		return this.conditionalRender();
	}
}



const styles = {
	container: {
		height: "100%",
		width: "100%",
		padding: "10px",
		// display: "flex",
		// flexFlow: "column"
	}
}