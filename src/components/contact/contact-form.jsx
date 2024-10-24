"use client";
import React, { useRef } from "react";
import { Col, Row } from "react-bootstrap";
import { useFormState } from "react-dom";
import { createContactMessageAction } from "@/actions/contact-actions";
import { initialResponse } from "@/helpers/form-validation";
import { swAlert } from "@/helpers/sweetalert";
import { SubmitButton, TextInput } from "../common/form-fields";

export const ContactForm = () => {
	const [state, dispatch] = useFormState(
		createContactMessageAction,
		initialResponse
	);
	const refForm = useRef(null);

	if (state.message) {
		if (state.ok) {
			swAlert(state.message, "success");
			refForm.current.reset();
		} else {
			swAlert(state.message, "error");
		}
	}

	return (
		<form className="contact-form" action={dispatch} ref={refForm}>
			<Row>
				<Col md={6}>
					<TextInput
						className="mb-3"
						name="name"
						label="Your name"
						iconBefore="user"
						errorMessage={state.errors?.name}
					/>
				</Col>
				<Col md={6}>
					<TextInput
						className="mb-3"
						name="email"
						label="Your email"
						iconBefore="envelope"
						errorMessage={state.errors?.email}
					/>
				</Col>
				<Col xs={12}>
					<TextInput
						className="mb-3"
						name="subject"
						label="Your subject"
						iconBefore="tag"
						errorMessage={state.errors?.subject}
					/>
				</Col>
				<Col xs={12}>
					<TextInput
						className="mb-3"
						name="message"
						label="Your message"
						iconBefore="comment"
						errorMessage={state.errors?.message}
					/>
				</Col>
			</Row>
			<SubmitButton />
		</form>
	);
};
