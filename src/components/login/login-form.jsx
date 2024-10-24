"use client"
import React from "react";
import { Card } from "react-bootstrap";
import "./login-form.scss";
import { PasswordInput, TextInput, SubmitButton } from "../common/form-fields";

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
						<PasswordInput
							label="Password"
							name="password"
							className="mb-3"
                            iconBefore="key"
						/>
                        <SubmitButton title="Login" />
					</form>
				</Card.Body>
			</Card>
		</div>
	);
};
