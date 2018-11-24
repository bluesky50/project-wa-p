import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './home';
// import Dashboard from './dashboard';
import { ProjectDetails2 } from './project';
import Projects from './projects';
import { ExerciseDetailPage } from './exercise';
import Exercises from './exercises';
import { SessionDetailPage } from './session';
import Sessions from './sessions';
import UserPortal from './userPortal';
import { Button, Alignment, Navbar } from "@blueprintjs/core";

export default () => {
	return (
		<div>
			<Navbar>
				<Navbar.Group align={Alignment.LEFT}>
					<Navbar.Heading>Dynamic Pair Interactions</Navbar.Heading>
					<Navbar.Divider />
					<Button className="bp3-minimal" icon="home" text="Home" />
				</Navbar.Group>
			</Navbar>
			<BrowserRouter>
				<Switch>
					<Route exact path="/access" render={(props) => <UserPortal {...props}/>}/>
					<Route exact path="/home" component={Home}/>
					{/* <Route exact path="/dashboard" component={Dashboard}/> */}
					<Route exact path="/projects" component={Projects}/>
					<Route exact path="/projects/:projectId" component={ProjectDetails2}/>
					<Route exact path="/exercises" component={Exercises}/>
					<Route exact path="/exercises/:exerciseId" component={ExerciseDetailPage}/>
					<Route exact path="/sessions" component={Sessions}/>
					<Route exact path="/sessions/:sessionId" component={SessionDetailPage}/>
				</Switch>
			</BrowserRouter>
		</div>
	)
}

