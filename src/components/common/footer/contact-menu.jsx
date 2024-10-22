"use client";
import { config } from "@/helpers/config";
import React from "react";
import { Nav } from "react-bootstrap";

const menuItems = Object.entries(config.contact.info);

export const ContactMenu = (props) => {
	return (
		<Nav {...props} className="contact-menu">
			{menuItems.map((item) => (
				<Nav.Link key={item[0]} href={item[1].link}>
					<i className={item[1].icon}></i> {item[1].value}
				</Nav.Link>
			))}
		</Nav>
	);
};
