import React, {Component} from 'react';
import { Card } from 'semantic-ui-react';
import { FormGroup, InputGroup, Button } from '@blueprintjs/core';


export default class RegisterForm extends Component {
	render() {
		return (
			<div style={styles.container}>
				<Card>
					<h3>Register</h3>
					<FormGroup
						helperText="Already have an account? Login"
						label="Register"
						labelFor="text-input"
						labelInfo="(required)"
					>
						<InputGroup style={styles.formItem} id="text-input" placeholder="username" />
						<InputGroup style={styles.formItem} id="text-input" placeholder="email" />
						<InputGroup style={styles.formItem} id="text-input" placeholder="password" />
						<Button style={styles.formItem}>Sign Up</Button>
					</FormGroup>
				</Card>
			</div>
		);
	}
}

const styles = {
	container: {
		width: "450px",
		padding: "15px",
		display: "flex",
		flexFlow: "column"
	},
	formItem: {
		marginBottom: "10px"
	}
}