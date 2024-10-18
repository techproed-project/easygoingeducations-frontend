import Image from "next/image";
import React from "react";
import { Card } from "react-bootstrap";

export const CourseCard = (props) => {
	const { title, user, comment, rating, image } = props;

	return (
		<Card>
			<Card.Body>
				<Image
					src={`/img/courses/${image}`}
					alt={title}
					width={400}
					height={300}
				/>
				<Card.Title>{title}</Card.Title>
			</Card.Body>
            <Card.Footer>
                <span>
                    
                </span>
            </Card.Footer>
		</Card>
	);
};
