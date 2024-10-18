"use client";
import { config } from "@/helpers/config";
import React from "react";
import { Nav } from "react-bootstrap";

const menuItems = Object.entries(config.contact.socialMedia);

export const SocialMenu = (props) => {
	return (
		<Nav {...props}>
			{menuItems.map((item) => (
				<Nav.Link key={item[0]} href={item[1].url}>
					<i className={item[1].icon}></i> {item[0]}
				</Nav.Link>
			))}
		</Nav>
	);
};
