"use client";
import React from "react";
import { Alert, Card } from "react-bootstrap";
import "./login-form.scss";
import { PasswordInput, TextInput, SubmitButton } from "../common/form-fields";
import { loginAction } from "@/actions/auth-action";
import { initialResponse } from "@/helpers/form-validation";
import { useFormState } from "react-dom";

export const LoginForm = () => {
	const [state, dispatch] = useFormState(loginAction, initialResponse);

	return (
		<div className="login-form">
			<Card>
				<Card.Body>
					<h4>Please enter your username and password</h4>

					{!state?.ok && state?.message && (
						<Alert variant="danger">{state.message}</Alert>
					)}

					<form action={dispatch}>
						<TextInput
							label="Username"
							name="username"
							className="mb-3"
							iconBefore="user"
							defaultValue="root"
							errorMessage={state?.errors?.username}
						/>
						<PasswordInput
							label="Password"
							name="password"
							className="mb-3"
							iconBefore="key"
							defaultValue="123456aA."
							errorMessage={state?.errors?.password}
						/>
						<SubmitButton title="Login" />
					</form>
				</Card.Body>
			</Card>
		</div>
	);
};
