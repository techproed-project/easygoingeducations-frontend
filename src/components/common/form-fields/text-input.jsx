"use client"
import React from "react";
import { FloatingLabel, FormControl, InputGroup } from "react-bootstrap";

export const TextInput = ({
	name,
	label,
	errorMessage,
	className,
	iconBefore,
	iconAfter,
	...rest
}) => {
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
					isInvalid={!!errorMessage}
					{...rest}
				/>
				<FormControl.Feedback type="invalid">
					{errorMessage}
				</FormControl.Feedback>
			</FloatingLabel>
			{!!iconAfter && (
				<InputGroup.Text>
					<i className={`pi pi-${iconAfter}`}></i>
				</InputGroup.Text>
			)}
		</InputGroup>
	);
};
