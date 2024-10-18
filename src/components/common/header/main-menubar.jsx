"use client";
import React from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Logo } from "./logo";
import { MainMenu } from "./main-menu";
import { ButtonCallNow } from "./button-call-now";

export const MainMenubar = () => {
	return (
		<Navbar expand="lg" sticky="top" className="bg-body-tertiary">
			<Container>
				<Logo />
				<Navbar.Toggle aria-controls="main-menu" />
				<Navbar.Offcanvas
					id="main-menu"
					aria-labelledby="main-menu-title"
					placement="end"
				>
					<Offcanvas.Header closeButton>
						<Offcanvas.Title id="main-menu-title">
							Offcanvas
						</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body>
						<MainMenu className="justify-content-center flex-grow-1" />
                        <ButtonCallNow/>
					</Offcanvas.Body>
				</Navbar.Offcanvas>
			</Container>
		</Navbar>
	);
};
