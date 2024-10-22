"use client"
import React from "react";
import {
	Button,
	Col,
	Row,
} from "react-bootstrap";
import { TextInput } from "../common/form-fields/text-input";
import { SubmitButton } from "../common/form-fields/submit-button";
import { useFormState } from "react-dom";
import { createContactMessageAction } from "@/actions/contact-actions";
import { initialResponse } from "@/helpers/form-validation";

export const ContactForm = () => {

    const [state, dispatch] = useFormState(createContactMessageAction, initialResponse);

    console.log(state)

    /// Donen mesajlari sweetAlert ile goster

	return (
		<form className="contact-form" action={dispatch}>
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
			<SubmitButton/>
		</form>
	);
};
