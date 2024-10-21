import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./mobile-app.scss";

export const MobileApp = () => {
	return (
		<div className="mobile-app">
			<Container>
				<Row className="align-items-center g-4">
					<Col lg={7} className="text-center text-lg-start">
						<h2>Are you ready to start your online course?</h2>
					</Col>
					<Col lg={5} className="text-center text-lg-end">
						<a
							href="https://www.apple.com/store"
							className="btn btn-outline-primary me-2"
						>
							<i className="pi pi-mobile pi-3x"></i> App Store
						</a>

						<a
							href="https://play.google.com"
							className="btn btn-outline-primary"
						>
							<i className="pi pi-android pi-3x"></i> Play Store
						</a>
					</Col>
				</Row>
			</Container>
		</div>
	);
};
