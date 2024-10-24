"use client"
import React from "react";
import { Card } from "react-bootstrap";
import { TextInput } from "../common/form-fields/text-input";
import { SubmitButton } from "../common/form-fields/submit-button";
import "./login-form.scss";

export const LoginForm = () => {
	return (
		<div className="login-form">
			<Card>
				<Card.Body>
					<h4>Please enter your username and password</h4>

					<form>
						<TextInput
							label="Username"
							name="username"
							className="mb-3"
                            iconBefore="user"
						/>
						<TextInput
							label="Password"
							name="password"
							className="mb-3"
							type="password"
                            iconBefore="key"
						/>
                        <SubmitButton title="Login" />
					</form>
				</Card.Body>
			</Card>
		</div>
	);
};
