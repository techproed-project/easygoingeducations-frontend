"use client";
import React from "react";
import { Button } from "react-bootstrap";
import { useFormStatus } from "react-dom";

export const SubmitButton = ({ title = "Submit", icon = "send", ...rest }) => {
	const { pending } = useFormStatus();

	const iconSrc = pending ? "pi pi-spin pi-spinner" : `pi pi-${icon}`;

	return (
		<Button type="submit" variant="outline-primary" disabled={pending}>
			{!!iconSrc && (
				<>
					<i className={iconSrc}></i>{" "}
				</>
			)}
			{title}
		</Button>
	);
};
