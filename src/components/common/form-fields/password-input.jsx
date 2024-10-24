"use client";
import React, { useState } from "react";
import { FloatingLabel, FormControl, InputGroup } from "react-bootstrap";

export const PasswordInput = ({
	name,
	label,
	errorMessage,
	className,
	iconBefore,
	...rest
}) => {
	const [type, setType] = useState("password");

	const handleClick = () => {
		setType((prev) => (prev === "password" ? "text" : "password"));
	};

	return (
		<InputGroup className={className}>
			{!!iconBefore && (
				<InputGroup.Text>
					<i className={`pi pi-${iconBefore}`}></i>
				</InputGroup.Text>
			)}

			<FloatingLabel controlId={name} label={label}>
				<FormControl
					name={name}
					placeholder={label}
					type={type}
					isInvalid={!!errorMessage}
					{...rest}
				/>
				<FormControl.Feedback type="invalid">
					{errorMessage}
				</FormControl.Feedback>
			</FloatingLabel>

			<InputGroup.Text onClick={handleClick}>
				{type === "password" ? (
					<i className="pi pi-eye"></i>
				) : (
					<i className="pi pi-eye-slash"></i>
				)}
			</InputGroup.Text>
		</InputGroup>
	);
};
