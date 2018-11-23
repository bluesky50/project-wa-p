import React, {Component} from 'react';
import { Card } from 'semantic-ui-react';
import { FormGroup, InputGroup, Button } from '@blueprintjs/core';


export default class Login extends Component {

	onClick = () => {
		this.props.onClick();
	}

	render() {
		return (
			<div style={styles.container}>
				<Card>
					<h3>Login</h3>
					<FormGroup
						helperText="Need an account? Register"
						label="Login"
						labelFor="text-input"
						labelInfo="(required)"
					>
						<InputGroup style={styles.formItem} id="text-input" placeholder="username" />
						<InputGroup style={styles.formItem}id="text-input" placeholder="password" />
						<Button style={styles.formItem} onClick={this.onClick}>Login</Button>
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