import React from 'react';
import {Navbar, Nav, Container,Form,FormControl,Button} from 'react-bootstrap'
import logo from './logo192.png'

const Header = () => {
	return (
		<>
		<Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
			<Container>
				<Navbar.Brand href="/">
						<img src={logo} height="30" width="30" className="d-inline-block align-top" alt="logo"/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="/about">About Us</Nav.Link>
						<Nav.Link href="/blog">Blog</Nav.Link>
						<Nav.Link href="/contacts">Contacts</Nav.Link>
					</Nav>
					<Form inline>
						<FormControl type="text" placeholder="Search" className="mr-sm-2"/>
						<Button varian="outline-info">Search</Button>
					</Form>
				</Navbar.Collapse>
			</Container>
		</Navbar>
		</>
	);
};

export default Header;