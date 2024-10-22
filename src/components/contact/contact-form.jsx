import React from "react";
import {
	Button,
	Col,
	Row,
} from "react-bootstrap";
import { TextInput } from "../common/form-fields/text-input";
import { SubmitButton } from "../common/form-fields/submit-button";

export const ContactForm = () => {
	return (
		<form className="contact-form">
			<Row>
				<Col md={6}>
					<TextInput
						className="mb-3"
						name="name"
						label="Your name"
						iconBefore="user"
					/>
				</Col>
				<Col md={6}>
					<TextInput
						className="mb-3"
						name="email"
						label="Your email"
						iconBefore="envelope"
					/>
				</Col>
				<Col xs={12}>
					<TextInput
						className="mb-3"
						name="subject"
						label="Your subject"
						iconBefore="tag"
					/>
				</Col>
				<Col xs={12}>
					<TextInput
						className="mb-3"
						name="message"
						label="Your message"
						iconBefore="comment"
					/>
				</Col>
			</Row>
			<SubmitButton/>
		</form>
	);
};
