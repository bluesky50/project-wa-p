import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { sessions } from '../constants/sessions';
import { projects } from '../constants/projects';
import SessionProject from '../components/Session/sessionProject';
import Countdown from '../components/Countdown/countdown';
import SessionEventsList from '../components/Session/sessionEventsList';
import { Tooltip, Position, Popover, H1, Classes, Button, Divider } from '@blueprintjs/core';


export default class Session extends Component {
	constructor(props) {
		super(props);

		this.state = {
			session: {
				participants: [],
				pairingEvents: [],
				otherEvents: []
			},
			project: {
				features: []
			},
			startTime: new Date(),
			roundTimeLimits: [8],
		}
	}

	componentDidMount() {
		this.getSession();
		this.getProject();
	}

	getSession() {
		const sessionId = this.props.match.params.sessionId;
		// console.log("sessionId", sessionId)
		const session = sessions.filter((session) => {
			return session.id === sessionId;
		});

		const project = projects.filter((p) => {
			// console.log(p, session[0]);
			return p.id === session[0].projectId
		})

		// console.log(project);
		if (session.length > 0) {
			this.setState({
				session: session[0],
				project: project[0]
			});
		}
	}

	addNewTimeLimit() {
		const newTimeLimit = Math.floor(Math.random() * 7) + 8
		if (this.state.roundTimeLimits.length < 8) {
			this.setState({
				roundTimeLimits: [...this.state.roundTimeLimits, newTimeLimit]
			});
		}
	}

	getProject() {
		// const p = project[0]
		// console.log(p);
		// this.setState({
		// 	project: p
		// })
	}

	renderParticipants() {
		return this.state.session.participants.map((participant, index) => {
			return (<div style={{flexGrow: 1}} key={index}><h3>{participant}</h3></div>);
		})
	}

	render() {
		const currentTimeLimit = this.state.roundTimeLimits.length > 0 ? this.state.roundTimeLimits[this.state.roundTimeLimits.length-1] : 0;
		// console.log(currentTimeLimit);
		return (
			<div style={styles.pageContainer}>
				<div style={styles.menuContainer}>
					<Link to="/sessions">Sessions</Link>
				</div>
				<div style={styles.bodyContainer}>
					<div style={styles.heading}>
						<h3>Session Title</h3>
						<h3>Start Date</h3>
						<div style={{display: "flex", alignItems: "center"}}>
							<h3>Total Participatns: Mike, Bill</h3>
							<Divider/>
							<Button className="bp3-intent-primary" icon="add">Invite</Button>
						</div>
						<h3>Visibility: public</h3>
					</div>
					<div style={styles.bTop}>
						<SessionProject project={this.state.project}/>
					</div>
					<div style={styles.bMiddle}>
						{/* <Countdown endTime={new Date(new Date().getTime() + currentTimeLimit*60000)}/> */}
						<h3>Session Management: P1/P2 turn</h3>
						<div>
							Rounds: {this.state.roundTimeLimits.length}/8
						</div>
						<Countdown timeLimit={currentTimeLimit}/>
					</div>
					{this.renderEvents()}
					<div style={styles.bBottom}>
						<div style={styles.bottomLeft}>
							<SessionEventsList title={"Session Pairing Events"} events={this.state.session.pairingEvents} color1={"#00998C"} color2={"#7157D9"}/>
						</div>
						<div style={styles.bottomRight}>
							<SessionEventsList title={"Other Events"} events={this.state.session.otherEvents} color1={"#EB532D"} color2={"#9BBF30"}/>
						</div>
					</div>
				</div>
			</div>
		);
	}

	renderEvents() {
		return(
			<div style={styles.bottomDetails}>
				<div style={{ flexGrow: 1, ...styles.eventA }}>
					<Popover
						content={<H1>Popover!</H1>}
						position={Position.TOP}
						popoverClassName={Classes.POPOVER_CONTENT_SIZING}
					>
						<Tooltip
							content={<span>Mike Driver (8:00)</span>}
							position={Position.TOP}
							usePortal={false}
						>
							<p>
								A
							</p>
						</Tooltip>
					</Popover>
				</div>
				
				
				<div style={{ flexGrow: 3, ...styles.eventB }}>
					<Popover
							content={<H1>Popover!</H1>}
							position={Position.TOP}
							popoverClassName={Classes.POPOVER_CONTENT_SIZING}
						>
							<Tooltip
								content={<span>Bill Driver (8:00)</span>}
								position={Position.TOP}
								usePortal={false}
							>
								<p>
									B
								</p>
						</Tooltip>
					</Popover></div>
				<div style={{ flexGrow: 3, ...styles.eventA }}>
					<Popover
							content={<H1>Popover!</H1>}
							position={Position.TOP}
							popoverClassName={Classes.POPOVER_CONTENT_SIZING}
						>
							<Tooltip
								content={<span>Mike Driver (8:00)</span>}
								position={Position.TOP}
								usePortal={false}
							>
								<p>
									A
								</p>
						</Tooltip>
					</Popover>
				</div>
				<div style={{ flexGrow: 4, ...styles.eventB }}>
					<Popover
							content={<H1>Popover!</H1>}
							position={Position.TOP}
							popoverClassName={Classes.POPOVER_CONTENT_SIZING}
						>
							<Tooltip
								content={<span>Bill Driver (8:00)</span>}
								position={Position.TOP}
								usePortal={false}
							>
								<p>
									B
								</p>
							</Tooltip>
					</Popover>
				</div>
				<div style={{ flexGrow: 2, ...styles.eventA }}>
					<Popover
							content={<H1>Popover!</H1>}
							position={Position.TOP}
							popoverClassName={Classes.POPOVER_CONTENT_SIZING}
						>
							<Tooltip
								content={<span>Mike Driver (8:00)</span>}
								position={Position.TOP}
								usePortal={false}
							>
								<p>
									A
								</p>
							</Tooltip>
					</Popover>
				</div>
				<div style={{ flexGrow: 5, ...styles.eventB }}>
					<Popover
							content={<H1>Popover!</H1>}
							position={Position.TOP}
							popoverClassName={Classes.POPOVER_CONTENT_SIZING}
						>
							<Tooltip
								content={<span>Bill Driver (8:00)</span>}
								position={Position.TOP}
								usePortal={false}
							>
								<p>
									B
								</p>
							</Tooltip>
					</Popover>
				</div>
				<div style={{ flexGrow: 3, ...styles.eventA }}>
					<Popover
							content={<H1>Popover!</H1>}
							position={Position.TOP}
							popoverClassName={Classes.POPOVER_CONTENT_SIZING}
						>
							<Tooltip
								content={<span>Mike Driver (8:00)</span>}
								position={Position.TOP}
								usePortal={false}
							>
								<p>
									A
								</p>
							</Tooltip>
					</Popover>
				</div>
				<div style={{ flexGrow: 1, ...styles.eventB }}>
					<Popover
							content={<H1>Popover!</H1>}
							position={Position.TOP}
							popoverClassName={Classes.POPOVER_CONTENT_SIZING}
						>
							<Tooltip
								content={<span>Bill Driver (8:00)</span>}
								position={Position.TOP}
								usePortal={false}
							>
								<p>
									B
								</p>
						</Tooltip>
					</Popover>
				</div>
				<div style={{ flexGrow: 1, ...styles.eventA }}>
					<Popover
							content={<H1>Popover!</H1>}
							position={Position.TOP}
							popoverClassName={Classes.POPOVER_CONTENT_SIZING}
						>
							<Tooltip
								content={<span>Mike Driver (8:00)</span>}
								position={Position.TOP}
								usePortal={false}
							>
								<p>
									A
								</p>
							</Tooltip>
					</Popover>
				</div>
				<div style={{ flexGrow: 3, ...styles.eventB }}>
					<Popover
							content={<H1>Popover!</H1>}
							position={Position.TOP}
							popoverClassName={Classes.POPOVER_CONTENT_SIZING}
						>
							<Tooltip
								content={<span>Bill Driver (8:00)</span>}
								position={Position.TOP}
								usePortal={false}
							>
								<p>
									B
								</p>
							</Tooltip>
					</Popover>
				</div>
				<div style={{ flexGrow: 3, ...styles.eventA }}>
					<Popover
							content={<H1>Popover!</H1>}
							position={Position.TOP}
							popoverClassName={Classes.POPOVER_CONTENT_SIZING}
						>
							<Tooltip
								content={<span>Mike Driver (8:00)</span>}
								position={Position.TOP}
								usePortal={false}
							>
								<p>
									A
								</p>
							</Tooltip>
					</Popover>
				</div>
				<div style={{ flexGrow: 4, ...styles.eventB }}>
					<Popover
							content={<H1>Popover!</H1>}
							position={Position.TOP}
							popoverClassName={Classes.POPOVER_CONTENT_SIZING}
						>
							<Tooltip
								content={<span>Bill Driver (8:00)</span>}
								position={Position.TOP}
								usePortal={false}
							>
								<p>
									B
								</p>
							</Tooltip>
					</Popover>
				</div>
				<div style={{ flexGrow: 2, ...styles.eventA }}>
					<Popover
							content={<H1>Popover!</H1>}
							position={Position.TOP}
							popoverClassName={Classes.POPOVER_CONTENT_SIZING}
						>
							<Tooltip
								content={<span>Mike Driver (8:00)</span>}
								position={Position.TOP}
								usePortal={false}
							>
								<p>
									A
								</p>
							</Tooltip>
					</Popover>
				</div>
				<div style={{ flexGrow: 5, ...styles.eventB }}>
					<Popover
							content={<H1>Popover!</H1>}
							position={Position.TOP}
							popoverClassName={Classes.POPOVER_CONTENT_SIZING}
						>
							<Tooltip
								content={<span>Bill Driver (8:00)</span>}
								position={Position.TOP}
								usePortal={false}
							>
								<p>
									B
								</p>
							</Tooltip>
					</Popover>
				</div>
				<div style={{ flexGrow: 3, ...styles.eventA }}>
					<Popover
							content={<H1>Popover!</H1>}
							position={Position.TOP}
							popoverClassName={Classes.POPOVER_CONTENT_SIZING}
						>
							<Tooltip
								content={<span>Mike Driver (8:00)</span>}
								position={Position.TOP}
								usePortal={false}
							>
								<p>
									A
								</p>
							</Tooltip>
					</Popover>
				</div>
				<div style={{ flexGrow: 1, ...styles.eventB }}>
					<Popover
							content={<H1>Popover!</H1>}
							position={Position.TOP}
							popoverClassName={Classes.POPOVER_CONTENT_SIZING}
						>
							<Tooltip
								content={<span>Bill Driver (8:00)</span>}
								position={Position.TOP}
								usePortal={false}
							>
								<p>
									B
								</p>
							</Tooltip>
					</Popover>
				</div>
			</div>
		)
	}
}

const styles = {
	pageContainer: { 
		// height: "100vh",
		width: "100%",
		display: "flex",
		flexFlow: "column"
	},
	menuContainer: {
		height: "70px",
		width: "100%",
		// background: "darkgray"
	},
	bodyContainer: {
		width: "100%",
		height: "1200px",
		display: "flex",
		flexFlow: "column",
		// background: "lightgray"
	},
	heading: {
		height: "80px",
		width: "100%",
		padding: "10px",
		alignItems: "center",
		display: "flex",
		justifyContent: "space-around"
	},
	bMiddle: {
		height: "120px",
		width: "100%",
		border: "1px solid black",
		padding: "10px",
		display: "flex",
		justifyContent: "space-between"
	},
	bTop: {
		flexGrow: 1,
		display: "flex",
		border: "1px solid black",
		// background: "pink",
		padding: "10px"
	},
	bBottom: {
		height: "500px",
		width: "100%",
		display: "flex",
		border: "1px solid black"
	},
	bottomDetails: {
		height: "70px",
		width: "100%",
		display: "flex",
		padding: "20px"
	},
	bottomLeft: {
		height: "100%",
		width: "50%",
		display: "flex",
		flexFlow: "column"
	},
	bottomRight: {
		height: "100%",
		width: "50%",
		display: "flex",
		flexFlow: "column"
	},
	eventA: {
		background: "#00998C"
	},
	eventB: {
		background: "#7157D9"
	}
}