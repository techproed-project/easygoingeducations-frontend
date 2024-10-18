import React from "react";
import courses from "@/helpers/data/courses.json";
import { Col, Container, Row } from "react-bootstrap";

export const Courses = ({ featured }) => {
	let filteredCourses = courses;

	if (featured) {
		filteredCourses = courses.filter((item) => item.featured);
	}

	return (
		<Container>
			<Row xs={1} md={2} xl={3} className="g-5">
				{filteredCourses.map((item) => (
					<Col key={item.id}>{item.title}</Col>
				))}
			</Row>
		</Container>
	);
};
