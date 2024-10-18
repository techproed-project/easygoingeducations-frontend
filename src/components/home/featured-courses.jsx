import React from "react";
import { SectionTitle } from "../common/section-title/section-title";
import { Courses } from "../courses/courses";
import "./featured-courses.scss";

export const FeaturedCourses = () => {
	return (
		<div className="featured-courses">
			<SectionTitle>Featured Courses</SectionTitle>
			<Courses featured={true} />
		</div>
	);
};
