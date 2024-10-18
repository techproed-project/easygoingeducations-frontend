import { config } from "@/helpers/config";
import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export const Welcome = () => {
	return (
		<Container >
			<Row className="g-5">
				<Col lg={6}>
					<Image
						src="/img/about/welcome.jpg"
						width={900}
						height={700}
						alt={config.project.slogan}
            className="img-fluid"
					/>
				</Col>
				<Col lg={6}>
					<h2 className="text-secondary">Welcome to the most preferred IT School</h2>
					<p>
						Through a combination of lectures, readings,
						discussions, students will gain a solid foundation in
						educational psychology.
					</p>

					<ul>
						<li>
							Cutting-edge curriculum for the latest IT trends and
							technologies.
						</li>
						<li>
							Expert instructors passionate about sharing their
							knowledge.
						</li>
						<li>
							Hands-on training and real-world projects for
							practical experience.
						</li>
						<li>
							Earn industry-recognized certifications for enhanced
							employability.
						</li>
					</ul>
				</Col>
			</Row>
		</Container>
	);
};
