import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import instructors from "@/helpers/data/instructors.json";
import "./instructors.scss";
import { InstructorCard } from "./instructor-card";

export const Instructors = () => {
	return (
		<Container className="instructors">
			<Row className="g-4">
				<Col lg={6}>
					<h2>Our Most Experienced Instructors</h2>
				</Col>

				{instructors.map((item) => (
					<Col sm={6} md={4} lg={3} key={item.id}>
						<InstructorCard {...item} />
					</Col>
				))}
			</Row>
		</Container>
	);
};
