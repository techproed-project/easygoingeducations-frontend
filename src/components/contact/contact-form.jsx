import React from "react";
import {
	Button,
	Col,
	FloatingLabel,
	FormControl,
	InputGroup,
	Row,
} from "react-bootstrap";

export const ContactForm = () => {
	return (
		<form className="contact-form">
			<Row>
				<Col md={6}>
					<InputGroup className="mb-3">
						<InputGroup.Text id="name">
							<i className="pi pi-user"></i>
						</InputGroup.Text>
						<FormControl
							name="name"
							placeholder="Your name"
							aria-label="Your name"
							aria-describedby="name"
						/>
						<FormControl.Feedback type="invalid"></FormControl.Feedback>
					</InputGroup>
				</Col>
				<Col md={6}>
					<InputGroup className="mb-3">
						<InputGroup.Text id="email">
							<i className="pi pi-envelope"></i>
						</InputGroup.Text>
						<FormControl
							name="email"
							placeholder="Your email"
							aria-label="Your email"
							aria-describedby="email"
						/>
						<FormControl.Feedback type="invalid"></FormControl.Feedback>
					</InputGroup>
				</Col>
				<Col xs={12}>
					<InputGroup className="mb-3">
						<InputGroup.Text id="subject">
							<i className="pi pi-tag"></i>
						</InputGroup.Text>
						<FormControl
							name="subject"
							placeholder="Your subject"
							aria-label="Your subject"
							aria-describedby="subject"
						/>
						<FormControl.Feedback type="invalid"></FormControl.Feedback>
					</InputGroup>
				</Col>
				<Col xs={12}>
					<InputGroup className="mb-3">
						<InputGroup.Text id="message">
							<i className="pi pi-comment"></i>
						</InputGroup.Text>
						<FormControl
							name="message"
							as="textarea"
							placeholder="Your message"
							aria-label="Your message"
							aria-describedby="message"
						/>
						<FormControl.Feedback type="invalid"></FormControl.Feedback>
					</InputGroup>
				</Col>

				<Col>
					<InputGroup className="mb-3">
						<InputGroup.Text id="message">
							<i className="pi pi-comment"></i>
						</InputGroup.Text>
						<FloatingLabel
							controlId="floatingInput"
							label="Email address"
							className="mb-3"
						>
							<FormControl
								type="email"
								placeholder="name@example.com"
							/>
							<FormControl.Feedback type="invalid"></FormControl.Feedback>
						</FloatingLabel>
					</InputGroup>
				</Col>
			</Row>
			<Button type="submit" variant="outline-primary">
				Send
			</Button>
		</form>
	);
};
