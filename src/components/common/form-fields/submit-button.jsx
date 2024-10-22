"use client";
import React from "react";
import { Button } from "react-bootstrap";

export const SubmitButton = ({ title = "Submit", icon = "send", ...rest }) => {
	return (
		<Button type="submit" variant="outline-primary">
			{!!icon && <><i className={`pi pi-${icon}`}></i> </>}
			{title}
		</Button>
	);
};
