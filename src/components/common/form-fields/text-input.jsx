import React from "react";
import { FloatingLabel, FormControl, InputGroup } from "react-bootstrap";

export const TextInput = ({
	name,
	label,
	errorMessage,
	className,
	iconBefore,
	iconAfter,
}) => {
	return (
		<InputGroup className={className}>
			{!!iconBefore && (
				<InputGroup.Text id={name}>
					<i className="pi pi-comment"></i>
				</InputGroup.Text>
			)}

			<FloatingLabel controlId="floatingInput" label={label}>
				<FormControl
					name={name}
					type="email"
					placeholder={label}
					isInvalid={!!errorMessage}
				/>
				<FormControl.Feedback type="invalid">
					{errorMessage}
				</FormControl.Feedback>
			</FloatingLabel>
			<InputGroup.Text id={name}>
				<i className="pi pi-comment"></i>
			</InputGroup.Text>
		</InputGroup>
	);
};
